import { stats } from '../../data/content'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
      <div aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-forest/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-forest/10 px-4 py-1 text-sm font-semibold text-forest dark:bg-green-400/10 dark:text-green-300">
            Admissions open for 2026-27
          </span>
        </Reveal>
        <Reveal delay={0.1} as="h1" className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
          The Modern Gurukul for <span className="text-brand">Mind, Body</span> and Soul
        </Reveal>
        <Reveal delay={0.2} as="p" className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
          A co-educational boarding school in Dehradun. We see the potential in every student and help them bring it to life.
        </Reveal>
        <Reveal delay={0.3} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#admissions">Apply for 2026-27</Button>
          <Button href="#about" variant="ghost">Discover TIS</Button>
        </Reveal>
      </div>
      <dl className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.1 * i} className="flex flex-col-reverse rounded-2xl border border-stone-200 bg-white/70 p-5 text-center backdrop-blur dark:border-stone-800 dark:bg-stone-900/70">
            <dt className="text-sm text-stone-500">{s.label}</dt>
            <dd className="font-display text-3xl font-bold text-forest dark:text-green-400">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
