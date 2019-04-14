import { GetterTree } from 'vuex'
import state from './state'
import { RootStateTypes } from './types'
 
const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author
}
 
export default getters;