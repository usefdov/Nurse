 "use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Check, ChevronDown, Clock3, Code2, HeartPulse,
  Instagram, Linkedin, Mail, MapPin, Menu, MessageCircle,
  MonitorSmartphone, NotebookTabs, ShieldCheck, Sparkles, Stethoscope,
  Users, X, Github, Facebook
} from "lucide-react";

const nav = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Experience", "experience"], ["Projects", "projects"],
  ["Education", "education"], ["Contact", "contact"]
];

const skills = {
  "Clinical & Nursing": [
    "Patient Care", "Vital Signs Monitoring", "Basic Nursing Procedures",
    "Patient Safety", "Infection Prevention & Control", "Medication Safety Awareness",
    "Basic Emergency Response", "Patient Communication"
  ],
  "Professional": [
    "Teamwork", "Communication", "Time Management", "Organization",
    "Problem Solving", "Adaptability", "Attention to Detail", "Stress Management"
  ],
  "Digital": [
    "Microsoft Office", "Digital Documentation", "Healthcare Information Systems",
    "Online Research", "Basic Data Organization"
  ]
};

const projects = [
  {
    n: "01", title: "Patient Care Guide", tag: "Educational",
    desc: "A simple digital concept that organizes essential patient-care information into an easy-to-understand guide.",
    icon: NotebookTabs
  },
  {
    n: "02", title: "Nursing Study Dashboard", tag: "Productivity",
    desc: "A personal productivity concept for nursing subjects, study notes, clinical tasks, and revision schedules.",
    icon: MonitorSmartphone
  },
  {
    n: "03", title: "Community Health Awareness", tag: "Community",
    desc: "A campaign concept focused on communicating basic healthcare information in a simple and accessible way.",
    icon: Users
  },
  {
    n: "04", title: "Medication Safety Awareness", tag: "Patient Safety",
    desc: "An educational concept focused on medication safety, documentation, and avoiding common medication errors.",
    icon: ShieldCheck
  }
];

