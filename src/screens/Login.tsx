import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { InputText } from '../components/InputText';
import { Title } from '../components/Title';
import { useEffect, useState } from 'react';
import { createLogin } from '../services/Auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { NavigationProps } from '../@types/navigation';
import Logo from '../assets/Logo.jpg'

export default function Login({ navigation } : NavigationProps<'Login'>) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    setLoading(false)
    // navigation.replace('Tabs')
    // async function verifyLogin(){
    //   const token = await AsyncStorage.getItem('token')
    //   if(token){
    //     navigation.replace('Tabs')
    //   }
    // }
    // verifyLogin()
  },[])

  async function login(){
    navigation.replace('Tabs')
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

  if(loading){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} h="60" w="60" mt={10} alt="Logo Voll" alignSelf="center" />

      <Title>
        Ficha de treino
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
      <PrimaryButton onPress={login}>Sign In</PrimaryButton>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Do not have login? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text color="blue.500">
            Sign up!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}