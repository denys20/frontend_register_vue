import { createApp } from 'vue'
import { BIconXLg, BIconFileEarmarkPerson,BIconArrowClockwise } from 'bootstrap-icons-vue';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.component('BIconXLg', BIconXLg);
app.component('BIconFileEarmarkPerson', BIconFileEarmarkPerson)
app.component('BIconArrowClockwise', BIconArrowClockwise)

app.mount('#app')