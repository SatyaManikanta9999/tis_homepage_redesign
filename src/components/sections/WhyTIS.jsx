import { BookOpen, Globe, Home, Trophy } from 'lucide-react'
import { awards, pillars } from '../../data/content'
import Reveal from '../ui/Reveal'

const icons = { BookOpen, Globe, Home, Trophy }

export default function WhyTIS() {
  return (
    <section id="why" className="bg-stone-100 px-4 py-20 dark:bg-stone-900">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="text-center font-display text-3xl font-bold sm:text-4xl">Why TIS?</Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <Reveal key={p.title} delay={0.08 * i} className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-stone-800">
                <Icon className="text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{p.text}</p>
              </Reveal>
            )
          })}
        </div>
        <ul className="mt-12 grid gap-3 md:grid-cols-3">
          {awards.map((a) => (
            <Reveal as="li" key={a} className="rounded-xl border border-forest/20 p-4 text-sm font-medium text-forest dark:border-green-400/30 dark:text-green-300">
              🏆 {a}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
