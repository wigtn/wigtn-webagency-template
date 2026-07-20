import type { Locale } from '@/i18n/routing';

export type Localized = { ko: string; en: string };

export type MobileScreen = {
  id: string;
  platform: 'iOS';
  label: Localized;
  title: Localized;
  subtitle: Localized;
  metric: Localized;
  cta: Localized;
  layout: 'wigex' | 'finance' | 'health' | 'commerce' | 'learning' | 'mobility' | 'clinic';
  rows: Localized[];
  chips: Localized[];
};

export type MobileConcept = {
  id: string;
  name: string;
  category: Localized;
  summary: Localized;
  positioning: Localized;
  interaction: Localized;
  palette: {
    bg: string;
    surface: string;
    panel: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
    line: string;
  };
  screens: MobileScreen[];
};

const wigexScreens: MobileScreen[] = [
  {
    id: 'travel-home',
    platform: 'iOS',
    label: { ko: '여행 홈', en: 'Trips' },
    title: { ko: '고객님의 여행', en: 'Your trips' },
    subtitle: { ko: '진행 중인 여행과 관심 환율을 한눈에 확인합니다.', en: 'Active trips and watched exchange rates at a glance.' },
    metric: { ko: '3개', en: '3 trips' },
    cta: { ko: '새 여행', en: 'New trip' },
    layout: 'wigex',
    rows: [
      { ko: '도쿄·교토 6박 7일', en: 'Tokyo & Kyoto · 7 days' },
      { ko: 'JPY 100 = ₩934.20', en: 'JPY 100 = ₩934.20' },
      { ko: '출발까지 12일', en: '12 days to departure' },
    ],
    chips: [{ ko: '여행', en: 'Trips' }, { ko: '환율', en: 'Rates' }],
  },
  {
    id: 'trip-detail',
    platform: 'iOS',
    label: { ko: '여행 상세', en: 'Trip detail' },
    title: { ko: '도쿄·교토 6박 7일', en: 'Tokyo & Kyoto · 7 days' },
    subtitle: { ko: '7월 20일 · 여행 3일차 · 도쿄', en: 'Jul 20 · Day 3 · Tokyo' },
    metric: { ko: 'D3/7', en: 'D3/7' },
    cta: { ko: '경비 입력', en: 'Add expense' },
    layout: 'wigex',
    rows: [
      { ko: '08:40 츠키지 시장 · ¥3,240', en: '08:40 Tsukiji Market · ¥3,240' },
      { ko: '12:15 긴자선 교통 · ¥420', en: '12:15 Ginza line · ¥420' },
      { ko: '18:30 시부야 저녁 예약', en: '18:30 Shibuya dinner' },
    ],
    chips: [{ ko: '일정', en: 'Schedule' }, { ko: '경비', en: 'Expense' }],
  },
  {
    id: 'shared-wallet',
    platform: 'iOS',
    label: { ko: '공동 지갑', en: 'Shared wallet' },
    title: { ko: '우리 여행 지갑', en: 'Our trip wallet' },
    subtitle: { ko: '4명이 함께 쓰는 여행 예산과 기여 금액입니다.', en: 'Shared budget and contributions for four travelers.' },
    metric: { ko: '₩1.84M', en: '₩1.84M' },
    cta: { ko: '내 기여 수정', en: 'Edit mine' },
    layout: 'wigex',
    rows: [
      { ko: '고객님 · ₩900,000', en: 'You · ₩900,000' },
      { ko: '박서연 · ₩720,000', en: 'Park Seoyeon · ₩720,000' },
      { ko: '이준호 · ₩680,000', en: 'Lee Junho · ₩680,000' },
    ],
    chips: [{ ko: '예산', en: 'Budget' }, { ko: '멤버', en: 'Members' }],
  },
  {
    id: 'receipt-scan',
    platform: 'iOS',
    label: { ko: '영수증 AI', en: 'Receipt AI' },
    title: { ko: '영수증 자동 인식', en: 'Receipt recognition' },
    subtitle: { ko: '금액, 통화, 항목을 읽고 여행 경비로 바로 저장합니다.', en: 'Reads amount, currency, and items into a trip expense.' },
    metric: { ko: '96%', en: '96%' },
    cta: { ko: '경비로 저장', en: 'Save expense' },
    layout: 'wigex',
    rows: [
      { ko: 'Sushi Dai · 식비', en: 'Sushi Dai · Food' },
      { ko: '2026.07.20 · 08:42', en: '2026.07.20 · 08:42' },
      { ko: '합계 ¥3,240 · 약 ₩30,268', en: 'Total ¥3,240 · about ₩30,268' },
    ],
    chips: [{ ko: 'OCR', en: 'OCR' }, { ko: '자동 입력', en: 'Auto-fill' }],
  },
  {
    id: 'travel-insights',
    platform: 'iOS',
    label: { ko: '인사이트', en: 'Insights' },
    title: { ko: '도쿄 여행 지출 분석', en: 'Tokyo spending insights' },
    subtitle: { ko: '카테고리·일별 지출과 AI 절약 제안을 함께 봅니다.', en: 'Category and daily spend with AI saving suggestions.' },
    metric: { ko: '₩684K', en: '₩684K' },
    cta: { ko: 'AI 분석 보기', en: 'View AI analysis' },
    layout: 'wigex',
    rows: [
      { ko: '식비 38% · ₩260K', en: 'Food 38% · ₩260K' },
      { ko: '교통 21% · ₩144K', en: 'Transport 21% · ₩144K' },
      { ko: '예산보다 ₩116K 적게 사용 중', en: '₩116K under budget' },
    ],
    chips: [{ ko: '통계', en: 'Stats' }, { ko: 'AI', en: 'AI' }],
  },
];

