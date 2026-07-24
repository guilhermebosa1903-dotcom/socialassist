import { useEffect, useRef, useState } from 'react'

// Hook simples: retorna uma ref para anexar ao elemento e um boolean
// indicando se ele já entrou na viewport. Respeita prefers-reduced-motion
// tornando o elemento visível imediatamente nesse caso.
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
