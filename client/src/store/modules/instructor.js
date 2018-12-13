import axios from 'axios' // '../node_modules/axios/dist/axios.min'
import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  sInstructorReturnUrl: '/instructor',
  sCurrentEvaluationStudentId: '',
  sClassList: [],
  sCourses: []
}

const getters = {
  currentEvaluationStudent: state => {
    var currentId = state.sCurrentEvaluationStudentId
    var classList = state.sClassList
    if (currentId && classList) {
      return classList.find(elem => {
        return elem._id === currentId
      })
    }
    return { user: {}, activity: {} }
  }
}

const actions = {
  changeCurrentEvaluationStudentId: (context, currentId) => {
    // TO DO store the id in localstorage to support page refresh
    context.commit('setCurrentEvaluationStudentId', currentId)
    var classList = context.state.sClassList
    console.log('changeCurrentEvaluationStudentId', currentId, classList)
    var sv // a student's visit information
    if (currentId && classList) {
      sv = classList.find(elem => {
        return elem._id === currentId
      })
    }
    if (!sv) {
      console.error('ERROR. Can\'t find student in class list. ', currentId)
      return;
    }
    console.log("What do we have here? ", sv, sv.activity)
    let ad = sv.activityData || {}
    let sva = sv.assignment
    let evd = {
      studentName: sv.user.fullName,
      assignmentName: sva.name,
      assignmentDescription: sva.description,
      lastVisitDate: sv.lastVisitDate,
      evaluationData: (ad.evaluationData || ''),
      assignmentData: (ad.assignmentData || {}),
      mergedData: (ad.mergedData || {} )
    }
    // console.log("setEvaluationData: ", evd)
    context.commit('ehrData/setEvaluationData', evd, { root: true })
  },
  saveEvaluationNotes (context, payload) {
    let vid = payload.activityDataId
    let body = {
      evaluationData: payload.evalNotes
    }
    let url = `${context.state.apiUrl}/activity-data/evaluation-data/${vid}`
    // console.log('store save eval notes ', url, body)
    return new Promise(resolve => {
      helper.putRequest(url, body).then(results => {
        let evaluationData = results.data
        resolve(evaluationData)
      })
    })
  },
  loadInstructor (context) {
    console.log('Work in progress loading instructor information. ...')
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let userId = visitState.sUserInfo._id
    let url = `${apiUrl}/users/instructor/courses/${userId}`
    console.log('In load instructor courses data ', url)
    return new Promise(() => {
      axios.get(url).then(response => {
        console.log('load courses', response.data)
        var courses = response.data['courses']
        context.commit('setCourses', courses)
      })
    })
  },
  loadClassList (context, activityId) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    return new Promise(() => {
      let url = `${apiUrl}/activities/class/${activityId}`
      // console.log('In load instructor activities data ', url)
      axios.get(url).then(response => {
        // console.log('load activities', response.data)
        var classList = response.data['classList']
        context.commit('setClassList', classList)
      })
    })
  }
}

const mutations = {
  setClassList: (state, list) => {
    /*
    list of Visit records (student only) for a particular LMS activity.
    Each record contains a populated ActivityData (student's work)
    (EdEHR) Assignment and User
     */
    state.sClassList = list
  },
  setCourses: (state, list) => {
    // console.log('set courses', list)
    state.sCourses = list
  },
  setInstructorReturnUrl: (state, rUrl) => {
    console.log('save instructor return url' + rUrl)
    localStorage.setItem('sInstructorReturnUrl', rUrl)
    state.sInstructorReturnUrl = rUrl
  },
  setCurrentEvaluationStudentId: (state, id) => {
    localStorage.setItem('sCurrentEvaluationStudentId', id)
    state.sCurrentEvaluationStudentId = id
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
