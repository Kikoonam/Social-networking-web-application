import { Container, Flex, Skeleton, VStack,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    },[])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx)=>(
           < VStack key={idx} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
                <Skeleton height='10px' w={'200px'}/>
                <Skeleton height='10px' w={'200px'}/>
                <Skeleton height='10px' w={'200px'}/>
            </Flex>
            <Skeleton w={"full"}>
                <Box h={'500px'}>Content Wrapped</Box>
            </Skeleton>

           </VStack>
        ))}
        <FeedPost username='kikoonam' img='/img1.png' avatar='/img1.png'/>
        <FeedPost username='jennie' img='/img2.png' avatar='/img2.png'/>
        <FeedPost username='jisoo' img='/img3.png' avatar='/img3.png'/>
        <FeedPost username='lisa' img='/img4.png' avatar='/img4.png'/>

    </Container>
  )
}

export default FeedPosts