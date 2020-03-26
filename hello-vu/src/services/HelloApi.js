import axios from 'axios'

let base = '/api'

export default {
  getHelloMessage: function (){
    return axios.get(base).then(res => res.data)
  }
}