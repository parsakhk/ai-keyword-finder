import React from 'react'
import logo from '../assets/openai.png';
import { Box, Image, Text, Flex } from '@chakra-ui/react'

function Footer() {
  return (
    <Box marginBottom={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} marginRight={1} />
            <Text>Powered by Open Ai</Text>
        </Flex>
    </Box>
  )
}

export default Footer