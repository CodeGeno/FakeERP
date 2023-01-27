import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Wrapper from '../styles/AuthWrapper'
import Alert from './Alert'
import { useAppContext } from '../context/appContext'
const submitReview = () => {}
function Authentication() {
  interface credentials {
    email: string
    password: string
  }

  const initialState: credentials = { email: '', password: '' }
  const { registerUser } = useAppContext()
  const [user, setUser] = useState(initialState)
  const [isRegistering, setIsRegistering] = useState<boolean>(false)

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    if (isRegistering) {
      if (registerUser) {
        registerUser(user.email, user.password)
      }
    } else {
      console.log('login')
    }
  }
  return (
    <Wrapper>
      <div className='App'>
        <form className='form' onSubmit={handleSubmit}>
          <h1>{isRegistering ? 'Registration' : 'Authentication'}</h1>
          <Alert />
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            name='email'
            className='form-input'
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-input'
            value={user.password}
            onChange={handleChange}
          />
          <div className='password-section'>
            <button className='btn' type='submit'>
              {isRegistering ? 'Register' : 'Login'}
            </button>
            <div className='register-section'>
              <p className='register-text'>No account yet?</p>
              <div
                className='register-btn'
                onClick={() => {
                  setIsRegistering(!isRegistering)
                }}
              >
                {isRegistering ? 'Cancel' : 'Register'}
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Authentication
// const submitReview = () => {
//   axios
//     .post('http://localhost:3001/api/insert', {
//       movieName: name,
//       review: Number(review),
//     })
//     .then(() => {
//       alert('success')
//     })
// }
// const fetchData = () => {
//   axios.post('http://localhost:3001/api/get', {
//     movieName: name,
//     review: Number(review),
//   })
// }
