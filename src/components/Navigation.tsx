import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, Icon } from '@gluestack-ui/themed';

type Props = {
    customRoute?: string;
};

const Navigation: React.FC<Props> = ({ customRoute }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (customRoute) {
            navigation.navigate(customRoute as never);
        } else {
            navigation.goBack();
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
                <Icon as={ChevronLeftIcon} w="$6" h="$6" />
        </TouchableOpacity>
    );
};

export default Navigation;
