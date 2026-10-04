import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section id="voices" className="bg-stone-100 px-4 py-20 dark:bg-stone-900">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="text-center font-display text-3xl font-bold sm:text-4xl">What Parents Say</Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t} delay={0.1 * i} className="rounded-2xl bg-white p-6 dark:bg-stone-800">
              <Quote className="text-brand" aria-hidden="true" />
              <blockquote className="mt-3 text-stone-700 dark:text-stone-300">{t}</blockquote>
              <p className="mt-4 text-sm font-semibold text-forest dark:text-green-400">TIS Parent</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
