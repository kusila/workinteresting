import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/utils'
import Button from './components/button'
import List from './components/list'
import Icon from './components/icon'
import Collapse from './components/collapse'
import Dropdown from "./components/dropdown"
import mxGraph from "./components/mGraph"
import AwesomeProgress from "./components/awesomeProgress"
import Table from "./components/table"
import Message from "./components/message"
import Calendar from "./components/calendar"
import DatePicker from "./components/date-picker"
import editTabs from "./components/editTab"
import "./styles/index.scss"
Vue.prototype.$utils = utils
Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('List', List)
Vue.component('ListItem', List.Item)
Vue.component('Icon', Icon)
Vue.component('Collapse', Collapse)
Vue.component('Panel', Collapse.Panel)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', Dropdown.DropdownMenu)
Vue.component('DropdownItem', Dropdown.DropItem)
Vue.component('mxGraph', mxGraph)
Vue.component('AwesomeProgress', AwesomeProgress)
Vue.component('Table', Table)
Vue.component('Calendar', Calendar)
Vue.component('DatePicker', DatePicker)
Vue.component('editTabs', editTabs)
Vue.component('Tab', editTabs.Tab)
Vue.prototype.$Message = Message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
