import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
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
    <div>
      <Box bg='#ff4500' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading size='md' className='logo'>Toolchain</Heading>
          <Spacer />
          <Button
            className='btn-black'
            onClick={handleAuthClick}
          >
            {isLoggedIn
              ? 'Logout'
              : 'Login'
            }
          </Button>
        </Flex>
      </Box>      
    </div>
  )
}

export default Navbar
