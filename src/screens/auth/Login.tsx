import { VStack, Text, Heading, Button } from "@gluestack-ui/themed"
import React from 'react'
import { Video } from 'expo-av'
export default function Login() {
    return (
        <VStack flex={1} bg="$purple800" px={10} py={'20%'} justifyContent="space-between">
        
        <Video
        source={{ 
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
        style={{ flex: 1 }}
        shouldPlay
        isMuted
        useNativeControls
        
      />
            <VStack>
                <Heading fontWeight="$semibold" fontSize={'$3xl'} color="$coolGray200">
                   
                </Heading>
            </VStack>
            <VStack gap={10}>
                <Button>
                    <Text>
                        <Heading fontWeight="$semibold" color="$coolGray200">
                            Central do Cliente
                        </Heading>
                    </Text>
                </Button>
                <Button>
                    <Text>
                        <Heading fontWeight="$semibold" color="$coolGray200">
                            Central do Cliente
                        </Heading>
                    </Text>
                </Button>
            </VStack>
        </VStack >
    )
}