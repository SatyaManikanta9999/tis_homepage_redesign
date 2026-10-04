import { Mail, MapPin, Phone } from 'lucide-react'
import { admission, contact } from '../../data/content'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="px-4 py-20">
      <Reveal className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-forest to-emerald-900 p-8 text-white md:p-14">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Begin your child’s TIS journey</h2>
        <p className="mt-2 text-white/80">Registration fee {admission.fee} (non-refundable).</p>
        <ul className="mt-6 space-y-2">
          {admission.facts.map((f) => <li key={f}>✓ {f}</li>)}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="https://tis.edu.in/admission-procedure/">Admission Procedure</Button>
          <a href={`tel:${contact.phone}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-7 font-semibold hover:bg-white/10">
            Call Helpline
          </a>
        </div>
        <address className="mt-10 grid gap-3 text-sm not-italic text-white/90 md:grid-cols-3">
          <span className="flex items-start gap-2"><Phone size={18} aria-hidden="true" />{contact.phone}</span>
          <a href={`mailto:${contact.email}`} className="flex items-start gap-2"><Mail size={18} aria-hidden="true" />{contact.email}</a>
          <span className="flex items-start gap-2"><MapPin size={18} aria-hidden="true" />{contact.address}</span>
        </address>
      </Reveal>
    </section>
  )
}
