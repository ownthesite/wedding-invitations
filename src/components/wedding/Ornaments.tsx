/** Hand-drawn style decorative SVGs shared across sections. */

import { cn } from "@/lib/utils";

/** Thin gold rule with a central diamond + leaves. */
export function Divider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3 text-gold", className)}
    >
      <span className="h-px w-16 bg-linear-to-r from-transparent to-gold sm:w-28" />
      <svg viewBox="0 0 64 24" className="h-5 w-16 fill-none stroke-current" strokeWidth="1">
        <path d="M32 4 L38 12 L32 20 L26 12 Z" />
        <path d="M32 8.5 L34.5 12 L32 15.5 L29.5 12 Z" className="fill-current opacity-70" />
        <path d="M24 12c-4-4-8-4-12 0 4 4 8 4 12 0Z" />
        <path d="M40 12c4-4 8-4 12 0-4 4-8 4-12 0Z" />
      </svg>
      <span className="h-px w-16 bg-linear-to-l from-transparent to-gold sm:w-28" />
    </div>
  );
}

/** Floral corner flourish; rotate with the `className` prop. */
export function FloralCorner({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={cn("h-20 w-20 fill-none stroke-gold", className)}
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M6 6h34M6 6v34" opacity="0.8" />
      <path d="M12 12h22M12 12v22" opacity="0.5" />
      <path d="M14 40c14 2 26 12 30 28" />
      <path d="M40 14c2 14 12 26 28 30" />
      <path d="M44 68c-8-2-13-8-13-16 8-1 14 4 16 12" className="fill-gold/15" />
      <path d="M68 44c-2-8-8-13-16-13-1 8 4 14 12 16" className="fill-gold/15" />
      <circle cx="52" cy="52" r="4" className="fill-gold/40" />
      <path d="M60 60c10 4 18 12 22 24" opacity="0.7" />
      <path d="M82 84c-6-1-10-6-10-13 7 0 12 5 13 12" className="fill-gold/10" />
    </svg>
  );
}

/** Interlocking initials monogram. */
export function Monogram({
  left,
  right,
  className,
}: {
  left: string;
  right: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid size-24 place-items-center rounded-full border border-gold/50",
        className,
      )}
    >
      <span className="absolute inset-1.5 rounded-full border border-gold/25" />
      <span className="font-serif-caps text-2xl tracking-[0.08em] text-gold-gradient">
        {left}
        <span className="mx-0.5 text-[0.7em] align-middle text-wine">&amp;</span>
        {right}
      </span>
    </div>
  );
}

/** Small caps section eyebrow. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-serif-caps text-[0.65rem] tracking-luxe text-gold uppercase sm:text-xs">
      {children}
    </p>
  );
}

/** Section heading in the display serif. */
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-tight font-light text-maroon sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}