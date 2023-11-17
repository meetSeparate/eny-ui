import {createApp} from 'vue'
import createElement from "typeit/src/helpers/createElement";

export const showDialog = (msg, onClick) => {
    // 组件对象
    const Dialog = {
        props: {
            message: {
                type: String,
                default: () => ''
            }
        },
        // jsx语法
        render(ctx) {
            const {$props, $emit} = ctx
            return <div>
                <h3>{ $props.message }</h3>
                <button onClick={$emit('confirmBtn')}>确定</button>
            </div>
        }
    }

    const app = createApp(Dialog, {
        message: msg,
        confirmBtn() {
            onClick(() => {
                app.unmount()
                div.remove()
            })
        },
    })
    const body = document.body
    const div = createElement('div')
    body.appendChild(div)

    app.mount(div)
}


