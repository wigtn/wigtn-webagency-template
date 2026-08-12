import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

/**
 * 코어에서 가져온 모듈 단위 테스트 + 이 레포의 랩 플로우 테스트.
 * vendoring 한 복사본이 원본과 같은 동작을 하는지 지키는 안전망이다.
 */
export default defineConfig({
  test: {
    include: ['packages/**/*.test.ts', 'lib/**/*.test.ts'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '@wigtn/auth-membership': resolve('./packages/auth-membership/src/index.ts'),
      '@wigtn/content-engine': resolve('./packages/content-engine/src/index.ts'),
      '@wigtn/backoffice-frame': resolve('./packages/backoffice-frame/src/index.ts'),
      '@': resolve('.'),
    },
  },
});
