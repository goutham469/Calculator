import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

import HomeScreen from "../screens/HomeScreen";
import SimpleInterestScreen from "../screens/SimpleInterestScreen";
import CompoundInterestScreen from "../screens/CompoundInterestScreen";


export default function AppNavigator()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SimpleInterest" component={SimpleInterestScreen} />
        <Stack.Screen name="CompoundInterest" component={CompoundInterestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}