const learning = [
  "Basic Life Support — Learning / Training",
  "Infection Prevention & Control — Academic Training",
  "Patient Safety — Academic Learning",
  "First Aid Fundamentals — Learning",
  "Healthcare Communication — Professional Development"
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow mb-5">{children}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  return (
    <main>
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-teal" style={{ scaleX }} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-[#f6f8f8]/85 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a href="#home" className="focus-ring flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white"><HeartPulse size={18}/></span>
            <span className="hidden sm:block">YMM<span className="text-teal">.</span></span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="focus-ring text-[13px] font-medium text-slate-600 transition hover:text-ink">{label}</a>
            ))}
          </nav>

          <a href="#contact" className="focus-ring hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#183548] sm:inline-flex">
            Let’s Connect
          </a>

          <button className="focus-ring rounded-xl p-2 lg:hidden" aria-label={menu ? "Close menu" : "Open menu"} onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} className="border-t border-slate-200 bg-[#f6f8f8] lg:hidden">
            <div className="container flex flex-col py-5">
              {nav.map(([label,id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="border-b border-slate-200 py-4 text-lg font-medium">{label}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      <section id="home" className="relative overflow-hidden pt-32 lg:pt-44">
        <div className="container grid items-center gap-16 pb-24 lg:grid-cols-[1.08fr_.92fr] lg:pb-32">
          <div className="reveal">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-teal" />
              Nursing Professional • Cairo, Egypt
            </div>
            <h1 className="display max-w-4xl text-5xl font-extrabold leading-[.98] sm:text-6xl lg:text-[78px]">
              Caring with Purpose.<br />
              <span className="text-slate-400">Learning with Passion.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600">
              Hello, I’m Youssef Mamdouh Mokhtar, a young nursing professional passionate about patient care, continuous learning, teamwork, and making a meaningful difference in healthcare.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="focus-ring group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1">
                View My Work <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>
              <a href="#contact" className="focus-ring inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-teal">
                Let’s Connect <MessageCircle size={18}/>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-teal">
              <Clock3 size={15}/> Open to Learning & Professional Opportunities
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-5 rounded-[42px] border border-teal/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(16,37,54,.13)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(93,159,177,.22),transparent_35%),linear-gradient(145deg,#eef5f5,#dce9ea)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ink/20 to-transparent" />
              <div className="absolute left-7 top-7 rounded-2xl border border-white/80 bg-white/80 p-3 backdrop-blur">
                <Stethoscope className="text-teal" size={22}/>
              </div>
              <div className="absolute bottom-7 left-7 right-7">
                <div className="text-xs font-bold uppercase tracking-[.18em] text-teal">Profile Placeholder</div>
                <div className="display mt-2 text-3xl font-bold">Youssef<br/>Mamdouh Mokhtar</div>
                <div className="mt-2 text-sm text-slate-600">Nursing Professional</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y border-slate-200 bg-white py-4">
          <div className="marquee flex w-max gap-10 text-xs font-bold uppercase tracking-[.22em] text-slate-400">
            {Array.from({length: 2}).map((_,i) => <span key={i}>Care <b className="mx-3 text-teal">•</b> Learn <b className="mx-3 text-teal">•</b> Grow <b className="mx-10">/</b></span>)}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div><SectionLabel>01 / About</SectionLabel><h2 className="display text-4xl font-bold sm:text-5xl">Human care,<br/><span className="text-slate-400">modern mindset.</span></h2></div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-600">Youssef is a 21-year-old nursing professional passionate about healthcare, patient-centered care, continuous professional development, teamwork, organization, and learning new clinical skills.</p>
            <p className="mt-6 max-w-3xl leading-8 text-slate-500">His approach combines compassionate patient care with modern healthcare practices, while staying curious, organized, and open to feedback. This portfolio represents an educational and professional-development journey.</p>
            <div className="mt-12 grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-3">
              {[["01","Student","Building strong nursing foundations"],["02","Clinical Learner","Applying skills through training"],["03","Aspiring Professional","Growing through practice & learning"]].map(([n,t,d]) =>
                <div key={n}><div className="text-xs font-bold text-teal">{n}</div><h3 className="mt-2 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-pad border-y border-slate-200 bg-white">
        <div className="container">
          <SectionLabel>02 / Skills</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div><h2 className="display text-4xl font-bold sm:text-5xl">Skills that<br/><span className="text-slate-400">support care.</span></h2></div>
            <div className="grid gap-12 md:grid-cols-3">
              {Object.entries(skills).map(([group,items]) => (
                <div key={group}>
                  <h3 className="mb-5 text-sm font-bold">{group}</h3>
                  <div className="space-y-3">
                    {items.map((item,i)=><motion.div whileHover={{x:4}} key={item} className="flex items-center gap-3 border-b border-slate-100 pb-3 text-sm text-slate-600"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#eef5f5] text-teal"><Check size={13}/></span>{item}</motion.div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="container">
          <SectionLabel>03 / Experience</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <h2 className="display text-4xl font-bold sm:text-5xl">Learning<br/><span className="text-slate-400">in practice.</span></h2>
            <div className="space-y-12">
              <article className="border-t border-slate-200 pt-6">
                <div className="flex flex-wrap justify-between gap-3"><div><div className="text-xs font-bold uppercase tracking-wider text-teal">Clinical Training</div><h3 className="mt-2 text-2xl font-bold">Student Nurse — Clinical Training</h3></div><span className="text-xs text-slate-400">Educational Experience</span></div>
                <p className="mt-4 max-w-2xl leading-7 text-slate-500">Hands-on educational exposure focused on supporting nursing teams and providing safe, respectful patient care under appropriate supervision.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">{["Assisting with patient care","Monitoring vital signs","Supporting nursing teams","Maintaining patient comfort","Following infection-control procedures","Recording basic patient information","Communicating with patients","Communicating with healthcare staff"].map(x=><div key={x} className="text-sm text-slate-600">↳ {x}</div>)}</div>
              </article>
              <article className="border-t border-slate-200 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-teal">Volunteer Experience</div><h3 className="mt-2 text-2xl font-bold">Healthcare Volunteer — Community Health Activities</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-500">Fictional/demo volunteer concept centered on health-awareness support, organization, communication, and community engagement.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">{["Supporting health-awareness campaigns","Organizing educational materials","Assisting visitors and participants","Promoting basic health & hygiene awareness"].map(x=><div key={x} className="text-sm text-slate-600">↳ {x}</div>)}</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad bg-ink text-white">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><div className="eyebrow text-[#72b7bc]">04 / Selected Work</div><h2 className="display mt-4 text-4xl font-bold sm:text-6xl">Ideas for better<br/><span className="text-white/35">care & learning.</span></h2></div>
            <p className="max-w-sm text-sm leading-7 text-white/55">Fictional/demo projects exploring education, patient safety, organization, and accessible healthcare communication.</p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {projects.map(({n,title,tag,desc,icon:Icon})=>(
              <motion.article whileHover={{backgroundColor:"rgba(255,255,255,.06)"}} key={n} className="group min-h-[330px] border-white/10 bg-ink p-8 transition md:p-10">
                <div className="flex items-start justify-between"><span className="text-xs font-bold text-[#72b7bc]">{n}</span><Icon className="text-white/30 transition group-hover:text-[#72b7bc]" size={24}/></div>
                <div className="mt-24"><span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50">{tag}</span><h3 className="display mt-4 text-3xl font-bold">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-white/55">{desc}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div><SectionLabel>05 / Education</SectionLabel><h2 className="display text-4xl font-bold sm:text-5xl">Foundations<br/><span className="text-slate-400">for the future.</span></h2></div>
          <div>
            <div className="border-l-2 border-teal pl-7">
              <div className="text-xs font-bold uppercase tracking-wider text-teal">Higher Education / Nursing Studies</div>
              <h3 className="mt-2 text-2xl font-bold">Technical Institute of Nursing — Cairo University</h3>
              <p className="mt-4 text-slate-500">Program: Nursing</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Medical-Surgical Nursing","Pediatric Nursing","Obstetric & Gynecological Nursing","Community Health Nursing","Geriatric Nursing","Fundamentals of Nursing","Clinical Practice"].map((x)=><div key={x} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium shadow-sm">{x}</div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-white">
        <div className="container">
          <SectionLabel>06 / Highlights</SectionLabel>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {[["21","Years Old"],["5+","Nursing Subjects Explored"],["10+","Academic Projects"],["100%","Passion for Learning"]].map(([n,l])=><div key={l} className="bg-white p-8 lg:p-10"><div className="display text-5xl font-bold text-ink">{n}</div><div className="mt-3 text-sm text-slate-500">{l}</div></div>)}
          </div>
          <p className="mt-5 text-xs text-slate-400">Portfolio/demo highlights — not independently verified professional statistics.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div><SectionLabel>07 / Continuous Learning</SectionLabel><h2 className="display text-4xl font-bold sm:text-5xl">Always<br/><span className="text-slate-400">keep learning.</span></h2></div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {learning.map((x,i)=><div key={x} className="flex items-center gap-5 py-5"><span className="text-xs font-bold text-teal">0{i+1}</span><span className="font-medium text-slate-700">{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#eaf2f2]">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-8"><div><SectionLabel>08 / Personal Interests</SectionLabel><h2 className="display text-4xl font-bold">Beyond the clinical setting.</h2></div><Sparkles className="text-teal" size={28}/></div>
          <div className="mt-12 flex flex-wrap gap-3">{["Healthcare & Medicine","Technology","Learning New Skills","Fitness & Wellbeing","Digital Creativity","Personal Development"].map(x=><span key={x} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-600">{x}</span>)}</div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-ink text-white">
        <div className="container grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="eyebrow text-[#72b7bc]">09 / Contact</div>
            <h2 className="display mt-5 text-5xl font-bold sm:text-6xl">Let’s Start a<br/><span className="text-white/35">Conversation.</span></h2>
            <p className="mt-7 max-w-lg leading-8 text-white/55">Whether you’re interested in collaboration, professional opportunities, or simply want to connect, I’d be happy to hear from you.</p>
            <div className="mt-9 space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3"><Mail size={17} className="text-[#72b7bc]"/> youssef.mokhtar@example.com</div>
              <div className="flex items-center gap-3"><MapPin size={17} className="text-[#72b7bc]"/> Cairo, Egypt</div>
              <div className="flex items-center gap-3"><MessageCircle size={17} className="text-[#72b7bc]"/> +20 100 000 0000</div>
            </div>
            <p className="mt-6 text-xs text-white/35">All contact details and social profiles on this site are fictional/demo placeholders.</p>
            <div className="mt-8 flex gap-2">
              {[Linkedin, Instagram, Github, Facebook].map((I,i)=><a key={i} href="#contact" aria-label="Demo social link" className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[#72b7bc] hover:text-[#72b7bc]"><I size={17}/></a>)}
            </div>
          </div>

          <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/[.04] p-7 sm:p-9">
            <label className="block text-sm font-medium text-white/70">Name<input required className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-white/[.05] px-4 py-3.5 text-white placeholder:text-white/25" placeholder="Your name"/></label>
            <label className="mt-5 block text-sm font-medium text-white/70">Email<input required type="email" className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-white/[.05] px-4 py-3.5 text-white placeholder:text-white/25" placeholder="you@example.com"/></label>
            <label className="mt-5 block text-sm font-medium text-white/70">Message<textarea required rows={6} className="focus-ring mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[.05] px-4 py-3.5 text-white placeholder:text-white/25" placeholder="Tell me a little about your message..."/></label>
            <button className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-bold text-ink transition hover:-translate-y-0.5">Send Message <ArrowUpRight size={18}/></button>
          </form>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-8 text-white">
        <div className="container flex flex-col justify-between gap-6 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">
          <div><div className="font-semibold text-white/70">Youssef Mamdouh Mokhtar</div><div className="mt-1">Nursing Professional • Lifelong Learner</div></div>
          <div className="sm:text-right"><div>© 2026 Youssef Mamdouh Mokhtar. All rights reserved.</div><div className="mt-1">Designed with purpose. Built for growth.</div></div>
        </div>
      </footer>
    </main>
  );
}