import { Arrow } from "@/components/arrow";
import { PovLibrary } from "@/components/pov-library";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { experience, offerings } from "@/lib/portfolio";
import { pillars } from "@/lib/thought-leadership";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MARKETING & GROWTH LEADER</p>
            <h1 id="hero-title">Curious by nature.<br /><em>A challenger at heart.</em></h1>
            <div className="hero-description">
              <p>I’m Michelle Ching. I help organizations rethink what’s possible—combining challenger thinking, commercial discipline, and human leadership to turn bold ideas into meaningful transformation and growth.</p>
              <p>For me, that means the curiosity to question what’s accepted, the courage to imagine something better, and the conviction to bring people along.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#challenger">Explore my thinking <Arrow diagonal /></a>
              <a className="text-link" href="#connect">Let’s connect <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-index">A DIFFERENT POINT OF VIEW / 01</div>
            <svg className="orbit-art" viewBox="0 0 400 460" fill="none">
              <g transform="translate(200 225) rotate(-30)">
                {[48, 68, 88, 108, 128, 148, 168].map((radius) => <ellipse key={radius} rx={radius} ry={radius * 0.48} stroke="currentColor" strokeWidth="1" />)}
                <path d="M-160 80 160-80" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="0" r="18" fill="currentColor" />
              </g>
              <path d="M305 90h35v35m-36-1 36-34" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="art-sticker">Curiosity<br />is a strategy.</span>
            <div className="art-caption"><span>FRESH PERSPECTIVE.</span><span>REAL-WORLD IMPACT.</span></div>
          </div>
        </section>

        <div className="experience-strip wrap">
          <p>20+ years of experience.<br /><strong>Many perspectives. One throughline.</strong></p>
          <div aria-label="Leadership and agency experience"><span>RBC</span><span>HSBC</span><span>Publicis</span><span>JWT</span><span>FCB</span></div>
        </div>

        <section className="intro-section wrap" aria-labelledby="intro-title">
          <p className="eyebrow">THE THROUGHLINE</p>
          <div className="intro-grid">
            <h2 id="intro-title">Bold thinking.<br /><em>Grounded in experience.</em></h2>
            <div>
              <p className="large-copy">The most interesting possibilities often start with a question: <em>is there another way?</em></p>
              <p>Across banking and agency leadership, I’ve worked at the intersection of business ambition and human insight—transforming brands, growing customer relationships, and building teams through change.</p>
              <p>This is a space to share that experience, explore new perspectives, and connect with people who want to make a meaningful difference.</p>
              <span className="small-label">TORONTO, CANADA · OPEN TO A GOOD CONVERSATION</span>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise-section wrap" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div><p className="eyebrow">EXPERTISE & OFFERINGS</p><h2 id="expertise-title">Where we could<br /><em>make a difference.</em></h2></div>
            <p>Ways to collaborate, informed by experience.<br />Let’s start with the question you’re working through.</p>
          </div>
          <div className="offering-list">
            {offerings.map((offering) => (
              <details className="offering" key={offering.number}>
                <summary><span className="offering-number">{offering.number}</span><h3>{offering.title}</h3><span className="offering-intro">{offering.intro}</span><span className="expand-icon" aria-hidden="true">+</span></summary>
                <div className="offering-body"><p>{offering.description}</p><span className="small-label">{offering.outcomes}</span><a className="text-link" href={`mailto:mc.ching@gmail.com?subject=${encodeURIComponent(`Let's talk: ${offering.title}`)}`}>Start a conversation <Arrow diagonal /></a></div>
              </details>
            ))}
          </div>
        </section>

        <section id="experience" className="work-section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading"><div><p className="eyebrow">SELECTED EXPERIENCE</p><h2 id="work-title">Ideas into <em>impact.</em></h2></div><p>A few chapters from leadership and agency work.<br />The thinking, the work, and what changed.</p></div>
            <div className="work-grid">
              {experience.map((work) => (
                <article className={`work-card ${work.className}`} key={work.company}>
                  <div className="work-card-top"><span className="small-label">{work.category}</span><Arrow diagonal /></div>
                  <p className="work-metric">{work.metric}</p><p className="metric-label">{work.metricLabel}</p>
                  <div className="work-card-story"><span className="small-label">{work.company}</span><h3>{work.title}</h3><p>{work.context}</p>
                    <details className="case-detail"><summary>Behind the outcome <span aria-hidden="true">+</span></summary><div><h4>The challenge</h4><p>{work.challenge}</p><h4>The approach</h4><p>{work.approach}</p><h4>The impact</h4><p>{work.outcome}</p></div></details>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">Selected outcomes from my résumé. Each reflects work delivered with teams and collaborators.</p>
          </div>
        </section>

        <section id="challenger" className="challenger-section" aria-labelledby="challenger-title">
          <div className="wrap">
            <div className="challenger-topline"><p className="eyebrow">THOUGHT LEADERSHIP / AN EVOLVING EXPLORATION</p><span className="project-tag">THREE PILLARS. ROOM TO STRETCH.</span></div>
            <div className="challenger-intro"><h2 id="challenger-title">Questions I’m exploring.<br /><em>Thinking that keeps growing.</em></h2><div><p className="large-copy">For the thinkers.<br />The dreamers. The leaders.</p><p>Three connected threads for my points of view, ideas, and perspectives. Grounded in experience, open to new possibilities.</p><p>Some thoughts will become papers. Others will start as a question, an observation, or a conversation. This is a space to stretch my thinking—and invite you into it.</p><a href="#perspectives" className="text-link">Explore the writing space <Arrow /></a></div></div>
            <div className="thought-pillars">
              {pillars.map((pillar) => (
                <article className="thought-pillar" key={pillar.id}>
                  <div className={`pillar-art pillar-art-${pillar.id}`} aria-hidden="true"><span>{pillar.number}</span><i /><i /><i /></div>
                  <div><p className="small-label">{pillar.number} / {pillar.lens}</p><h3>{pillar.title}</h3><p className="pillar-question">{pillar.question}</p><p className="pillar-description">{pillar.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="perspectives" className="perspectives-section wrap" aria-labelledby="perspectives-title">
          <div className="section-heading"><div><p className="eyebrow">POVS, IDEAS & PERSPECTIVES</p><h2 id="perspectives-title">The thinking <em>in progress.</em></h2></div><p>From a first observation to a considered paper.<br />A growing collection across three pillars.</p></div>
          <PovLibrary />
        </section>

        <section id="connect" className="connect-section wrap" aria-labelledby="connect-title">
          <div><p className="eyebrow">LET’S EXCHANGE IDEAS</p><h2 id="connect-title">What are you<br /><em>thinking about?</em></h2><p>A business challenge, a leadership opportunity, or an idea worth exploring.<br />I’d love to hear what’s on your mind.</p></div>
          <a className="button button-dark" href="mailto:mc.ching@gmail.com">Let’s start a conversation <Arrow diagonal /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