const financeScreens: MobileScreen[] = [
  {
    id: 'cashflow',
    platform: 'iOS',
    label: { ko: '홈', en: 'Home' },
    title: { ko: '이번 주 쓸 수 있는 돈', en: 'Available this week' },
    subtitle: { ko: '월급일 이후 예정 지출을 뺀 금액입니다.', en: 'After upcoming bills since payday.' },
    metric: { ko: '₩182K', en: '$143' },
    cta: { ko: '예산 조정', en: 'Adjust' },
    layout: 'finance',
    rows: [
      { ko: '7.21 YouTube Premium · -₩14,900', en: 'Jul 21 YouTube Premium · -$12' },
      { ko: '7.25 관리비 예상 · -₩186,000', en: 'Jul 25 utilities · -$142' },
      { ko: '금요일까지 하루 ₩28,000', en: '$22 per day until Friday' },
    ],
    chips: [{ ko: '자동 분류', en: 'Auto sort' }, { ko: '예측', en: 'Forecast' }],
  },
  {
    id: 'card-risk',
    platform: 'iOS',
    label: { ko: '리스크', en: 'Risk' },
    title: { ko: '7월 카드 사용', en: 'July card spend' },
    subtitle: { ko: '결제일 예상 금액은 ₩1,247,300입니다.', en: 'Estimated statement is $958.' },
    metric: { ko: '₩327K', en: '$251' },
    cta: { ko: '상세 보기', en: 'Details' },
    layout: 'finance',
    rows: [
      { ko: '식비 ₩68,300 · 지난주보다 -18%', en: 'Dining $52 · 18% below last week' },
      { ko: '교통 ₩41,600 · 예산의 64%', en: 'Transit $32 · 64% of budget' },
      { ko: '낯선 해외 결제 1건 확인 필요', en: '1 overseas charge needs review' },
    ],
    chips: [{ ko: '지출 히트맵', en: 'Heatmap' }, { ko: '알림', en: 'Alert' }],
  },
  {
    id: 'savings',
    platform: 'iOS',
    label: { ko: '저축', en: 'Savings' },
    title: { ko: '제주 여행 통장', en: 'Jeju trip fund' },
    subtitle: { ko: '이번 주 남은 예산에서 옮겨도 월말 잔액은 안전합니다.', en: 'Month-end balance stays safe after transfer.' },
    metric: { ko: '₩36K', en: '$28' },
    cta: { ko: '저축 실행', en: 'Save now' },
    layout: 'finance',
    rows: [
      { ko: '현재 ₩684,000 / 목표 ₩1,200,000', en: '$526 of $923 goal' },
      { ko: '8월 28일 전에 목표 달성', en: 'Goal reached before Aug 28' },
      { ko: '다음 자동 이체 7월 27일', en: 'Next transfer Jul 27' },
    ],
    chips: [{ ko: '승인형', en: 'Approve' }, { ko: '목표형', en: 'Goal' }],
  },
  {
    id: 'insight',
    platform: 'iOS',
    label: { ko: '인사이트', en: 'Insight' },
    title: { ko: '7월 소비 리포트', en: 'July spending report' },
    subtitle: { ko: '6월 같은 기간과 비교한 결과입니다.', en: 'Compared with the same period in June.' },
    metric: { ko: '-12%', en: '-12%' },
    cta: { ko: '리포트', en: 'Report' },
    layout: 'finance',
    rows: [
      { ko: '카페 -₩24,800 · 방문 4회 감소', en: 'Cafe -$19 · 4 fewer visits' },
      { ko: 'Notion 연간 결제 7월 29일', en: 'Notion annual plan Jul 29' },
      { ko: '고정비 제외 저축률 21.4%', en: 'Savings rate 21.4%' },
    ],
    chips: [{ ko: '요약', en: 'Summary' }, { ko: '액션', en: 'Action' }],
  },
  {
    id: 'portfolio',
    platform: 'iOS',
    label: { ko: '포트폴리오', en: 'Portfolio' },
    title: { ko: '내 투자 계좌', en: 'My investments' },
    subtitle: { ko: '7월 19일 종가 기준, 연금 계좌를 포함합니다.', en: 'As of Jul 19 close, including retirement.' },
    metric: { ko: '+8.4%', en: '+8.4%' },
    cta: { ko: '리밸런싱', en: 'Rebalance' },
    layout: 'finance',
    rows: [
      { ko: 'S&P 500 ETF', en: 'S&P 500 ETF' },
      { ko: '국채·CMA', en: 'Treasury and cash' },
      { ko: '개인형 IRP', en: 'Retirement IRP' },
    ],
    chips: [{ ko: '수익률', en: 'Return' }, { ko: '배분', en: 'Allocation' }],
  },
];

