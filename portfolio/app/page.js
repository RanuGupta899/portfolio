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
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
        {title}
        <span className="mt-2 block h-1 w-12 rounded bg-brand-500" />
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-brand-600/20 px-3 py-1 text-xs font-medium text-brand-400">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#" className="font-bold text-white">
            {profile.name.split(" ")[0]}<span className="text-brand-500">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-gray-300 sm:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-brand-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-brand-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-5">
        <p className="mb-3 text-brand-400">Hi, my name is</p>
        <h1 className="text-5xl font-extrabold text-white sm:text-7xl">{profile.name}</h1>
        <h2 className="mt-3 text-2xl font-semibold text-gray-400 sm:text-4xl">{profile.role}</h2>
        <p className="mt-6 max-w-xl text-lg text-gray-400">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700"
          >
            View my work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand-500 hover:text-brand-400"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <p className="max-w-3xl leading-relaxed text-gray-300">{profile.summary}</p>
        <div className="mt-8">
          <h3 className="mb-3 font-semibold text-white">Education</h3>
          {education.map((e) => (
            <div key={e.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-medium text-white">{e.title}</p>
              <p className="text-gray-400">{e.school}</p>
              <p className="text-sm text-brand-400">{e.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6 border-l-2 border-brand-600/40 pl-6">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-brand-500" />
              <h3 className="text-lg font-semibold text-white">
                {job.role} <span className="text-brand-400">· {job.company}</span>
              </h3>
              <p className="mb-2 text-sm text-gray-500">{job.period}</p>
              <ul className="list-disc space-y-1 pl-5 text-gray-300">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Live Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-brand-500"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-brand-400">
                {p.title} <span aria-hidden>↗</span>
              </h3>
              <p className="mt-1 text-xs text-gray-500">{p.url.replace("https://", "")}</p>
              <p className="mt-3 flex-1 text-sm text-gray-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>

        <h3 className="mb-4 mt-14 text-xl font-semibold text-white">More Projects</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {otherProjects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-3 font-semibold text-white">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="mb-3 font-semibold text-white">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <p className="max-w-xl text-gray-300">
          I'm open to full-stack and frontend opportunities. Have a project or a role in mind?
          Send me a message.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand-500"
          >
            {profile.phone}
          </a>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
