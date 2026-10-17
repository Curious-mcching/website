import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { ContactLink } from "@/components/contact-link";
import { ChallengerFilms } from "@/components/challenger-films";
import { challengerFilms, enterpriseFilms } from "@/lib/challenger-films";
import { HomeHeader } from "@/components/home-header";
import { LogoCarousel } from "@/components/logo-carousel";
import { ExperienceLensArt, PerspectiveArtwork } from "@/components/experience-perspectives";
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
              <p>I’m Michelle Ching. I help organizations build stronger brands, modernize marketing and lead teams through change—connecting customer insight, creative ambition and <span className="hero-phrase">commercial discipline</span> to create meaningful growth.</p>
              <p>For me, that means the curiosity to question what’s accepted, <span className="hero-phrase">the courage</span> to imagine something better, and the conviction <span className="hero-phrase">to bring people along.</span></p>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#challenger">Explore my thinking <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <Image src="/images/layered-possibilities-hero.png" alt="" fill sizes="100vw" preload />
          </div>
          <div className="hero-bottom wrap"><span>Michelle Ching <span className="hero-signoff-dot" aria-hidden="true">·</span> Always curious</span><a href="#throughline">Discover the throughline <Arrow /></a></div>
        </section>

        <section id="throughline" className="intro-section wrap" aria-labelledby="intro-title" data-reveal>
          <p className="eyebrow section-label">THE THROUGHLINE</p>
          <h2 id="intro-title" className="intro-heading">Bold thinking.<br /><em>Grounded in experience.</em></h2>
          <div className="intro-grid">
            <figure className="curiosity-panel" data-reveal>
              <Image className="intro-portrait" src="/images/michelle-ching-2025.jpg" alt="Michelle Ching" width={584} height={438} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1400px) 48vw, 620px" />
              <figcaption className="curiosity-copy">
                <h3>Curiosity is a <em>strategy.</em></h3>
              </figcaption>
            </figure>
            <div className="intro-copy">
              <p className="large-copy">The most interesting possibilities often start with a question: <em>Is there another way?</em></p>
              <p>Across 20+ years in executive marketing and agency leadership, I&apos;ve learned what it takes to challenge industry giants - and what it takes to drive reinvention from within one.</p>
              <p>I&apos;ve built brands, unlocked growth, transformed marketing capabilities and led teams through complexity. Along the way, I&apos;ve learned that bold thinking creates possibilities, but commercial discipline and human leadership turn them into meaningful results.</p>
              <p>This is where I share what I&apos;ve learned, explore what comes next and connect with people who believe there may be a better way.</p>
              <a className="text-link throughline-link" href="#expertise">See where we could make a difference <Arrow /></a>
            </div>
          </div>
          <section id="agency-experience" className="experience-overview" aria-labelledby="agency-experience-title">
            <div className="experience-overview-intro">
            <div className="experience-overview-copy">
              <div className="experience-tenure-line"><p className="experience-tenure">20+ years of experience.</p><span className="experience-impact">Real-world impact</span></div>
              <h3 id="agency-experience-title">Many perspectives.<br /><em>One throughline.</em></h3>
              <p>I bring the creative ambition of agency leadership and the experience of turning strategy into action within complex organizations. Across industries, disciplines and markets, <span className="experience-phrase">that combination</span> helps me see a challenge from different <span className="experience-phrase">angles, connect</span> customer needs with commercial priorities <span className="experience-phrase">and bring</span> teams together around a way forward.</p>
            </div>
              <PerspectiveArtwork />
            </div>
            <section className="experience-organizations" aria-labelledby="experience-organizations-title">
            <div className="experience-evidence">
              <h4 id="experience-organizations-title" className="experience-lens-title experience-organizations-heading">Agency + Brand Leadership</h4>
              <div className="experience-employers">
                <h5 className="experience-group-label">Where I&apos;ve built and led</h5>
                <LogoCarousel />
              </div>
              <div className="agency-brands">
                <h5 id="agency-brands-label" className="experience-group-label">Selected brands I&apos;ve worked on through agency roles</h5>
                <ul className="agency-brand-grid" aria-labelledby="agency-brands-label">
                  {["IBM", "BMW", "Kraft Foods", "Rogers", "Canada Post", "Purolator", "OLG", "SickKids Foundation"].map((brand) => <li key={brand}>{brand}</li>)}
                </ul>
              </div>
            </div>
            </section>
            <div className="experience-lenses">
              <section aria-labelledby="experience-industries-title">
                <ExperienceLensArt kind="industries" />
                <h4 id="experience-industries-title" className="experience-lens-title">Across Industries</h4>
                <p className="experience-perspective-copy">Working across industries has taught me to challenge category habits and start with what customers value. I draw on different business models, competitive pressures and customer needs to find a clear position, identify growth opportunities and bring a fresh perspective to familiar challenges.</p>
                <ul className="experience-ribbon" aria-label="Industries I have worked across">
                  {["Financial Services", "Automotive", "Technology", "Consumer Packaged Goods", "Telecommunications", "Postal & Logistics", "Lottery & Gaming", "Non-Profit"].map((industry) => <li key={industry}>{industry}</li>)}
                </ul>
              </section>
              <section aria-labelledby="experience-disciplines-title">
                <ExperienceLensArt kind="disciplines" />
                <h4 id="experience-disciplines-title" className="experience-lens-title">Building Brands.<br />Modernizing Marketing.</h4>
                <p className="experience-perspective-copy">I connect brand strategy, customer insight and go-to-market execution across the customer lifecycle. My agency and enterprise experience shapes how I modernize marketing—bringing creator partnerships and AI discoverability into the mix, while aligning teams and investment around customer value and commercial priorities.</p>
                <ul className="experience-ribbon" aria-label="Marketing leadership capabilities">
                  {["Brand & Positioning", "Integrated Go-to-Market Strategy", "Customer Lifecycle", "Emerging Media & Discovery"].map((discipline) => <li key={discipline}>{discipline}</li>)}
                </ul>
              </section>
              <section aria-labelledby="experience-markets-title">
                <ExperienceLensArt kind="global" />
                <h4 id="experience-markets-title" className="experience-lens-title">Local + Global Perspectives</h4>
                <p className="experience-perspective-copy">Working with teams across markets has taught me to connect global ambition with local customer needs. I bring different cultural and commercial perspectives together, build alignment around shared priorities and adapt ideas so they are relevant to the people and markets they serve.</p>
                <ul className="experience-ribbon" aria-label="Markets and regions of collaboration">
                  {["Canada", "United States", "United Kingdom", "Europe", "Asia"].map((market) => <li key={market}>{market}</li>)}
                </ul>
              </section>
            </div>
          </section>
        </section>

        <section id="expertise" className="expertise-section wrap" aria-labelledby="expertise-title">
          <div className="section-heading stacked-intro" data-reveal>
            <div>
              <p className="eyebrow section-label">WHERE WE COULD MAKE A DIFFERENCE</p><h2 id="expertise-title">Your next challenge.<br /><em>Our starting point.</em></h2><p className="section-intro-copy">Big ambitions. Complex questions. New possibilities.<br />Let’s connect the dots—and find a way forward.</p>
              <a className="button section-invitation" href="#connect">Start with a question <Arrow /></a>
            </div>
            <div className="collaboration-intro-art" aria-hidden="true">
              <Image src="/images/collaboration-editorial-dawn.png" alt="" fill sizes="(max-width: 760px) 100vw, 42vw" />
            </div>
          </div>
          <div className="collaboration-grid">
            {offerings.map((offering) => (
              <article className="collaboration-card" key={offering.number} data-reveal>
                <div className="collaboration-card-top"><p className="small-label">{offering.title}</p><span className="collaboration-number" aria-hidden="true">{offering.number}</span></div>
                <h3>{offering.intro}</h3>
                <p className="collaboration-description">{offering.description}</p>
                <ul className="collaboration-outcomes" aria-label="Ways we could work together">{offering.outcomes.split(" · ").map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                <ContactLink className="collaboration-link" ariaLabel={`Let’s explore ${offering.title.toLowerCase()}`} subject={`Let's talk: ${offering.title}`}>Let’s explore this <span><Arrow diagonal /></span></ContactLink>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="work-section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading leadership-intro" data-reveal>
              <div><p className="eyebrow section-label">LEADERSHIP IN ACTION</p><h2 id="work-title">Different challenges. One challenger mindset.</h2><div className="leadership-copy"><p>From challenging industry giants to driving reinvention within established organizations, my career has taken me across both sides of the challenger equation. My perspective has been shaped by both agency and executive leadership—across categories, business models and very different customer needs.</p><p>Different environments. Different complexities. But one consistent belief: meaningful progress begins when we question the conventional, see possibilities others might miss, and bring people together to make them happen.</p><p>Here are four experiences that have shaped how I think, lead and create change.</p></div><a className="button section-invitation" href="#challenger">Explore my thinking <Arrow /></a></div>
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
                    <dl className="leadership-contribution" aria-label="Challenger strategy contribution">
                      <div><dt>My role</dt><dd>Helped lead marketing for HSBC Canada and led the selected creative work featured below.</dd></div>
                      <div><dt>Strategic focus</dt><dd>Find meaningful reasons for customers to choose a challenger brand in a market dominated by larger players.</dd></div>
                    </dl>
                    <ChallengerFilms id="challenger-films" eyebrow="SELECTED CREATIVE WORK" title="Creativity that punches above its weight." intro="A selection of films I led, bringing challenger thinking to life through bold creative work." films={challengerFilms} />
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
                    <dl className="leadership-contribution" aria-label="Enterprise reinvention contribution">
                      <div><dt>My role</dt><dd>Led growth and marketing initiatives within RBC, connecting customer insight, creative ambition and commercial priorities.</dd></div>
                      <div><dt>Work in practice</dt><dd>The Crochet campaign brought RBC&apos;s Apple partnership into a story about everyday money decisions and creative possibility.</dd></div>
                    </dl>
                    <ChallengerFilms id="enterprise-films" eyebrow="CREATIVITY & PARTNERSHIP" title="A different perspective on everyday banking." intro="RBC’s Crochet campaign brings together everyday money decisions, creative possibility and the Apple partnership." films={enterpriseFilms} />
                    <p>In a large, established organization, the challenge isn&apos;t a lack of resources or ambition. It&apos;s navigating complexity, established ways of working and the competing priorities that come with scale.</p>
                    <p>One expression of that mindset was RBC&apos;s &ldquo;Crochet&rdquo; campaign, developed with Battery and connected to RBC&apos;s partnership with Apple. I helped bring together customer insight, creative ambition and a commercial opportunity to tell a different kind of banking story.</p>
                    <p>The starting point was a human insight: money decisions happen in everyday life, including the hobbies and passions people want to make room for. We looked beyond major financial milestones to explore how budgeting could enable creativity and personal expression.</p>
                    <p>The film brought that idea to life through a young artist whose crochet transforms the world around her. The Apple iPad offer connected the story to a tool for creating—giving the partnership a role within the idea itself.</p>
                    <p>For me, challenging the playbook from within meant connecting the brand, the partnership and the commercial objective around something people could care about. It required alignment across teams and creative partners, with the confidence to make space for a more imaginative approach.</p>
                    <p><strong>What it taught me:</strong> Challenger thinking isn&apos;t reserved for challenger brands. Within an established organization, a fresh perspective and the right partnerships can open up new ways to connect with people.</p>
                    <p><em>Enterprise reinvention · Strategic partnerships · Creative courage · Cross-functional leadership</em></p>
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
                    <dl className="leadership-contribution" aria-label="Customer-led transformation contribution">
                      <div><dt>My role</dt><dd>Helped modernize customer onboarding and engagement within a large financial institution.</dd></div>
                      <div><dt>Strategic focus</dt><dd>Bring customer insight, data, technology and cross-functional teams together around the customer relationship.</dd></div>
                    </dl>
                    <p>Throughout my career, I&apos;ve believed that sustainable growth begins with understanding people, not simply products or channels.</p>
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
                    <dl className="leadership-contribution" aria-label="Human leadership contribution">
                      <div><dt>My role</dt><dd>Agile change champion in one of three markets leading a global shift to agile ways of working.</dd></div>
                      <div><dt>What I changed</dt><dd>Adapted agile practices for marketing, visualized work in monday.com and established shared ownership with product owners and Scrum Masters.</dd></div>
                      <div><dt>The outcome</dt><dd>Greater transparency and stronger visibility of the team&apos;s work.</dd></div>
                    </dl>
                    <p>I&apos;ve built and led teams through growth, organizational change, leadership transitions and the uncertainty of a major acquisition.</p>
                    <p>One example was helping a marketing team move from traditional ways of working to agile. Drawing on my agile coaching and design thinking training, I designed how those practices could work for marketing.</p>
                    <p>I created a monday.com board to make work visible and established shared ownership with product owners and Scrum Masters. The change brought more transparency and stronger visibility to the team&apos;s work—making the way we worked together part of the transformation.</p>
                    <p>These experiences taught me that high performance and human leadership aren&apos;t competing priorities. In fact, I believe one makes the other possible.</p>
                    <p>And through it all, remembering that leadership isn&apos;t about having every answer. It&apos;s about creating the conditions for people to discover better ones together.</p>
                    <p><strong>What it taught me:</strong> The true measure of leadership isn&apos;t just what a team accomplishes while you&apos;re leading it. It&apos;s the confidence, capability and courage people carry forward.</p>
                    <p><em>Organizational leadership · Culture &amp; transformation · Talent development · Leading through change</em></p>
                  </div>
              </details>
            </div>
          </div>
        </section>

        <section id="challenger" className="challenger-section" aria-labelledby="challenger-title">
          <div className="wrap">
            <div className="challenger-topline" data-reveal><p className="eyebrow section-label">THOUGHT LEADERSHIP / AN EVOLVING EXPLORATION</p><span className="project-tag">THREE PILLARS. ROOM TO STRETCH.</span></div>
            <div className="challenger-intro" data-reveal><h2 id="challenger-title">Questions I’m exploring.<br /><em>Thinking that keeps growing.</em></h2><div className="challenger-context"><p className="large-copy">For the thinkers. The dreamers. The leaders.</p><p>Three connected threads for my points of view, ideas, and perspectives. Grounded in experience, open to new possibilities.</p><p>Some thoughts will become papers. Others will start as a question, an observation, or a conversation. This is a space to stretch my thinking—and invite you into it.</p><a href="#perspectives" className="text-link">Explore the writing space <Arrow /></a></div></div>
            <div className="thought-pillars">
              {pillars.map((pillar) => (
                <article className="thought-pillar" key={pillar.id} data-reveal>
                  <div className={`pillar-art pillar-art-${pillar.id}`} aria-hidden="true"><i /><i /><i /></div>
                  <div><p className="small-label">{pillar.lens}</p><h3>{pillar.title}</h3><p className="pillar-question">{pillar.question}</p><p className="pillar-description">{pillar.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="perspectives" className="perspectives-section" aria-labelledby="perspectives-title">
          <div className="wrap">
          <div className="section-heading stacked-intro" data-reveal><div><p className="eyebrow section-label">POVS, IDEAS & PERSPECTIVES</p><h2 id="perspectives-title">The thinking <em>in progress.</em></h2><p className="section-intro-copy">From a first observation to a considered paper.<br />A growing collection across three pillars.</p></div></div>
          <PovLibrary />
          </div>
        </section>

        <section id="connect" className="connect-section" aria-labelledby="connect-title">
          <div className="connect-inner wrap" data-reveal><div><p className="eyebrow section-label">LET’S EXCHANGE IDEAS</p><h2 id="connect-title">What are you<br /><em>thinking about?</em></h2><p>A growth challenge. An organization ready for reinvention. A leadership opportunity. Or simply an idea worth exploring.</p><p>I&apos;m open to conversations about strategic advisory, consulting, speaking and executive leadership.</p></div>
          <div className="connect-actions"><ContactLink className="button button-dark">Let&apos;s start a conversation <Arrow /></ContactLink><ContactLink className="connect-email">mc.ching@gmail.com</ContactLink></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
