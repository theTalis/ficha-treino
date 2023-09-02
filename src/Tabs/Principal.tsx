import { VStack, Box, ScrollView, Text, Divider, Input } from "native-base";
import { TouchableOpacity } from 'react-native';
import { Title } from "../components/Title";
import { divisions } from "../utils/mock";

export default function Principal({ navigation }: any){

  function openExercises(divisionId: number) {
    navigation.navigate('Exercise', { divisionId: divisionId })
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.800" pt={5} alignSelf="center">Workouts</Title>
        <Divider mt={5} />
        <VStack space={2} divider={<Divider />} w="100%">
          {
            divisions.map(division => (
              <VStack key={division.id}>
                <TouchableOpacity onPress={() => openExercises(division.id)}>
                  <Box w="100%" borderRadius="lg" p={3}>
                    <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">{division.title}</Text>
                  </Box>
                </TouchableOpacity>
              </VStack>
            ))
          }
        </VStack>
        <Divider mt={5} />
      </VStack>
    </ScrollView>
  );
}