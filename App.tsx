import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config'; // Optional if you want to use default theme


import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from '@routes/auth.routes';

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <AuthRoutes />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}