import axios from './axios.service';

export const getPosts = async () => {
  return axios.get('/posts')
    .then(response => {
      return { status: 200, data: response.data }
    })
    .catch(error => {
      return { error, status: false }
    })
}

export const getPostComments = async (post_id) => {
  return axios.get('/posts/' + post_id + "/comments")
    .then(response => {
      return { status: 200, data: response.data }
    })
    .catch(error => {
      return { error, status: false }
    })
}