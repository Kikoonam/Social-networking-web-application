import { VStack,Flex,Text } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
   <VStack py={8} px={6} gap={4}>
    <SuggestedHeader/>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
				</Flex>
        <SuggestedUser/>
        <SuggestedUser/>
        <SuggestedUser/>


    </VStack>
  )
}

export default SuggestedUsers