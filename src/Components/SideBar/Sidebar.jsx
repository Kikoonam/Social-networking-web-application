import {  Box, Flex, Tooltip,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InstagramLogo, } from "../../assets/constants";
import SidebarItems from "./SidebarItems";
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {

  // const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"70px"}
      borderBottom={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={{ base: 3, md: 5 }}
      position={"sticky"}
      left={0}
      px={8}
    >
      <Flex direction={"row"} gap={20} height={"full"}>
        <Link
          to={"/"}
          pl={4}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
       
        </Link>
        <Flex direction={"row"} gap={20} cursor={"pointer"} margin={"right"}>
					<SidebarItems />
				</Flex>
        <Flex direction={"row"} gap={20} cursor={"pointer"} margin={"right"}>
        <Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex 
						// onClick={handleLogout}
						alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							// isLoading={isLoggingOut}
						>
							Logout
						</Button>
					</Flex>
          
				</Tooltip>
        </Flex>
       
      </Flex>
    </Box>
  );
};

export default Sidebar;
