import { ArrowRightIcon, HStack, Input, InputIcon, View } from '@gluestack-ui/themed'
import { InputField } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { ScrollView } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'
import { Heading, Icon, VStack } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import Navigation from '@sac/src/components/Navigation'
import { StatusBar } from 'expo-status-bar'
import { EyeIcon } from 'lucide-react-native'
import React, { useState, useRef, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'

export function Login() {
    const inputRef = useRef<any>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const { navigate } = useNavigation()


    function handleNextStep() {
        navigate('Login-senha')
    }

    const mask = (value: string) => {
        let v = value.replace(/\D/g, '');

        // Adicione o limite para o CNPJ
        const cnpjLimit = 14;

        if (v.length <= 11) {
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        } else {
            // Ajuste para limitar o CNPJ
            if (v.length > cnpjLimit) {
                v = v.substring(0, cnpjLimit);
            }

            v = v.replace(/^(\d{2})(\d)/, '$1.$2');
            v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
            v = v.replace(/(\d{4})(\d)/, '$1-$2');
        }

        return v;
    }

    return (
        <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps={'always'}>
            <VStack py={'20%'} pl={'5%'} pr={'2%'} space='2xl'>
                <Navigation />
                <StatusBar style="dark" translucent />

                <Heading fontWeight='$semibold' fontSize={'$2xl'}>
                    Bom te ver por aqui! Digite seu CPF ou CNPJ para acessar o aplicativo.
                </Heading>

                <Input
                    isFocused
                    variant="underlined"
                    size="lg"
                >
                    <InputField
                        onChangeText={(value) => {
                            inputRef.current?.setNativeProps({ text: mask(value) })
                        }}
                        autoFocus={true}
                        ref={inputRef}
                        placeholder="000.000.000.00 ou 00.000.000/0000-00"
                        size='lg'
                        keyboardType='number-pad'
                        fontWeight='$bold'
                    />
                </Input>

                <VStack space={'3xl'}>
                    <TouchableOpacity>
                        <HStack alignItems='center'>
                            <Text fontWeight='$medium' fontSize={'$md'}>É novo por aqui? Seja nosso cliente</Text>
                            <Icon as={ArrowRightIcon} m="$2" w="$6" h="$6" color='$primary800' />
                        </HStack>
                    </TouchableOpacity>

                    <View alignItems='flex-end' mr={'2%'}>


                        <Button rounded={'$full'} w={50} h={50} size='lg' onPress={handleNextStep}>
                            <Icon as={ArrowRightIcon} m="$2" w="$6" h="$6" color='$white' />
                        </Button>
                    </View>
                </VStack>
            </VStack>
        </ScrollView>
    );
}


export function LoginPassword() {
    const inputRef = useRef<any>(null);

  useEffect(() => {
        inputRef.current?.focus();
  },[])

    return (
        <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps={'always'}>
            <VStack py={'20%'} pl={'5%'} pr={'2%'} space='2xl'>
                <Navigation />
                <StatusBar style="dark" translucent />

                <Heading fontWeight='$semibold' fontSize={'$2xl'}>
                    Agora digite sua senha
                </Heading>

                <Input
                    isFocused
                    alignItems='center'
                    variant="underlined"
                    size="lg"

                >
                    <InputField
                        type='password'
                        keyboardType='web-search'
                        autoFocus={true}
                        ref={inputRef}
                        placeholder="Digite sua senha"
                        size='lg'
                        fontWeight='$bold'
                    />

                    <InputIcon
                        as={EyeIcon}
                        color="$darkBlue500"
                    />
                </Input>

                <VStack space={'3xl'}>
                    <TouchableOpacity>
                        <HStack alignItems='center'>
                            <Text fontWeight='$medium' fontSize={'$md'}>É novo por aqui? Seja nosso cliente</Text>
                            <Icon as={ArrowRightIcon} m="$2" w="$6" h="$6" color='$primary800' />
                        </HStack>
                    </TouchableOpacity>

                    <View alignItems='flex-end' mr={'2%'}>


                        <Button rounded={'$full'} w={50} h={50} size='lg'>
                            <Icon as={ArrowRightIcon} m="$2" w="$6" h="$6" color='$white' />
                        </Button>
                    </View>
                </VStack>
            </VStack>
        </ScrollView>
    );
}



