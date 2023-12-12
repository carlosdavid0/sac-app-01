import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config'; // Optional if you want to use default theme
import Login from '@screens/auth/Login';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Login /> 
    </GluestackUIProvider>
  );
}