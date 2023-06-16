import mariadb from 'mariadb'
export const db = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'kaelkael&',
  database: 'FakeERP',
})

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
const test = async () => {
  const query = 'SELECT * FROM TEST;'
  let resultat = await QueryResult(query)
  console.log(resultat)
}
test()
