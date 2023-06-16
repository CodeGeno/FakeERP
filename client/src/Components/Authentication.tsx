import React, { useEffect, useState } from 'react'
import Wrapper from '../styles/AuthWrapper'
import Alert from './Alert'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

function Authentication() {
  interface credentials {
    email: string
    password: string
  }
  const navigate = useNavigate()
  const initialState: credentials = { email: '', password: '' }
  const { registerUser, loginUser, userDetail } = useAppContext()
  const [user, setUser] = useState<credentials>(initialState)
  const [isRegistering, setIsRegistering] = useState<boolean>(false)
  useEffect(() => {
    if (userDetail) {
      setTimeout(() => {
        navigate(`/menu`)
      }, 3000)
    }
  }, [userDetail, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    if (isRegistering) {
      if (registerUser && ValidateEmail(user.email)) {
        registerUser(user.email, user.password)
      }
    } else {
      if (user && ValidateEmail(user.email)) {
        loginUser(user.email, user.password)
      }
    }
  }
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }

    return false
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
            type='email'
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
              <button
                className='register-btn'
                onClick={() => {
                  setIsRegistering(!isRegistering)
                }}
              >
                {isRegistering ? 'Cancel' : 'Register'}
              </button>
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
