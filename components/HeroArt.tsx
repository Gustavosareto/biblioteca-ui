const ring = { cx: 292, cy: 158, rx: 282, ry: 50, rot: -18 };

function Sparkle({ x, y, r, delay }: { x: number; y: number; r: number; delay: string }) {
  return (
    <path
      d={`M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`}
      fill="#fff"
      style={{ transformBox: "fill-box", transformOrigin: "center", animation: `um-twinkle 3.2s ease-in-out ${delay} infinite` }}
    />
  );
}

function RingStroke() {
  return (
    <>
      <ellipse cx={ring.cx} cy={ring.cy} rx={ring.rx} ry={ring.ry} stroke="#8b3dff" strokeWidth="10" filter="url(#ha-glow)" opacity=".9" />
      <ellipse cx={ring.cx} cy={ring.cy} rx={ring.rx} ry={ring.ry} stroke="#9d5cff" strokeWidth="5" />
      <ellipse cx={ring.cx} cy={ring.cy} rx={ring.rx} ry={ring.ry} stroke="#e9ddff" strokeWidth="1.6" />
    </>
  );
}

export function HeroArt({ className = "" }: { className?: string }) {
  const blob =
    "M300 12 C365 2 430 42 456 112 C482 182 476 262 410 302 C350 336 250 326 190 300 C130 274 118 220 150 165 C186 100 238 22 300 12Z";

  return (
    <svg viewBox="0 0 600 340" fill="none" className={className} aria-hidden="true">
      <defs>
        <filter id="ha-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="ha-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="ha-body" cx="35%" cy="25%" r="85%">
          <stop offset="0" stopColor="#3a3a40" stopOpacity=".9" />
          <stop offset=".45" stopColor="#111114" stopOpacity=".95" />
          <stop offset="1" stopColor="#050506" />
        </radialGradient>
        <linearGradient id="ha-rim" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".45" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".8" stopColor="#fff" stopOpacity=".08" />
          <stop offset="1" stopColor="#fff" stopOpacity=".5" />
        </linearGradient>
        <radialGradient id="ha-hole" cx="50%" cy="45%" r="60%">
          <stop offset="0" stopColor="#020203" />
          <stop offset=".8" stopColor="#0b0b0d" />
          <stop offset="1" stopColor="#2a2a30" />
        </radialGradient>
        <clipPath id="ha-front" clipPathUnits="userSpaceOnUse">
          <rect x="-50" y={ring.cy} width="700" height="200" />
        </clipPath>
      </defs>

      <g style={{ animation: "um-orbit 7s ease-in-out infinite", transformOrigin: "300px 170px" }}>
        {/* metade de trás do anel */}
        <g transform={`rotate(${ring.rot} ${ring.cx} ${ring.cy})`}>
          <RingStroke />
        </g>

        {/* corpo de vidro */}
        <path d={blob} fill="url(#ha-body)" />
        <path d={blob} stroke="url(#ha-rim)" strokeWidth="2.2" />
        <path d={blob} stroke="#fff" strokeOpacity=".5" strokeWidth="6" filter="url(#ha-soft)" transform="translate(6 6) scale(.97)" opacity=".35" />
        <path d="M205 120 C230 60 275 30 320 26" stroke="#fff" strokeWidth="5" strokeLinecap="round" filter="url(#ha-soft)" opacity=".55" />

        {/* buraco interno */}
        <ellipse cx="322" cy="175" rx="80" ry="86" transform="rotate(-12 322 175)" fill="url(#ha-hole)" />
        <ellipse cx="322" cy="175" rx="80" ry="86" transform="rotate(-12 322 175)" stroke="url(#ha-rim)" strokeWidth="1.6" />
        <path d="M262 150 C268 118 292 98 322 92" stroke="#fff" strokeOpacity=".7" strokeWidth="1.5" strokeLinecap="round" />

        {/* metade da frente do anel */}
        <g transform={`rotate(${ring.rot} ${ring.cx} ${ring.cy})`} clipPath="url(#ha-front)">
          <RingStroke />
        </g>
      </g>

      <Sparkle x={72} y={118} r={11} delay="0s" />
      <Sparkle x={566} y={165} r={6} delay="1.4s" />
    </svg>
  );
}
