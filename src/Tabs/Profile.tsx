import { VStack, Avatar, Divider } from 'native-base'
import { Title } from '../components/Title'
import { NavigationProps } from '../@types/navigation'

import { profiles } from './../utils/mock'
import { PrimaryButton } from '../components/PrimaryButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile({ navigation }: NavigationProps<'Profile'>){

  const profile = profiles[0]

  function logout(){
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('profileId')
    navigation.replace('Login')
  }


  return(
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Title color="blue.500">Meu Perfil</Title>
      <Divider mt={5} />

      <Avatar size="xl" source={{ uri: profile?.image }} mt={5} />

      <Title fontSize="lg" mb={1}>{profile.id}</Title>

      <PrimaryButton onPress={logout}>
          Logout
        </PrimaryButton>
    </VStack>
  )
}