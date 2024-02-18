import { Flex,Box, VStack } from "@chakra-ui/react"

import { useLocation } from "react-router-dom"
import Sidebar from "../../../Components/SideBar/sidebar"


const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
   <VStack spacing={4}
   align='stretch'>
    {/* Side bar on the top  */}
   {pathname !== '/auth' ?(
    <Box>
        <Sidebar/>
    </Box>
   ):null }
    {/* content on the right */}
    <Box w={{base:"full",md:"calc(100%-70)"}}> 
        {children}
    </Box>

   </VStack>
  )
}

export default PageLayout