import { db } from './../index.js'

export const QueryResult = (query) => {
  const getName = async () => {
    const promise = new Promise((resolve, reject) => {
      db.query(query, (err, res, fields) => {
        if (err) reject(err)

        resolve(res)
      })
    })
    return promise
  }
  const getData = async () => {
    try {
      const data = await getName()
      return data
    } catch (e) {
      console.log(e)
    }
  }
  let response = getData()
  return response
}

//'SELECT * FROM Users'
