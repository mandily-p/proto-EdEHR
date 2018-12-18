const state = {
  isLoading: false,
  isEditing: false
}

const getters = {}

const actions = {}

const mutations = {
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading
  },
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
