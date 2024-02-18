import {
  Box,
  Button,
  Flex,
  Input,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    email:'',
    password:'',
    comfirmPassword:''

  })
  const handleAuth=()=>{
    if(!inputs.email || !inputs.password ){
      alert('Please fill all the fields');
      return;
    }
    navigate('/');

  }
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="logo" />
          <Input placeholder="Email" type="email" fontSize={14} 
              value={inputs.email} 
              onChange={(e)=>{setInputs({...inputs,email:e.target.value})}} />
          <Input placeholder="Password" type="password" fontSize={14}
           value={inputs.password}
           onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>

          {!isLogin ? (
            <Input placeholder="Comfirm Password" fontSize={14}
            value={inputs.comfirmPassword} 
            type="password"
            onChange={(e)=>{setInputs({...inputs,comfirmPassword:e.target.value})}} />
          ) : null}
          <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
            {/* --------------OR----------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
            <Text color={"white"} mx={1}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>

          </Flex>

          {/* ----------------Sign in with Google-------------------- */}
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image src="/google.png" h={30} / >
            <Text mx={3} color={"blue.500"}>Log in  with google</Text>
          </Flex>
        </VStack>

         {/* ------------Switch between Login and log out -----------------*/}
        
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                  {isLogin ?"Don't have an account?":"Already have an account"}
                </Box>
                <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ?"Sign up":"Log In"}
                </Box>
              </Flex>

            </Box>
    </>
  );
};
