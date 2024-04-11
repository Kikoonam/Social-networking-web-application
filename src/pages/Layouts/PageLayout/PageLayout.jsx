import { Flex,Box, VStack, Spinner } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Sidebar from "../../../Components/SideBar/Sidebar"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase/firebase"
import Navbar from "../../../Components/NavBar/Navbar"


const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user,loading]=useAuthState(auth)
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";

    const checkingUserIsAuth = !user && loading;
	if (checkingUserIsAuth) return <PageLayoutSpinner />;

   return (
   <VStack spacing={4}
   align='stretch'>
    {/* Side bar on the top  */}
   {canRenderSidebar ? (
				<Box>
					<Sidebar />
				</Box>
			) : null}
   {/* Navbar */}
   {canRenderNavbar ? <Navbar /> : null}
    {/* content on the right */}
    <Box w={{base:"full",md:"calc(100%-70)"}}> 
        {children}
    </Box>

   </VStack>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};