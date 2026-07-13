import Image from 'next/image';

/**
 * WIGTN 워드마크 로고. 원본은 네이비+퍼플이라 검정 배경에서는 흰색으로 반전해 노출.
 * `tone="light"` (기본) = 밝은 표면용 원본, `tone="dark"` = 어두운 표면용 흰색 반전.
 */
export default function WigtnLogo({
  className = '',
  tone = 'dark',
  priority = false,
}: {
  className?: string;
  tone?: 'light' | 'dark';
  priority?: boolean;
}) {
  return (
    <Image
      src="/wigtn-logo-navy.png"
      alt="WIGTN"
      width={1600}
      height={800}
      priority={priority}
      className={className}
      style={tone === 'dark' ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}
