import { Flex,Box,Avatar,Text,Button } from "@chakra-ui/react"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={'center'} w={'full'}>
        <Flex alignItems={"center"} gap={2}>
				{/* <Link to={`${authUser.username}`}> */}
					<Avatar size={"lg"} src='/img1.png' />
				{/* </Link> */}
				{/* <Link to={`${authUser.username}`}> */}
					<Text fontSize={12} fontWeight={"bold"}>
						kikoonam
					</Text>
				{/* </Link> */}
			</Flex>
            <Button
				size={"xs"}
				background={"transparent"}
				_hover={{ background: "transparent" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				// onClick={handleLogout}
				// isLoading={isLoggingOut}
				cursor={"pointer"}
			>
				Log out
			</Button>
    </Flex>
  )
}

export default SuggestedHeader