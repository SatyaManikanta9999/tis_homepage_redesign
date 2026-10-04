const styles = {
  primary: 'bg-brand text-white hover:bg-orange-600 shadow-lg shadow-brand/30',
  ghost: 'border border-stone-300 text-stone-800 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-100 dark:hover:bg-stone-800',
}

export default function Button({ href, variant = 'primary', children }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]}`}
    >
      {children}
    </a>
  )
}
