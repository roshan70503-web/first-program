import { ArrowDown, Download, Mail, MapPin, Github, Linkedin, ExternalLink, GraduationCap } from "lucide-react";
import { profile, about, education, skills, projects, experience, achievements, certifications, interests } from "@/data/content";

const nav = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Interests", "Contact"];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-[12rem_1fr]">
        <h2 className="font-serif text-3xl font-semibold md:sticky md:top-24 md:self-start">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-line bg-white px-3 py-1 text-sm">{children}</span>;
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="rounded-lg border border-dashed border-line bg-mist/50 p-5 text-sm text-ink/70">{children}</p>;
}

export default function Home() {
  const initials = profile.name.split(" ").map((n) => n[0]).join("");
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-3">
          <a href="#top" className="shrink-0 font-serif text-lg font-semibold">{profile.name}</a>
          <ul className="ml-auto flex gap-5 overflow-x-auto text-sm">
            {nav.map((n) => (
              <li key={n}><a href={`#${n.toLowerCase()}`} className="whitespace-nowrap py-1 hover:text-accent">{n}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
            <div className="hero-in">
              <p className="mb-5 text-sm text-white/70">{profile.tagline}</p>
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">{profile.name}</h1>
              <p className="mt-6 max-w-md font-serif text-xl leading-snug text-white/90">{profile.headline}</p>
              <p className="mt-4 max-w-md leading-relaxed text-white/75">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-ink hover:bg-mist">
                  Explore my work <ArrowDown size={18} aria-hidden />
                </a>
                <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-medium hover:bg-white/10">
                  <Download size={18} aria-hidden /> Download resume
                </a>
              </div>
            </div>

            <div className="hero-in-2 space-y-5">
              <div className="flex items-center gap-4">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-24 w-24 rounded-full object-cover" />
                ) : (
                  <div aria-hidden className="grid h-24 w-24 place-items-center rounded-full bg-accent font-serif text-3xl">{initials}</div>
                )}
                <p className="flex items-center gap-2 text-sm text-white/75"><MapPin size={16} aria-hidden /> {profile.location}</p>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-black/30 p-5 text-[13px] leading-relaxed text-white/90" aria-label="Profile summarised as Python code">
{`student = {
    "name": "${profile.name}",
    "degree": "B.Sc. Computer Science",
    "graduating": 2026,
    "languages": ["Python", "Java", "C", "C++"],
    "looking_for": "first Python developer role",
}`}
              </pre>
            </div>
          </div>
        </section>

        <Section id="about" title="About me">
          <div className="max-w-xl space-y-4 font-serif text-lg leading-relaxed">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ol className="space-y-8 border-l border-line pl-6">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <GraduationCap size={18} aria-hidden className="absolute -left-[2.15rem] top-1 rounded-full bg-paper text-accent" />
                <p className="text-sm text-ink/70">{e.years}</p>
                <h3 className="font-serif text-xl font-semibold">{e.title}</h3>
                <p>{e.place}</p>
                {e.note && <p className="mt-1 text-sm text-ink/70">{e.note}</p>}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-6">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
                <dt className="font-medium">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Projects">
          <p className="mb-6 max-w-lg text-ink/80">I'm at the start of my project journey. These are the first two I plan to build, in Python and web development.</p>
          <div className="space-y-6">
            {projects.map((p) => (
              <article key={p.title} className="rounded-lg border border-line bg-white p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                  {p.placeholder && <span className="rounded bg-mist px-2 py-0.5 text-xs">Placeholder: edit in data/content.ts</span>}
                </div>
                <p className="mt-2">{p.description}</p>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div><dt className="font-medium">My contribution</dt><dd className="text-ink/75">{p.contribution}</dd></div>
                  <div><dt className="font-medium">Outcome</dt><dd className="text-ink/75">{p.outcome}</dd></div>
                </dl>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                  {p.github && <a href={p.github} className="ml-auto inline-flex items-center gap-1 text-sm text-accent hover:underline"><Github size={16} aria-hidden /> Code</a>}
                  {p.live && <a href={p.live} className="inline-flex items-center gap-1 text-sm text-accent hover:underline"><ExternalLink size={16} aria-hidden /> Live</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          {experience.length === 0 ? (
            <Empty>No internship or work experience yet. I'm looking for a first opportunity to learn and contribute in a professional IT environment.</Empty>
          ) : (
            <ol className="space-y-8 border-l border-line pl-6">
              {experience.map((x) => (
                <li key={x.role + x.org}>
                  <p className="text-sm text-ink/70">{x.period}</p>
                  <h3 className="font-serif text-xl font-semibold">{x.role}, {x.org}</h3>
                  <p>{x.detail}</p>
                </li>
              ))}
            </ol>
          )}
        </Section>

        <Section id="achievements" title="Achievements & certifications">
          <ul className="list-disc space-y-2 pl-5">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          <div className="mt-6">
            {certifications.length === 0 ? <Empty>Certifications will appear here once added in data/content.ts.</Empty> : <ul className="list-disc space-y-2 pl-5">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>}
          </div>
        </Section>

        <Section id="interests" title="Interests">
          <ul className="flex flex-wrap gap-2">{interests.map((i) => <li key={i}><Tag>{i}</Tag></li>)}</ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-6 max-w-md font-serif text-lg">I'm open to internships and entry-level Python developer roles. The best way to reach me is email.</p>
          <ul className="space-y-3">
            <li><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent"><Mail size={18} aria-hidden /> {profile.email}</a></li>
            <li className="flex items-center gap-2"><MapPin size={18} aria-hidden /> {profile.location}</li>
            {profile.links.linkedin && <li><a href={profile.links.linkedin} className="inline-flex items-center gap-2 hover:text-accent"><Linkedin size={18} aria-hidden /> LinkedIn</a></li>}
            {profile.links.github && <li><a href={profile.links.github} className="inline-flex items-center gap-2 hover:text-accent"><Github size={18} aria-hidden /> GitHub</a></li>}
          </ul>
          <a href={`mailto:${profile.email}?subject=Hello%20Roshan`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-medium text-white hover:bg-accent">
            <Mail size={18} aria-hidden /> Send an email
          </a>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-ink/70">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