const healthScreens: MobileScreen[] = [
  {
    id: 'daily-care',
    platform: 'iOS',
    label: { ko: '케어 플랜', en: 'Care plan' },
    title: { ko: '7월 20일 월요일', en: 'Monday, July 20' },
    subtitle: { ko: '수면 7시간 12분 · 회복 상태 양호', en: '7h 12m sleep · recovery looks good' },
    metric: { ko: '4/6', en: '4/6' },
    cta: { ko: '루틴 기록', en: 'Log' },
    layout: 'health',
    rows: [
      { ko: '08:10 목·어깨 스트레칭 완료', en: '08:10 neck stretch complete' },
      { ko: '21:00 비타민 D 1정', en: '21:00 Vitamin D · 1 tablet' },
      { ko: '7.25 서울메디컬 검진', en: 'Jul 25 Seoul Medical checkup' },
    ],
    chips: [{ ko: '복약', en: 'Meds' }, { ko: '수면', en: 'Sleep' }],
  },
  {
    id: 'vitals',
    platform: 'iOS',
    label: { ko: '바이탈', en: 'Vitals' },
    title: { ko: '지난 7일 회복 상태', en: 'Last 7 days recovery' },
    subtitle: { ko: '금요일 수면 부족 이후 정상 범위로 돌아왔습니다.', en: 'Back in range after low sleep Friday.' },
    metric: { ko: '안정', en: 'Stable' },
    cta: { ko: '리포트', en: 'Report' },
    layout: 'health',
    rows: [
      { ko: '평균 수면 7h 12m', en: 'Avg sleep 7h 12m' },
      { ko: '휴식 심박 61 bpm', en: 'Resting HR 61 bpm' },
      { ko: '수분 섭취 목표 미달', en: 'Hydration below goal' },
    ],
    chips: [{ ko: '심박', en: 'Heart' }, { ko: '회복', en: 'Recovery' }],
  },
  {
    id: 'coach',
    platform: 'iOS',
    label: { ko: '코치', en: 'Coach' },
    title: { ko: '서울숲 1.4km 걷기', en: 'Seoul Forest 1.4km' },
    subtitle: { ko: '평지 16분 · 마무리 스트레칭 2분', en: '16 min flat route · 2 min cooldown' },
    metric: { ko: '18분', en: '18 min' },
    cta: { ko: '시작', en: 'Start' },
    layout: 'health',
    rows: [
      { ko: '예상 걸음 1,850보', en: 'About 1,850 steps' },
      { ko: '목표 심박 108–132 bpm', en: 'Target HR 108–132 bpm' },
      { ko: '무릎 부담 낮음', en: 'Low knee load' },
    ],
    chips: [{ ko: '적응형', en: 'Adaptive' }, { ko: '안전', en: 'Safe' }],
  },
  {
    id: 'clinic-sync',
    platform: 'iOS',
    label: { ko: '병원 연동', en: 'Clinic sync' },
    title: { ko: '서울메디컬 사전 문진', en: 'Seoul Medical pre-check' },
    subtitle: { ko: '7월 25일 오전 10:30 예약', en: 'Appointment Jul 25 at 10:30' },
    metric: { ko: '3분', en: '3 min' },
    cta: { ko: '작성', en: 'Fill' },
    layout: 'health',
    rows: [
      { ko: '복용 약 자동 불러오기', en: 'Medication imported' },
      { ko: '알레르기 확인', en: 'Allergy confirmed' },
      { ko: '의사 메모로 전송', en: 'Sent to doctor note' },
    ],
    chips: [{ ko: '문진', en: 'Form' }, { ko: '동의', en: 'Consent' }],
  },
  {
    id: 'nutrition',
    platform: 'iOS',
    label: { ko: '영양', en: 'Nutrition' },
    title: { ko: '오늘 먹은 것', en: 'Meals today' },
    subtitle: { ko: '아침·점심 기록 기준', en: 'Based on breakfast and lunch' },
    metric: { ko: '82점', en: '82 pts' },
    cta: { ko: '저녁 기록', en: 'Log dinner' },
    layout: 'health',
    rows: [
      { ko: '단백질 목표 76%', en: 'Protein target 76%' },
      { ko: '수분 1.4L', en: 'Hydration 1.4L' },
      { ko: '저녁에 채소 2접시 추가', en: 'Add 2 servings of vegetables' },
    ],
    chips: [{ ko: '식사', en: 'Meals' }, { ko: '수분', en: 'Water' }],
  },
];

