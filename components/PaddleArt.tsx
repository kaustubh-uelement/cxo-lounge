// Original illustration: two crossed paddles and a ball, used on league pages.
export function PaddleArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} role="img" aria-label="Two crossed pickleball paddles and a ball">
      <defs>
        <linearGradient id="pf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6F8FB" />
          <stop offset="1" stopColor="#DCE9F7" />
        </linearGradient>
      </defs>
      <circle cx="180" cy="180" r="170" fill="none" stroke="#7FB0DE" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="4 8" />
      <g transform="rotate(-24 180 180)">
        <rect x="112" y="40" width="112" height="140" rx="52" fill="url(#pf)" stroke="#1E6BB0" strokeWidth="5" />
        <rect x="155" y="176" width="26" height="110" rx="10" fill="#DCE9F7" stroke="#1E6BB0" strokeWidth="4" />
        <path d="M155 200h26M155 216h26M155 232h26M155 248h26M155 264h26" stroke="#7FB0DE" strokeWidth="3" />
        <circle cx="168" cy="108" r="22" fill="none" stroke="#1E6BB0" strokeWidth="4" />
        <circle cx="168" cy="86" r="5" fill="#1E6BB0" />
      </g>
      <g transform="rotate(24 180 180)">
        <rect x="136" y="40" width="112" height="140" rx="52" fill="url(#pf)" stroke="#1E6BB0" strokeWidth="5" />
        <rect x="179" y="176" width="26" height="110" rx="10" fill="#DCE9F7" stroke="#1E6BB0" strokeWidth="4" />
        <path d="M179 200h26M179 216h26M179 232h26M179 248h26M179 264h26" stroke="#7FB0DE" strokeWidth="3" />
        <circle cx="192" cy="108" r="22" fill="none" stroke="#1E6BB0" strokeWidth="4" />
        <circle cx="192" cy="86" r="5" fill="#1E6BB0" />
      </g>
      <g>
        <circle cx="286" cy="286" r="34" fill="#D4E157" />
        {[
          [274, 272], [292, 268], [302, 284], [284, 288], [270, 292], [290, 304], [304, 298],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#9E9D24" fillOpacity=".55" />
        ))}
      </g>
    </svg>
  );
}
