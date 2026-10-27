import {
  profile,
  experience,
  education,
  skills,
  softSkills,
  projects,
  otherProjects,
} from "@/data/portfolio";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Work", "#projects"],
  ["Skills", "#skills"],
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-wrap scroll-mt-24 py-20 sm:py-28">
      <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <span className="hidden font-mono text-xs text-white/30 sm:block">/{id}</span>
      </div>
      {children}
    </section>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#10120f]/85 backdrop-blur-xl">
        <nav className="section-wrap flex h-[72px] items-center justify-between">
          <a href="#top" aria-label={`${profile.name}, home`} className="font-display text-xl font-bold tracking-tight text-white">
            {profile.name.split(" ")[0]}<span className="text-lime">.</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="button button-small">
            Let&apos;s talk <span aria-hidden>↗</span>
          </a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-lime">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-lime" /></span>
            OPEN TO OPPORTUNITIES <span className="text-white/35">· {profile.location}</span>
          </div>
          <p className="eyebrow mb-4">Hello, I&apos;m</p>
          <h1 className="font-display max-w-3xl text-6xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
            {profile.name.split(" ")[0]}<br />
            <span className="text-lime">{profile.name.split(" ").slice(1).join(" ")}.</span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium tracking-tight text-white/75 sm:text-2xl">{profile.role}</p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/55 sm:text-xl">{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="button">Explore my work <span aria-hidden>↓</span></a>
            {profile.github && !profile.github.includes("YOUR-USERNAME") && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <span aria-hidden>↗</span></a>
            )}
          </div>
          <div className="mt-14 flex items-center gap-5 border-t border-white/10 pt-6 text-xs text-white/40">
            <span className="font-mono text-lime">01 / 04</span>
            <span>Thoughtful code. Human-friendly experiences.</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto aspect-[0.92] w-full max-w-[470px]" aria-label="Abstract developer workspace illustration" role="img">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orbit orbit-three" />
          <div className="hero-glow" />
          <div className="code-card absolute left-[8%] top-[15%] z-10 w-[84%] rounded-2xl border border-white/10 bg-[#191c17]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#ff7c68]" /><i className="h-2.5 w-2.5 rounded-full bg-[#f7cc63]" /><i className="h-2.5 w-2.5 rounded-full bg-lime" /></div>
              <span className="font-mono text-[10px] text-white/35">developer.js</span>
              <span className="font-mono text-[10px] text-white/25">•••</span>
            </div>
            <div className="space-y-3 font-mono text-[11px] leading-relaxed sm:text-[13px]">
              <p><span className="text-[#c792ea]">const</span> <span className="text-[#f7cc63]">developer</span> = {'{'}</p>
              <p className="pl-5"><span className="text-[#82aaff]">name</span>: <span className="text-[#c3e88d]">&quot;{profile.name}&quot;</span>,</p>
              <p className="pl-5"><span className="text-[#82aaff]">craft</span>: <span className="text-[#c3e88d]">&quot;Web experiences&quot;</span>,</p>
              <p className="pl-5"><span className="text-[#82aaff]">stack</span>: [<span className="text-[#c3e88d]">&quot;Next.js&quot;</span>, <span className="text-[#c3e88d]">&quot;Node.js&quot;</span>],</p>
              <p className="pl-5"><span className="text-[#82aaff]">approach</span>: <span className="text-[#c3e88d]">&quot;Always curious&quot;</span></p>
              <p>{'}'};</p>
              <p className="pt-2 text-white/35"><span className="text-lime">▍</span> Building something meaningful...</p>
            </div>
          </div>
          <div className="floating-label absolute bottom-[12%] left-0 z-20 rounded-xl border border-white/10 bg-[#1a1d17] px-4 py-3 shadow-xl sm:px-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Currently building</p>
            <p className="mt-1 text-sm font-semibold text-white">Ideas into interfaces <span className="text-lime">✳</span></p>
          </div>
          <div className="floating-label absolute right-0 top-[65%] z-20 rounded-xl border border-white/10 bg-[#1a1d17] px-4 py-3 shadow-xl sm:px-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Speciality</p>
            <p className="mt-1 text-sm font-semibold text-white">Full-stack development</p>
          </div>
          <span className="absolute right-[12%] top-[5%] font-mono text-xs text-lime/60">&lt;/&gt;</span>
          <span className="absolute bottom-[4%] right-[22%] text-3xl text-lime/70">✳</span>
        </div>
      </section>

      <div className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="section-wrap grid grid-cols-2 gap-6 py-7 text-center sm:grid-cols-4 sm:py-8">
          {[["01", "Production role"], ["02", "Years in the field"], ["09", "Selected projects"], ["07+", "Core technologies"]].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section id="about" eyebrow="A little about me" title={"Building for the web,\nwith people in mind."}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/60">{profile.summary}</p>
            <div className="mt-9 flex items-center gap-3 text-sm text-white/50"><span className="grid h-10 w-10 place-items-center rounded-full border border-lime/20 bg-lime/[0.06] text-lime">✳</span> Based in {profile.location}</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <p className="eyebrow mb-5">Education</p>
            {education.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50">{item.school}</p>
                <p className="mt-4 font-mono text-xs text-lime">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      <Section id="experience" eyebrow="Where I have been" title="Experience that adds up.">
        <div className="space-y-4">
          {experience.map((job, index) => (
            <article key={job.company} className="experience-card grid gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:grid-cols-[150px_1fr] sm:p-8">
              <p className="font-mono text-xs text-lime">0{index + 1} <span className="text-white/30">/ {job.period}</span></p>
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm text-white/45">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-white/55"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      <Section id="projects" eyebrow="Selected work" title="Things I helped bring to life.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card group flex min-h-[290px] flex-col rounded-2xl border border-white/[0.08] bg-[#171a15] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/35 sm:p-7">
              <div className="mb-9 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] font-mono text-xs text-lime">0{index + 1}</span>
                <span className="text-xl text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" aria-hidden>↗</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-xs text-white/35">{project.url.replace("https://", "")}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-white/55">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow mb-7">A few more experiments</p>
          <div className="grid gap-3 md:grid-cols-3">
            {otherProjects.map((project) => (
              <article key={project.title} className="rounded-xl border border-white/[0.07] p-5 transition hover:bg-white/[0.025]">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      <Section id="skills" eyebrow="Tools of the trade" title="Good work takes good tools.">
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], index) => (
            <article key={group} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs text-lime">0{index + 1}</span><h3 className="font-semibold text-white">{group}</h3></div>
              <div className="flex flex-wrap gap-2">{items.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-sm text-white/40">Beyond the code</span>
          {softSkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </div>
      </Section>

      <section id="contact" className="section-wrap scroll-mt-24 pb-20 pt-10 sm:pb-28">
        <div className="contact-panel relative overflow-hidden rounded-3xl border border-lime/20 bg-[#b8f06a] px-7 py-12 text-[#151811] sm:px-12 sm:py-16 lg:px-16">
          <div className="contact-mark absolute -right-10 -top-24 select-none font-display text-[280px] font-bold leading-none text-black/[0.05]" aria-hidden>✳</div>
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-black/55">Have something in mind?</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Let&apos;s make it<br />happen together.</h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-black/65 sm:text-base">I&apos;m open to full-stack and frontend opportunities. Have a project or a role in mind? I&apos;d love to hear about it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="contact-button">{profile.email} <span aria-hidden>↗</span></a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-secondary">{profile.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="section-wrap flex flex-col gap-4 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Made with care.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime"
            >
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition hover:text-lime">{profile.phone}</a>
            <a href="#top" className="transition hover:text-lime">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
