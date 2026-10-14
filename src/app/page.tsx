import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { HomeHeader } from "@/components/home-header";
import { LogoCarousel } from "@/components/logo-carousel";
import { PovLibrary } from "@/components/pov-library";
import { PageMotion } from "@/components/page-motion";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { offerings } from "@/lib/portfolio";
import { pillars } from "@/lib/thought-leadership";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <HomeHeader><SiteHeader anchorId={null} /></HomeHeader>
      <main id="main" className="editorial-home">
        <PageMotion />
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Curious by nature.<br /><em>A challenger<br />at heart.</em></h1>
            <div className="hero-description">
              <p>I’m Michelle Ching. I help organizations rethink what’s possible—combining challenger thinking, commercial discipline, and human leadership to turn bold ideas into meaningful transformation and growth.</p>
              <p>For me, that means the curiosity to question what’s accepted, the courage to imagine something better, and the conviction to bring people along.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#challenger">Explore my thinking <Arrow /></a>
              <a className="text-link" href="#connect">Let’s connect <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <Image src="/images/layered-possibilities-hero.png" alt="" fill sizes="100vw" preload />
          </div>
          <div className="hero-bottom wrap"><span>TORONTO, CANADA / ALWAYS CURIOUS</span><a href="#throughline">Discover the throughline <Arrow /></a></div>
        </section>

        <div className="experience-strip wrap">
          <p>20+ years of experience. <strong>Many perspectives. One throughline.</strong></p>
          <LogoCarousel />
        </div>

        <section id="throughline" className="intro-section wrap" aria-labelledby="intro-title" data-reveal>
          <p className="eyebrow section-label">THE THROUGHLINE</p>
          <h2 id="intro-title" className="intro-heading">Bold thinking.<br /><em>Grounded in experience.</em></h2>
          <div className="intro-grid">
            <div className="curiosity-panel" data-reveal>
              <div className="curiosity-copy">
                <p className="small-label">A DIFFERENT POINT OF VIEW</p>
                <h3>Curiosity<br />is a <em>strategy.</em></h3>
              </div>
              <svg className="curiosity-orbits" viewBox="0 0 620 360" fill="none" aria-hidden="true" focusable="false">
                <g className="curiosity-orbit-field">
                  <g transform="rotate(-24 310 180)">
                    {[0, 1, 2, 3, 4, 5, 6].map((ring) => <ellipse key={ring} cx="310" cy="180" rx={68 + ring * 34} ry={31 + ring * 16} />)}
                  </g>
                  <circle className="curiosity-satellite" cx="110" cy="164" r="7" />
                  <circle className="curiosity-satellite" cx="509" cy="197" r="5" />
                </g>
                <path className="curiosity-trajectory" pathLength="1" d="M73 321 507 57m-77 4 77-4-4 77" />
                <circle className="curiosity-focus" cx="310" cy="177" r="18" />
              </svg>
              <div className="curiosity-caption"><span>FRESH PERSPECTIVE.</span><span>REAL-WORLD IMPACT.</span></div>
            </div>
            <div className="intro-copy">
              <p className="large-copy">The most interesting possibilities often start with a question: <em>Is there another way?</em></p>
              <p>Across 20+ years in executive marketing and agency leadership, I&apos;ve learned what it takes to challenge industry giants - and what it takes to drive reinvention from within one.</p>
              <p>I&apos;ve built brands, unlock growth, transformed marketing capabilities and led teams through complexity. Along the way, I&apos;ve learned that bold thinking creates possibilities, but commercial discipline and human leadership turn them into meaningful results.</p>
              <p>This is where I share what I&apos;ve learned, explore what comes next and connect with people who believe there may be a better way.</p>
              <span className="small-label">TORONTO, CANADA · OPEN TO A GOOD CONVERSATION</span>
              <a className="text-link throughline-link" href="#expertise">See where we could make a difference <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise-section wrap" aria-labelledby="expertise-title">
          <div className="section-heading stacked-intro" data-reveal>
            <div><p className="eyebrow section-label">WHERE WE COULD MAKE A DIFFERENCE</p><h2 id="expertise-title">Your next challenge.<br /><em>Our starting point.</em></h2><p className="section-intro-copy">Big ambitions. Complex questions. New possibilities.<br />Let’s connect the dots—and find a way forward.</p></div>
          </div>
          <div className="collaboration-grid">
            {offerings.map((offering) => (
              <article className="collaboration-card" key={offering.number} data-reveal>
                <div className="collaboration-card-top"><p className="small-label">{offering.title}</p><span className="collaboration-number" aria-hidden="true">{offering.number}</span></div>
                <h3>{offering.intro}</h3>
                <p className="collaboration-description">{offering.description}</p>
                <ul className="collaboration-outcomes" aria-label="Ways we could work together">{offering.outcomes.split(" · ").map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                <a className="collaboration-link" aria-label={`Let’s explore ${offering.title.toLowerCase()}`} href={`mailto:mc.ching@gmail.com?subject=${encodeURIComponent(`Let's talk: ${offering.title}`)}`}>Let’s explore this <span><Arrow diagonal /></span></a>
              </article>
            ))}
          </div>
          <div className="collaboration-footer" data-reveal><p>You don’t need a finished brief. Just a question worth exploring.</p><a className="text-link" href="#connect">What’s on your mind? <Arrow /></a></div>
        </section>

        <section id="experience" className="work-section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading leadership-intro" data-reveal>
              <div><p className="eyebrow section-label">LEADERSHIP IN ACTION</p><h2 id="work-title">Different challenges. One challenger mindset.</h2><div className="leadership-copy"><p>From challenging industry giants to driving reinvention within established organizations, my career has taken me across both sides of the challenger equation.</p><p>Different environments. Different complexities. But one consistent belief: meaningful progress begins when we question the conventional, see possibilities others might miss, and bring people together to make them happen.</p><p>Here are four experiences that have shaped how I think, lead and create change.</p></div></div>
              <div className="leadership-intro-art" aria-hidden="true"><div className="leadership-art-bleed"><Image src="/images/leadership-perspectives.png" alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1280px) 50vw, calc((100vw - 1280px) / 2 + 600px)" /></div></div>
            </div>
            <div className="leadership-stories">
              <details className="leadership-story" name="leadership-stories" data-reveal>
                <summary className="leadership-summary">
                  <h3 id="leadership-story-01">
                  <span className="leadership-number" aria-hidden="true">01</span>
                  <span className="leadership-story-heading">
                    <span className="small-label">CHALLENGER STRATEGY</span>
                    <span className="leadership-story-title">Competing with giants. Without playing their game.</span>
                  </span>
                  <span className="leadership-toggle" aria-hidden="true"><span className="leadership-toggle-label">Explore story</span><span className="leadership-toggle-icon" /></span>
                  </h3>
                </summary>
                  <div className="leadership-story-copy">
                    <p><strong>When you can&apos;t outspend the competition, you have to find ways to outthink it.</strong></p>
                    <p>At HSBC Canada, I helped lead marketing for a challenger brand competing in a market dominated by much larger, established players.</p>
                    <p>The challenge wasn&apos;t simply to do more with less. It was to find a different way to win.</p>
                    <p>That meant questioning category conventions, getting closer to what customers truly valued, and building differentiated brand and growth strategies that made every investment work harder.</p>
                    <p>Rather than following the category playbook, we focused on creating meaningful reasons for customers to choose us—bringing together customer insight, bold creativity and commercial discipline.</p>
                    <p><strong>What it taught me:</strong> Constraints can be powerful catalysts for ingenuity. Challenger thinking isn&apos;t about being different for the sake of it. It&apos;s about finding an advantage others have overlooked.</p>
                    <p><em>Strategic differentiation · Customer-led growth · Commercial discipline · Creative courage</em></p>
                  </div>
              </details>
              <details className="leadership-story" name="leadership-stories" data-reveal>
                <summary className="leadership-summary">
                  <h3 id="leadership-story-02">
                  <span className="leadership-number" aria-hidden="true">02</span>
                  <span className="leadership-story-heading">
                    <span className="small-label">ENTERPRISE REINVENTION</span>
                    <span className="leadership-story-title">Challenging the playbook from within.</span>
                  </span>
                  <span className="leadership-toggle" aria-hidden="true"><span className="leadership-toggle-label">Explore story</span><span className="leadership-toggle-icon" /></span>
                  </h3>
                </summary>
                  <div className="leadership-story-copy">
                    <p><strong>Sometimes the hardest organization to challenge is your own.</strong></p>
                    <p>Leading growth and marketing initiatives within RBC gave me a different perspective on the challenger mindset.</p>
                    <p>In a large, established organization, the challenge isn&apos;t a lack of resources or ambition. It&apos;s navigating complexity, established ways of working and the competing priorities that come with scale.</p>
                    <p>I focused on bringing clarity to growth opportunities, challenging conventional approaches and connecting teams around shared commercial priorities.</p>
                    <p>It required more than a compelling strategy. It meant building alignment, making deliberate choices, encouraging experimentation and creating the conditions for teams to move from ambition to action.</p>
                    <p><strong>What it taught me:</strong> Challenger thinking isn&apos;t reserved for challenger brands. Established organizations need the curiosity to question what&apos;s working today—and the courage to evolve before they have to.</p>
                    <p><em>Enterprise transformation · Growth strategy · Cross-functional leadership · Strategic execution</em></p>
                  </div>
              </details>
              <details className="leadership-story" name="leadership-stories" data-reveal>
                <summary className="leadership-summary">
                  <h3 id="leadership-story-03">
                  <span className="leadership-number" aria-hidden="true">03</span>
                  <span className="leadership-story-heading">
                    <span className="small-label">CUSTOMER-LED TRANSFORMATION</span>
                    <span className="leadership-story-title">From transactions to meaningful relationships.</span>
                  </span>
                  <span className="leadership-toggle" aria-hidden="true"><span className="leadership-toggle-label">Explore story</span><span className="leadership-toggle-icon" /></span>
                  </h3>
                </summary>
                  <div className="leadership-story-copy">
                    <p><strong>What if we stopped designing around what businesses want to say—and started with what customers actually need?</strong></p>
                    <p>Throughout my career, I&apos;ve believed that sustainable growth begins with understanding people, not simply products or channels.</p>
                    <p>One expression of that belief was helping modernize customer onboarding and engagement within a large financial institution.</p>
                    <p>The opportunity was to move beyond standardized, campaign-led communications toward more connected, timely and relevant customer experiences.</p>
                    <p>That meant bringing together customer insight, data, technology and cross-functional teams to rethink how relationships are built and nurtured over time.</p>
                    <p>It reinforced my conviction that transformation isn&apos;t just about introducing new technology. It&apos;s about reimagining the experience technology makes possible.</p>
                    <p><strong>What it taught me:</strong> The best innovation often starts with a simple shift in perspective—from what an organization wants to deliver to what a person genuinely values.</p>
                    <p><em>Customer experience · Personalization · Digital transformation · Human-centred innovation</em></p>
                  </div>
              </details>
              <details className="leadership-story" name="leadership-stories" data-reveal>
                <summary className="leadership-summary">
                  <h3 id="leadership-story-04">
                  <span className="leadership-number" aria-hidden="true">04</span>
                  <span className="leadership-story-heading">
                    <span className="small-label">HUMAN LEADERSHIP</span>
                    <span className="leadership-story-title">Building teams that can move mountains.</span>
                  </span>
                  <span className="leadership-toggle" aria-hidden="true"><span className="leadership-toggle-label">Explore story</span><span className="leadership-toggle-icon" /></span>
                  </h3>
                </summary>
                  <div className="leadership-story-copy">
                    <p><strong>Ambitious strategies don&apos;t transform organizations. People do.</strong></p>
                    <p>I&apos;ve had the privilege of building and leading teams through growth, organizational change, leadership transitions and the uncertainty of a major acquisition.</p>
                    <p>These experiences taught me that high performance and human leadership aren&apos;t competing priorities. In fact, I believe one makes the other possible.</p>
                    <p>My approach has always been to bring clarity to complexity, create space for curiosity, empower people to challenge ideas and build the trust that allows teams to do their best work.</p>
                    <p>Sometimes that means challenging established structures. Sometimes it means removing barriers, creating shared ownership or simply helping people believe that something difficult is achievable.</p>
                    <p>And through it all, remembering that leadership isn&apos;t about having every answer. It&apos;s about creating the conditions for people to discover better ones together.</p>
                    <p><strong>What it taught me:</strong> The true measure of leadership isn&apos;t just what a team accomplishes while you&apos;re leading it. It&apos;s the confidence, capability and courage people carry forward.</p>
                    <p><em>Organizational leadership · Culture &amp; transformation · Talent development · Leading through change</em></p>
                  </div>
              </details>
            </div>
            <div className="section-bridge" data-reveal><a className="text-link" href="#challenger">Explore my thinking <Arrow /></a></div>
          </div>
        </section>

        <section id="challenger" className="challenger-section" aria-labelledby="challenger-title">
          <div className="wrap">
            <div className="challenger-topline" data-reveal><p className="eyebrow section-label">THOUGHT LEADERSHIP / AN EVOLVING EXPLORATION</p><span className="project-tag">THREE PILLARS. ROOM TO STRETCH.</span></div>
            <div className="challenger-intro" data-reveal><h2 id="challenger-title">Questions I’m exploring.<br /><em>Thinking that keeps growing.</em></h2><div className="challenger-context"><p className="large-copy">For the thinkers. The dreamers. The leaders.</p><p>Three connected threads for my points of view, ideas, and perspectives. Grounded in experience, open to new possibilities.</p><p>Some thoughts will become papers. Others will start as a question, an observation, or a conversation. This is a space to stretch my thinking—and invite you into it.</p><a href="#perspectives" className="text-link">Explore the writing space <Arrow /></a></div></div>
            <div className="thought-pillars">
              {pillars.map((pillar) => (
                <article className="thought-pillar" key={pillar.id} data-reveal>
                  <div className={`pillar-art pillar-art-${pillar.id}`} aria-hidden="true"><span>{pillar.number}</span><i /><i /><i /></div>
                  <div><p className="small-label">{pillar.number} / {pillar.lens}</p><h3>{pillar.title}</h3><p className="pillar-question">{pillar.question}</p><p className="pillar-description">{pillar.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="perspectives" className="perspectives-section wrap" aria-labelledby="perspectives-title">
          <div className="section-heading stacked-intro" data-reveal><div><p className="eyebrow section-label">POVS, IDEAS & PERSPECTIVES</p><h2 id="perspectives-title">The thinking <em>in progress.</em></h2><p className="section-intro-copy">From a first observation to a considered paper.<br />A growing collection across three pillars.</p></div></div>
          <PovLibrary />
        </section>

        <section id="connect" className="connect-section" aria-labelledby="connect-title">
          <div className="connect-inner wrap" data-reveal><div><p className="eyebrow section-label">LET’S EXCHANGE IDEAS</p><h2 id="connect-title">What are you<br /><em>thinking about?</em></h2><p>A growth challenge. An organization ready for reinvention. A leadership opportunity. Or simply an idea worth exploring.</p><p>I&apos;m open to conversations about strategic advisory, consulting, speaking and executive leadership.</p></div>
          <div className="connect-actions"><a className="button button-dark" href="mailto:mc.ching@gmail.com">Let&apos;s start a conversation <Arrow /></a><a className="connect-email" href="mailto:mc.ching@gmail.com">mc.ching@gmail.com</a></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
