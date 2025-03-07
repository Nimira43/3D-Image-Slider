import { Box, Flex, Heading } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <Box bg='#ff4500' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading size='md' className='logo'>Toolchain</Heading>
        </Flex>
      </Box>      
    </div>
  )
}

export default Navbar
