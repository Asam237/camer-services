import myService from '../assets/data/service.yaml'
export const actions = {
  async showAllService({ commit }) {
    return commit('service/service/SETSERVICE', await myService.items)
  },
}
