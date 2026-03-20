import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen()
{
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Button
        title="Simple Interest"
        onPress={() => navigation.navigate("SimpleInterest")}
      />

      <Button
        title="Compound Interest"
        onPress={() => navigation.navigate("CompoundInterest")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    button:{
        width:100,
        margin:10
    }
})