import { VStack, Text, Heading, Button, Center } from "@gluestack-ui/themed"
import React, { useState } from 'react'
import { Video, ResizeMode } from 'expo-av'
import { Dimensions, Image } from "react-native"
import { StatusBar } from "expo-status-bar"
export default function () {

    // const handleVideoError = (error: string) => {
    //     console.error("Erro na reprodução do vídeo:", error);
    //     // setVideoError(true); // Sinaliza que ocorreu um erro na reprodução do vídeo
    // };

    const [videoLoaded,setVideoLoaded] = useState(false)


    return (
        <VStack flex={1} bg="$purple800" px={10} py={'20%'} justifyContent="space-between">
            <StatusBar style="light"/>
            <Video
                source={{
                    //uri: '../../../assets/video-home-auth.mp4',
                    uri: 'https://res.cloudinary.com/dsolucoes/video/upload/v1702476808/pooc-sac/sac-01/video-home-auth_un1lc1.mp4',
                    overrideFileExtensionAndroid: 'video/avc',
    
                }}
                style={{ flex: 1, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, opacity: videoLoaded? 1:0 }}
                shouldPlay
                
                isLooping
                resizeMode={ResizeMode.COVER}
                onError={()=>{}}
                onLoad={()=> setVideoLoaded(true)}

            />
            <Image
                source={require('../../../assets/video-home-auth.png')}
                style={{ flex: 1, width: Dimensions.get(`screen`).width, height: Dimensions.get(`screen`).height, position: 'absolute', opacity:videoLoaded? 0:1  }}
                resizeMode='cover'
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
                    opacity: .8,
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
                        <Heading fontWeight="$semibold" color="$coolGray200">
                            Acessar conta
                        </Heading>
                    </Button>
                    <Button variant="outline">
                        <Heading fontWeight="$semibold" color="$coolGray200">
                            Seja nosso cliente
                        </Heading>
                    </Button>

                    <Center>
                        <Text>Versão 1.0.0</Text>
                    </Center>
                </VStack>
            </VStack>
        </VStack>
    )
}
