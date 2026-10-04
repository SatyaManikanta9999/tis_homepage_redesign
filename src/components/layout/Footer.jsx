export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500 dark:border-stone-800">
      <p>© {new Date().getFullYear()} Tula’s International School, Dehradun. Knowledge is the supreme wealth.</p>
      <p className="mt-1">Redesign concept built for the TIS frontend assessment.</p>
    </footer>
  )
}
