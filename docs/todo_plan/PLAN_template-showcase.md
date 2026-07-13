# Task Plan: template-showcase

> **Generated from**: docs/prd/PRD_template-showcase.md
> **Created**: 2026-07-13
> **Status**: pending

## Execution Config

| Option | Value | Description |
|--------|-------|-------------|
| `auto_commit` | false | 완료 시 자동 커밋 (수동 확인 선호) |
| `commit_per_phase` | true | Phase별 중간 커밋 (이관/회귀 안전) |
| `quality_gate` | true | /auto-commit 품질 검사 |

## Phases

### Phase 1: 아키텍처 일반화 (Foundation)
- [ ] `lib/templates/types.ts` — TemplateConfig / ThemeTokens / SectionKey 정의 (FR-001)
- [ ] `lib/templates/registry.ts` — 5종 TemplateConfig 등록 (FR-001)
- [ ] 테마 토큰: `data-theme` CSS 변수 + ThemeProvider, Tailwind 변수 참조 (FR-002)
- [ ] `app/[locale]/templates/[slug]/layout.tsx` (폰트/토큰 스코프) (FR-005)
- [ ] `app/[locale]/templates/[slug]/page.tsx` (registry 조회 → 섹션 조립, 미등록 slug notFound) (FR-005)
- [ ] `components/template/TemplateNav.tsx` — config 구동 Nav + scroll-spy (FR-008)

### Phase 2: STAY HEAVEN 이관 (무회귀)
- [ ] 기존 sections/content/images → `themes/stay-heaven/`로 이동 (FR-006)
- [ ] `/` 진입점을 `/templates/stay-heaven`로 이동, 시각 회귀 스냅샷 비교 (FR-006)
- [ ] 콘텐츠 JSON 템플릿 네임스페이스 분리 로드 (FR-009)
- [ ] footer/Legal 공통 shell 이관 + 브랜드/사업자정보 변수화 (FR-017)
- [ ] typecheck/lint 통과 후 Phase 커밋

### Phase 3: 메인 쇼케이스 + WIGTN 팀 레이어
- [ ] `components/showcase/TemplateRow.tsx` — 에디토리얼 로우(좌우 교차, 행별 accent, 호버 미리보기) (FR-003, FR-015)
- [ ] `app/[locale]/page.tsx` — 스튜디오 Hero(업종 한정 문구 없음) + 5행 갤러리 (FR-003)
- [ ] `components/showcase/TeamLayer.tsx` — 인라인 확장 팀 레이어/프로세스/문의 CTA (FR-004)
- [ ] defaultLocale=ko 전환 + 쇼케이스 KO/EN 카피 (FR-010)
- [ ] hreflang/canonical/sitemap 기본 로케일 갱신 검증 (R3)

### Phase 4: 신규 템플릿 4종 (우선순위 순)
- [ ] `themes/city-hotel/` — 다크 럭스, suites/dining/spa/meetings/offers (FR-007)
- [ ] `themes/hanok/` — 뮤트 어스톤, philosophy/house/privacy/experiences (FR-007)
- [ ] `themes/restaurant/` — F&B, menu/chefStory/reservation/reviews (FR-007)
- [ ] `themes/portfolio/` — creative, work/services/process/clients (FR-007)
- [ ] 공통 섹션 컴포넌트 + 템플릿 variant 재사용 (R8)
- [ ] 업종 톤 플레이스홀더 이미지 (FR-014) + 진입 모션 (FR-013)
- [ ] 차별성 점검표: 고유 섹션 ≥2, 고유 accent/폰트, 비숙박 ≥2종 검증

### Phase 5: 마감 (SEO·QA·성능)
- [ ] 템플릿별 metadata/OG/JSON-LD + 사이트맵 전 라우트 (FR-012)
- [ ] defaultLocale 종속 지점 전수 갱신 + hreflang/canonical 실측 (FR-019)
- [ ] content↔SectionKey 정합 빌드 검증 (FR-018) + 외부링크 noopener 게이트 (FR-020)
- [ ] 반응형·접근성·대비 AA 점검 (FR-015, FR-016)
- [ ] Lighthouse ≥90, 폰트 subset/이미지 최적화 (4.1)
- [ ] 전체 typecheck/lint 무오류 + 수동 QA 체크리스트

## Progress

| Metric | Value |
|--------|-------|
| Total Tasks | 0/29 |
| Current Phase | Phase 1 |
| Status | pending |

## Execution Log

| Timestamp | Phase | Task | Status |
|-----------|-------|------|--------|
| - | - | - | - |
