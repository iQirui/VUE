import { ActionTree } from 'vuex';
import { RootStateTypes } from './types';

const actions: ActionTree<RootStateTypes, any> = {
    SET_AUTHOR_ASYN({ commit, state: RootStateTypes }, data: string) {
        commit('SET_AUTHOR', data);
    },

    reducePrice: () => {
        console.log(11)
      }
}

export default actions;