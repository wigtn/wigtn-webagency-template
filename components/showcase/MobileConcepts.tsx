'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  BookOpen,
  CalendarDays,
  Camera,
  Car,
  Check,
  ChevronRight,
  HeartPulse,
  Headphones,
  Home,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Mic,
  Plane,
  Play,
  Plus,
  ReceiptText,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Timer,
  TrainFront,
  Utensils,
  UserRound,
  UsersRound,
  Video,
  WalletCards,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { MOBILE_CONCEPTS, pickMobileText, type MobileConcept, type MobileScreen } from '@/lib/mobile-concepts';
import type { ShowcaseCopy } from '@/lib/showcase-content';

type Layout = MobileScreen['layout'];
type ScreenProps = { concept: MobileConcept; screen: MobileScreen; locale: Locale; index: number };

const visualByConcept: Record<string, string> = {
  wigex: '/images/mobile/wigex-tokyo.jpg',
  wigexFlagJp: '/images/mobile/wigex-flag-jp.png',
  wigexFlagKr: '/images/mobile/wigex-flag-kr.png',
  finmate: '/images/mobile/finmate-finance.png',
  pulsecare: '/images/mobile/pulsecare-health.png',
  shoploop: '/images/mobile/shoploop-fashion.png',
  learnkit: '/images/mobile/learnkit-lesson.png',
  movera: '/images/mobile/movera-map.png',
  clinicpro: '/images/mobile/clinicpro-scan.png',
  shoploopCommunity: '/images/mobile/shoploop-community.png',
};

const iconByLayout: Record<Layout, typeof WalletCards> = {
  wigex: Plane,
  finance: WalletCards,
  health: HeartPulse,
  commerce: ShoppingBag,
  learning: BookOpen,
  mobility: Car,
  clinic: CalendarDays,
};

function tx(locale: Locale, value: { ko: string; en: string }) {
  return pickMobileText(locale, value);
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex h-11 items-end justify-between px-7 pb-2 text-[10px] font-semibold ${dark ? 'text-white' : 'text-black'}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1.5" aria-hidden>
        <span className={`h-2 w-3 rounded-sm border ${dark ? 'border-white' : 'border-black'}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white' : 'bg-black'}`} />
        <span className={`h-2 w-4 rounded-[2px] ${dark ? 'bg-white' : 'bg-black'}`} />
      </span>
    </div>
  );
}

function Photo({ src, alt, className, position = 'center' }: { src: string; alt: string; className: string; position?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="370px" className="object-cover" style={{ objectPosition: position }} />
    </div>
  );
}

