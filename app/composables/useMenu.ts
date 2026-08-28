import { getLenis } from './useScroll'

export function useMenu() {
  const open = useState('menu-open', () => false)

  const setState = (next: boolean) => {
    open.value = next
    if (import.meta.client) {
      document.body.classList.toggle('menu-open', next)
      next ? getLenis()?.stop() : getLenis()?.start()
    }
  }

  return {
    open,
    toggle: () => setState(!open.value),
    close: () => setState(false),
  }
}
