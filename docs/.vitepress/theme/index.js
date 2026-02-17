import DefaultTheme from 'vitepress/theme'
import './style.css'

/** Open all content links (internal and external) in a new tab */
function applyLinkTargets() {
  if (import.meta.env.SSR) return
  requestAnimationFrame(() => {
    const doc = document.querySelector('.vp-doc')
    if (!doc) return
    doc.querySelectorAll('a[href]').forEach((a) => {
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noopener noreferrer')
    })
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (import.meta.env.SSR) return
    // Run after each route change (SPA navigation)
    router.onAfterRouteChange = () => {
      setTimeout(applyLinkTargets, 50)
    }
    // Run on initial page load
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => setTimeout(applyLinkTargets, 100))
    }
  },
}