function WigexScreen({ screen, locale, index }: ScreenProps) {
  const dark = index === 2 || index === 3;
  const ink = '#111111';
  const plum = '#1e1b24';
  const purple = '#9b4fd8';
  const blue = '#4a90e2';
  const cream = '#f5f2eb';

  return (
    <div className={`relative h-full overflow-hidden ${dark ? 'bg-[#1e1b24] text-[#f0ecf8]' : 'bg-[#f5f2eb] text-[#111111]'}`}>
      {index === 3 && <div className="absolute inset-0"><Image src="/images/salt-ember/dish-1.jpg" alt="Restaurant table behind receipt" fill sizes="370px" className="object-cover"/><div className="absolute inset-0 bg-black/58"/></div>}
      <div className="relative z-10"><StatusBar dark={dark || index === 3}/></div>

      {index !== 3 && <header className="relative z-10 flex items-center justify-between px-5 pb-3 pt-2"><div className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-[8px] bg-[#7b2fbe] text-white shadow-[0_5px_14px_rgba(123,47,190,.25)]"><Plane size={15} strokeWidth={2.4}/></span><div><p className="text-[15px] font-black tracking-normal">WIGEX</p><p className={`text-[7px] ${dark?'text-white/38':'text-black/38'}`}>TRAVEL WITH THE FLOW</p></div></div><button className={`grid h-8 w-8 place-items-center rounded-full ${dark?'bg-white/7':'bg-white'}`} aria-label="WIGEX notifications"><Bell size={14}/></button></header>}

      {index === 0 && (
        <div className="px-5 pt-2">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">MON · JUL 20</p><h4 className="mt-1 text-[22px] font-semibold">안녕하세요, 고객님</h4></div><button className="grid h-9 w-9 place-items-center rounded-full bg-[#7b2fbe] text-white" aria-label="Add trip"><Plus size={16}/></button></div>
          <div className="mt-4 flex gap-2 text-[8px]"><span className="rounded-full bg-[#7b2fbe] px-3 py-2 text-white">전체 3</span><span className="rounded-full bg-white px-3 py-2 text-black/45">진행 중 1</span><span className="rounded-full bg-white px-3 py-2 text-black/45">예정 2</span></div>
          <div className="relative mt-4 h-[224px] overflow-hidden rounded-[8px] shadow-[0_14px_30px_rgba(30,27,36,.18)]"><Image src={visualByConcept.wigex} alt="Tokyo trip" fill sizes="330px" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/5 to-transparent"/><span className="absolute right-3 top-3 rounded-full bg-[#27ae60] px-2.5 py-1.5 text-[7px] font-semibold text-white">여행 중 · DAY 3</span><div className="absolute inset-x-4 bottom-4 text-white"><div className="flex items-end justify-between"><div><p className="text-[26px] font-black leading-none">TOKYO</p><p className="mt-1 text-[10px] font-semibold">도쿄·교토 여름 여행</p></div><div className="flex -space-x-1.5"><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#7b2fbe] text-[7px]">ME</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#4a90e2] text-[7px]">SY</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#e67e22] text-[7px]">+2</span></div></div><div className="mt-3 flex items-center gap-2 text-[8px] text-white/65"><div className="relative h-3 w-5 overflow-hidden"><Image src={visualByConcept.wigexFlagKr} alt="Korea" fill sizes="20px" className="object-cover"/></div><span>서울</span><ChevronRight size={10}/><div className="relative h-3 w-5 overflow-hidden"><Image src={visualByConcept.wigexFlagJp} alt="Japan" fill sizes="20px" className="object-cover"/></div><span>도쿄 → 교토</span><span className="ml-auto">7.18—7.24</span></div></div></div>
          <div className="mt-4 flex items-center justify-between"><p className="text-[9px] font-semibold">관심 환율</p><p className="text-[7px] text-black/35">20분 전 업데이트</p></div>
          <div className="mt-2 grid grid-cols-2 gap-2"><div className="rounded-[8px] bg-white p-3"><div className="flex items-center gap-2"><div className="relative h-4 w-6 overflow-hidden"><Image src={visualByConcept.wigexFlagJp} alt="Japan" fill sizes="24px" className="object-cover"/></div><p className="text-[8px] font-semibold">JPY / KRW</p></div><p className="mt-2 text-[15px] font-semibold">₩934.20</p><p className="mt-1 text-[7px] text-[#2563eb]">▼ 0.42% · 환전 좋음</p></div><div className="rounded-[8px] bg-[#1e1b24] p-3 text-white"><p className="text-[8px] text-white/42">여행 지갑</p><p className="mt-2 text-[15px] font-semibold">₩1.84M</p><p className="mt-1 text-[7px] text-[#c07fff]">전체 예산의 64% 남음</p></div></div>
        </div>
      )}

      {index === 1 && (
        <div className="px-5 pt-1">
          <div className="relative h-[218px] overflow-hidden rounded-[8px]"><Image src={visualByConcept.wigex} alt="Tokyo itinerary" fill sizes="330px" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20"/><button className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white"><ChevronRight size={15} className="rotate-180"/></button><div className="absolute inset-x-4 bottom-4 text-white"><p className="text-[8px] text-white/55">DAY 03 / TOKYO</p><h4 className="mt-1 text-[23px] font-semibold">도쿄·교토 6박 7일</h4><p className="mt-1 text-[8px] text-white/62">7월 18일 — 24일 · 4명</p></div></div>
          <div className="relative -mt-3 mx-3 grid grid-cols-3 rounded-[8px] bg-white px-3 py-4 shadow-[0_8px_24px_rgba(30,27,36,.12)]">{[['DAY','3 / 7'],['TODAY','¥8,460'],['BUDGET','64%']].map(([label,value],i)=><div key={label} className={`text-center ${i>0?'border-l border-black/8':''}`}><p className="text-[7px] text-black/35">{label}</p><p className="mt-1 text-[13px] font-semibold">{value}</p></div>)}</div>
          <div className="mt-5 flex items-center justify-between"><div><p className="text-[8px] text-black/35">TODAY · JUL 20</p><h4 className="mt-1 text-[16px] font-semibold">도쿄에서 보낸 하루</h4></div><button className="grid h-10 w-10 place-items-center rounded-full bg-[#7b2fbe] text-white"><ReceiptText size={16}/></button></div>
          <div className="mt-3">{[['08:40','츠키지 시장','식비','¥3,240'],['12:15','긴자선 · 시부야','교통','¥420'],['15:30','21_21 DESIGN SIGHT','활동','¥1,800'],['18:30','Uobei Shibuya','예약','—']].map(([time,title,category,amount],i)=><div key={time} className="grid grid-cols-[40px_32px_1fr_auto] items-center border-t border-black/8 py-2.5"><span className="text-[8px] text-black/35">{time}</span><span className="grid h-7 w-7 place-items-center rounded-[7px]" style={{backgroundColor:i===0?'#ffe8e8':i===1?'#e7f5ff':i===2?'#e8f8ef':'#f0e6ff',color:i===0?'#e74c3c':i===1?blue:i===2?'#27ae60':'#7b2fbe'}}>{i===0?<Utensils size={12}/>:i===1?<TrainFront size={12}/>:i===2?<MapPin size={12}/>:<CalendarDays size={12}/>}</span><div className="pl-2"><p className="text-[9px] font-semibold">{title}</p><p className="mt-1 text-[7px] text-black/35">{category}</p></div><span className="text-[9px] font-semibold">{amount}</span></div>)}</div>
        </div>
      )}

      {index === 2 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-white/38">COMMON WALLET · TOKYO</p><h4 className="mt-1 text-[23px] font-semibold">우리 여행 지갑</h4></div><span className="flex items-center gap-1 rounded-full bg-white/7 px-3 py-2 text-[8px]"><UsersRound size={12}/> 4명</span></div>
          <div className="mt-5 rounded-[8px] border border-white/8 bg-[#272330] p-5"><div className="flex justify-between"><p className="text-[8px] text-white/38">남은 예산</p><button className="rounded-full bg-[#9b4fd8]/20 px-2 py-1 text-[7px] text-[#c07fff]">내 기여 수정</button></div><p className="mt-2 text-[32px] font-black">₩1,840,000</p><p className="mt-1 text-[8px] text-white/42">총 ₩3,200,000 중 42% 사용</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-white/7"><span className="block h-full w-[42%] rounded-full bg-gradient-to-r from-[#4a90e2] to-[#9b4fd8]"/></div><div className="mt-4 flex justify-between text-[7px]"><span className="text-white/35">사용 ₩1.36M</span><span className="text-[#2ecc71]">예산 안정</span></div></div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[9px] font-semibold">기여자</p><p className="text-[7px] text-white/32">4 / 4 입력 완료</p></div>
          <div className="mt-2 space-y-2">{[['ME','고객님','₩900,000','28%','#9b4fd8'],['SY','박서연','₩720,000','23%','#4a90e2'],['JH','이준호','₩680,000','21%','#e67e22'],['MN','최민나','₩900,000','28%','#27ae60']].map(([initial,name,amount,pct,color],i)=><div key={name} className="grid grid-cols-[38px_1fr_auto] items-center rounded-[8px] bg-white/5 p-3"><span className="grid h-9 w-9 place-items-center rounded-[8px] text-[8px] font-bold" style={{backgroundColor:`${color}33`,color}}>{initial}</span><div className="pl-3"><div className="flex items-center gap-1"><p className="text-[9px] font-semibold">{name}</p>{i===0&&<span className="rounded-full bg-[#9b4fd8]/20 px-1.5 py-0.5 text-[6px] text-[#c07fff]">나</span>}</div><p className="mt-1 text-[8px] text-white/38">{amount}</p></div><p className="text-[11px] font-semibold" style={{color}}>{pct}</p></div>)}</div>
          <div className="mt-4 rounded-[8px] bg-[#302b3a] p-4"><div className="flex items-center gap-2"><WalletCards size={14} color="#c07fff"/><p className="text-[9px] font-semibold">오늘 공동 지출</p><span className="ml-auto text-[9px]">¥8,460</span></div><p className="mt-2 text-[7px] text-white/35">식비 2건 · 교통 3건 · 활동 1건</p></div>
        </div>
      )}

      {index === 3 && (
        <div className="relative z-10 px-5 pt-1">
          <div className="flex items-center justify-between text-white"><button className="grid h-9 w-9 place-items-center rounded-full bg-black/35"><ChevronRight size={16} className="rotate-180"/></button><div className="text-center"><p className="text-[10px] font-semibold">영수증 AI 스캔</p><p className="mt-1 text-[7px] text-white/45">도쿄 여행 · 7월 20일</p></div><button className="grid h-9 w-9 place-items-center rounded-full bg-black/35"><Sparkles size={15}/></button></div>
          <div className="relative mx-auto mt-5 h-[385px] w-[270px]"><div className="absolute inset-0 rounded-[8px] border border-white/30"/><span className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-[#c084fc]"/><span className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-[#c084fc]"/><span className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-[#c084fc]"/><span className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-[#c084fc]"/><div className="absolute inset-5 rotate-[-1deg] bg-[#fffdf9] p-5 text-[#151515] shadow-2xl"><p className="text-center text-[13px] font-black">SUSHI DAI</p><p className="mt-1 text-center text-[7px] text-black/45">6-5-1 TOYOSU, TOKYO</p><div className="mt-5 border-y border-dashed border-black/25 py-3 text-[8px]"><div className="flex justify-between"><span>OMAKASE SET</span><span>¥2,800</span></div><div className="mt-2 flex justify-between"><span>GREEN TEA</span><span>¥400</span></div><div className="mt-2 flex justify-between"><span>TAX</span><span>¥40</span></div></div><div className="mt-5 flex justify-between text-[13px] font-black"><span>TOTAL</span><span>¥3,240</span></div><p className="mt-8 text-center text-[7px] text-black/35">2026.07.20 08:42 · #0184</p></div><span className="absolute inset-x-2 top-[205px] h-px bg-[#d8a3ff] shadow-[0_0_16px_4px_rgba(192,132,252,.7)]"/></div>
          <div className="absolute inset-x-5 top-[520px] rounded-[8px] bg-[#272330]/95 p-4 text-white shadow-2xl"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-[7px] bg-[#9b4fd8]"><ReceiptText size={14}/></span><div><p className="text-[9px] font-semibold">3개 항목 인식 완료</p><p className="mt-1 text-[7px] text-white/38">AI 인식 정확도 96%</p></div></div><p className="text-[15px] font-semibold">¥3,240</p></div><div className="mt-3 flex justify-between border-t border-white/8 pt-3 text-[8px]"><span className="text-white/38">환산 금액</span><span>약 ₩30,268</span></div><button className="mt-3 h-10 w-full rounded-[7px] bg-[#9b4fd8] text-[9px] font-semibold">경비로 저장</button></div>
        </div>
      )}

      {index === 4 && (
        <div className="px-5 pt-2">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">TRIP INSIGHTS · TOKYO</p><h4 className="mt-1 text-[23px] font-semibold">지출 리포트</h4></div><span className="rounded-full bg-white px-3 py-2 text-[8px]">DAY 3 / 7</span></div>
          <div className="mt-4 rounded-[8px] bg-[#1e1b24] p-5 text-white"><p className="text-[8px] text-white/38">TOTAL SPENT</p><p className="mt-2 text-[29px] font-black">₩684,200</p><div className="mt-4 grid grid-cols-3 border-t border-white/10 pt-3 text-center">{[['₩97K','일평균'],['42','지출 건'],['-₩116K','예산 대비']].map(([value,label],i)=><div key={label} className={i>0?'border-l border-white/10':''}><p className="text-[11px] font-semibold" style={{color:i===2?'#2ecc71':'white'}}>{value}</p><p className="mt-1 text-[7px] text-white/35">{label}</p></div>)}</div></div>
          <div className="mt-4 grid grid-cols-[126px_1fr] items-center gap-4 rounded-[8px] bg-white p-4"><div className="relative grid h-[118px] w-[118px] place-items-center rounded-full" style={{background:'conic-gradient(#e74c3c 0 38%, #4a90e2 38% 59%, #9b4fd8 59% 76%, #e67e22 76% 90%, #27ae60 90%)'}}><span className="grid h-[78px] w-[78px] place-items-center rounded-full bg-white text-center"><span><b className="text-[17px]">38%</b><small className="mt-1 block text-[7px] text-black/35">식비</small></span></span></div><div className="space-y-3">{[['식비','₩260K','#e74c3c'],['교통','₩144K','#4a90e2'],['쇼핑','₩116K','#9b4fd8'],['숙박','₩96K','#e67e22']].map(([label,value,color])=><div key={label} className="flex items-center text-[8px]"><span className="mr-2 h-2 w-2 rounded-full" style={{backgroundColor:color}}/><span className="text-black/45">{label}</span><span className="ml-auto font-semibold">{value}</span></div>)}</div></div>
          <div className="mt-4 rounded-[8px] bg-[#efe4fa] p-4"><div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[#7b2fbe] text-white"><Bot size={16}/></span><div><div className="flex items-center gap-2"><p className="text-[9px] font-semibold">WIGEX AI 분석</p><span className="rounded-full bg-white px-2 py-0.5 text-[6px] text-[#7b2fbe]">NEW</span></div><p className="mt-2 text-[8px] leading-4 text-black/55">교통비가 계획보다 18% 낮아요. 남은 4일은 하루 ¥12,400까지 사용해도 예산 안에 들어옵니다.</p></div></div></div>
          <div className="mt-4"><div className="flex justify-between text-[8px]"><span className="font-semibold">일별 지출 흐름</span><span className="text-black/35">7.18—7.24</span></div><svg className="mt-2 h-14 w-full" viewBox="0 0 300 52" aria-hidden><path d="M2 42 C35 36 48 16 76 25 S126 44 154 24 S215 8 298 18" fill="none" stroke={purple} strokeWidth="3"/><path d="M2 42 C35 36 48 16 76 25 S126 44 154 24 S215 8 298 18 L298 52 L2 52Z" fill={purple} opacity=".12"/></svg></div>
        </div>
      )}

      {index !== 3 && <nav className={`absolute inset-x-5 bottom-4 flex items-center justify-around rounded-[8px] py-3 shadow-[0_8px_24px_rgba(0,0,0,.10)] ${dark?'bg-[#302b3a] text-white':'bg-[#fffdf9] text-[#111111]'}`}><Home size={15} color={index===0?purple:undefined} opacity={index===0?1:.35}/><CalendarDays size={15} color={index===1?purple:undefined} opacity={index===1?1:.35}/><span className="grid h-8 w-8 place-items-center rounded-full bg-[#7b2fbe] text-white"><Plus size={15}/></span><BarChart3 size={15} color={index===4?purple:undefined} opacity={index===4?1:.35}/><UserRound size={15} opacity={.35}/></nav>}
    </div>
  );
}

function FinanceScreen({ concept, screen, locale, index }: ScreenProps) {
  const accent = concept.palette.accent;
  return (
    <div className="relative h-full overflow-hidden bg-[#0b0e0c] text-[#f1f6ef]">
      <StatusBar dark />
      <header className="flex items-end justify-between border-b border-white/15 px-5 pb-4 pt-2">
        <div><p className="text-[9px] text-white/40">PRIVATE LEDGER / 07</p><p className="mt-1 text-[15px] font-semibold">FIN<span style={{ color: accent }}>MATE</span></p></div>
        <p className="text-[10px] text-white/45">{tx(locale, screen.label)}</p>
      </header>

      {index === 0 && <div className="px-5 pt-5"><div className="flex items-end justify-between"><div><p className="text-[10px] text-white/42">AVAILABLE THIS WEEK</p><p className="mt-2 text-[34px] font-medium">{tx(locale, screen.metric)}</p></div><p className="text-[9px] text-white/35">JUL 14—20</p></div><svg className="mt-4 h-24 w-full border-b border-white/10" viewBox="0 0 300 100" aria-hidden><path d="M0 76 C28 72 40 26 70 41 S112 82 144 55 S201 20 228 34 S262 58 300 18" fill="none" stroke={accent} strokeWidth="3"/><path d="M0 76 C28 72 40 26 70 41 S112 82 144 55 S201 20 228 34 S262 58 300 18 L300 100 L0 100Z" fill={accent} opacity=".15"/></svg><div className="mt-3 grid grid-cols-[96px_1fr] gap-4"><Photo src={visualByConcept.finmate} alt="Payment card" className="h-20" position="center 60%" /><div><MiniBars color={concept.palette.accent2} /><p className="mt-1 text-[9px] leading-4 text-white/55">{tx(locale, screen.rows[0])}</p></div></div><div className="mt-3 flex justify-between border-t border-white/10 py-2 text-[8px] text-white/40"><span>IN ₩486K</span><span>OUT ₩304K</span><span>DAILY ₩28K</span></div><div>{screen.rows.slice(1).map((row,i)=><div key={i} className="flex justify-between border-t border-white/8 py-2 text-[9px]"><span className="text-white/48">{tx(locale,row)}</span><span style={{color:accent}}>0{i+1}</span></div>)}</div></div>}
      {index === 1 && <div className="px-5 pt-6"><div className="flex items-end justify-between"><div><p className="text-[10px] text-white/42">SPENDING HEAT</p><p className="mt-2 text-[32px] font-medium">{tx(locale, screen.metric)}</p></div><ShieldCheck size={30} color={concept.palette.accent2} /></div><div className="mt-7 grid grid-cols-7 gap-1.5">{Array.from({ length: 35 }).map((_, cell) => <span key={cell} className="aspect-square rounded-[2px]" style={{ backgroundColor: cell % 9 === 0 ? concept.palette.accent2 : cell % 4 === 0 ? accent : 'rgba(255,255,255,.08)', opacity: 0.42 + (cell % 3) * 0.22 }} />)}</div><LedgerRows screen={screen} locale={locale} color={accent} /></div>}
      {index === 2 && <div className="px-5 pt-6"><p className="text-[9px] text-white/40">GOAL / JEJU · AUG 28</p><div className="mt-2 flex items-end justify-between"><p className="text-[25px] font-medium">{tx(locale, screen.title)}</p><p className="text-[28px] font-medium">57%</p></div><div className="mt-6 h-2 bg-white/10"><span className="block h-full" style={{width:'57%',backgroundColor:accent}} /></div><div className="mt-2 flex justify-between text-[9px] text-white/42"><span>₩684,000</span><span>₩1,200,000</span></div><div className="mt-7 border-l-2 pl-4" style={{ borderColor: accent }}><p className="text-[9px] text-white/42">SAFE TO MOVE TODAY</p><p className="mt-1 text-[34px] font-medium">{tx(locale, screen.metric)}</p><p className="mt-2 text-[10px] leading-4 text-white/55">{tx(locale, screen.subtitle)}</p></div><div className="mt-6">{screen.rows.slice(1).map((row,i)=><div key={i} className="flex justify-between border-t border-white/10 py-2.5 text-[9px]"><span className="text-white/52">{tx(locale,row)}</span><Check size={12} color={accent}/></div>)}</div><button className="mt-4 h-11 w-full bg-[#eaf2e6] text-[10px] font-bold text-[#0b0e0c]">{tx(locale, screen.cta)}</button></div>}
      {index === 3 && <div className="px-5 pt-6"><div className="flex items-start justify-between"><div><p className="text-[10px] text-white/42">MONTHLY PATTERN</p><p className="mt-2 text-[34px] font-medium">{tx(locale, screen.metric)}</p></div><BarChart3 size={26} color={concept.palette.accent2} /></div><svg className="mt-10 h-36 w-full" viewBox="0 0 280 120" aria-hidden><path d="M2 94 C32 88 42 30 76 48 S124 90 152 51 S208 20 278 34" fill="none" stroke={accent} strokeWidth="3"/><path d="M2 94 C32 88 42 30 76 48 S124 90 152 51 S208 20 278 34 L278 120 L2 120Z" fill={accent} opacity=".13"/></svg><LedgerRows screen={screen} locale={locale} color={concept.palette.accent2} /></div>}
      {index === 4 && <div className="px-5 pt-5"><div className="flex items-end justify-between"><div><p className="text-[10px] text-white/42">TOTAL PORTFOLIO</p><p className="mt-2 text-[31px] font-medium">₩24.8M</p></div><p className="text-[15px] font-semibold" style={{ color: accent }}>{tx(locale, screen.metric)}</p></div><div className="mt-7 grid grid-cols-[130px_1fr] items-center gap-5"><div className="relative grid aspect-square place-items-center rounded-full" style={{ background: `conic-gradient(${accent} 0 46%, ${concept.palette.accent2} 46% 66%, #5f8171 66% 80%, #26332d 80%)` }}><span className="grid h-[82px] w-[82px] place-items-center rounded-full bg-[#0b0e0c] text-[10px] text-white/50">ASSET MIX</span></div><div className="space-y-4">{screen.rows.map((row, i) => <div key={i}><div className="flex justify-between text-[9px]"><span className="text-white/55">{tx(locale, row)}</span><span>{[46,34,20][i]}%</span></div><div className="mt-1 h-1 bg-white/10"><span className="block h-full" style={{ width: `${[46,34,20][i]}%`, backgroundColor: [accent, concept.palette.accent2, '#5f8171'][i] }} /></div></div>)}</div></div><div className="mt-7 border-y border-white/10 py-4"><div className="flex justify-between text-[9px] text-white/40"><span>12M RETURN</span><span>BENCHMARK +5.1%</span></div><svg className="mt-2 h-16 w-full" viewBox="0 0 300 55" aria-hidden><path d="M0 44 C35 46 48 35 74 38 S126 18 155 27 S210 8 240 17 S272 12 300 4" fill="none" stroke={concept.palette.accent2} strokeWidth="2.5"/></svg></div></div>}

      <nav className="absolute inset-x-5 bottom-5 flex justify-between border-t border-white/15 pt-3 text-[8px] text-white/36"><span className={index === 0 ? 'text-white' : ''}>FLOW</span><span className={index === 1 ? 'text-white' : ''}>RISK</span><span className={index === 2 ? 'text-white' : ''}>SAVE</span><span className={index === 3 ? 'text-white' : ''}>SIGNAL</span><span className={index === 4 ? 'text-white' : ''}>ASSETS</span></nav>
    </div>
  );
}

function LedgerRows({ screen, locale, color }: { screen: MobileScreen; locale: Locale; color: string }) {
  return <div className="mt-7 space-y-3">{screen.rows.map((row, i) => <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px]"><span className="text-white/55">{tx(locale, row)}</span><span className="h-1.5 w-1.5" style={{ backgroundColor: color }} /></div>)}</div>;
}

function MiniBars({ color }: { color: string }) {
  return <div className="flex h-12 items-end justify-end gap-1">{[35, 58, 44, 82, 66, 92].map((h, i) => <span key={i} className="w-2" style={{ height: `${h}%`, backgroundColor: color, opacity: 0.38 + i * 0.1 }} />)}</div>;
}

function HealthScreen({ screen, locale, index }: ScreenProps) {
  const light = index === 3 || index === 4;
  const ink = '#090e1a';
  const blue = '#6380ff';
  const coral = '#ff765f';
  const acid = '#dfff62';

  return (
    <div className={`relative h-full overflow-hidden ${index === 4 ? 'bg-[#e7ff6a] text-[#090e1a]' : light ? 'bg-[#eef4ff] text-[#090e1a]' : 'bg-[#090e1a] text-white'}`}>
      {index === 2 && <div className="absolute inset-0 z-0 overflow-hidden"><Image src={visualByConcept.pulsecare} alt="Guided walk in Seoul Forest" fill sizes="370px" className="object-cover" style={{objectPosition:'center 66%'}} /></div>}
      {index === 2 && <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#090e1a]/70 via-[#090e1a]/10 to-[#090e1a]/95" />}
      <div className="relative z-10"><StatusBar dark={!light} /></div>
      <header className="relative z-10 flex items-center justify-between px-5 pb-3 pt-2">
        <div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full" style={{ backgroundColor: light ? ink : blue }}><Activity size={14} color="white" /></span><p className="text-[14px] font-semibold">PULSE/CARE</p></div>
        <div className={`flex items-center gap-2 text-[8px] ${light ? 'text-black/42' : 'text-white/42'}`}><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: coral }} /> WATCH SYNCED</div>
      </header>

      {index === 0 && (
        <div className="px-5 pt-2">
          <div className="relative overflow-hidden rounded-[8px]">
            <Photo src={visualByConcept.pulsecare} alt="Runner checking recovery data" className="h-[210px]" position="center 68%" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090e1a]/86 via-[#090e1a]/20 to-transparent" />
            <div className="absolute left-4 top-4"><p className="text-[8px] text-white/50">MON · JUL 20</p><p className="mt-2 text-[11px] text-white/70">오늘의 회복</p><p className="mt-1 text-[46px] font-semibold leading-none">82</p><p className="mt-2 text-[9px]" style={{ color: acid }}>TRAIN AS PLANNED</p></div>
            <div className="absolute bottom-4 right-4 grid h-14 w-14 place-items-center rounded-full border-4 border-white/25 border-t-[#dfff62] text-[9px]">+6</div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[['7h 12m','수면','86'],['61','휴식 심박','BPM'],['32ms','HRV','+4']].map(([value,label,note],i)=><div key={label} className="rounded-[7px] bg-white/7 p-3"><p className="text-[14px] font-semibold" style={{color:i===1?coral:'white'}}>{value}</p><p className="mt-1 text-[7px] text-white/38">{label}</p><p className="mt-3 text-[7px]" style={{color:acid}}>{note}</p></div>)}
          </div>
          <div className="mt-4 flex items-center justify-between"><p className="text-[9px] font-semibold">NEXT SESSION</p><p className="text-[8px] text-white/35">18:30</p></div>
          <div className="mt-2 grid grid-cols-[42px_1fr_auto] items-center rounded-[7px] border border-white/10 p-3"><span className="grid h-10 w-10 place-items-center rounded-full" style={{backgroundColor:blue}}><Timer size={16}/></span><div className="pl-3"><p className="text-[10px] font-semibold">서울숲 회복 걷기</p><p className="mt-1 text-[8px] text-white/38">18분 · 낮은 부하 · 1.4km</p></div><ChevronRight size={14} color={acid}/></div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[8px]"><span className="text-white/40">목·어깨 스트레칭</span><span style={{color:acid}}>08:10 완료</span></div>
        </div>
      )}

      {index === 1 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-white/38">RECOVERY SIGNAL · 7 DAYS</p><h4 className="mt-1 text-[23px] font-semibold">바이탈 리포트</h4></div><span className="rounded-full px-3 py-2 text-[8px]" style={{backgroundColor:acid,color:ink}}>NORMAL</span></div>
          <div className="mt-5 grid grid-cols-[132px_1fr] items-center gap-5">
            <div className="relative grid h-[132px] w-[132px] place-items-center rounded-full" style={{background:`conic-gradient(${blue} 0 82%, rgba(255,255,255,.08) 82%)`}}><div className="grid h-[102px] w-[102px] place-items-center rounded-full bg-[#090e1a] text-center"><div><p className="text-[38px] font-semibold leading-none">82</p><p className="mt-1 text-[7px] text-white/35">RECOVERY</p></div></div></div>
            <div className="space-y-4">{[['RHR','61 bpm',coral],['HRV','32 ms',acid],['SLEEP','86%',blue]].map(([label,value,color])=><div key={label}><div className="flex justify-between text-[8px]"><span className="text-white/35">{label}</span><span>{value}</span></div><div className="mt-1 h-1 bg-white/8"><span className="block h-full w-[76%]" style={{backgroundColor:color}} /></div></div>)}</div>
          </div>
          <div className="mt-6 rounded-[8px] bg-white/5 px-3 py-4"><div className="flex justify-between text-[8px]"><span className="text-white/35">RESTING HEART RATE</span><span style={{color:coral}}>61 BPM</span></div><svg className="mt-3 h-16 w-full" viewBox="0 0 300 60" aria-hidden><path d="M0 34 H38 L49 13 L63 51 L80 25 L94 34 H140 L151 8 L166 54 L181 27 L198 34 H300" fill="none" stroke={coral} strokeWidth="2.5" strokeLinecap="round" /></svg></div>
          <div className="mt-5"><div className="flex items-end gap-2 border-b border-white/10 pb-2">{[64,76,48,55,81,88,82].map((h,i)=><span key={i} className="flex-1 rounded-t-[3px]" style={{height:`${h}px`,backgroundColor:i===6?acid:blue,opacity:i===6?1:.25+i*.08}} />)}</div><div className="mt-2 flex justify-between px-1 text-[7px] text-white/30"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div>
          <p className="mt-4 text-[9px] leading-4 text-white/46">금요일 수면 부족 이후 HRV와 휴식 심박이 정상 범위로 돌아왔습니다.</p>
        </div>
      )}

      {index === 2 && (
        <div className="relative z-10 px-5 pt-2">
          <div className="flex items-center justify-between"><span className="rounded-full bg-[#dfff62] px-3 py-2 text-[8px] font-semibold text-[#090e1a]">LIVE COACH</span><span className="text-[9px] text-white/60">12:42 / 18:00</span></div>
          <div className="mt-7"><p className="text-[10px] text-white/50">SEOUL FOREST · EASY</p><h4 className="mt-2 max-w-[245px] text-[29px] font-semibold leading-tight">보폭은 그대로,<br/>호흡만 길게.</h4></div>
          <svg className="mt-6 h-24 w-full" viewBox="0 0 300 90" aria-hidden><path d="M8 70 C45 68 41 30 78 34 S124 72 158 48 S222 14 292 25" fill="none" stroke="white" strokeWidth="8" opacity=".25" strokeLinecap="round"/><path d="M8 70 C45 68 41 30 78 34 S124 72 158 48 S222 14 292 25" fill="none" stroke={acid} strokeWidth="3" strokeLinecap="round"/><circle cx="8" cy="70" r="5" fill={coral}/><circle cx="292" cy="25" r="5" fill={acid}/></svg>
          <div className="mt-5 grid grid-cols-3 rounded-[8px] bg-[#090e1a]/88 p-4">{[['1.06','KM'],['118','BPM'],['11:56','PACE']].map(([value,label],i)=><div key={label} className={`text-center ${i>0?'border-l border-white/12':''}`}><p className="text-[17px] font-semibold">{value}</p><p className="mt-1 text-[7px] text-white/38">{label}</p></div>)}</div>
          <div className="mt-4 flex items-center justify-between rounded-[8px] bg-white p-3 text-[#090e1a]"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full" style={{backgroundColor:blue}}><Headphones size={16} color="white"/></span><div><p className="text-[9px] font-semibold">코치 음성 · 3분 남음</p><p className="mt-1 text-[7px] text-black/38">목표 심박 108–132 bpm</p></div></div><button className="grid h-9 w-9 place-items-center rounded-full bg-[#090e1a] text-white"><Play size={13} fill="white" /></button></div>
        </div>
      )}

      {index === 3 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">CLINIC HANDOFF</p><h4 className="mt-1 text-[23px] font-semibold">검진 준비</h4></div><p className="text-[20px] font-semibold" style={{color:blue}}>67%</p></div>
          <div className="mt-4 h-1.5 rounded-full bg-black/8"><span className="block h-full w-2/3 rounded-full" style={{backgroundColor:blue}} /></div>
          <div className="mt-5 rounded-[8px] bg-white p-4"><div className="flex items-center justify-between"><div><p className="text-[8px] text-black/38">SEOUL MEDICAL</p><p className="mt-1 text-[14px] font-semibold">7월 25일 · 오전 10:30</p></div><CalendarDays size={19} color={coral}/></div><div className="mt-4 flex gap-2 text-[7px]"><span className="rounded-full bg-[#e7ff6a] px-2 py-1">건강검진</span><span className="rounded-full bg-[#dfe6ff] px-2 py-1">을지로센터 4F</span></div></div>
          <div className="mt-5"><p className="text-[9px] font-semibold">전송할 건강 정보</p>{[['복용약','비타민 D · 주 5회','READY'],['알레르기','페니실린 없음','CHECKED'],['웨어러블 요약','최근 30일 수면·심박','READY']].map(([label,value,state],i)=><div key={label} className="grid grid-cols-[76px_1fr_auto] items-center border-t border-black/8 py-3"><span className="text-[8px] text-black/38">{label}</span><p className="text-[9px] font-semibold">{value}</p><span className="text-[7px]" style={{color:i===1?coral:blue}}>{state}</span></div>)}</div>
          <div className="mt-4 flex items-start gap-3 rounded-[8px] bg-[#10172a] p-4 text-white"><LockKeyhole size={16} color={acid}/><div><p className="text-[9px] font-semibold">진료 목적 암호화 전송</p><p className="mt-1 text-[8px] leading-4 text-white/42">검진 종료 30일 뒤 공유 권한이 자동 만료됩니다.</p></div></div>
          <button className="mt-4 h-11 w-full rounded-[7px] text-[10px] font-semibold text-white" style={{backgroundColor:blue}}>사전 문진 이어서 작성</button>
        </div>
      )}

      {index === 4 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/42">NUTRITION · TODAY</p><h4 className="mt-1 text-[24px] font-semibold">식사 리듬</h4></div><p className="text-[25px] font-semibold">82<span className="text-[10px]">/100</span></p></div>
          <div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-2"><div className="rounded-[8px] bg-[#090e1a] p-4 text-white"><p className="text-[8px] text-white/38">DAILY BALANCE</p><p className="mt-2 text-[27px] font-semibold">1,428</p><p className="text-[8px] text-white/38">of 1,920 kcal</p><div className="mt-5 flex h-10 items-end gap-1">{[45,68,34,78,58,82,64,90].map((h,i)=><span key={i} className="flex-1 rounded-t-full" style={{height:`${h}%`,backgroundColor:i>5?coral:blue}} />)}</div></div><div className="rounded-[8px] bg-white p-4"><p className="text-[8px] text-black/38">WATER</p><p className="mt-2 text-[24px] font-semibold">1.4L</p><p className="mt-1 text-[8px] text-black/38">목표 2.0L</p><div className="mt-5 h-16 rounded-b-full bg-[#dfe6ff] p-1"><div className="h-[70%] rounded-b-full" style={{backgroundColor:blue}} /></div></div></div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[10px] font-semibold">오늘 기록</p><button className="rounded-full bg-white px-3 py-2 text-[8px]">+ 식사 추가</button></div>
          <div className="mt-2 rounded-[8px] bg-white px-4">{[['08:20','그릭요거트 · 블루베리','420'],['12:45','연어 포케 · 현미밥','648'],['19:00','저녁 기록 예정','—']].map(([time,meal,kcal],i)=><div key={time} className="grid grid-cols-[42px_1fr_auto] items-center border-t border-black/8 py-3 first:border-0"><span className="text-[8px] text-black/35">{time}</span><div><p className="text-[9px] font-semibold">{meal}</p><p className="mt-1 text-[7px] text-black/35">{i===0?'단백질 24g':i===1?'단백질 38g · 채소 2종':'채소 2접시 권장'}</p></div><span className="text-[8px]">{kcal}</span></div>)}</div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">{[['76%','단백질'],['68%','식이섬유'],['92%','탄수화물']].map(([value,label])=><div key={label} className="rounded-[7px] border border-black/10 py-3"><p className="text-[13px] font-semibold">{value}</p><p className="mt-1 text-[7px] text-black/38">{label}</p></div>)}</div>
        </div>
      )}

      {index !== 2 && <nav className={`absolute inset-x-5 bottom-4 flex items-center justify-around rounded-[8px] py-3 ${light ? 'bg-white text-[#090e1a]' : 'bg-white/8 text-white'}`}><Home size={15} opacity={index===0?1:.35}/><HeartPulse size={15} opacity={index===1?1:.35}/><Activity size={15} opacity={index>1?1:.35}/><UserRound size={15} opacity={.35}/></nav>}
    </div>
  );
}

function ProgressRing({ color }: { color: string }) {
  return <div className="grid h-12 w-12 place-items-center rounded-full border-[5px] text-[10px] font-bold" style={{ borderColor: '#dfe7df', borderTopColor: color, borderRightColor: color }}>68</div>;
}

function CareTimeline({ screen, locale }: { screen: MobileScreen; locale: Locale }) {
  return <div className="mx-5 mt-5 border-l border-[#1e4735]/25 pl-4">{screen.rows.slice(0, 2).map((row, i) => <div key={i} className="relative pb-4 text-[10px]"><span className="absolute -left-[19px] top-1 h-2 w-2 rounded-full bg-[#1e4735]" /><p>{tx(locale, row)}</p></div>)}</div>;
}

function ContactSheetTile({ origin, className }: { origin: string; className: string }) {
  return <div className={`relative overflow-hidden bg-[#d9d9d4] ${className}`}><Image src={visualByConcept.shoploopCommunity} alt="Shoploop fashion item" fill sizes="180px" className="scale-[2.02] object-cover" style={{ transformOrigin: origin }} priority /></div>;
}

function CommerceVisual({ index }: { index: number }) {
  if (index === 1) return <Photo src={visualByConcept.shoploop} alt="Aero Shell Jacket in cobalt" className="absolute inset-0 h-full" position="center 28%" />;
  if (index === 2) return <Photo src={visualByConcept.shoploopCommunity} alt="Aero Shell Jacket in signal red" className="absolute inset-0 h-full" position="18% center" />;
  if (index === 3) return <Photo src={visualByConcept.shoploop} alt="Aero Drop campaign" className="absolute inset-0 h-full" position="center 28%" />;
  return null;
}

function CommerceScreen({ concept, screen, locale, index }: ScreenProps) {
  const light = index === 0 || index === 2 || index === 4;
  const products = [
    { origin: 'top right', name: 'Aero Shell', price: '₩189,000', tone: 'COBALT' },
    { origin: 'top left', name: 'City Windbreaker', price: '₩164,000', tone: 'SIGNAL RED' },
    { origin: 'bottom left', name: 'Silver Trail', price: '₩149,000', tone: 'SILVER' },
    { origin: 'bottom right', name: 'Transit Jacket', price: '₩178,000', tone: 'BLACK' },
  ];
  return (
    <div className={`relative h-full overflow-hidden ${light ? 'bg-[#f2f1ec] text-[#111318]' : 'bg-[#0c0d10] text-white'}`}>
      <CommerceVisual index={index} />
      {(index === 1 || index === 3) && <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-transparent to-black/82" />}
      <StatusBar dark={!light} />
      <header className="relative flex items-center justify-between px-5 pb-3 pt-2"><p className="text-[15px] font-black">SHOP/LOOP</p><div className="flex items-center gap-4"><Search size={15} /><ShoppingBag size={16} /></div></header>

      {index === 0 && <div className="px-4 pt-1"><div className="flex items-end justify-between"><div><p className="text-[9px] text-black/38">NEW / JULY 20</p><h4 className="mt-1 text-[24px] font-semibold">{tx(locale, screen.title)}</h4></div><button className="flex items-center gap-1 border-b border-black pb-1 text-[9px]">{tx(locale, screen.cta)} <span>02</span></button></div><div className="mt-4 flex gap-4 border-y border-black/12 py-3 text-[9px]"><span className="font-bold">NEW</span><span className="text-black/42">OUTER</span><span className="text-black/42">SHOES</span><span className="text-black/42">BAGS</span></div><div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-4">{products.map((product,i)=><div key={product.name}><ContactSheetTile origin={product.origin} className="h-[142px] bg-white" /><div className="mt-2 flex items-start justify-between gap-2"><div><p className="text-[10px] font-semibold">{product.name}</p><p className="mt-1 text-[8px] text-black/38">{product.tone}</p></div><p className="text-[9px] font-semibold">{product.price}</p></div>{i===0&&<span className="mt-1 inline-block bg-[#2458e8] px-1.5 py-0.5 text-[7px] text-white">NEW</span>}</div>)}</div></div>}

      {index === 1 && <div className="absolute inset-x-0 bottom-0 bg-[#f2f1ec] px-5 pb-7 pt-5 text-[#111318]"><div className="flex items-start justify-between gap-4"><div><p className="text-[9px] text-black/40">OUTER / AERO 07</p><h4 className="mt-1 text-[21px] font-semibold">{tx(locale, screen.title)}</h4></div><p className="text-[12px] font-bold">{tx(locale, screen.metric)}</p></div><p className="mt-2 text-[9px] text-black/48">{tx(locale, screen.subtitle)}</p><div className="mt-4 flex items-center gap-2"><span className="mr-2 text-[9px] text-black/45">SIZE</span>{['S','M','L','XL'].map(size=><span key={size} className={`grid h-9 w-9 place-items-center border text-[10px] ${size==='M'?'border-black bg-black text-white':'border-black/15'}`}>{size}</span>)}</div><div className="mt-4 flex justify-between border-t border-black/12 pt-3 text-[9px]"><span>★ 4.8 · 리뷰 328</span><span>내일 도착</span></div><button className="mt-4 h-11 w-full bg-[#2458e8] text-[10px] font-bold text-white">{tx(locale, screen.cta)}</button></div>}

      {index === 2 && <div className="absolute inset-x-4 bottom-4 bg-[#f2f1ec] p-5 text-[#111318] shadow-2xl"><p className="text-[9px] text-black/40">ORDER / 01</p><div className="mt-3 flex gap-3"><ContactSheetTile origin="top left" className="h-20 w-20 shrink-0" /><div><h4 className="text-[15px] font-semibold">Aero Shell Jacket</h4><p className="mt-1 text-[9px] text-black/45">Signal Red · M · 1개</p><p className="mt-3 text-[11px] font-semibold">₩189,000</p></div></div><div className="mt-4 space-y-0">{screen.rows.map((row,i)=><div key={i} className="flex justify-between border-t border-black/12 py-2.5 text-[9px]"><span className="text-black/42">{['배송지','결제 수단','도착 예정'][i]}</span><span className="max-w-[185px] text-right">{tx(locale,row)}</span></div>)}</div><div className="mt-3 flex items-end justify-between border-t border-black pt-3"><div><p className="text-[8px] text-black/40">쿠폰 -₩13,500</p><p className="mt-1 text-[17px] font-semibold">{tx(locale, screen.metric)}</p></div><button className="h-11 bg-black px-5 text-[10px] font-semibold text-white">{tx(locale, screen.cta)}</button></div></div>}

      {index === 3 && <><div className="absolute left-5 top-28 border border-white/65 px-2 py-1 text-[9px]">LIVE / 20:00</div><div className="absolute inset-x-5 bottom-20"><p className="text-[9px] text-white/55">DROP 07 · 86 UNITS</p><h4 className="mt-2 text-[32px] font-semibold leading-none">{tx(locale, screen.title)}</h4><p className="mt-3 text-[10px] text-white/58">{tx(locale, screen.subtitle)}</p><div className="mt-5 flex items-center justify-between border-t border-white/35 pt-3 text-[10px]"><span>{tx(locale, screen.metric)} WAITING</span><button style={{ color: concept.palette.accent2 }}>{tx(locale, screen.cta)} ↗</button></div></div></>}

      {index === 4 && <div className="px-4 pt-1"><div className="flex items-end justify-between"><div><p className="text-[9px] text-black/40">COMMUNITY / 1,248 POSTS</p><h4 className="mt-1 text-[24px] font-semibold">{tx(locale, screen.title)}</h4></div><button className="border-b border-black pb-1 text-[9px]">{tx(locale, screen.cta)}</button></div><Photo src={visualByConcept.shoploopCommunity} alt="Community outfit board" className="mt-4 h-[254px]" position="center" /><div className="mt-3">{screen.rows.map((row,i)=><div key={i} className="grid grid-cols-[1fr_auto] items-center border-t border-black/15 py-2.5"><div><p className="text-[10px] font-semibold">{tx(locale,row)}</p><p className="mt-1 text-[8px] text-black/35">{i===0?'Q&A · 18 comments':i===1?'LOOKBOOK · 42 saves':'REVIEW · 96 likes'}</p></div><ChevronRight size={14}/></div>)}</div></div>}
      <div className={`absolute bottom-4 left-5 text-[8px] ${light ? 'text-black/35' : 'text-white/40'}`}>0{index + 1} / 05</div>
    </div>
  );
}

function LearningScreen({ screen, locale, index }: ScreenProps) {
  const ink = '#1b1b1b';
  const paper = '#fffdf7';
  const blue = '#2f63ff';
  const red = '#ff4f3e';
  const yellow = '#f4da52';
  const dark = index === 1 || index === 4;

  return (
    <div className={`relative h-full overflow-hidden ${dark ? 'bg-[#1b1b1b] text-white' : index === 2 ? 'bg-[#f4da52] text-[#1b1b1b]' : 'bg-[#fffdf7] text-[#1b1b1b]'}`}>
      <StatusBar dark={dark} />
      <header className="flex items-center justify-between px-5 pb-3 pt-2">
        <div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-[6px]" style={{backgroundColor:dark?yellow:blue,color:dark?ink:'white'}}><BookOpen size={14}/></span><div><p className="text-[14px] font-bold">learnkit.</p><p className={`text-[7px] ${dark?'text-white/38':'text-black/38'}`}>ENGLISH · B2</p></div></div>
        <p className={`text-[8px] ${dark?'text-white/38':'text-black/38'}`}>WEEK 29 · {index + 1}/5</p>
      </header>
      <div className={`mx-5 h-1 ${dark?'bg-white/10':'bg-black/8'}`}><span className="block h-full" style={{ width: `${20 * (index + 1)}%`, backgroundColor: index === 2 ? red : blue }} /></div>

      {index === 0 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">LESSON 08 · SPEAKING</p><h4 className="mt-1 max-w-[235px] font-serif text-[27px] leading-tight">카페에서<br/>자연스럽게 주문하기</h4></div><p className="text-[30px] font-semibold" style={{color:red}}>08</p></div>
          <div className="relative mt-4 overflow-hidden rounded-[8px]"><Photo src={visualByConcept.learnkit} alt="English conversation lesson" className="h-[224px]" position="center 52%" /><div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent"/><button className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#1b1b1b]"><Play size={15} fill={ink}/></button><div className="absolute bottom-4 left-16 text-white"><p className="text-[10px] font-semibold">03:42 / 12:10</p><p className="mt-1 text-[7px] text-white/55">Ordering without sounding abrupt</p></div><span className="absolute right-3 top-3 rounded-full bg-[#2f63ff] px-2 py-1 text-[7px] text-white">CC · KR</span></div>
          <div className="mt-4 rounded-[8px] border border-black/10 p-4"><div className="flex items-center justify-between"><p className="text-[8px] text-black/38">LIVE TRANSCRIPT</p><Headphones size={14} color={blue}/></div><p className="mt-2 text-[13px] leading-5">“Could I get an iced latte <span className="border-b-2" style={{borderColor:red}}>with oat milk</span>, please?”</p><div className="mt-3 flex gap-2 text-[7px]"><span className="rounded-full bg-[#dfe6ff] px-2 py-1">intonation 84</span><span className="rounded-full bg-[#ffe0dc] px-2 py-1">linking 71</span></div></div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">{[['8/10','어휘'],['02','녹음'],['1','피드백']].map(([value,label])=><div key={label} className="rounded-[6px] bg-[#f1efe6] py-2"><p className="text-[11px] font-semibold">{value}</p><p className="mt-1 text-[7px] text-black/38">{label}</p></div>)}</div>
        </div>
      )}

      {index === 1 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-white/38">1:1 COACHING · TOMORROW</p><h4 className="mt-1 font-serif text-[26px] leading-tight">김수진 코치와<br/>30분 스피킹</h4></div><span className="rounded-full px-3 py-2 text-[8px] font-semibold" style={{backgroundColor:yellow,color:ink}}>D-1</span></div>
          <div className="mt-5 grid grid-cols-[112px_1fr] gap-3"><Photo src={visualByConcept.learnkit} alt="Language coach session" className="h-[148px] rounded-[8px]" position="22% center"/><div className="rounded-[8px] bg-white/7 p-4"><div className="flex items-center gap-2"><Video size={15} color={yellow}/><p className="text-[9px] font-semibold">7월 21일 · 19:30</p></div><p className="mt-3 text-[8px] leading-4 text-white/42">Google Meet 링크는 시작 10분 전에 열립니다.</p><div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[8px]"><span>예상 레벨</span><span style={{color:yellow}}>B2.1</span></div></div></div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[9px] font-semibold">SESSION AGENDA</p><p className="text-[8px] text-white/32">12분 준비</p></div>
          <div className="mt-2">{[['01','지난 녹음 2개 다시 듣기','4 min'],['02','질문 3개 메모 확인','3 min'],['03','카페 롤플레이 표현 복습','5 min']].map(([n,title,time],i)=><div key={n} className="grid grid-cols-[28px_1fr_auto] items-center border-t border-white/10 py-3"><span className="text-[8px]" style={{color:i===0?yellow:'rgba(255,255,255,.3)'}}>{n}</span><p className="text-[9px]">{title}</p><span className="text-[7px] text-white/32">{time}</span></div>)}</div>
          <div className="mt-4 rounded-[8px] p-4" style={{backgroundColor:blue}}><p className="text-[8px] text-white/55">MY NOTE</p><p className="mt-2 text-[10px] leading-5">“Could you say that again?” 뒤에 자연스럽게 이유를 덧붙이는 법 질문하기.</p></div>
          <button className="mt-4 h-11 w-full rounded-[7px] bg-white text-[10px] font-semibold text-[#1b1b1b]">코칭 준비 시작</button>
        </div>
      )}

      {index === 2 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/42">SMART REVIEW · 08 / 24</p><h4 className="mt-1 text-[23px] font-semibold">문장 카드</h4></div><p className="text-[10px]">9분 남음</p></div>
          <div className="relative mt-5 h-[392px]"><div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[8px] bg-[#2f63ff]"/><div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[8px] bg-[#fffdf7]"/><div className="absolute inset-0 rounded-[8px] bg-[#ff4f3e] p-6 text-white"><div className="flex items-center justify-between"><span className="text-[8px] text-white/55">PHRASE · CAFE</span><button className="grid h-8 w-8 place-items-center rounded-full bg-white/15"><Headphones size={14}/></button></div><p className="mt-12 font-serif text-[27px] leading-tight">Would you mind<br/>making it decaf?</p><p className="mt-5 text-[10px] leading-5 text-white/65">디카페인으로 바꿔 주실 수 있을까요?</p><div className="mt-8 border-t border-white/20 pt-4"><p className="text-[8px] text-white/50">USAGE NOTE</p><p className="mt-2 text-[9px] leading-4">정중한 요청. `Can you`보다 부드럽고 주문 변경에 자연스럽습니다.</p></div><div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-2">{[['AGAIN','#1b1b1b'],['HARD','#2f63ff'],['GOT IT','#f4da52']].map(([label,color])=><button key={label} className="h-10 rounded-[6px] text-[8px] font-semibold" style={{backgroundColor:color,color:label==='GOT IT'?ink:'white'}}>{label}</button>)}</div></div></div>
          <div className="mt-6 flex items-center justify-between text-[8px]"><span>헷갈림 7</span><span>내일 다시 5</span><span>완료 12</span></div>
        </div>
      )}

      {index === 3 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">WRITING REVIEW · DRAFT 02</p><h4 className="mt-1 font-serif text-[25px]">여행 에세이 첨삭</h4></div><span className="rounded-full px-3 py-2 text-[8px] text-white" style={{backgroundColor:blue}}>코치 검토 중</span></div>
          <div className="mt-5 rounded-[8px] border border-black/10 bg-white p-5 shadow-[0_10px_28px_rgba(27,27,27,.06)]"><div className="flex items-center justify-between border-b border-black/8 pb-3"><p className="text-[8px] text-black/38">A MORNING IN KYOTO · 286 WORDS</p><p className="text-[8px]" style={{color:red}}>7 COMMENTS</p></div><div className="mt-4 space-y-4 text-[10px] leading-[1.8]"><p>I arrived in Kyoto before the city was fully awake. The street <span className="bg-[#ffe0dc] px-1 line-through decoration-[#ff4f3e]">was very quiet</span> <span className="border-b-2" style={{borderColor:blue}}>felt almost suspended</span>.</p><p>At the corner café, I ordered coffee and watched the owner arrange small cups <span className="relative bg-[#fff2a8] px-1">with a careful rhythm<span className="absolute -right-3 -top-3 grid h-4 w-4 place-items-center rounded-full bg-[#ff4f3e] text-[7px] text-white">2</span></span>.</p><p className="text-black/46">The details made the morning stay with me longer than I expected.</p></div><div className="mt-5 rounded-[6px] bg-[#eef2ff] p-3"><div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full text-[8px] text-white" style={{backgroundColor:blue}}>SK</span><p className="text-[8px] font-semibold">수진 코치</p></div><p className="mt-2 text-[8px] leading-4 text-black/55">“quiet”을 감정이 보이는 동사로 바꾸니 장면이 훨씬 선명해졌어요.</p></div></div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">{[['B2+','레벨'],['84','명료도'],['18:30','도착']].map(([value,label])=><div key={label} className="rounded-[6px] border border-black/10 py-3"><p className="text-[12px] font-semibold">{value}</p><p className="mt-1 text-[7px] text-black/35">{label}</p></div>)}</div>
          <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-[7px] text-[9px] font-semibold text-white" style={{backgroundColor:ink}}><Mic size={13}/> 코치 음성 코멘트 듣기</button>
        </div>
      )}

      {index === 4 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-white/38">WEEK 29 · JUL 20—24</p><h4 className="mt-1 font-serif text-[25px]">이번 주 학습표</h4></div><p className="text-[20px] font-semibold" style={{color:yellow}}>4일</p></div>
          <div className="mt-5 grid grid-cols-[36px_repeat(5,1fr)] border-l border-t border-white/10 text-center"><span/><>{['M','T','W','T','F'].map((day, dayIndex)=><span key={`${day}-${dayIndex}`} className="border-b border-r border-white/10 py-2 text-[7px] text-white/35">{day}</span>)}</>{['08','12','19'].map((time,row)=><div key={time} className="contents"><span className="border-b border-r border-white/10 py-7 text-[7px] text-white/30">{time}</span>{[0,1,2,3,4].map(col=>{const activeCell=(row===0&&col===1)||(row===1&&col===2)||(row===2&&[0,3,4].includes(col));return <div key={col} className="relative min-h-16 border-b border-r border-white/10 p-1">{activeCell&&<span className="absolute inset-1 rounded-[5px]" style={{backgroundColor:col===3?red:col===4?yellow:blue}}><span className={`mt-2 block text-[6px] ${col===4?'text-[#1b1b1b]':'text-white'}`}>{col===3?'COACH':col===4?'REVIEW':row===0?'WORDS':'LESSON'}</span></span>}</div>})}</div>)}</div>
          <div className="mt-5 grid grid-cols-[1fr_94px] gap-3"><div className="rounded-[8px] bg-white/7 p-4"><p className="text-[8px] text-white/38">THIS WEEK</p><p className="mt-2 text-[24px] font-semibold">68<span className="text-[10px]"> min</span></p><div className="mt-4 h-1 bg-white/10"><span className="block h-full w-[72%]" style={{backgroundColor:blue}} /></div><p className="mt-2 text-[7px] text-white/35">72% completed</p></div><div className="rounded-[8px] p-4" style={{backgroundColor:yellow,color:ink}}><p className="text-[8px] opacity-50">STREAK</p><p className="mt-2 text-[24px] font-semibold">11</p><p className="mt-1 text-[7px] opacity-50">days</p></div></div>
          <div className="mt-5">{[['오늘 19:30','발음 레슨 08','12 min'],['내일 19:30','김수진 코칭','30 min'],['금요일','복습 카드 24장','9 min']].map(([time,title,duration],i)=><div key={title} className="grid grid-cols-[70px_1fr_auto] items-center border-t border-white/10 py-3"><span className="text-[7px] text-white/35">{time}</span><p className="text-[9px]">{title}</p><span className="text-[7px]" style={{color:i===1?red:yellow}}>{duration}</span></div>)}</div>
        </div>
      )}

      {index !== 1 && index !== 4 && <div className={`absolute bottom-4 left-5 text-[7px] ${dark?'text-white/28':'text-black/28'}`}>LEARNKIT · PERSONAL STUDY SPACE</div>}
    </div>
  );
}

function MobilityScreen({ concept, screen, locale, index }: ScreenProps) {
  return (
    <div className="relative h-full overflow-hidden bg-[#d9e6e7] text-[#071517]">
      <Photo src={visualByConcept.movera} alt="Aerial map of Seoul" className="absolute inset-0 h-full" position={index === 0 ? 'center' : index === 1 ? '60% center' : index === 2 ? '36% center' : '72% center'} />
      <div className="absolute inset-0 bg-[#dff9fb]/15" />
      <StatusBar />
      <div className="relative mx-4 mt-2 flex h-12 items-center gap-3 bg-white/90 px-4 shadow-lg backdrop-blur-md"><Search size={16} /><p className="truncate text-[11px] font-semibold">{tx(locale, screen.title)}</p></div>
      <svg className="absolute left-7 top-28 h-[330px] w-[315px]" viewBox="0 0 315 330" aria-hidden><path d={index % 2 ? 'M42 55 C102 68 98 168 167 172 S225 264 281 244' : 'M34 250 C91 234 80 151 146 145 S205 80 280 64'} fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".9" /><path d={index % 2 ? 'M42 55 C102 68 98 168 167 172 S225 264 281 244' : 'M34 250 C91 234 80 151 146 145 S205 80 280 64'} fill="none" stroke={concept.palette.accent} strokeWidth="4" strokeLinecap="round" strokeDasharray={index === 2 ? '8 8' : undefined} /></svg>
      <span className="absolute left-9 top-[345px] grid h-11 w-11 place-items-center rounded-full bg-[#071517] text-white shadow-lg"><MapPin size={18} /></span><span className="absolute right-11 top-36 grid h-12 w-12 place-items-center rounded-full bg-[#f6d64a] shadow-lg"><Car size={21} /></span>
      <div className={`absolute inset-x-3 bottom-3 bg-[#071517] p-5 text-white shadow-[0_18px_50px_rgba(4,15,18,.28)] ${index === 1 ? 'min-h-[230px]' : 'min-h-[180px]'}`}><div className="mx-auto mb-4 h-1 w-9 rounded-full bg-white/25" /><div className="flex items-start justify-between"><div><p className="text-[9px] text-white/45">{tx(locale, screen.label)}</p><p className="mt-1 max-w-[200px] text-[16px] font-semibold">{tx(locale, screen.rows[0])}</p></div><p className="text-[26px] font-semibold text-[#f6d64a]">{tx(locale, screen.metric)}</p></div><p className="mt-5 border-t border-white/15 pt-4 text-[10px] leading-5 text-white/55">{tx(locale, screen.subtitle)}</p></div>
      {index === 2 && <div className="absolute inset-0 z-20 bg-[#eef2ed] text-[#071517]"><StatusBar /><header className="px-5 pb-3 pt-2"><p className="text-[9px] text-black/38">RECURRING RIDE / JULY</p><div className="mt-1 flex items-end justify-between"><h4 className="text-[23px] font-semibold">{tx(locale,screen.title)}</h4><button className="border-b border-black pb-1 text-[9px]">수정</button></div></header><div className="mx-5 mt-4 grid grid-cols-7 gap-1">{Array.from({length:21}).map((_,i)=><div key={i} className={`grid aspect-square place-items-center text-[9px] ${[0,2,4,7,9,11,14,16,18].includes(i)?'bg-[#071517] text-white':'bg-white text-black/35'}`}>{i+7}</div>)}</div><Photo src={visualByConcept.movera} alt="Recurring commute route" className="mx-5 mt-5 h-36" position="42% center" /><div className="mx-5 mt-5">{screen.rows.map((row,i)=><div key={i} className="grid grid-cols-[36px_1fr_auto] items-center border-t border-black/10 py-3"><span className="text-[9px] text-black/35">{['08:20','RAIN','CARD'][i]}</span><p className="text-[10px] font-semibold">{tx(locale,row)}</p><span className={`h-2 w-2 rounded-full ${i===0?'bg-[#55c9ee]':i===1?'bg-[#f6d64a]':'bg-[#071517]'}`} /></div>)}</div></div>}
      {index === 3 && <div className="absolute inset-0 z-20 bg-[#071517] text-white"><StatusBar dark /><header className="flex items-end justify-between border-b border-white/12 px-5 pb-4 pt-2"><div><p className="text-[9px] text-white/40">DISPATCH / GANGNAM</p><h4 className="mt-1 text-[22px] font-semibold">{tx(locale,screen.title)}</h4></div><p className="text-[28px] font-semibold text-[#f6d64a]">{tx(locale,screen.metric)}</p></header><div className="grid grid-cols-3 gap-px bg-white/10"><div className="bg-[#0b1d20] p-4"><p className="text-[8px] text-white/38">WAITING</p><p className="mt-2 text-[21px]">04</p></div><div className="bg-[#0b1d20] p-4"><p className="text-[8px] text-white/38">ON TRIP</p><p className="mt-2 text-[21px]">07</p></div><div className="bg-[#f6d64a] p-4 text-[#071517]"><p className="text-[8px] opacity-50">RISK</p><p className="mt-2 text-[21px]">01</p></div></div><Photo src={visualByConcept.movera} alt="Gangnam fleet map" className="mx-5 mt-5 h-44" position="68% center" /><div className="mx-5 mt-5">{screen.rows.map((row,i)=><div key={i} className="grid grid-cols-[28px_1fr_auto] items-center border-t border-white/12 py-3"><span className="text-[9px] text-white/35">0{i+1}</span><p className="text-[10px]">{tx(locale,row)}</p><span className={`text-[8px] ${i===2?'text-[#f6d64a]':'text-[#55c9ee]'}`}>{i===2?'CHECK':'LIVE'}</span></div>)}</div></div>}
      {index === 4 && <div className="absolute inset-0 z-20 bg-[#f1f3ee] text-[#071517]"><StatusBar /><header className="flex items-center justify-between px-5 pb-3 pt-2"><div><p className="text-[9px] text-black/40">MOVERA / HISTORY</p><h4 className="mt-1 text-[22px] font-semibold">{tx(locale, screen.title)}</h4></div><p className="text-[24px] font-semibold">{tx(locale, screen.metric)}</p></header><Photo src={visualByConcept.movera} alt="Trip history map" className="mx-5 mt-3 h-44" position="center" /><div className="mx-5 -mt-5 grid grid-cols-3 bg-[#071517] px-2 py-4 text-center text-white"><div><p className="text-[8px] text-white/40">DISTANCE</p><p className="mt-1 text-[13px]">284km</p></div><div className="border-x border-white/15"><p className="text-[8px] text-white/40">SPEND</p><p className="mt-1 text-[13px]">₩284K</p></div><div><p className="text-[8px] text-white/40">SAVED</p><p className="mt-1 text-[13px] text-[#f6d64a]">41m</p></div></div><div className="mx-5 mt-6">{screen.rows.map((row,i)=><div key={i} className="grid grid-cols-[28px_1fr_auto] items-center border-t border-black/10 py-3"><span className="text-[9px] text-black/35">0{i+1}</span><p className="text-[10px] font-semibold">{tx(locale,row)}</p><span className="h-2 w-2 rounded-full" style={{backgroundColor:i===0?'#55c9ee':i===1?'#f6d64a':'#071517'}} /></div>)}</div></div>}
    </div>
  );
}

function ClinicScreen({ screen, locale, index }: ScreenProps) {
  const dark = index === 3;
  const accent = '#ff786c';
  const mint = '#b9f4dd';
  const ink = '#101827';

  return (
    <div className={`relative h-full overflow-hidden ${dark ? 'bg-[#101827] text-white' : 'bg-[#f5f7f4] text-[#101827]'}`}>
      <StatusBar dark={dark} />
      <header className={`flex items-center justify-between px-5 pb-3 pt-2 ${dark ? 'border-b border-white/10' : ''}`}>
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full" style={{ backgroundColor: dark ? mint : ink, color: dark ? ink : 'white' }}><Sparkles size={13} /></span>
          <div><p className="text-[13px] font-bold tracking-normal">clinicpro</p><p className={`text-[7px] ${dark ? 'text-white/38' : 'text-black/38'}`}>SKIN · CARE · CRM</p></div>
        </div>
        <button className={`grid h-8 w-8 place-items-center rounded-full ${dark ? 'bg-white/8' : 'bg-white'}`} aria-label="Notifications"><Bell size={14} /></button>
      </header>

      {index === 0 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between">
            <div><p className="text-[9px] text-black/40">SUN · JUL 20</p><h4 className="mt-1 text-[24px] font-semibold">오늘 예약</h4></div>
            <div className="text-right"><p className="text-[27px] font-semibold leading-none">8</p><p className="mt-1 text-[8px] text-black/38">APPOINTMENTS</p></div>
          </div>
          <div className="mt-5 grid grid-cols-[1.3fr_.7fr] gap-2">
            <div className="rounded-[8px] p-4" style={{ backgroundColor: mint }}><p className="text-[8px] text-black/45">NEXT · 10:30</p><p className="mt-2 text-[14px] font-semibold">김서윤 · 첫 상담</p><p className="mt-1 text-[9px] text-black/50">색소 케어 · Room 02</p><button className="mt-5 flex items-center gap-1 text-[9px] font-semibold">차트 열기 <ChevronRight size={11} /></button></div>
            <div className="rounded-[8px] p-4 text-white" style={{ backgroundColor: ink }}><CalendarDays size={17} color={accent} /><p className="mt-6 text-[19px] font-semibold">72%</p><p className="mt-1 text-[8px] text-white/45">TODAY FULL</p></div>
          </div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[10px] font-semibold">타임라인</p><button className="text-[8px] text-black/40">전체 일정</button></div>
          <div className="mt-2">
            {['10:30','11:20','13:00','14:30'].map((time, i) => (
              <div key={time} className="grid grid-cols-[42px_1fr_auto] items-center border-t border-black/8 py-3">
                <span className="text-[9px] text-black/38">{time}</span>
                <div><p className="text-[10px] font-semibold">{['김서윤 · 색소 상담','박지민 · LDM 관리','점심 / 장비 점검','이하늘 · 재진'][i]}</p><p className="mt-1 text-[8px] text-black/36">{['정유진 실장','한가람 원장','Room 01','윤혜진 원장'][i]}</p></div>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: i === 2 ? '#d8ddd8' : i === 3 ? accent : mint }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="px-5 pt-2">
          <Photo src={visualByConcept.clinicpro} alt="Laser treatment aftercare" className="h-[238px] rounded-[8px]" position="70% center" />
          <div className="relative -mt-10 ml-4 rounded-[8px] bg-white p-4 shadow-[0_16px_34px_rgba(16,24,39,.12)]">
            <div className="flex items-start justify-between"><div><p className="text-[8px] font-semibold" style={{ color: accent }}>DAY 03 · RECOVERY</p><h4 className="mt-1 text-[19px] font-semibold">{tx(locale, screen.title)}</h4></div><span className="grid h-10 w-10 place-items-center rounded-full text-[11px] font-semibold" style={{ backgroundColor: mint }}>82%</span></div>
            <p className="mt-2 text-[9px] text-black/45">붉은기 안정 중 · 오늘은 보습과 자외선 차단만</p>
          </div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[10px] font-semibold">오늘의 케어</p><p className="text-[8px] text-black/38">2 / 3 완료</p></div>
          <div className="mt-2">
            {['저자극 세안 · 오전 8:10','재생 크림 얇게 바르기','붉은기 사진 남기기 · 오후 9:00'].map((item, i) => (
              <div key={item} className="flex items-center gap-3 border-t border-black/8 py-3"><span className={`grid h-6 w-6 place-items-center rounded-full ${i < 2 ? 'text-[#101827]' : 'border border-black/15'}`} style={{ backgroundColor: i < 2 ? mint : 'transparent' }}>{i < 2 && <Check size={12} />}</span><p className={`text-[9px] ${i < 2 ? '' : 'text-black/50'}`}>{item}</p></div>
            ))}
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">PRIVATE PHOTO LOG</p><h4 className="mt-1 text-[22px] font-semibold">변화 기록</h4></div><span className="flex items-center gap-1 rounded-full bg-white px-3 py-2 text-[8px]"><ShieldCheck size={12} /> Face ID</span></div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="relative"><Photo src={visualByConcept.clinicpro} alt="Skin record before" className="h-[260px] rounded-[8px]" position="64% center" /><span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[7px]">06.14 · BEFORE</span></div>
            <div className="relative"><Photo src={visualByConcept.clinicpro} alt="Skin record after" className="h-[260px] rounded-[8px]" position="83% center" /><span className="absolute left-2 top-2 rounded-full px-2 py-1 text-[7px]" style={{ backgroundColor: mint }}>07.19 · AFTER</span><span className="absolute inset-x-3 bottom-3 rounded-[6px] bg-[#101827]/88 px-3 py-2 text-[8px] text-white">색소 분포 -18%</span></div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[['-18%','색소'],['-9%','붉은기'],['+12%','수분']].map(([value,label], i) => <div key={label} className="rounded-[7px] bg-white py-3"><p className="text-[14px] font-semibold" style={{ color: i === 2 ? '#16886b' : accent }}>{value}</p><p className="mt-1 text-[7px] text-black/38">{label}</p></div>)}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-black/8 pt-3 text-[8px]"><span className="flex items-center gap-1"><Camera size={12} /> 자동 보정 없음</span><span className="text-black/38">의료진 2명 공유</span></div>
        </div>
      )}

      {index === 3 && (
        <div className="px-5 pt-4">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-white/38">CLIENT RELATION</p><h4 className="mt-1 text-[23px] font-semibold">재방문 CRM</h4></div><p className="text-[25px] font-semibold" style={{ color: mint }}>18</p></div>
          <div className="mt-5 grid grid-cols-3 rounded-[7px] bg-white/6 p-1 text-center text-[8px]"><span className="rounded-[5px] bg-white py-2 text-[#101827]">오늘 6</span><span className="py-2 text-white/45">이번 주 18</span><span className="py-2 text-white/45">보류 4</span></div>
          <div className="mt-5 space-y-2">
            {[
              ['KS','김수아','보톡스 · 5개월','오늘 11:20','VIP'],
              ['JM','정민지','상담 후 미예약','오늘 15:00','FOLLOW'],
              ['HY','한예린','토닝 패키지 · 1회 남음','내일','CARE'],
              ['SL','오세림','리쥬란 · 4개월','7월 23일','RETURN'],
            ].map(([initial,name,detail,date,status], i) => <div key={name} className="grid grid-cols-[36px_1fr_auto] items-center rounded-[7px] bg-white/6 p-3"><span className="grid h-9 w-9 place-items-center rounded-full text-[9px] font-semibold" style={{ backgroundColor: i === 0 ? mint : i === 1 ? accent : '#253147', color: i < 2 ? ink : 'white' }}>{initial}</span><div className="pl-3"><p className="text-[10px] font-semibold">{name}</p><p className="mt-1 text-[8px] text-white/40">{detail}</p></div><div className="text-right"><p className="text-[7px]" style={{ color: i === 1 ? accent : mint }}>{status}</p><p className="mt-1 text-[7px] text-white/35">{date}</p></div></div>)}
          </div>
          <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-[7px] text-[10px] font-semibold" style={{ backgroundColor: mint, color: ink }}><MessageCircle size={14} /> 선택 고객 메시지 보내기</button>
        </div>
      )}

      {index === 4 && (
        <div className="px-5 pt-3">
          <div className="flex items-end justify-between"><div><p className="text-[8px] text-black/38">OPS · JUL 20</p><h4 className="mt-1 text-[22px] font-semibold">운영 리포트</h4></div><p className="text-[18px] font-semibold" style={{ color: accent }}>+14.2%</p></div>
          <div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-2">
            <div className="rounded-[8px] p-4 text-white" style={{ backgroundColor: ink }}><p className="text-[8px] text-white/40">TODAY REVENUE</p><p className="mt-2 text-[25px] font-semibold">₩4.82M</p><svg className="mt-4 h-14 w-full" viewBox="0 0 150 48" aria-hidden><path d="M2 39 C20 37 25 23 42 28 S67 40 82 21 S111 9 148 4" fill="none" stroke={mint} strokeWidth="3" strokeLinecap="round" /></svg><p className="mt-2 text-[7px] text-white/35">지난주 같은 요일 ₩4.21M</p></div>
            <div className="flex flex-col justify-between rounded-[8px] p-4" style={{ backgroundColor: mint }}><p className="text-[8px] text-black/42">BOOKING</p><div><p className="text-[28px] font-semibold">68%</p><div className="mt-2 h-1 bg-black/10"><span className="block h-full w-[68%]" style={{ backgroundColor: accent }} /></div></div><p className="text-[8px] text-black/45">17 / 25 slots</p></div>
          </div>
          <div className="mt-5 flex items-center justify-between"><p className="text-[10px] font-semibold">시간대별 매출</p><p className="text-[8px] text-black/38">10:00 — 20:00</p></div>
          <div className="mt-3 flex h-24 items-end gap-2 border-b border-black/10">{[28,44,38,72,56,88,64,94].map((h,i)=><span key={i} className="flex-1 rounded-t-[3px]" style={{height:`${h}%`,backgroundColor:i===7?accent:ink,opacity:i===7?1:.18+i*.08}} />)}</div>
          <div className="mt-5 grid grid-cols-3 gap-2">{[['₩184K','객단가'],['18명','재방문'],['4.8','만족도']].map(([value,label])=><div key={label} className="rounded-[7px] bg-white px-3 py-3"><p className="text-[14px] font-semibold">{value}</p><p className="mt-1 text-[7px] text-black/38">{label}</p></div>)}</div>
          <div className="mt-4 flex items-center justify-between rounded-[7px] bg-[#ffe4df] px-4 py-3"><div><p className="text-[9px] font-semibold">오후 6시 공석 2개</p><p className="mt-1 text-[7px] text-black/42">대기 고객에게 제안 가능</p></div><ChevronRight size={14} color={accent} /></div>
        </div>
      )}

      {index !== 3 && <nav className="absolute inset-x-5 bottom-4 flex items-center justify-around rounded-[8px] border border-black/6 bg-white/94 py-3 shadow-[0_8px_24px_rgba(16,24,39,.08)]"><Home size={15} color={index === 0 ? ink : '#a1a7a1'} /><HeartPulse size={15} color={index === 1 || index === 2 ? accent : '#a1a7a1'} /><UserRound size={15} color={index === 3 ? ink : '#a1a7a1'} /><BarChart3 size={15} color={index === 4 ? ink : '#a1a7a1'} /></nav>}
    </div>
  );
}

function AppScreen(props: ScreenProps) {
  if (props.screen.layout === 'wigex') return <WigexScreen {...props} />;
  if (props.screen.layout === 'finance') return <FinanceScreen {...props} />;
  if (props.screen.layout === 'health') return <HealthScreen {...props} />;
  if (props.screen.layout === 'commerce') return <CommerceScreen {...props} />;
  if (props.screen.layout === 'learning') return <LearningScreen {...props} />;
  if (props.screen.layout === 'mobility') return <MobilityScreen {...props} />;
  return <ClinicScreen {...props} />;
}

function DeviceFrame({ concept, screen, locale, index }: { concept: MobileConcept; screen: MobileScreen; locale: Locale; index: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[46px] border-[9px] border-[#050506] bg-black shadow-[0_36px_90px_rgba(0,0,0,.62)]">
      <span className="absolute left-1/2 top-3 z-50 h-7 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden />
      <div className="h-full overflow-hidden rounded-[35px]"><AppScreen concept={concept} screen={screen} locale={locale} index={index} /></div>
    </div>
  );
}

function PhoneCoverflow({ concept, locale, screenIndex, onChange }: { concept: MobileConcept; locale: Locale; screenIndex: number; onChange: (next: number, direction: number) => void }) {
  const count = concept.screens.length;
  const go = (delta: number) => onChange((screenIndex + delta + count) % count, delta);
  const slots = [-1, 0, 1];
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 640px)');
    const update = () => setWide(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const phoneWidth = wide ? 350 : 318;
  const spread = wide ? 252 : 130;

  return (
    <div className="relative mx-auto h-[690px] w-full max-w-[1040px] overflow-hidden sm:h-[760px]" aria-roledescription="carousel" aria-label={`${concept.name} app screens`}>
      <div className="absolute left-1/2 top-0 h-full w-[1100px] -translate-x-1/2 [perspective:1500px]">
        {slots.map((slot) => {
          const index = (screenIndex + slot + count) % count;
          const screen = concept.screens[index];
          return (
            <motion.div
              initial={false}
              animate={{
                x: -phoneWidth / 2 + slot * spread,
                y: slot === 0 ? 4 : 36,
                rotateY: slot * -18,
                rotateZ: slot * 7,
                scale: slot === 0 ? 1 : 0.96,
                opacity: slot === 0 ? 1 : 0.35,
                filter: slot === 0 ? 'blur(0px) grayscale(0)' : 'blur(0.6px) grayscale(0.25)',
              }}
              key={screen.id}
              role={slot === 0 ? undefined : 'button'}
              tabIndex={slot === 0 ? -1 : 0}
              aria-label={slot < 0 ? 'Previous screen' : slot > 0 ? 'Next screen' : undefined}
              onClick={() => slot !== 0 && go(slot)}
              onKeyDown={(event) => { if (slot !== 0 && (event.key === 'Enter' || event.key === ' ')) go(slot); }}
              transition={{ type: 'spring', stiffness: 240, damping: 30, mass: 0.78 }}
              className={`absolute left-1/2 top-0 aspect-[393/820] w-[318px] origin-center outline-none sm:w-[350px] ${slot === 0 ? 'z-30' : 'z-10 cursor-pointer'}`}
              style={{ transformStyle: 'preserve-3d', zIndex: slot === 0 ? 30 : 10 }}
            >
              <motion.div
                drag={slot === 0 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                dragMomentum={false}
                dragSnapToOrigin
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                onDragEnd={(_, info) => {
                  const delta = info.offset.x < -44 || info.velocity.x < -420 ? 1 : info.offset.x > 44 || info.velocity.x > 420 ? -1 : 0;
                  if (delta) window.setTimeout(() => go(delta), 70);
                }}
                className={`h-full w-full ${slot === 0 ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                style={{ touchAction: 'pan-y' }}
              >
                <DeviceFrame concept={concept} screen={screen} locale={locale} index={index} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-2 left-1/2 z-40 flex -translate-x-1/2 gap-2">{concept.screens.map((screen, index) => <button key={screen.id} type="button" aria-label={`Go to ${tx(locale, screen.label)}`} onClick={() => onChange(index, index > screenIndex ? 1 : -1)} className={`h-1 outline-none transition-all ${index === screenIndex ? 'w-7 bg-white' : 'w-2 bg-white/25'}`} />)}</div>
    </div>
  );
}

export default function MobileConcepts({ copy, locale }: { copy: ShowcaseCopy; locale: Locale }) {
  const [activeId, setActiveId] = useState('wigex');
  const [screenIndex, setScreenIndex] = useState(0);
  const themeStripRef = useRef<HTMLDivElement>(null);
  const active = MOBILE_CONCEPTS.find((concept) => concept.id === activeId) ?? MOBILE_CONCEPTS[MOBILE_CONCEPTS.length - 1];

  useEffect(() => {
    const strip = themeStripRef.current;
    const chip = strip?.querySelector<HTMLElement>(`[data-concept="${activeId}"]`);
    if (!strip || !chip) return;
    // scrollBy on the strip only — scrollIntoView would scroll the document to this section on mount.
    const stripBox = strip.getBoundingClientRect();
    const chipBox = chip.getBoundingClientRect();
    strip.scrollBy({ left: chipBox.left + chipBox.width / 2 - (stripBox.left + stripBox.width / 2), behavior: 'smooth' });
  }, [activeId]);

  const chooseConcept = (id: string) => {
    setActiveId(id);
    setScreenIndex(0);
  };

  return (
    <section id="mobile" className="scroll-mt-16 overflow-hidden border-t border-white/10 bg-[#0a0a0b] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-16">
          <div><p className="text-xs font-semibold text-[#9063CD]">{copy.mobile.eyebrow}</p><h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] text-[#f2f1ef] sm:text-4xl">{copy.mobile.heading}</h2></div>
          <div className="lg:max-w-lg lg:justify-self-end lg:pt-8"><p className="text-sm leading-relaxed text-[#f2f1ef]/60 sm:text-base">{copy.mobile.lead}</p><p className="mt-4 border-l-2 border-[#9063CD] pl-3 text-[11px] leading-relaxed text-white/42">{copy.mobile.disclaimer}</p><a href="mailto:contact@wigtn.com" className="mt-5 inline-flex items-center gap-2 border-b border-[#9063CD] pb-1 text-sm text-white">{locale === 'ko' ? '모바일 제작 문의' : 'Mobile inquiry'}<ArrowUpRight size={15} color="#9063CD" /></a></div>
        </div>

        <div ref={themeStripRef} className="mt-7 overflow-x-auto pb-2">
          <div className="grid min-w-[900px] grid-cols-6 gap-px bg-white/10">
            {MOBILE_CONCEPTS.map((concept) => {
              const Icon = iconByLayout[concept.screens[0].layout];
              const selected = concept.id === active.id;
              return <button key={concept.id} data-concept={concept.id} type="button" onClick={() => chooseConcept(concept.id)} className="flex min-h-[74px] items-center gap-3 px-4 text-left transition-colors" style={{ backgroundColor: selected ? concept.palette.accent : '#111113', color: selected ? concept.palette.ink : '#f2f1ef' }}><Icon size={18} /><span><span className="block text-[12px] font-bold">{concept.name}</span><span className="mt-1 block text-[10px] opacity-55">{tx(locale, concept.category)}</span></span></button>;
            })}
          </div>
        </div>

        <div className="mt-9 grid gap-5 border-b border-white/10 pb-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><p className="text-[10px] font-semibold" style={{ color: active.palette.accent }}>{tx(locale, active.category)} / {active.screens[screenIndex].platform} · CONCEPT UI · {locale === 'ko' ? '가상 데이터' : 'FICTIONAL DATA'}</p><h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{active.name}</h3></div>
          <div className="max-w-lg sm:text-right"><p className="text-[12px] leading-relaxed text-white/52">{tx(locale, active.positioning)}</p><p className="mt-2 text-[10px] text-white/30">0{screenIndex + 1} / 0{active.screens.length} · {tx(locale, active.screens[screenIndex].label)}</p></div>
        </div>

        <PhoneCoverflow concept={active} locale={locale} screenIndex={screenIndex} onChange={(next) => setScreenIndex(next)} />
      </div>
    </section>
  );
}
