import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({createdAt,username, profilePic,text}) => {
  return (
    <Flex>
        <Link>
            <Avatar src={profilePic}/>
        </Link>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={"center"}>
                <Link>
                   <Text fontWeight={"bold"}  fontSize={12}>
                        {username}
                   </Text>
                </Link>
                <Text fontSize={14}>
                    {text}
                </Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>
                {createdAt}
            </Text>
        </Flex>
    </Flex>
  )
}

export default Comment