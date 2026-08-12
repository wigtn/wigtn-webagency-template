'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import type { ActionState } from '@/lib/lab/actions';

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md px-3 py-2 text-sm font-medium text-[var(--lab-bg)] transition disabled:opacity-50"
      style={{ background: 'var(--lab-accent)' }}
    >
      {pending ? '실행 중…' : label}
    </button>
  );
}

/**
 * 서버 액션 결과(성공 notice / 실패 error)를 폼 바로 아래에 띄우는 래퍼.
 * 랩의 핵심은 "모듈이 왜 거절했는지"를 읽는 것이라, 에러 문구를 그대로 보여준다.
 */
export function LabForm({
  action,
  slug,
  path,
  submitLabel,
  children,
}: {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  slug: string;
  path: string;
  submitLabel: string;
  children?: React.ReactNode;
}) {
  const [state, formAction] = useActionState<ActionState, FormData>(
    action,
    null,
  );

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="path" value={path} />
      {children}
      <SubmitButton label={submitLabel} />
      {state?.error ? (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {state.error}
        </p>
      ) : null}
      {state?.notice ? (
        <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
          {state.notice}
        </p>
      ) : null}
    </form>
  );
}

export function LabField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--lab-muted)]">
        {label}
      </span>
      {children}
      {hint ? <span className="block text-xs text-[var(--lab-muted)]">{hint}</span> : null}
    </label>
  );
}

export const labInputClass =
  'w-full rounded-md border border-[var(--lab-border)] bg-transparent px-3 py-2 text-sm text-[var(--lab-text)] outline-none focus:border-[var(--lab-accent)]';
