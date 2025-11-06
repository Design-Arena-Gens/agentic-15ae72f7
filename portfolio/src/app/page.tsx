const practiceAreas = [
  {
    title: "Complex Litigation",
    summary: "Strategic advocacy for high-stakes commercial disputes.",
    detail:
      "Guiding corporate clients through disputes involving fiduciary duty, shareholder actions, intellectual property, and contract breaches with precision and grace.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="size-10 text-slate-200"
      >
        <path d="M5 4h14l1 4H4l1-4Z" />
        <path d="M5 8h14v11H5V8Z" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Executive Counsel",
    summary: "Trusted advisor for boardrooms and leadership teams.",
    detail:
      "Delivering calm, decisive guidance to executives navigating regulatory responses, crisis management, and sensitive internal investigations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="size-10 text-slate-200"
      >
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 20c0-3.866 3.134-7 7-7" />
        <path d="M12 13c3.866 0 7 3.134 7 7" />
      </svg>
    ),
  },
  {
    title: "Appellate Practice",
    summary: "Refined arguments for precedent-setting outcomes.",
    detail:
      "Crafting appellate briefs and presenting oral arguments that distill complex records into compelling narratives for courts of appeal.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="size-10 text-slate-200"
      >
        <path d="M4 20h16" />
        <path d="m6 20 6-16 6 16" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
];

const landmarkMatters = [
  {
    year: "2024",
    matter: "Confidential Arbitration Win",
    result:
      "Secured nine-figure award for global hospitality brand amid partnership dissolution.",
  },
  {
    year: "2023",
    matter: "Delaware Chancery Litigation",
    result:
      "Persuaded the court to dismiss derivative claims against board directors at pleadings stage.",
  },
  {
    year: "2022",
    matter: "Federal Trade Secrets Trial",
    result:
      "Protected client innovations by obtaining permanent injunction and attorney’s fees.",
  },
];

const testimonials = [
  {
    quote:
      "Alex has an uncanny ability to simplify chaos. In every board meeting she delivers the calm confidence we need to make decisive moves.",
    person: "Jonathan Price",
    title: "General Counsel, Meridian Holdings",
  },
  {
    quote:
      "She brought incomparable precision to our appeal. The bench cited her brief repeatedly—outcome-changing advocacy.",
    person: "Hon. Patricia Cohen (Ret.)",
    title: "Mediator & Former Appellate Judge",
  },
  {
    quote:
      "Alex balances empathy and tenacity. She steered our startup through an existential lawsuit without ever losing sight of our long-term vision.",
    person: "Naomi Yates",
    title: "Co-Founder, Lumen Biotech",
  },
];

const affiliations = [
  "New York State Bar",
  "American Bar Association",
  "International Institute for Conflict Prevention & Resolution",
  "The Sedona Conference Working Group 1",
];

const contactDetails = [
  { label: "Direct Line", value: "(212) 555-0198", href: "tel:+12125550198" },
  {
    label: "Email",
    value: "counsel@alexmorganlaw.com",
    href: "mailto:counsel@alexmorganlaw.com",
  },
  {
    label: "Office",
    value: "590 Madison Avenue, 26th Floor, New York, NY 10022",
  },
];

