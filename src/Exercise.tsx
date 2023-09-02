import { VStack, Box, ScrollView, Text, Divider, Input } from "native-base";
import { TouchableOpacity } from 'react-native';
import { Title } from "./components/Title";
import { exercises } from "./utils/mock";
import { workouts } from "./utils/mock";

export default function Exercise({ route, navigation }: any) {
    const { divisionId } = route.params
    const exercise = exercises.filter((division) => division.id === divisionId)[0];

    const workout = workouts.filter((exercise) => exercise.id === exercise.id)[0];

    return (
        <ScrollView flex={1} bgColor="white">
        <VStack flex={1} alignItems="center" p={5}>
            <Title color="blue.800" pt={5} alignSelf="center">Workouts</Title>
            <Divider mt={5} />
            <VStack space={2} divider={<Divider />} w="100%">
            <VStack key={exercise.id}>
                <Box w="100%" borderRadius="lg" p={3}>
                    <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">{exercise.title}</Text>
                </Box>
                <Box w="100%" borderRadius="lg" p={3}>
                    <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">Series {workout.series}</Text>
                </Box>
                <Box w="100%" borderRadius="lg" p={3}>
                    <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">Reps {workout.reps}</Text>
                </Box>
            </VStack>
            </VStack>
            <Divider mt={5} />
        </VStack>
        </ScrollView>
    );
}