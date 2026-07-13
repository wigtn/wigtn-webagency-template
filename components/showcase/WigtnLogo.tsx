import Image from 'next/image';

/**
 * WIGTN 워드마크 로고 (흰색 + 시그니처 퍼플 점). 다크 표면 전용.
 * 원본 캔버스의 여백을 트림한 1600×440 버전을 사용.
 */
export default function WigtnLogo({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/wigtn-logo-white-trim.png"
      alt="WIGTN"
      width={1600}
      height={440}
      priority={priority}
      className={className}
    />
  );
}
