import { Image, Box, ScrollView } from 'native-base'

import Logo from '../assets/Logo.jpg'
import { InputText } from '../components/InputText'
import { NavigationProps } from '../@types/navigation'

export default function Signup({ navigation }: NavigationProps<'Signup'>) {

    return (
        <ScrollView flex={1} p={5}>
          <Image source={Logo} h="50" w="50" alt="Logo Voll" alignSelf="center" />
    
          <Box>
                {/* <InputText 
                label={entrada.label} 
                placeholder={entrada.placeholder} 
                key={entrada.id} 
                secureTextEntry={entrada.secureTextEntry}
                value={dados[entrada.name]}
                onChangeText={(text) => atualizarDados(entrada.name, text)}
                /> */}
          </Box>
        </ScrollView>
    )
}
