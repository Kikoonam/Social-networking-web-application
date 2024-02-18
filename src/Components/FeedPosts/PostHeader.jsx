import React from 'react'
import { Avatar, Box, Button, Flex } from '@chakra-ui/react'

const PostHeader = ({username,avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={1}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={avatar} alt={username} size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={"2"}>
                 {username}
                <Box color={"gray.500"}>.1w</Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
           <Button
           size={"xs"}
           bg={"transparent"}
           fontSize={12}
           color={"blue.500"}
           fontWeight={"bold"}
           _hover={{
               color: "white",
           }}
           transition={"0.2s ease-in-out"}
        // onClick={handleFollowUser}
        //    isLoading={isUpdating}
        >
            Unfollow
           </Button>
        </Box>

    </Flex>
  )
}

export default PostHeader