export default function Home() {
  return (
    <main className="relative isolate">
      <div className="absolute inset-x-0 -top-[18rem] -z-10 h-[32rem] overflow-hidden">
        <div className="absolute inset-x-[10%] top-24 flex justify-around opacity-30 blur-3xl">
          <div className="h-56 w-56 rounded-full bg-amber-500/40" />
          <div className="h-72 w-72 rounded-full bg-orange-300/40" />
          <div className="h-44 w-44 rounded-full bg-amber-400/30" />
        </div>
      </div>
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-12 pt-12 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between gap-6">
          <div>
            <span className="marker-bar inline-flex rounded-full px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
              Boutique Litigation Counsel
            </span>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-[52px]">
              Alex Morgan guides visionary leaders through their most complex
              disputes with clarity, discretion, and impact.
            </h1>
          </div>
          <div className="hidden sm:block">
            <div className="glass-panel rounded-2xl px-6 py-5 text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                Licensed
              </p>
              <p className="mt-1 font-serif text-2xl text-slate-50">
                New York & D.C.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                15 years of courtroom and boardroom advocacy.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-panel flex flex-col gap-6 rounded-3xl px-6 py-6 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
          <p className="max-w-xl text-base text-slate-200 sm:text-lg">
            “My clients invite me into defining moments. I respond with bespoke
            strategy, relentless preparation, and an unwavering commitment to
            safeguarding what they have built.”
          </p>
          <a
            href="#consultation"
            className="group inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Request Consultation
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 size-5 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300 sm:text-base">
          <a href="#profile" className="hover:text-white">Profile</a>
          <span className="size-1 rounded-full bg-slate-500" />
          <a href="#practice" className="hover:text-white">Practice</a>
          <span className="size-1 rounded-full bg-slate-500" />
          <a href="#matters" className="hover:text-white">Matters</a>
          <span className="size-1 rounded-full bg-slate-500" />
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <span className="size-1 rounded-full bg-slate-500" />
          <a href="#consultation" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <section
        id="profile"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-20 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-20"
      >
        <article className="glass-panel rounded-3xl px-8 py-10">
          <h2 className="font-serif text-3xl font-semibold text-white">
            A measured presence in every forum.
          </h2>
          <p className="mt-5 text-lg text-slate-200">
            Alex Morgan founded the firm after serving as lead counsel for
            Fortune 100 companies at an AmLaw 10 firm. Her practice merges
            elite trial experience with board-level advisory work, enabling
            clients to navigate litigation while protecting brand, momentum, and
            stakeholder trust.
          </p>
          <p className="mt-4 text-lg text-slate-200">
            She is known for translating intricate fact patterns into
            compelling narratives, developing litigation strategies that move
            decisively, and resolving disputes with minimal disruption. Her team
            partners with industry specialists to deliver insight that is both
            meticulous and human.
          </p>
        </article>
        <aside className="flex flex-col gap-6">
          <div className="glass-panel rounded-3xl px-6 py-6">
            <h3 className="font-serif text-2xl text-white">
              Signature Approach
            </h3>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• Insightful case theory grounded in rigorous discovery.</li>
              <li>• Deliberate communications that earn judicial trust.</li>
              <li>• Discrete coordination with PR and stakeholder teams.</li>
              <li>• Tailored client service anchored in discretion.</li>
            </ul>
          </div>
          <div className="glass-panel rounded-3xl px-6 py-6">
            <h3 className="font-serif text-2xl text-white">Affiliations</h3>
            <ul className="mt-4 space-y-2 text-slate-200">
              {affiliations.map((affiliation) => (
                <li key={affiliation} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {affiliation}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section
        id="practice"
        className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-12 lg:px-20"
      >
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Practice Areas
            </span>
            <h2 className="mt-3 font-serif text-4xl text-white">
              Focused advocacy for pivotal matters.
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-200 sm:text-lg">
            Each engagement begins with a bespoke strategy blueprint aligning
            litigation goals with business imperatives, communications strategy,
            and risk tolerance.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="glass-panel flex h-full flex-col justify-between rounded-3xl px-7 py-8 transition hover:-translate-y-1 hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between">
                {area.icon}
                <span className="rounded-full border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-400">
                  Premium
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-white">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">
                  {area.summary}
                </p>
                <p className="mt-4 text-base text-slate-200">{area.detail}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
                Detailed Service Guide
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="matters"
        className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-12 lg:px-20"
      >
        <div className="glass-panel rounded-3xl px-8 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                Landmark Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl text-white">
                Quiet victories with lasting resonance.
              </h2>
              <p className="mt-5 text-lg text-slate-200">
                Many engagements are confidential. Select public matters below
                illustrate Alex’s courtroom acumen and business-first mindset.
              </p>
            </div>
            <div className="grid w-full max-w-md gap-4 text-sm text-slate-300">
              {landmarkMatters.map((matter) => (
                <div
                  key={matter.matter}
                  className="rounded-2xl border border-slate-700/60 bg-slate-900/50 px-6 py-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      {matter.year}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Lead Counsel
                    </span>
                  </div>
                  <p className="mt-3 font-serif text-xl text-white">
                    {matter.matter}
                  </p>
                  <p className="mt-2 text-base text-slate-200">
                    {matter.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-12 lg:px-20"
      >
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="max-w-lg">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Testimonials
            </span>
            <h2 className="mt-3 font-serif text-4xl text-white">
              Revered by clients and colleagues alike.
            </h2>
            <p className="mt-5 text-lg text-slate-200">
              Alex’s work leaves a lasting impression on decision makers. Her
              reputation is built on poise, preparation, and tangible results.
            </p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.person}
                className="glass-panel h-full rounded-3xl px-7 py-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="size-9 text-amber-400"
                >
                  <path d="M7 12h2V7H5v5a5 5 0 0 0 5 5" />
                  <path d="M17 12h2V7h-4v5a5 5 0 0 0 5 5" />
                </svg>
                <blockquote className="mt-5 text-lg text-slate-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-serif text-xl text-white">
                    {testimonial.person}
                  </p>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {testimonial.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="relative mx-auto w-full max-w-6xl px-6 pb-28 sm:px-12 lg:px-20"
      >
        <div className="absolute -top-10 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-amber-500/70 bg-amber-500/20" />
        <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-14">
          <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                Begin the conversation
              </span>
              <h2 className="mt-3 font-serif text-4xl text-white">
                Schedule a confidential consultation.
              </h2>
              <p className="mt-5 text-lg text-slate-200">
                Please share a brief overview of your matter and the desired
                timeframe. All communications are treated with the utmost
                discretion.
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="font-serif text-xl text-white underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-serif text-xl text-white">
                        {detail.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <form className="glass-panel w-full max-w-md rounded-3xl border border-slate-700/60 bg-slate-950/60 px-6 py-7 shadow-2xl">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-sm uppercase tracking-[0.3em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-base text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/40"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-sm uppercase tracking-[0.3em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-base text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/40"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="matter"
                  className="text-sm uppercase tracking-[0.3em] text-slate-400"
                >
                  Nature of Matter
                </label>
                <textarea
                  id="matter"
                  name="matter"
                  rows={4}
                  placeholder="Briefly outline your needs..."
                  className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-base text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Submit Inquiry
              </button>
              <p className="mt-4 text-xs text-slate-400">
                Submissions do not create an attorney-client relationship.
                Confidential information should only be shared after a conflict
                check.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/80 bg-slate-950/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-20">
          <p>© {new Date().getFullYear()} Alex Morgan Law PLLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#profile" className="hover:text-white">Profile</a>
            <a href="#practice" className="hover:text-white">Practice</a>
            <a href="#consultation" className="hover:text-white">Contact</a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
