import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <Box bg='#ff4500' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading size='md' className='logo'>Toolchain</Heading>
          <Spacer />
          <Button colorScheme='black' className='btn-black'>Login</Button>
        </Flex>
      </Box>      
    </div>
  )
}

export default Navbar
