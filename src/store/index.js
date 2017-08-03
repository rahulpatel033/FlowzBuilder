import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        content: null
    },
    mutations: {
        ADD_TODO(state, text) {
            state.content = text
        }
    },
    actions: {
        updateContent({ commit }, { text }) {
            commit('ADD_TODO', text)
        },
    },
    // getters: {},
    // modules: {}
})
// export default store