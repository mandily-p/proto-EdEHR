import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import axios from '../node_modules/axios/dist/axios.min'
import Configuration from './configuration'
var config = new Configuration()

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });

/* global localStorage */
function resetState (state) {
  let d = {}
  state.sUserInfo = d
  state.sActivityInfo = d
  state.sVisitInfo = d
  state.sVisitDataInfo = d
  state.userId = ''
  state.isValidUser = false
  localStorage.removeItem('token')
  state.isLoggedIn = false
}

const store = new Vuex.Store({
  state: {
    sUserInfo: {},
    sActivityInfo: {},
    sVisitInfo: {},
    sVisitDataInfo: {},
    userId: '',
    isValidUser: false,
    isLoggedIn: !!localStorage.getItem('token')
  },
  plugins: [createLogger()],
  mutations: {
    logout: state => {
      console.log('mutation logout')
      resetState(state)
    },
    routeEnter: state => {
      var token = localStorage.getItem('token')
      console.log('mutation route enter found token ', token)
      state.token = token
      state.isLoggedIn = !!token
    },
    resetInfo: state => {
      resetState(state)
    },
    setUserId: (state, id) => {
      console.log('store user id into global store', id)
      localStorage.setItem('token', id)
      state.userId = id
    },
    setValidUser: (state, isValid) => {
      state.isValidUser = isValid
    },
    setUserInfo: (state, userInfo) => {
      state.sUserInfo = userInfo
    },
    setActivityInfo: (state, info) => {
      state.sActivityInfo = info
    },
    setVisitInfo: (state, info) => {
      state.sVisitInfo = info
    },
    setVisitDataInfo: (state, info) => {
      state.sVisitDataInfo = info
    }
  },
  actions: {
    routeEnter ({ commit }) {
      console.log('action routeEnter')
      commit('routeEnter')
    },
    logout ({ commit }) {
      commit('logout')
    },
    addPNotes (context, payload) {
      let visitData = context.state.sVisitDataInfo
      let vid = visitData._id
      let newNote = payload.note
      let url = `${config.getApiUrl()}visitdata/${vid}`
      console.log('addPNotes payload', payload)
      console.log('addPNote visit data id', vid)
      console.log('addPNotes put url', url)
      visitData.data = visitData.data || {}
      let vd = visitData.data
      vd.progressNotes = vd.progressNotes || []
      vd.progressNotes.push(newNote)
      console.log('addPNote visitData', vd)

      axios
        .put(url, visitData)
        .then(results => {
          let data = results.data.visitdata
          console.log(`addPNotes after post with ${data}`)
          context.commit('setVisitDataInfo', data)
        })
        .catch(error => {
          console.log(`Failed to update progress notes ${error.message}`)
        })
    }
  }
})

export default store
