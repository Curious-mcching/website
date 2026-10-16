export function PerspectiveArtwork() {
  return (
    <div className="perspective-artwork" aria-hidden="true">
      <svg viewBox="0 0 620 400" fill="none" focusable="false">
        <defs>
          <linearGradient id="experience-plane-fill" x1="130" y1="110" x2="440" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--eucalyptus)" stopOpacity=".3" />
            <stop offset=".55" stopColor="var(--mist)" stopOpacity=".5" />
            <stop offset="1" stopColor="var(--iris)" stopOpacity=".22" />
          </linearGradient>
        </defs>
        <rect x="160" y="66" width="260" height="260" rx="48" transform="rotate(-22 290 196)" fill="var(--iris)" fillOpacity=".09" stroke="var(--iris)" strokeOpacity=".32" />
        <rect x="218" y="76" width="250" height="260" rx="48" transform="rotate(18 343 206)" fill="var(--eucalyptus)" fillOpacity=".14" stroke="var(--eucalyptus-dark)" strokeOpacity=".3" />
        <rect x="112" y="112" width="340" height="208" rx="40" transform="rotate(-6 282 216)" fill="url(#experience-plane-fill)" stroke="var(--eucalyptus-dark)" strokeOpacity=".35" />
        <rect x="204" y="116" width="232" height="210" rx="36" transform="rotate(12 320 221)" fill="var(--surface)" fillOpacity=".3" stroke="var(--iris)" strokeOpacity=".3" />
        <path d="M144 99 480 305M122 275 455 103" stroke="var(--iris)" strokeOpacity=".18" strokeDasharray="3 7" />
        <path d="M24 302C112 302 122 133 210 183S336 289 414 214 500 113 596 126" stroke="var(--eucalyptus-dark)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="83" cy="271" r="5" fill="var(--eucalyptus-dark)" />
        <circle cx="210" cy="183" r="6" fill="var(--iris)" stroke="var(--paper)" strokeWidth="3" />
        <circle cx="414" cy="214" r="6" fill="var(--eucalyptus-dark)" stroke="var(--paper)" strokeWidth="3" />
        <circle cx="544" cy="132" r="5" fill="var(--iris)" />
      </svg>
      <span className="perspective-name">Michelle Ching</span>
    </div>
  );
}

export function ExperienceLensArt({ kind }: { kind: "industries" | "disciplines" | "global" }) {
  return (
    <svg className="experience-lens-art" viewBox="0 0 320 140" fill="none" aria-hidden="true" focusable="false">
      {kind === "industries" && (
        <>
          <rect x="67" y="58" width="48" height="47" rx="10" fill="var(--iris)" fillOpacity=".12" stroke="var(--iris)" strokeOpacity=".65" />
          <rect x="137" y="24" width="48" height="81" rx="10" fill="var(--eucalyptus)" fillOpacity=".2" stroke="var(--eucalyptus-dark)" strokeOpacity=".65" />
          <rect x="207" y="42" width="48" height="63" rx="10" fill="var(--iris)" fillOpacity=".06" stroke="var(--iris)" strokeOpacity=".65" />
          <path d="M40 112C92 112 98 77 142 77S208 121 280 89" stroke="var(--eucalyptus-dark)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="161" cy="80" r="5" fill="var(--eucalyptus-dark)" />
        </>
      )}
      {kind === "disciplines" && (
        <>
          <rect x="61" y="28" width="120" height="62" rx="22" transform="rotate(-12 121 59)" fill="var(--iris)" fillOpacity=".1" stroke="var(--iris)" strokeOpacity=".65" />
          <rect x="111" y="40" width="120" height="62" rx="22" fill="var(--eucalyptus)" fillOpacity=".18" stroke="var(--eucalyptus-dark)" strokeOpacity=".65" />
          <rect x="161" y="53" width="99" height="62" rx="22" transform="rotate(12 210 84)" stroke="var(--iris)" strokeOpacity=".6" />
          <path d="M36 105C100 105 114 65 160 70S230 96 284 51" stroke="var(--eucalyptus-dark)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="70" r="5" fill="var(--eucalyptus-dark)" />
        </>
      )}
      {kind === "global" && (
        <>
          <circle cx="160" cy="70" r="51" fill="var(--eucalyptus)" fillOpacity=".1" stroke="var(--eucalyptus-dark)" strokeOpacity=".65" />
          <ellipse cx="160" cy="70" rx="25" ry="51" stroke="var(--iris)" strokeOpacity=".5" />
          <ellipse cx="160" cy="70" rx="51" ry="21" stroke="var(--iris)" strokeOpacity=".5" />
          <path d="M109 70H211M160 19V121" stroke="var(--iris)" strokeOpacity=".3" />
          <path d="M47 108C97 108 105 37 151 43S210 104 274 39" stroke="var(--eucalyptus-dark)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="121" cy="55" r="5" fill="var(--eucalyptus-dark)" stroke="var(--paper)" strokeWidth="2" />
          <circle cx="179" cy="58" r="4" fill="var(--iris)" stroke="var(--paper)" strokeWidth="2" />
          <circle cx="204" cy="74" r="4" fill="var(--iris)" stroke="var(--paper)" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}
