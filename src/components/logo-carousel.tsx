import Image from "next/image";

const logos = [
  { name: "RBC", file: "rbc.svg", width: 35, height: 46, size: "44px", className: "logo-rbc" },
  { name: "HSBC", file: "hsbc.svg", width: 316, height: 85, size: "120px", className: "logo-hsbc" },
  { name: "Publicis", file: "publicis.webp", width: 500, height: 515, size: "56px", className: "logo-publicis" },
  { name: "J. Walter Thompson (JWT)", file: "jwt.svg", width: 1257, height: 520, size: "84px", className: "logo-jwt" },
  { name: "FCB", file: "fcb.png", width: 459, height: 224, size: "104px", className: "logo-fcb" },
];

export function LogoCarousel() {
  return (
    <div className="logo-carousel" role="group" aria-label="Leadership and agency experience">
      <div className="logo-window">
        <div className="logo-track">
          {[0, 1].map((copy) => (
            <div className="logo-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {logos.map((logo) => (
                <Image className={`company-logo ${logo.className}`} key={logo.file} src={`/logos/${logo.file}`} alt={copy === 0 ? logo.name : ""} width={logo.width} height={logo.height} sizes={logo.size} loading="eager" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