const commerceScreens: MobileScreen[] = [
  {
    id: 'catalog',
    platform: 'iOS',
    label: { ko: '쇼핑', en: 'Shop' },
    title: { ko: '여름 아우터', en: 'Summer outerwear' },
    subtitle: { ko: '신상품 24개 · 당일 출고 11개', en: '24 new pieces · 11 ship today' },
    metric: { ko: '24개', en: '24 items' },
    cta: { ko: '필터', en: 'Filter' },
    layout: 'commerce',
    rows: [
      { ko: 'Aero Shell Jacket', en: 'Aero Shell Jacket' },
      { ko: 'City Windbreaker', en: 'City Windbreaker' },
      { ko: 'Silver Trail Runner', en: 'Silver Trail Runner' },
    ],
    chips: [{ ko: '신상품', en: 'New' }, { ko: '아우터', en: 'Outerwear' }],
  },
  {
    id: 'product',
    platform: 'iOS',
    label: { ko: '상품', en: 'Product' },
    title: { ko: 'Aero Shell Jacket', en: 'Aero Shell Jacket' },
    subtitle: { ko: 'Cobalt · 3L 방수 원단 · 310g', en: 'Cobalt · 3L waterproof · 310g' },
    metric: { ko: '₩189,000', en: '$145' },
    cta: { ko: '장바구니 담기', en: 'Add to bag' },
    layout: 'commerce',
    rows: [
      { ko: '168cm 모델 M 착용', en: '168cm model wears M' },
      { ko: '리뷰 84% 정사이즈', en: '84% say true-to-size' },
      { ko: '오늘 주문 시 내일 도착', en: 'Order today, arrives tomorrow' },
    ],
    chips: [{ ko: '상세', en: 'Details' }, { ko: '리뷰', en: 'Reviews' }],
  },
  {
    id: 'checkout',
    platform: 'iOS',
    label: { ko: '결제', en: 'Checkout' },
    title: { ko: '주문 확인', en: 'Review order' },
    subtitle: { ko: 'Aero Shell Jacket · Red · M', en: 'Aero Shell Jacket · Red · M' },
    metric: { ko: '₩175,500', en: '$135' },
    cta: { ko: 'Apple Pay로 결제', en: 'Pay with Apple Pay' },
    layout: 'commerce',
    rows: [
      { ko: '서울 성동구 성수이로 18', en: '18 Seongsui-ro, Seoul' },
      { ko: '신한 3241 · 일시불', en: 'Shinhan 3241 · one payment' },
      { ko: '7월 21일 도착 예정', en: 'Arrives Jul 21' },
    ],
    chips: [{ ko: '무료 배송', en: 'Free shipping' }, { ko: '반품 7일', en: '7-day returns' }],
  },
  {
    id: 'live-drop',
    platform: 'iOS',
    label: { ko: '라이브', en: 'Live' },
    title: { ko: 'Aero Drop 07', en: 'Aero Drop 07' },
    subtitle: { ko: '오늘 20:00 · 쇼룸 재고 86개', en: 'Today 20:00 · 86 units' },
    metric: { ko: '412명', en: '412' },
    cta: { ko: '오픈 알림 받기', en: 'Set reminder' },
    layout: 'commerce',
    rows: [
      { ko: 'Cobalt 36개', en: 'Cobalt 36' },
      { ko: 'Signal Red 28개', en: 'Signal Red 28' },
      { ko: 'Black 22개', en: 'Black 22' },
    ],
    chips: [{ ko: '라이브', en: 'Live' }, { ko: '드롭', en: 'Drop' }],
  },
  {
    id: 'community',
    platform: 'iOS',
    label: { ko: '스타일 보드', en: 'Style board' },
    title: { ko: '실착 게시판', en: 'Outfit board' },
    subtitle: { ko: '사진 후기 1,248개 · 오늘 새 글 36개', en: '1,248 photo reviews · 36 today' },
    metric: { ko: '1.2K', en: '1.2K' },
    cta: { ko: '스타일 올리기', en: 'Post a fit' },
    layout: 'commerce',
    rows: [
      { ko: '레드 쉘 사이즈 질문', en: 'Red shell sizing question' },
      { ko: '성수 러닝 크루 7월 착장', en: 'Seongsu run club · July fits' },
      { ko: 'Silver Trail 비 오는 날 후기', en: 'Silver Trail in rain review' },
    ],
    chips: [{ ko: '실착', en: 'Outfits' }, { ko: 'Q&A', en: 'Q&A' }],
  },
];

