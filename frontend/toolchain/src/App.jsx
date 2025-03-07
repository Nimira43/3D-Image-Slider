import { Button, Box, Text, Heading } from '@chakra-ui/react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading mb={4}>Toolchain</Heading>
        <Text>Experimental Redux Saga / Chakra UI / Blockchain Application</Text>
        <Button mt={4}>Find Out More</Button>
      </Box>
    </>
    
  )
}

export default App

