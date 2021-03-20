import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = (id, object) => {
  const changedObject = { ...object, votes: object.votes + 1 }
  const request = axios.put(`${baseUrl}/${id}`, changedObject)
  return request.then(response => response.data)
}


export default { getAll, createNew, update }