const learningScreens: MobileScreen[] = [
  {
    id: 'lesson',
    platform: 'iOS',
    label: { ko: '레슨', en: 'Lesson' },
    title: { ko: '오늘의 발음 레슨', en: 'Today pronunciation' },
    subtitle: { ko: '카페에서 주문하기 · 12분', en: 'Ordering at a cafe · 12 min' },
    metric: { ko: '68%', en: '68%' },
    cta: { ko: '이어 학습', en: 'Resume' },
    layout: 'learning',
    rows: [
      { ko: '어휘 퀴즈 8/10', en: 'Vocab quiz 8/10' },
      { ko: '발음 녹음 제출', en: 'Pronunciation submitted' },
      { ko: '코치 피드백 도착', en: 'Coach feedback arrived' },
    ],
    chips: [{ ko: '퀴즈', en: 'Quiz' }, { ko: '피드백', en: 'Feedback' }],
  },
  {
    id: 'coach-prep',
    platform: 'iOS',
    label: { ko: '코칭', en: 'Coaching' },
    title: { ko: '내일 코칭 준비', en: 'Prep for tomorrow' },
    subtitle: { ko: '김수진 코치 · 오후 7:30', en: 'Coach Sujin Kim · 7:30 PM' },
    metric: { ko: 'D-1', en: 'D-1' },
    cta: { ko: '복습 시작', en: 'Review' },
    layout: 'learning',
    rows: [
      { ko: '문장 구조 정확도 74%', en: 'Structure accuracy 74%' },
      { ko: '질문 3개 저장됨', en: '3 questions saved' },
      { ko: '상담 링크 자동 생성', en: 'Session link generated' },
    ],
    chips: [{ ko: '1:1', en: '1:1' }, { ko: '준비', en: 'Prep' }],
  },
  {
    id: 'flashcards',
    platform: 'iOS',
    label: { ko: '카드', en: 'Cards' },
    title: { ko: '복습 카드 24장', en: '24 review cards' },
    subtitle: { ko: '지난 레슨에서 틀린 표현 7개 포함', en: 'Includes 7 missed phrases' },
    metric: { ko: '24장', en: '24 cards' },
    cta: { ko: '카드 넘기기', en: 'Flip' },
    layout: 'learning',
    rows: [
      { ko: '헷갈림 7개', en: '7 uncertain' },
      { ko: '완료 예상 9분', en: '9 min estimate' },
      { ko: '내일 재출제 5개', en: '5 due tomorrow' },
    ],
    chips: [{ ko: '스와이프', en: 'Swipe' }, { ko: '반복', en: 'Repeat' }],
  },
  {
    id: 'assignment',
    platform: 'iOS',
    label: { ko: '과제', en: 'Assignment' },
    title: { ko: '여행 에세이 첨삭', en: 'Travel essay review' },
    subtitle: { ko: '오늘 오후 6:30 도착 예정', en: 'Expected today at 6:30 PM' },
    metric: { ko: '2단계', en: 'Step 2' },
    cta: { ko: '상태 보기', en: 'Status' },
    layout: 'learning',
    rows: [
      { ko: 'AI 1차 피드백 완료', en: 'AI pass complete' },
      { ko: '코치 검토 중', en: 'Coach reviewing' },
      { ko: '예상 도착 18:30', en: 'ETA 18:30' },
    ],
    chips: [{ ko: '진행률', en: 'Progress' }, { ko: '첨삭', en: 'Review' }],
  },
  {
    id: 'study-plan',
    platform: 'iOS',
    label: { ko: '학습 플랜', en: 'Study plan' },
    title: { ko: '7월 넷째 주 일정', en: 'Fourth week of July' },
    subtitle: { ko: '레슨 3회 · 코칭 1회 · 복습 24장', en: '3 lessons · 1 coaching · 24 cards' },
    metric: { ko: '5일', en: '5 days' },
    cta: { ko: '일정 조정', en: 'Edit plan' },
    layout: 'learning',
    rows: [
      { ko: '월·수 마이크로 레슨', en: 'Micro lessons Mon/Wed' },
      { ko: '금요일 코치 세션', en: 'Coach session Friday' },
      { ko: '주말 복습 24장', en: '24-card weekend review' },
    ],
    chips: [{ ko: '캘린더', en: 'Calendar' }, { ko: '루틴', en: 'Routine' }],
  },
];

