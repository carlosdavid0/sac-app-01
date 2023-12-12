import { VStack, Text, Heading, Button } from "@gluestack-ui/themed"
import React from 'react'
import { Video,ResizeMode } from 'expo-av'
export default function HomeAuth() {
    return (
        <VStack flex={1} bg="$purple800" px={10} py={'20%'} justifyContent="space-between">

            <Video
                source={require('../../../assets/video-home-auth.mp4')}
                style={{ flex: 1, position: 'absolute', top: 0, left: 0, bottom: 0, right:0 }}
                shouldPlay
                isMuted
                isLooping
                resizeMode={ResizeMode.COVER}
            />

            {/* Overlay com cor */}
            <VStack
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    opacity: .7,
                    backgroundColor: '#000000'

                }}
            />

            <VStack>
                <Heading fontWeight="$semibold" fontSize={'$3xl'} color="$coolGray200">
                    CBA.dev
                </Heading>
            </VStack>

            <VStack gap={20}>
                <VStack py={10}>
                    <Heading color={'$white'} fontSize={'$2xl'}>
                        Bem vindo a cBA.dev
                    </Heading>
                    <Text color="$trueGray100" fontWeight="$light">
                        Transformando Ideias em Realidade Digital.
                    </Text>
                </VStack>
                <VStack gap={10}>
                    <Button>
                        <Text>
                            <Heading fontWeight="$semibold" color="$coolGray200">
                                Acessar conta
                            </Heading>
                        </Text>
                    </Button>
                    <Button variant="outline">
                        <Text>
                            <Heading fontWeight="$semibold" color="$coolGray200">
                                Seja nosso cliente
                            </Heading>
                        </Text>
                    </Button>
                </VStack>
            </VStack>
        </VStack>
    )
}
