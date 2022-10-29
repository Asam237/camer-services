export const state = () => ({
  service: [],
})

export const getters = {
  service: (state) => state.service,
}

export const mutations = {
  SETSERVICE(state, value) {
    state.service = value
  },
}
