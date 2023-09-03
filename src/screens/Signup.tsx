import { VStack, Image, Box, ScrollView } from 'native-base'

import Logo from '../assets/Logo.jpg'
import { InputText } from '../components/InputText'
import { NavigationProps } from '../@types/navigation'
import { Title } from '../components/Title'
import { PrimaryButton } from '../components/PrimaryButton'
import { useState } from 'react'

export default function Signup({ navigation }: NavigationProps<'Signup'>) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function signup(){
        navigation.replace('Login')
        // const response = await createLogin(username)
        // if(resultado){
        //   const { token } = resultado
        //   AsyncStorage.setItem('token', token)
    
        //   const tokenDecodificado = jwtDecode(token) as TokenProps
        //   const pacienteId = tokenDecodificado.id
        //   AsyncStorage.setItem('pacienteId', pacienteId)
        //   navigation.replace('Tabs')
        // }
        // else{
        //   toast.show({
        //     title: "Erro no login",
        //     description: "O email ou senha não conferem",
        //     backgroundColor: "red.500"
        //   })
        // }
    }
    
    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} h="60" w="60" mt={10} alt="Logo Voll" alignSelf="center" />
    
            <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
            <Title>
                Signup
            </Title>
            <Box>
                <InputText
                label="Username"
                placeholder="Fill with your username"
                value={username}
                onChangeText={setUsername}
                />
                <InputText
                label="Password"
                placeholder="Fill with password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
            </Box>
            <PrimaryButton onPress={signup}>Confirm</PrimaryButton>

            </VStack>
        </ScrollView>
    )
}
