import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.scss'
import Loading from "../moudels/eny-ui/Loading"
import { MotionPlugin } from "@vueuse/motion"

const app = createApp(App)
app.use(MotionPlugin)
app.use(Loading)
app.mount('#app')
