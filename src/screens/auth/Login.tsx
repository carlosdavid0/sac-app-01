import { ArrowRightIcon, HStack, Input, View } from '@gluestack-ui/themed'
import { InputField } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { ArrowLeftIcon } from '@gluestack-ui/themed'
import { ScrollView } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'
import { ChevronLeftIcon, Heading, Icon, VStack } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import React, { useState, useRef } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

export default function Login() {
    const inputRef = useRef<any>(null);

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


    // validator of cpf and cnpj

    function validate(data: string) {
        let cpf = data.replace(/\D/g, '');
        let cnpj = data.replace(/\D/g, '');

        if (cpf.length === 11) {
            let sum;
            let rest;
            sum = 0;

            if (cpf === "00000000000") return false;

            for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            rest = (sum * 10) % 11;

            if ((rest === 10) || (rest === 11)) rest = 0;
            if (rest !== parseInt(cpf.substring(9, 10))) return false;

            sum = 0;
            for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            rest = (sum * 10) % 11;

            if ((rest === 10) || (rest === 11)) rest = 0;
            if (rest !== parseInt(cpf.substring(10, 11))) return false;
            return true;
        } else if (cnpj.length === 14) {
            let size = cnpj.length - 2
            let numbers = cnpj.substring(0, size);
            let digits = cnpj.substring(size);
            let sum = 0;
            let pos = size - 7;

            for (let i = size; i >= 1; i--) {
                sum += parseInt(numbers.charAt(size - i)) * pos--;
                if (pos < 2) pos = 9;
            }

            let result = sum % 11 < 2 ? 0 : 11 - sum % 11;

            if (result !== parseInt(digits.charAt(0))) return false;

            size = size + 1;
            numbers

        }
    }


    return (
        <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps={'always'}>
            <VStack py={'20%'} pl={'5%'} pr={'2%'} space='2xl'>
                <Icon as={ChevronLeftIcon} w="$6" h="$6" />
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


                        <Button rounded={'$full'} w={50} h={50} size='lg'>
                            <Icon as={ArrowRightIcon} m="$2" w="$6" h="$6" color='$white' />
                        </Button>
                    </View>
                </VStack>
            </VStack>
        </ScrollView>
    );
}
