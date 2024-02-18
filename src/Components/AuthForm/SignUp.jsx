import { Button, Input } from "@chakra-ui/react"

const SignUp = () => {
  return (
    <>
    <Input placeholder="Email" type="email" fontSize={14} 
             value={inputs.email} 
             onChange={(e)=>{setInputs({...inputs,email:e.target.value})}} />
   <Input placeholder="Password" type="password" fontSize={14}
          value={inputs.password}
          onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>

   <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14} >
           Sign Up
         </Button>

   </>
  )
}

export default SignUp