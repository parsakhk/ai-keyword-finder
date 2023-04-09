import React, {useState} from 'react'

import { Textarea, Button, useToast } from '@chakra-ui/react'

function InputBox({ extractKeyWords }) {
    const [text, setText] = useState('');
    const toast = useToast();

    // Submit things from the text box
    const SubmitText =() => {
        if(text === '') {
            //Toast is the warning component
            toast({
                title: 'Text field is empty',
                description: 'Please provide some text',
                status: 'error',
                duration: 5000,
                isClosable: false
            })
        } 
        extractKeyWords(text);
    }

  return (
    <>
        <Textarea bg='blue.400' color='white' padding={4} marginTop={6} height={200} value={text} onChange={(e) => setText(e.target.value)}/> 
        <Button bg='blue.500' color='white' marginTop={4} width='100%' _hover={{bg:'blue.700'}} onClick={SubmitText}>
            Extract Keywords
        </Button>
    </>
  )
}

export default InputBox