export function PerspectiveArtwork() {
  return (
    <figure className="perspective-artwork" aria-label="Three overlapping lenses: industry breadth across B2C and B2B, marketing depth across the full funnel and emerging media, and global and local experience. Together they create a broader point of view.">
      <svg className="perspective-venn-field" viewBox="0 0 600 520" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="industry-lens" x1="80" y1="70" x2="370" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#80afa5" stopOpacity=".16" /><stop offset="1" stopColor="#80afa5" stopOpacity=".65" />
          </linearGradient>
          <linearGradient id="marketing-lens" x1="520" y1="70" x2="240" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6659ac" stopOpacity=".1" /><stop offset="1" stopColor="#6659ac" stopOpacity=".42" />
          </linearGradient>
          <linearGradient id="global-lens" x1="300" y1="475" x2="300" y2="175" gradientUnits="userSpaceOnUse">
            <stop stopColor="#80afa5" stopOpacity=".08" /><stop offset="1" stopColor="#246b65" stopOpacity=".35" />
          </linearGradient>
        </defs>
        <circle cx="220" cy="185" r="170" fill="url(#industry-lens)" stroke="#246b65" strokeOpacity=".45" />
        <circle cx="380" cy="185" r="170" fill="url(#marketing-lens)" stroke="#6659ac" strokeOpacity=".45" />
        <circle cx="300" cy="325" r="170" fill="url(#global-lens)" stroke="#246b65" strokeOpacity=".4" />
        <g className="venn-mobile-index" textAnchor="middle"><text x="160" y="145">01</text><text x="440" y="145">02</text><text x="300" y="395">03</text></g>
      </svg>
      <div className="venn-callout venn-industry"><span className="venn-index">01 / INDUSTRY</span><strong>Industry Breadth</strong><span>B2C + B2B</span></div>
      <div className="venn-callout venn-marketing"><span className="venn-index">02 / MARKETING</span><strong>Marketing Depth</strong><span>Full Funnel +<br /> Emerging Media</span></div>
      <div className="venn-callout venn-global"><span className="venn-index">03 / PERSPECTIVE</span><strong>Global + Local</strong><span>Across Markets</span></div>
      <figcaption className="venn-intersection">A Broader<br /><em>Point of View.</em></figcaption>
    </figure>
  );
}

export function ExperienceLensArt({ kind }: { kind: "industries" | "disciplines" | "global" }) {
  return (
    <svg className="experience-lens-art" viewBox="0 0 320 140" fill="none" aria-hidden="true" focusable="false">
      {kind === "industries" && (
        <>
          <ellipse className="experience-shadow-shape" cx="73" cy="72" rx="55" ry="21" transform="rotate(10 73 72)" fill="var(--eucalyptus)" fillOpacity=".7" />
          <path className="experience-shadow-shape" d="M146 30Q158 24 170 29L200 48Q211 55 206 67L186 102Q180 113 167 107L137 90Q126 84 131 71L139 42Q141 34 146 30Z" fill="var(--iris)" fillOpacity=".38" />
          <path className="experience-shadow-shape" d="M237 48Q244 37 253 48L294 99Q304 115 284 117L229 119Q212 119 219 102Z" fill="var(--eucalyptus-dark)" fillOpacity=".5" />
          <path className="experience-lens-thread" d="M10 88C59 92 78 54 115 63S170 100 211 78 258 58 310 83" />
        </>
      )}
      {kind === "disciplines" && (
        <>
          <ellipse className="experience-shadow-shape" cx="128" cy="73" rx="88" ry="27" transform="rotate(-12 128 73)" fill="var(--eucalyptus)" fillOpacity=".55" />
          <path className="experience-shadow-shape" d="M156 25Q166 19 179 24L245 53Q259 59 251 73L225 111Q218 123 205 117L141 87Q129 81 136 67Z" fill="var(--iris)" fillOpacity=".35" />
          <path className="experience-shadow-shape" d="M170 43Q179 33 188 46L226 106Q236 123 216 123L131 118Q112 116 126 100Z" fill="var(--eucalyptus-dark)" fillOpacity=".4" />
          <path className="experience-lens-thread" d="M20 89C85 92 108 49 150 64S219 107 300 53" />
        </>
      )}
      {kind === "global" && (
        <>
          <circle cx="160" cy="70" r="51" fill="var(--eucalyptus)" fillOpacity=".1" stroke="var(--eucalyptus-dark)" strokeOpacity=".65" />
          <ellipse cx="160" cy="70" rx="25" ry="51" stroke="var(--iris)" strokeOpacity=".5" />
          <ellipse cx="160" cy="70" rx="51" ry="21" stroke="var(--iris)" strokeOpacity=".5" />
          <path d="M109 70H211M160 19V121" stroke="var(--iris)" strokeOpacity=".3" />
          <path className="experience-lens-thread" d="M47 108C97 108 105 37 151 43S210 104 274 39" />
          <circle cx="121" cy="55" r="5" fill="var(--eucalyptus-dark)" stroke="var(--paper)" strokeWidth="2" />
          <circle cx="179" cy="58" r="4" fill="var(--iris)" stroke="var(--paper)" strokeWidth="2" />
          <circle cx="204" cy="74" r="4" fill="var(--iris)" stroke="var(--paper)" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}
