import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../../data/content'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const link = 'rounded-md px-3 py-2 text-sm font-medium text-stone-700 hover:text-brand dark:text-stone-300'

  return (
    <header className="fixed inset-x-0 top-1 z-50 mx-auto max-w-6xl px-4">
      <div className="mt-2 flex items-center justify-between rounded-full border border-stone-200/70 bg-white/80 px-5 py-2 backdrop-blur-md dark:border-stone-700/70 dark:bg-stone-900/80">
        <a href="#top" className="font-display text-xl font-bold text-forest dark:text-green-400">
          TIS<span className="text-brand">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className={link}>{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button
            className="grid h-12 w-12 place-items-center rounded-full md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex flex-col rounded-3xl border border-stone-200 bg-white p-3 md:hidden dark:border-stone-700 dark:bg-stone-900"
          >
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={`${link} py-3 text-base`}>
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