const mobilityScreens: MobileScreen[] = [
  {
    id: 'airport',
    platform: 'iOS',
    label: { ko: '공항', en: 'Airport' },
    title: { ko: 'KE703 공항 픽업', en: 'KE703 airport pickup' },
    subtitle: { ko: '비행편 변화와 기사 배정을 한 타임라인에 둡니다.', en: 'Flight and driver status in one timeline.' },
    metric: { ko: '18:40', en: '18:40' },
    cta: { ko: '예약 관리', en: 'Manage' },
    layout: 'mobility',
    rows: [
      { ko: '항공편 지연 자동 반영', en: 'Delay synced' },
      { ko: '수하물 2개 등록', en: '2 bags registered' },
      { ko: '회사 비용 처리', en: 'Company billing' },
    ],
    chips: [{ ko: '공항', en: 'Airport' }, { ko: '예약', en: 'Booking' }],
  },
  {
    id: 'live-ride',
    platform: 'iOS',
    label: { ko: '실시간', en: 'Live' },
    title: { ko: '12가 4831 접근 중', en: 'Car 4831 approaching' },
    subtitle: { ko: '기사 박준호 · 12가 4831 · 픽업존 B3', en: 'Driver Junho Park · Car 4831 · Zone B3' },
    metric: { ko: '6분', en: '6 min' },
    cta: { ko: '기사 연락', en: 'Contact' },
    layout: 'mobility',
    rows: [
      { ko: '픽업존 B3', en: 'Pickup zone B3' },
      { ko: '실시간 위치 공유', en: 'Live location shared' },
      { ko: '다음 일정 20:10', en: 'Next event 20:10' },
    ],
    chips: [{ ko: '지도', en: 'Map' }, { ko: 'ETA', en: 'ETA' }],
  },
  {
    id: 'commute',
    platform: 'iOS',
    label: { ko: '정기 이동', en: 'Commute' },
    title: { ko: '성수 출근 셔틀', en: 'Seongsu commute' },
    subtitle: { ko: '반복 이동은 캘린더처럼 빠르게 수정합니다.', en: 'Recurring rides edit like calendar events.' },
    metric: { ko: '3회', en: '3x' },
    cta: { ko: '반복 수정', en: 'Edit' },
    layout: 'mobility',
    rows: [
      { ko: '출근 08:20 고정', en: 'Office 08:20 fixed' },
      { ko: '우천 시 10분 앞당김', en: 'Rain moves 10 min earlier' },
      { ko: '법인카드 자동 청구', en: 'Corporate card billing' },
    ],
    chips: [{ ko: '반복', en: 'Repeat' }, { ko: '정산', en: 'Billing' }],
  },
  {
    id: 'fleet',
    platform: 'iOS',
    label: { ko: '운영자', en: 'Operator' },
    title: { ko: '강남 권역 배차', en: 'Gangnam dispatch' },
    subtitle: { ko: '강남권 기사 12명 · VIP 예약 2건', en: '12 Gangnam drivers · 2 VIP bookings' },
    metric: { ko: '12대', en: '12 cars' },
    cta: { ko: '배차', en: 'Assign' },
    layout: 'mobility',
    rows: [
      { ko: '강남 대기 차량 4대', en: '4 cars in Gangnam' },
      { ko: 'VIP 예약 2건', en: '2 VIP bookings' },
      { ko: '지연 위험 1건', en: '1 delay risk' },
    ],
    chips: [{ ko: '운영', en: 'Ops' }, { ko: '관리', en: 'Admin' }],
  },
  {
    id: 'trip-history',
    platform: 'iOS',
    label: { ko: '이동 기록', en: 'History' },
    title: { ko: '7월 이동 내역', en: 'July trip history' },
    subtitle: { ko: '자주 가는 장소와 비용을 이동 패턴으로 정리합니다.', en: 'Summarizes frequent places and spend patterns.' },
    metric: { ko: '18회', en: '18 trips' },
    cta: { ko: '리포트 공유', en: 'Share report' },
    layout: 'mobility',
    rows: [
      { ko: '강남 ↔ 성수 7회', en: 'Gangnam ↔ Seongsu 7x' },
      { ko: '공항 이동 3회', en: 'Airport trips 3x' },
      { ko: '법인 비용 ₩284K', en: 'Business spend $218' },
    ],
    chips: [{ ko: '기록', en: 'History' }, { ko: '정산', en: 'Expense' }],
  },
];

