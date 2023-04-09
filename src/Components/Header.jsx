import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'

import logo from '../assets/light-bulb.svg'

function Header() {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
        <Heading color='white' marginBottom="1rem">
            AI Word Extractor
        </Heading>
        <Text fontSize="24" textAlign="center">
            Paste your text below and we'll extract the best keywords for u!

        </Text>
    </>
  )
}

export default Header