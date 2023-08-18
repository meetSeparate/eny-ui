import Loading from "./Loading.vue"
import { createVNode, render } from 'vue'

export default {
    install(app) {
        const VNode = createVNode(Loading)
        render(VNode, document.body)
    }
}