# 쇼케이스 커뮤니티 동적 데모 — 사전 조사 보고서

- 작성: 2026-07-20 · Claude Code (조사 시점 코어 main `eb06c6c`, 쇼케이스 `wigtn/wigtn-webagency-template` HEAD)
- 목적: `wigtn-webagency-template`(쇼케이스)에 코어 모듈 기반 동적 커뮤니티 데모 템플릿을 추가하는 작업의 사전 조사. **작업 미착수, 보고서만.**

---

## 1. 코어 모듈 repo 현황 (`wigtn/web-agency`)

### 1.1 모듈 목록·책임·진행 상태

| 모듈 (`module/<name>`, `@wigtn/*`) | 책임 | 상태 | 근거 |
|---|---|---|---|
| api-contracts | OpenAPI(public/admin)·에러/이벤트 envelope·데이터 분류·env 로더 | 진행중 | src 실체 + 테스트 4, README만 skeleton 문구 잔존 |
| auth-membership | OAuth 프로바이더·step-up TOTP 검증·증빙 버킷 정책 (순수함수) | 진행중 | web/admin 실소비 중, 테스트 smoke 1개뿐 |
| backoffice-frame | 관리자 tool registry·실행기·MCP fixture·outbox 배치 러너 | 진행중(성숙) | admin 13곳 소비, ~500줄 + registry 테스트 |
| content-engine | 게시판 계약 — 구조화 콘텐츠 v1·sanitize·cursor·rate-limit 상수 | 진행중 | web 6곳 소비 |
| ai-pipeline-sdk | 가드레일·provider(mock/OpenAI)·프롬프트팩·outbox 구독·write-back | **완료(라이브러리)** | src 12파일·테스트 6종·assets 승격(#18). 단 앱 실결선은 **PR #21 미머지** |
| notification-file | 메일/업로드/인앱알림 포트 + mock/Supabase 어댑터·수신자 규칙 | 진행중 | 앱 소비 0 (미결선) |
| ui-kit | 토큰(라이트/다크)·스키마 폼 렌더러·컴포넌트 매니페스트·모달 | 진행중 | 앱 소비 0, subpath exports 구조 |
| project-scaffold-deploy | 스캐폴딩 CLI(spinup)·링크/벤더링·프로비저닝·doctor (Python) | 진행중(성숙) | CLI 8모듈 + pytest 14파일 |

미착수 모듈 없음. **미머지 영향**: PR #21(PROD-535, +1604)이 AI 답변 실결선(worker 팬아웃·`process_after`·봇 JWT·공개 댓글 API 봇 경로) 전체를 들고 있음 — AI 데모 흐름은 #21 머지에 의존.

### 1.2 공개 API·확장 포인트 (시그니처 수준)

- **api-contracts** — `loadEnv()`, `isStandardEventType(type)`, `isProductionOnlyRealDataEnvironment(env)`, 상수(`dataClassifications`, `eventEnvelopeRequiredFields` 등). 확장점 = `openapi/*.yaml`, `env.schema.json`. 포트 없음(순수 계약).
- **auth-membership** — `verifyRecentTotp(claims, ...): StepUpResult`, `enabledOAuthProviders(value)`, `safeSameOriginPath(...)`. 주입점 = 서명검증된 JWT claims.
- **backoffice-frame** — `class AdminToolRegistry { register/manifests/get/execute }`, `validateAdminScreenConfig(registry, config)`, `toMcpToolFixture(registry)`, `runOutboxBatch({store, handlers, workerId, ...})`. **확장 핵심**: `OutboxStore`(claim/ack/fail)·`AdminToolHandler<I,O>` 포트.
- **content-engine** — `parseStructuredContent`, `renderSanitizedHtml`, `encodeCursor/decodeCursor`, `clampPageSize`, `API_RATE_LIMITS`. 확장점 = `ContentBlock` 유니온.
- **ai-pipeline-sdk** — `runAnswerPipeline(...)`, `MockChatProvider`/`OpenAiChatProvider`, `onPostCreated/onCommentCreated/processDueAnswers`, `HttpCommentApiClient`. 포트 = `ChatProvider`·`PendingAnswerStore`·`CommentApiClient`. 프로젝트 차이는 `assets/rules/*.yaml` 룰 파일로만.
- **notification-file** — `validateUpload/validateUploadedObject/buildObjectKey/objectKeyIsSafe`, `resolveRecipients`, `SupabaseUploadsAdapter`. 포트 4종 = `MailerPort/UploadsPort/NotifierPort/ClockPort` (`src/ports.ts`).
- **ui-kit** — subpath exports: `./schema-form`(`schemaToFields`), `./schema-form/engine`(`createFormEngine`), `./tokens.css`, `./themes/*`, `./tailwind-preset`. `SchemaForm.tsx`는 앱 copy-in 방식.

**소비 구조 (중요)**: npm publish 없음(전 패키지 `private: true`). 소비는 두 방식뿐 —
① demo가 `@demo/*`로 리네임된 **workspace 복사본** 소비(parity guard가 module↔demo 바이트 동일 강제, 현재 4모듈 + allowlist 빈 상태),
② 스캐폴드 `_link_core_modules`가 생성 프로젝트에 **src 벤더링**(테스트 제외·import 정규화·package.json 병합) + `vendor_spinup`이 재사용권 헤더/`wigtnCoreVendored` provenance 삽입.

### 1.3 Supabase 스키마 개요 (선언형 `projects/demo/supabase/schemas/00→90`, RLS 정책 59개)

| 도메인 | 테이블 |
|---|---|
| 인증/아이덴티티 | profiles, auth_provider_links, account_state_events, system_roles, permissions, role_permissions, user_roles, consent_documents, user_consents, service_accounts |
| 멤버십(등급·뱃지) | membership_grades, grade_applications(+documents), user_membership_grades, membership_badges, badge_applications(+documents), user_badges |
| 커뮤니티 | boards, posts, post_contents, post_revisions, comments, reactions, bookmarks, attachments, reports, moderation_actions, service_account_boards |
| 운영/감사 | audit_events, outbox_events, consumed_events, app_private.admin_command_receipts, app_private.api_rate_limit_buckets |

- 관계: posts→boards, 콘텐츠·댓글·리액션·첨부→posts, reports→posts/comments→moderation_actions, 신청→등급/뱃지+documents, outbox↔consumed(멱등).
- 쓰기 경로는 SECURITY DEFINER RPC 함수군(`37_membership_commands` 11개·`38_admin_tools` 15개·`39_content_commands` 23개)에 집중 — 클라이언트 직접 write 아님.
- seed: `supabase/seed/seed.sql`(자동 적용) + 대조군 `configs/projects/demo-b/seed.sql`. 로컬 기동 = `supabase db reset` 원커맨드(config.toml, OTP 가입·관리자 TOTP MFA).

### 1.4 앱-수직형 (module 밖, demo 전용 — 이번 작업의 무게중심)

커뮤니티의 **실제 UI·라우트는 `projects/demo/apps/`에만 존재**하며 module로 승격되지 않음:
- **web**: 페이지 15종(`/auth/*` 5, `/boards`·`/boards/[slug]`·`/new`·`/posts/[id]`, `/account`·`/onboarding`·`/membership`·`/badges`) + `/v1/*` API 11종 + 서버액션 2 + `lib/supabase/{server,middleware}`.
- **admin**: `/[screenId]` 동적 백오피스 화면 + `/admin/v1/tools/*` 실행기 + outbox worker.

---

## 2. 쇼케이스 repo 현황 (`wigtn/wigtn-webagency-template`)

### 2.1 템플릿 레지스트리·테마 엔진

- **레지스트리**: `lib/templates/registry.ts`의 `TEMPLATES: TemplateMeta[]` 단일 소스(6종: stay-heaven=legacy 엔진, 나머지 5종=theme 엔진). 타입 게이트 = `lib/templates/types.ts`의 `TemplateSlug` 유니온 하드코딩.
- **동적 로더**: `app/[locale]/templates/[slug]/page.tsx`의 `THEME_LOADERS` 맵 — Server Component에서 네이티브 `import('@/themes/<slug>')` await. `generateStaticParams()`가 로더 키를 열거해 **빌드 시 정적 생성**.
- **테마 엔진**: `themes/<slug>/`가 `default function Theme({ locale })` 계약의 prop-driven 컴포넌트. 팔레트는 인라인 hex(전역 토큰 시스템 아님), 폰트는 테마별 `fonts.ts`(next/font code-split), 콘텐츠는 테마 소유 `content.ts`(KO/EN, ja·zh→EN 폴백).
- i18n: `[locale]` 라우팅·Provider는 강제, 콘텐츠 4개국어는 비강제(theme 관행 = KO/EN).

### 2.2 새 템플릿 1종 추가 시 손대는 파일 (현 구조 기준)

1. `lib/templates/types.ts` — `TemplateSlug` 유니온 확장 (필수 타입 게이트)
2. `lib/templates/registry.ts` — `TemplateMeta` 엔트리 1개
3. `app/[locale]/templates/[slug]/page.tsx` — `THEME_LOADERS` 1줄
4. `themes/<slug>/` 신규 (index.tsx + fonts.ts + content.ts)
5. `public/images/<slug>/` 이미지

sitemap·갤러리·DemoBar는 registry 파생이라 자동. **정적 템플릿이면 공유 파일 3곳 + 디렉토리 1개로 완결.**

### 2.3 정적 전제 위치와 동적 라우트 충돌 지점

- **하드 블로커 없음**: `next.config.js`에 `output: 'export'` 없음(Vercel 하이브리드 가능), `proxy.ts` 미들웨어 matcher가 이미 `/api` 제외.
- 정적 전제는 "관행" 층위: ① 전 페이지 `setRequestLocale` + `generateStaticParams`(SSG opt-in) ② `[slug]` 파라미터 사전 열거 ③ `lib/content.ts`가 정적 JSON만(주석: "CMS/Supabase overlay removed" — 과거 동적 계층 제거 흔적 = 재도입 접합점) ④ `app/sitemap.ts` 정적 파생 ⑤ `localeDetection: false`(쿠키 협상 없음).
- **서버 기능 현황: 전무** — route handler 0, server action 0, `cookies()/headers()` 0, DB 클라이언트 0, 서버 env 0(`NEXT_PUBLIC_*` 3개뿐). 동적 데모는 env·Supabase 클라이언트·라우트 전부 신설 대상.
- 충돌 회피책: 동적 커뮤니티 데모는 기존 `[slug]` 세그먼트에 끼우지 말고 **별도 라우트 세그먼트로 격리**(예: `app/[locale]/demos/community/`) — 기존 6종 SSG 렌더 모델을 건드리지 않음.

---

## 3. 결합 가능성 평가

### 3.1 코어 모듈 import 가능 형태인가

- npm 미publish + 쇼케이스는 pnpm workspace가 아닌 **npm 단일 패키지**(package-lock.json) → workspace 참조 불가. 현실적 선택지:
  - **(a) 벤더링 copy-in** — 코어의 공식 소비 모델과 정합. 순수 라이브러리 모듈(content-engine·api-contracts 등)은 src 복사 + 재사용권 헤더로 쇼케이스 `lib/core/<name>/`에 이식 가능. 단 `_link_core_modules`는 스캐폴드 생성물 구조 전제라 그대로는 못 쓰고 경로만 수동/스크립트 조정 필요.
  - (b) npm private registry publish — 인프라 신설 필요, 이 목적엔 과함.
  - (c) git subtree/submodule — 이력 관리 부담 대비 이득 없음.
- **핵심 판단**: 결합의 진짜 무게중심은 모듈이 아니라 **앱-수직형**이다. 가입/글쓰기/백오피스의 실체(라우트 15종 + API 11종 + RPC 49개 + 스키마 34테이블 + RLS 59정책)는 `projects/demo` 앱에 있고, 이건 "import"가 아니라 "이식"이며 규모가 크다. (이 간극은 코어 repo에 이미 PROD-524 "앱-수직형 소비 설계" 미결 이슈로 등록돼 있음 — 쇼케이스 요구가 이 설계 결정의 첫 실수요.)

### 3.2 "커뮤니티 데모 1종 + 가입/글쓰기/백오피스" 예상 작업 범위 — 두 경로

**경로 A — 링크 결합 (권장 최소, 0.5~1일)**
demo 앱을 그대로 internal-preview로 배포(코어 repo PROD-531, 이미 티켓·프로비저닝 CLI 준비됨)하고, 쇼케이스에는 **정적 커뮤니티 템플릿 카드 + 소개 페이지 + "라이브 데모 열기" 링크**만 추가.
- 쇼케이스 변경 = §2.2의 5개 파일(정적 추가와 동일 난이도) + `TemplateCategory`에 'community' 추가 + 카드에 external URL 필드.
- 코어 쪽 변경 = 0 (PROD-531 실행뿐). 백오피스 데모도 admin URL 링크로 해결.

**경로 B — 쇼케이스 내 임베디드 동적 데모 (3~5일+, 별도 세그먼트 격리 전제)**
쇼케이스에 Supabase 클라이언트·서버 env·route handler를 신설하고 demo의 커뮤니티 슬라이스를 부분 이식.
- 신설: env 스캐폴딩(§4.1), `lib/supabase/*`, 동적 세그먼트 `app/[locale]/demos/community/*`, 데모용 Supabase 프로젝트 + 스키마 적용.
- 이식: boards/posts/comments 라우트(+`@demo/content-engine`·`auth-membership` 벤더링), 가입 플로우(OTP 메일 처리 필요), 백오피스는 미니 화면 1개.
- 리스크: demo 앱과 쇼케이스의 이중 유지보수(코어가 싸우고 있는 drift 문제를 쇼케이스로 확장) — parity guard 밖의 세 번째 사본이 생김.

### 3.3 최소 구성에서 뺄 수 있는 것

| 항목 | 제외 근거 |
|---|---|
| AI 자동답변 | PR #21 미머지 의존. 머지 후 후속으로 |
| 등급/뱃지 신청·증빙 업로드 | Storage·개인정보 리스크 대비 데모 가치 낮음 |
| 알림/메일 실물 | notification-file 미결선. Mock으로 충분 |
| admin 쓰기 command | read 화면(회원/게시글 검색) 1개면 백오피스 데모 성립. step-up TOTP 데모는 과함 |
| 4개국어 | 쇼케이스 theme 관행대로 KO/EN만 |
| 공개 "쓰기" | 1차는 read-only + 시드 데이터, 쓰기 개방은 §4.2 운영장치 갖춘 뒤 |

---

## 4. 리스크 점검

### 4.1 env/secret

- 쇼케이스는 현재 `NEXT_PUBLIC_*` 3개가 전부(`.env.example` 포함) — 서버 시크릿 취급 이력이 없는 코드베이스에 시크릿이 처음 들어가는 순간이 최대 리스크 지점.
- 규칙: `SUPABASE_SECRET/SERVICE` 계열 키는 서버 route handler 전용, `NEXT_PUBLIC_` 접두 금지(빌드 시 번들 인라인됨). anon key는 공개 가능하나 **RLS가 유일한 방어선**이 됨 — demo 스키마의 RLS 59정책을 그대로 가져와야 안전.
- 코어에 이미 env 계약 존재(`api-contracts`의 `env.schema.json` + `loadEnv()` fail-fast) — 쇼케이스에도 같은 패턴 이식 권장.
- 데모 Supabase는 **전용 프로젝트 분리**(코어 정책 §2.1: internal-preview는 합성 데이터만, 고객·실데이터 금지). demo 배포(경로 A)면 이 정책이 이미 티켓(PROD-531)에 내장돼 있음.

### 4.2 공개 쓰기 데모의 데이터 관리

- 재료는 코어에 이미 있음: `seed.sql` + demo-b 대조 seed, **Gate 5 하네스 `scripts/reuse/verify-demo-b.mjs`가 seed 복원 로직 보유** → 주기 리셋 스크립트로 재활용 가능. rate-limit도 스키마(`api_rate_limit_buckets`)와 상수(`API_RATE_LIMITS`)로 준비돼 있음.
- 추가로 필요한 것: ① 리셋 cron(예: 6~24h 주기 `db reset` 또는 truncate+seed — Vercel cron/GitHub Actions) ② 가입 메일 처리(실메일 발송 대신 데모 계정 프리셋 or magic-link 제한) ③ 업로드 개방 시 스캔·만료 정책(1차 제외 권장) ④ 금칙어/스팸은 쓰기 개방 시점에.
- 실이메일 수집은 개인정보 이슈 — 데모 가입은 합성 도메인 제한 또는 프리셋 계정 로그인 권장.

### 4.3 core/app 경계 위반 여부

- **코어(module/)는 깨끗**: 순수 로직+포트 구조, placeholder 치환·parity guard·vendor provenance까지 갖춤. 특정 프로젝트 로직 혼입은 발견 못 함(프로젝트 차이는 ai-sdk `assets/rules/*.yaml` 같은 데이터 파일로 표현).
- 경계 이슈는 반대 방향: **커뮤니티 UI가 전부 demo 앱-수직형**(sales-community 프리셋 결합)이라, 쇼케이스로 이식하면 demo 특화 문구·플로우가 딸려오고 parity guard 밖 사본이 생긴다. 소소한 잔여: 코어 4모듈의 demo 사본이 `@demo/*` 스코프(알려진 항목), `api-contracts` README skeleton 문구.

---

## 5. 권장 작업 순서 (착수는 별도 지시 후)

1. **PROD-531 실행 (코어 repo)** — demo internal-preview 배포로 라이브 URL 확보. 어차피 포트폴리오 목표의 핵심이고, 경로 A의 유일한 선행 조건. *(토큰 3종 env 주입 상태에서 즉시 가능)*
2. **경로 A: 쇼케이스에 'community' 카테고리 + 정적 소개 템플릿 + 라이브 데모 링크** — §2.2 파일 5곳, 반나절. 이 시점에 "코어 기반 동적 데모가 포트폴리오에 노출"이라는 사업 목표 달성.
3. **PR #21 머지 후 AI 답변 흐름을 데모 시나리오에 포함** (질문 게시→AI 마중물→사람 답변 시 취소 — PROD-520 통합 데모와 동일 시나리오 재사용).
4. **데이터 운영 장치**: 합성 seed 고정 + 주기 리셋 cron(verify-demo-b 복원 로직 재활용) + rate-limit 상수 데모용 하향. 이때 쓰기 개방 여부 결정.
5. **(선택, 2단계) 경로 B 부분 이식**: 쇼케이스 내 `demos/community` 동적 세그먼트에 read-only 게시판 위젯(anon+RLS) — 단, 착수 전에 코어 repo **PROD-524(앱-수직형 소비 설계)** 결정을 먼저 확정할 것. 그 결정 없이 이식하면 세 번째 사본 drift가 시작된다.
6. 문서화: 쇼케이스 registry에 external-link형 템플릿 타입이 생기므로 `TemplateMeta` 확장을 registry 주석과 PRD_template-showcase.md에 반영.

**한 줄 결론**: 쇼케이스 구조는 새 템플릿 추가에 최적화돼 있고 동적화 하드 블로커도 없다. 그러나 커뮤니티 기능의 실체는 코어 "모듈"이 아니라 demo "앱"에 있으므로, **1차는 demo 배포+링크 결합(경로 A)으로 즉시 포트폴리오화하고, 쇼케이스 내 임베디드(경로 B)는 PROD-524 설계 결정 후 2단계로** 가는 것을 권장한다.
