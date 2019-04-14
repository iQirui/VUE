import { MutationTree  } from 'vuex'
import state from './state'
import { RootStateTypes } from './types'
 
const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR(state: RootStateTypes, data: string) {
    state.author = data;
  }
}
 
export default mutations;