// 这是我store的代码
import { Commit } from 'vuex';
const state: any = {
    contextmenu: false,
};

const mutations: any = {
    upDataContextmenu(states: any, params: boolean) {
        states.contextmenu = params;
    },
};

const actions: any = {
    upDataContextmenu(context: { commit: Commit }, params: boolean) {
        context.commit('upDataContextmenu', params);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};