const clinicScreens: MobileScreen[] = [
  {
    id: 'booking',
    platform: 'iOS',
    label: { ko: '예약', en: 'Booking' },
    title: { ko: '7월 24일 상담 일정', en: 'Consultation Jul 24' },
    subtitle: { ko: '방문 전 문진과 예약을 한 흐름으로 묶습니다.', en: 'Booking and pre-visit forms in one flow.' },
    metric: { ko: '금 14:30', en: 'Fri 14:30' },
    cta: { ko: '문진 작성', en: 'Fill form' },
    layout: 'clinic',
    rows: [
      { ko: '담당 실장 배정 완료', en: 'Consultant assigned' },
      { ko: '주의 성분 체크', en: 'Ingredient flags checked' },
      { ko: '사진 기록 비공개 저장', en: 'Photos stored privately' },
    ],
    chips: [{ ko: '예약', en: 'Booking' }, { ko: '문진', en: 'Form' }],
  },
  {
    id: 'aftercare',
    platform: 'iOS',
    label: { ko: '사후 케어', en: 'Aftercare' },
    title: { ko: '레이저 토닝 3일차', en: 'Laser toning · Day 3' },
    subtitle: { ko: '시술 이후의 행동을 매우 명확하게 안내합니다.', en: 'Post-treatment actions are direct and clear.' },
    metric: { ko: '2단계', en: 'Step 2' },
    cta: { ko: '상태 기록', en: 'Log' },
    layout: 'clinic',
    rows: [
      { ko: '자극 성분 피하기', en: 'Avoid actives' },
      { ko: '붉은기 체크 예정', en: 'Redness check due' },
      { ko: '재방문 추천 D-11', en: 'Follow-up D-11' },
    ],
    chips: [{ ko: '케어', en: 'Care' }, { ko: '알림', en: 'Alert' }],
  },
  {
    id: 'photo-log',
    platform: 'iOS',
    label: { ko: '기록', en: 'Log' },
    title: { ko: '6월 14일 / 7월 19일', en: 'Jun 14 / Jul 19' },
    subtitle: { ko: 'Face ID 잠금 · 담당 의료진 2명만 열람', en: 'Face ID locked · visible to 2 clinicians' },
    metric: { ko: '잠금', en: 'Locked' },
    cta: { ko: '비교 보기', en: 'Compare' },
    layout: 'clinic',
    rows: [
      { ko: 'Face ID 잠금', en: 'Face ID lock' },
      { ko: '의료진 공유 허용', en: 'Clinic share allowed' },
      { ko: '자동 보정 사용 안함', en: 'No auto retouch' },
    ],
    chips: [{ ko: '프라이버시', en: 'Privacy' }, { ko: '사진', en: 'Photo' }],
  },
  {
    id: 'crm',
    platform: 'iOS',
    label: { ko: 'CRM', en: 'CRM' },
    title: { ko: '이번 주 재방문 연락', en: 'Returns to contact' },
    subtitle: { ko: '고객 앱과 운영 CRM까지 한 세트로 제안합니다.', en: 'Pairs client app with clinic CRM.' },
    metric: { ko: '18명', en: '18 leads' },
    cta: { ko: '메시지', en: 'Message' },
    layout: 'clinic',
    rows: [
      { ko: '보톡스 리마인드 9명', en: '9 botox reminders' },
      { ko: '상담 중단 고객 4명', en: '4 paused consults' },
      { ko: 'VIP 케어 5명', en: '5 VIP care' },
    ],
    chips: [{ ko: '운영', en: 'Ops' }, { ko: '재방문', en: 'Return' }],
  },
  {
    id: 'revenue',
    platform: 'iOS',
    label: { ko: '매출', en: 'Revenue' },
    title: { ko: '7월 20일 운영 현황', en: 'Operations · Jul 20' },
    subtitle: { ko: '예약률, 객단가, 재방문 흐름을 운영 지표로 묶습니다.', en: 'Combines booking, spend, and return metrics.' },
    metric: { ko: '+14%', en: '+14%' },
    cta: { ko: '운영 리포트', en: 'Ops report' },
    layout: 'clinic',
    rows: [
      { ko: '예약 전환율 68%', en: 'Booking conversion 68%' },
      { ko: '평균 객단가 ₩184K', en: 'Average spend $141' },
      { ko: '재방문 예정 18명', en: '18 returns due' },
    ],
    chips: [{ ko: '매출', en: 'Revenue' }, { ko: '운영', en: 'Ops' }],
  },
];

