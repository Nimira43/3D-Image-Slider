import { Box, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Text>Experimental Redux Saga / Chakra UI / Blockchain Application</Text>
      </Box>
    </>
    
  )
}

export default App

