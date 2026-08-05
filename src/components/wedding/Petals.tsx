/** Minimal drifting petal particles — purely decorative. */

const PETALS = [
  { left: "6%", delay: 0, duration: 26, size: 10 },
  { left: "22%", delay: 6, duration: 32, size: 7 },
  { left: "41%", delay: 12, duration: 29, size: 12 },
  { left: "58%", delay: 3, duration: 35, size: 8 },
  { left: "74%", delay: 16, duration: 27, size: 11 },
  { left: "89%", delay: 9, duration: 33, size: 9 },
];

export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p) => (
        <span
          key={p.left}
          className="animate-petal absolute top-0 block rounded-[100%_0_100%_0] bg-linear-to-br from-gold-soft to-champagne opacity-50"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}