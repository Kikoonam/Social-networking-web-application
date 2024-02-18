import { Flex,Avatar,Box,VStack, Button } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({followers,name,avatar}) => {

  const { isFollowed,setIsFollowed } = useState(false)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
        {/* <Link to={`/${user.username}`}> */}
					<Avatar src={avatar} size={"md"} />
				{/* </Link> */}
        <VStack spacing={2} alignItems={"flex-start"}>
					{/* <Link to={`/${user.username}`}> */}
						<Box fontSize={12} fontWeight={"bold"}>
							{/* {user.fullName} */}
              {name}
						</Box>
					{/* </Link> */}
					<Box fontSize={11} color={"gray.500"}>
						{followers} followers
					</Box>
				</VStack>

      </Flex>
      <Button
      fontSize={13}
      bg={"transparent"}
      p={0}
      h={"max-content"}
      fontWeight={"medium"}
      color={"blue.400"}
      cursor={"pointer"}
      _hover={{ color: "white" }}
      onClick={()=>{
        setIsFollowed(!isFollowed)
      }}>
        {isFollowed ?'Unfollowed':"Followed"}
      </Button>
    </Flex>
  )
}

export default SuggestedUser