#!/usr/bin/env node
/**
 * 코어(web-agency) 모듈 소스를 packages/ 로 다시 복사한다.
 *
 *   node scripts/sync-modules.mjs [코어_레포_경로]
 *
 * 경로를 생략하면 WIGTN_CORE_PATH 환경변수, 그다음 ../web-agency 를 본다.
 * vendoring 방식이라 코어가 갱신되면 이 스크립트를 돌리고 diff 를 확인해야 한다.
 */

import { execFileSync } from 'node:child_process';
import { copyFileSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const MODULES = ['auth-membership', 'content-engine', 'backoffice-frame'];

const corePath = resolve(
  process.argv[2] ?? process.env.WIGTN_CORE_PATH ?? '../web-agency',
);

if (!existsSync(corePath)) {
  console.error(`코어 레포를 찾을 수 없습니다: ${corePath}`);
  console.error('사용법: node scripts/sync-modules.mjs <web-agency 경로>');
  process.exit(1);
}

let revision = 'unknown';
try {
  revision = execFileSync('git', ['-C', corePath, 'rev-parse', '--short', 'HEAD'], {
    encoding: 'utf8',
  }).trim();
} catch {
  console.warn('코어 리비전을 읽지 못했습니다 — 헤더에 unknown 으로 기록합니다.');
}

for (const module of MODULES) {
  const relative = `projects/demo/packages/${module}/src/index.ts`;
  const source = join(corePath, relative);
  const target = join('packages', module, 'src', 'index.ts');

  if (!existsSync(source)) {
    console.error(`소스가 없습니다: ${source}`);
    process.exit(1);
  }

  copyFileSync(source, target);
  const body = readFileSync(target, 'utf8');
  const header = [
    '/**',
    ' * VENDORED — DO NOT EDIT BY HAND.',
    ` * source: wigtn/web-agency @ ${revision} — ${relative}`,
    ' * 코어 갱신 시 scripts/sync-modules.mjs 로 재복사한다.',
    ' */',
    '',
  ].join('\n');
  writeFileSync(target, header + body);
  console.log(`동기화: ${module} (@${revision})`);
}

console.log('\n완료. `npm run typecheck && npm test` 로 회귀를 확인하세요.');
