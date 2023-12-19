import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config'; // Optional if you want to use default theme
import HomeAuth from '@sac/src/screens/auth/Home';
import Login from './src/screens/auth/Login';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Login /> 
    </GluestackUIProvider>
  );
}