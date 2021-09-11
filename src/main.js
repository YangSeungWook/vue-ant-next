import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
// import './index.css'

// 이 자습서에서는 전역 가져 오기 구성 요소 라이브러리를 사용합니다.

createApp(App).use(router).use(store).use(Antd).mount('#app')