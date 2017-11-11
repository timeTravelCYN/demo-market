
import Vuex from 'vuex';

import App from 'components/pages/weekly.vue';

// 引入 module
import weeklyState from './store/modules/weekly';
// 引入 action
import * as weeklyActions from './store/actions/weekly';

// 创建 store
const store = new Vuex.Store({
    modules: {
        weeklyState
    },
    actions: {
        ...weeklyActions
    }
});

const Vue = window.Vue || {};
new Vue(Vue.util.extend({ el: '#root', store }, App));