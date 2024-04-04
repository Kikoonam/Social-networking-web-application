import { Container,Flex,Image,Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { AuthForm } from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0} >
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10"}>
             {/*Left hand-side */}
           <Box display={{base:"none",md:"block"}}>
                <Image src='' h={650} alt='image placeholder'/>
           </Box>
            {/*Right hand-side */}
           <VStack  spacing={4} align={"stretch"}>
                <AuthForm/>
               
           </VStack>

          </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage