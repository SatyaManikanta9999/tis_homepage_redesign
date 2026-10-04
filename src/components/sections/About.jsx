import Reveal from '../ui/Reveal'

export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Welcome to Tula’s International School</h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            Established in 2012 under the aegis of Rishabh Educational Trust, TIS follows the Modern Gurukul concept, a perfect
            amalgamation of the old Gurukul system with a modern approach.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="rounded-3xl bg-gradient-to-br from-brand to-forest p-8 text-white">
          <p className="font-display text-2xl leading-snug">“Knowledge is the supreme wealth.”</p>
          <p className="mt-3 text-sm text-white/80">The TIS motto, on a 22-acre campus in the Doon Valley.</p>
        </Reveal>
      </div>
    </section>
  )
}
