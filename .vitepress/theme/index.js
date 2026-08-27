import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ZoomableImage from './components/ZoomableImage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Registered globally so the markdown-emitted <ZoomableImage> tag resolves.
    // The guard avoids a duplicate-registration warning when enhanceApp runs
    // more than once (HMR, or multiple render passes).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  },
}
