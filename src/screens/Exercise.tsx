import { VStack, Box, ScrollView, Text, Divider, Image } from "native-base";
import { Title } from "../components/Title";
import { exercises, workouts } from "../utils/mock";

export default function Exercise({ route, navigation }: any) {
    const { divisionId } = route.params
    const divisionExercises = exercises.filter((exercise) => exercise.division === divisionId);

    return (
        <ScrollView flex={1} bgColor="white">
        <VStack flex={1} alignItems="center" p={5}>
            <Title color="blue.800" pt={5} alignSelf="center">Workouts</Title>
            <Divider mt={5} />
            <VStack space={2} divider={<Divider />} w="100%">
            {
                divisionExercises.map(exercise => (
                <VStack key={exercise.id}>
                    <Box w="100%" borderRadius="lg" p={3}>
                        <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">{exercise.title}</Text>
                    </Box>
                    {/* {
                        const exerciseWorkouts = workouts.filter((workout) => workout.exercise === exercise.id);
                        exerciseWorkouts.map(workout => (
                            <VStack key={workout.id}>
                            <Box w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">Series {workout.series}</Text>
                            </Box>
                            <Box w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.500" fontSize="md" fontWeight="bold" alignSelf="center" mt="2">Reps {workout.reps}</Text>
                            </Box>
                            </VStack>
                        ))
                    } */}
                    <Box w="100%" h="200">
                        <Image flex={1} resizeMode="contain" source={{ uri: exercise.image }} alt="exercise" />
                    </Box>
                </VStack>
                ))
            }
            </VStack>
            <Divider mt={5} />
        </VStack>
        </ScrollView>
    );
}