import request from 'superagent'

export function getData() {

  return request.get('/v1/getData')
    .then(res => {
      const data = res.body
      return data
    })
    .catch(() => {
      throw Error('You need to implement an API route for /v1/getData')
    })
}

export function addData(data) {
  return request.post('/v1/postData')
    .send(data)
    .then(res => {
      const returnedData = res.body
      return returnedData
    })
}

export function updateData(data) {
  return request.put(`/v1/updateData/${data.id}`)
    .send(data)
    .then(res => {
      const returnedData = res.body
      return returnedData
    })
}

export function deleteData(dataId) {
  return request.del(`/v1/deleteData/${dataId}`)
    .then(res => {
      const returnedData = res.body
      return returnedData
    })
}
