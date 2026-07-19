# STAY HEAVEN — Guesthouse Website Template

Next.js 16 (App Router) · TypeScript · Tailwind CSS · next-intl · Framer Motion.

A single-page, scroll-based boutique guesthouse/hotel brand site with sticky nav,
scroll spy, and 4-locale routing (EN / JA / ZH / KO).

> **Demo template.** All copy, images, contact details, prices, and links are
> fictional placeholder data ("STAY HEAVEN"). Replace them with real content
> before launch.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000  (EN by default)
npm run build
npm run typecheck
```

Locales: `/` `/ja` `/zh` `/ko`.

## Project structure

```
app/
  [locale]/
    layout.tsx          # locale layout, SEO metadata + JSON-LD
    page.tsx            # single-page composition
    sections/           # About / Rooms / LongStay / Facilities / Location / GuestNotes / Booking
  layout.tsx            # root passthrough (globals.css + favicon)
  globals.css
components/             # Nav, FloatingCTA, LegalModal, FadeIn, etc.
content/                # {en,ja,zh,ko}.json  (all editable copy)
i18n/                   # next-intl routing + request config
lib/
  constants.ts          # brand info, URLs, section ids, locale labels
  content.ts            # loads content JSON per locale
  legal.ts              # privacy policy + terms (4 locales)
public/images/          # hero.jpg, about.jpg, double-*.jpg, twin-*.jpg (placeholders)
proxy.ts                # next-intl locale middleware
scripts/
  gen-placeholders.mjs  # regenerate the placeholder images
```

## Editing content

- **Text:** edit `content/{locale}.json` (keep the keys and image paths).
- **Images:** replace files in `public/images/` (keep the filenames), or run
  `node scripts/gen-placeholders.mjs /tmp/ph` and convert to JPG.
- **Brand + business info:** `lib/constants.ts` (`BUSINESS`, OTA/map/form URLs,
  `EMAIL`, `SITE_URL`). SEO structured data is generated from `BUSINESS`.
- **Legal docs:** `lib/legal.ts`.

## 기능 랩 (`/lab`)

web-agency 코어 모듈 3종을 템플릿 6종 위에서 그대로 돌려 보는 테스트 화면입니다.
Supabase 없이 **서버 메모리**만 쓰므로 `npm run dev` 만으로 바로 클릭해 볼 수 있습니다.

```
/lab                     템플릿 6종 선택
/lab/<slug>              모듈 상태 · 등록된 어드민 툴 매니페스트
/lab/<slug>/account      OAuth 로그인 · TOTP 재인증 · 등급 신청
/lab/<slug>/posts        글 작성 · 커서 페이지네이션 · HTML 살균
/lab/<slug>/admin        툴 실행 · 권한/위험도 게이트 · 감사 로그
```

상태는 **템플릿마다 완전히 격리**되고 각 화면 헤더의 `데이터 초기화`로 시드 상태로
되돌립니다. 프로세스가 재시작되면 초기화됩니다.

### 확인해 볼 것

| 시나리오 | 기대 결과 |
|---|---|
| 로그아웃 상태로 어드민 툴 실행 | `PERMISSION_DENIED` |
| `member@example.com` 로 로그인 후 실행 | `PERMISSION_DENIED` (권한 없음) |
| `owner@wigtn.com` 로그인 후 고위험 툴 실행 | `STEP_UP_REQUIRED` |
| TOTP 재인증 후 멱등키 없이 실행 | `IDEMPOTENCY_KEY_REQUIRED` |
| 멱등키까지 채워 실행 | 승인 성공 + 감사 로그 |
| 툴 버전을 `2` 로 변경 | `TOOL_NOT_FOUND` |
| 입력 JSON 에 없는 키 추가 | `INPUT_INVALID` (AJV 상세 포함) |
| 본문에 `<script>` 삽입 | 이스케이프되어 렌더 |
| 주소창 `?pageSize=999` | 기본값 5로 클램프 |

### 모듈 소스 동기화

`packages/` 의 모듈은 코어에서 **복사(vendoring)** 한 것이라 자동으로 갱신되지 않습니다.
파일 상단 헤더에 원본 커밋이 박혀 있고, 갱신은 다음으로 합니다.

```bash
npm run sync:modules ../web-agency   # 경로 생략 시 WIGTN_CORE_PATH → ../web-agency
npm run typecheck && npm test        # 회귀 확인
```

`npm test` 는 코어에서 가져온 모듈 단위 테스트와 랩 플로우 테스트를 함께 돌립니다.

## Notes

- The placeholder images are generated diagonal gradients — swap in real photos
  before launch.
- All external links (Google Form, Booking.com, Agoda, Trip.com, Instagram,
  maps) point to generic/sample destinations.
- Translations are first-pass; a native proofreading pass is recommended.
