import { NativeStackScreenProps } from "@react-navigation/native-stack";

type AuthRoutesStackParamList = {
    Home: undefined;
    "Login-documento": undefined;
    "Login-Senha": {documento: string}
  };


 export type AuthRoutesProps = NativeStackScreenProps<AuthRoutesStackParamList, 'Home'>;

