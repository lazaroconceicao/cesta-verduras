import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import moks from './src/moks/cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...moks} />
    </SafeAreaView>
  );
}
