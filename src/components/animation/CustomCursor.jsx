import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"]'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    // Hidden entirely on touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setHover(Boolean(e.target.closest?.(INTERACTIVE)))
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div aria-hidden="true" style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[70]">
      <motion.div
        animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border-2 border-brand bg-brand/10"
      />
    </motion.div>
  )
}
