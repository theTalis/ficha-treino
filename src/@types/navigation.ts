import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type ListaTelas = {
  Login: undefined;
  Principal: undefined;
  Profile: undefined;
  Tabs: undefined;
}

export type NavigationProps< T extends keyof ListaTelas > = {
  navigation: NativeStackNavigationProp<ListaTelas, T>;
  route: RouteProp<ListaTelas, T>
}