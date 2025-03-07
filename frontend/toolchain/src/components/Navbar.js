import {login, logout } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const handleAuthClick = () => {
    if (isLoggedIn) {
      dispatch(logout())
    } else {
      dispatch(login())
    }
  }

  return (
    <div className='navbar'>
      <h1 className='logo'>Toolchain</h1>
        <button
          className='btn-black'
          onClick={handleAuthClick}
        >
          {isLoggedIn
            ? 'Logout'
            : 'Login'
          }
        </button>
    </div>      
  )
}

export default Navbar
