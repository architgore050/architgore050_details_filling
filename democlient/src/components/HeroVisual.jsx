function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract software architecture visualization"
      >
        <defs>
          <pattern id="dotGrid" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="#1D2A42" />
          </pattern>
          <linearGradient id="nodeCyan" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#B8F3FF" />
            <stop offset="1" stopColor="#21C7A8" />
          </linearGradient>
          <linearGradient id="nodeMint" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#21C7A8" />
            <stop offset="1" stopColor="#B8F3FF" />
          </linearGradient>
        </defs>

        <rect width="520" height="520" fill="url(#dotGrid)" />

        {/* Connection lines */}
        <g stroke="#1D2A42" strokeWidth="1">
          <line x1="140" y1="120" x2="330" y2="180" />
          <line x1="330" y1="180" x2="400" y2="320" />
          <line x1="400" y1="320" x2="250" y2="400" />
          <line x1="250" y1="400" x2="120" y2="330" />
          <line x1="120" y1="330" x2="140" y2="120" />
          <line x1="140" y1="120" x2="90" y2="240" />
          <line x1="90" y1="240" x2="250" y2="400" />
          <line x1="330" y1="180" x2="180" y2="120" />
          <line x1="180" y1="120" x2="90" y2="240" />
          <line x1="400" y1="320" x2="460" y2="120" />
          <line x1="460" y1="120" x2="330" y2="180" />
        </g>

        {/* Animated data flow path */}
        <path
          d="M90 240 C 160 180, 240 300, 330 180 S 460 120, 400 320"
          fill="none"
          stroke="#21C7A8"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          opacity="0.7"
          className="hero-visual-flow"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="14"
            to="0"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Nodes */}
        <g>
          <circle cx="140" cy="120" r="7" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="140" cy="120" r="12" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="140" cy="120" r="4" fill="#21C7A8" />
        </g>

        <g>
          <circle cx="330" cy="180" r="8" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="330" cy="180" r="14" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="330" cy="180" r="4.5" fill="url(#nodeCyan)" />
        </g>

        <g>
          <circle cx="400" cy="320" r="7" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="400" cy="320" r="12" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="400" cy="320" r="4" fill="#21C7A8" />
        </g>

        <g>
          <circle cx="250" cy="400" r="8" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="250" cy="400" r="14" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="250" cy="400" r="4.5" fill="url(#nodeMint)" />
        </g>

        <g>
          <circle cx="120" cy="330" r="6" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="120" cy="330" r="10" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="120" cy="330" r="3.5" fill="#B8F3FF" />
        </g>

        <g>
          <circle cx="90" cy="240" r="6" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="90" cy="240" r="10" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="90" cy="240" r="3.5" fill="#21C7A8" />
        </g>

        <g>
          <circle cx="460" cy="120" r="6" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="460" cy="120" r="10" fill="none" stroke="#1D2A42" strokeWidth="1" opacity="0.6" />
          <circle cx="460" cy="120" r="3.5" fill="#B8F3FF" />
        </g>

        <g>
          <circle cx="180" cy="120" r="5" fill="#16223A" stroke="#1D2A42" strokeWidth="1" />
          <circle cx="180" cy="120" r="3" fill="#71809A" />
        </g>

        {/* Code-like annotation lines */}
        <g stroke="#1D2A42" strokeWidth="1">
          <line x1="470" y1="200" x2="470" y2="216" />
          <line x1="470" y1="228" x2="470" y2="244" />
        </g>
        <circle cx="470" cy="222" r="2.5" fill="#21C7A8" />

        <g stroke="#1D2A42" strokeWidth="1">
          <line x1="70" y1="380" x2="70" y2="396" />
          <line x1="70" y1="408" x2="70" y2="424" />
        </g>
        <circle cx="70" cy="402" r="2.5" fill="#B8F3FF" />
      </svg>
    </div>
  );
}

export default HeroVisual;