export const MOBILE_CONCEPTS: MobileConcept[] = [
  {
    id: 'wigex',
    name: 'WIGEX',
    category: { ko: '여행 · 경비 관리', en: 'Travel · Expense' },
    summary: {
      ko: '여행 일정, 공동 지갑, 환율, 영수증 입력을 연결한 WIGTN의 실제 여행 앱.',
      en: 'WIGTN’s travel app connecting itineraries, shared wallets, rates, and receipts.',
    },
    positioning: {
      ko: '실제 WIGEX 제품의 여행 홈, 일정, 공동 지갑, 영수증 OCR, AI 지출 분석을 포트폴리오 화면으로 재구성했습니다.',
      en: 'Real WIGEX product flows: trips, itinerary, shared wallet, receipt OCR, and AI spending analysis.',
    },
    interaction: { ko: '여행 홈 / 일정 / 공동 지갑 / 영수증 AI / 인사이트', en: 'Trips / Itinerary / Shared wallet / Receipt AI / Insights' },
    palette: {
      bg: '#1E1B24',
      surface: '#F5F2EB',
      panel: '#FFFCF9',
      ink: '#111111',
      muted: '#6E6585',
      accent: '#9B4FD8',
      accent2: '#4A90E2',
      line: '#302B3A',
    },
    screens: wigexScreens,
  },
  {
    id: 'finmate',
    name: 'FINMATE',
    category: { ko: '핀테크 · 자산관리', en: 'Fintech · Wealth' },
    summary: {
      ko: '월급일 이후의 생활비, 카드값, 목표 저축, 투자 계좌를 한곳에서 보는 개인 금융 앱.',
      en: 'Personal finance for spending, cards, savings goals, and investments after payday.',
    },
    positioning: {
      ko: '이번 주 가용 금액부터 카드 사용, 여행 저축, 투자 계좌까지 개인 금융의 실제 하루를 담았습니다.',
      en: 'A real finance day: available spend, card usage, a travel fund, and investments.',
    },
    interaction: { ko: '현금흐름 / 리스크 / 저축 / 인사이트 / 자산', en: 'Cash flow / Risk / Savings / Insight / Assets' },
    palette: {
      bg: '#07130f',
      surface: '#f4fbf0',
      panel: '#ffffff',
      ink: '#0b1611',
      muted: '#63746b',
      accent: '#20d982',
      accent2: '#d7ff61',
      line: '#cfe5d8',
    },
    screens: financeScreens,
  },
  {
    id: 'pulsecare',
    name: 'PULSECARE',
    category: { ko: '헬스케어 · 웰니스', en: 'Healthcare · Wellness' },
    summary: {
      ko: '검진, 복약, 운동 루틴을 하루 단위로 묶어주는 건강 관리 앱.',
      en: 'A health app that brings checkups, medication, and routines into one day view.',
    },
    positioning: {
      ko: '웨어러블 회복 지표, 실시간 걷기 코칭, 검진 데이터 전송, 식사 기록을 퍼포먼스 중심 UI로 구성했습니다.',
      en: 'Wearable recovery, live walk coaching, clinic handoff, and meal logs in a performance-led UI.',
    },
    interaction: { ko: '루틴 / 바이탈 / 코칭 / 문진 / 영양', en: 'Routine / Vitals / Coaching / Form / Nutrition' },
    palette: {
      bg: '#090e1a',
      surface: '#eef4ff',
      panel: '#ffffff',
      ink: '#0a1020',
      muted: '#6d7894',
      accent: '#5f7dff',
      accent2: '#ff765f',
      line: '#cfdaff',
    },
    screens: healthScreens,
  },
  {
    id: 'shoploop',
    name: 'SHOPLOOP',
    category: { ko: '커머스 · 라이브 쇼핑', en: 'Commerce · Live shopping' },
    summary: {
      ko: '상품 탐색부터 상세, 결제, 라이브 드롭, 실착 게시판까지 이어지는 패션 커머스.',
      en: 'Fashion commerce from catalog and product detail to checkout, live drops, and outfits.',
    },
    positioning: {
      ko: '목록에서는 비교가 빠르고, 상세에서는 소재와 핏이 보이며, 결제에서는 배송 정보만 남깁니다.',
      en: 'Fast comparison in catalog, material and fit in detail, only delivery essentials at checkout.',
    },
    interaction: { ko: '상품 목록 / 상세 / 결제 / 라이브 / 실착 게시판', en: 'Catalog / Product / Checkout / Live / Outfit board' },
    palette: {
      bg: '#160d0b',
      surface: '#fff5ed',
      panel: '#ffffff',
      ink: '#20120d',
      muted: '#7d6559',
      accent: '#ff5b2e',
      accent2: '#ffd166',
      line: '#f2d3c2',
    },
    screens: commerceScreens,
  },
  {
    id: 'learnkit',
    name: 'LEARNKIT',
    category: { ko: '교육 · 코칭', en: 'Education · Coaching' },
    summary: {
      ko: '짧은 학습, 과제 피드백, 코치 상담을 모바일에서 이어주는 러닝 앱.',
      en: 'A learning app for short lessons, assignment feedback, and coach check-ins.',
    },
    positioning: {
      ko: '영상 레슨, 코치 세션 노트, 실제 문장 복습, 원고 첨삭, 주간 시간표를 학습 도구처럼 촘촘히 구성했습니다.',
      en: 'Video lessons, coach notes, phrase review, marked-up writing, and a weekly timetable form a complete study tool.',
    },
    interaction: { ko: '레슨 / 코칭 / 플래시카드 / 과제 / 학습 플랜', en: 'Lesson / Coach / Cards / Assignment / Study plan' },
    palette: {
      bg: '#191919',
      surface: '#fffdf7',
      panel: '#ffffff',
      ink: '#1b1b1b',
      muted: '#706f68',
      accent: '#ff4f3e',
      accent2: '#2f63ff',
      line: '#dfddd3',
    },
    screens: learningScreens,
  },
  {
    id: 'clinicpro',
    name: 'CLINICPRO',
    category: { ko: '뷰티·클리닉 · 예약 CRM', en: 'Beauty clinic · Booking CRM' },
    summary: {
      ko: '상담 전 문진, 시술 예약, 사후 케어 알림까지 이어지는 클리닉 앱.',
      en: 'A clinic app for pre-consult forms, treatment booking, and aftercare reminders.',
    },
    positioning: {
      ko: '고객용 상담·사후 관리·사진 기록 3개 화면과 직원용 CRM·매출 2개 화면으로 구성했습니다.',
      en: 'Three client screens for consults, aftercare, and photos; two staff screens for CRM and revenue.',
    },
    interaction: { ko: '예약 / 사후 케어 / 사진 기록 / CRM / 매출', en: 'Booking / Aftercare / Photo log / CRM / Revenue' },
    palette: {
      bg: '#101827',
      surface: '#f5f7f4',
      panel: '#ffffff',
      ink: '#101827',
      muted: '#6f766f',
      accent: '#b9f4dd',
      accent2: '#ff786c',
      line: '#dfe5df',
    },
    screens: clinicScreens,
  },
];

export function pickMobileText(locale: Locale, value: Localized): string {
  return locale === 'ko' ? value.ko : value.en;
}
