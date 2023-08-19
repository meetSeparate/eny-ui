import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.scss'
import Loading from "../moudels/eny-ui/Loading"

const app = createApp(App)
app.use(Loading)
app.mount('#app')
