import { houses } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function CampusLife() {
  return (
    <section id="life" className="px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal as="h2" className="font-display text-3xl font-bold sm:text-4xl">Seven Houses, One Family</Reveal>
        <Reveal delay={0.1} as="p" className="mt-3 text-stone-600 dark:text-stone-400">
          Every student belongs to a house, building friendships, healthy rivalry and leadership.
        </Reveal>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {houses.map((h, i) => (
            <Reveal as="li" key={h} delay={0.05 * i} className="rounded-full border border-brand/40 px-6 py-3 font-semibold text-brand">
              {h}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
