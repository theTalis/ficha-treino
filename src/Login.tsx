import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { PrimaryButton } from './components/PrimaryButton';
import { InputText } from './components/InputText';
import { Title } from './components/Title';
import { useEffect, useState } from 'react';
import { createLogin } from './services/Auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { NavigationProps } from './@types/navigation';

export default function Login({ navigation } : NavigationProps<'Login'>) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verificarLogin(){
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  },[])

  interface TokenProps {
    token: string;
    id: string;
  }

  async function login(){
    const resultado = await createLogin(email, senha)
    if(resultado){
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as TokenProps
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    }
    else{
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if(carregando){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Title>
        Faça login em sua conta
      </Title>
      <Box>
        <InputText
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>
      <PrimaryButton onPress={login}>Entrar</PrimaryButton>
    </VStack>
  );
}