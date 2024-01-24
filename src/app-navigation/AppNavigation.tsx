import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import AddNewScreen from "../screens/AddNewScreen";
import UpdateScreen from "../screens/UpdateScreen";
import { MainStackParamList } from "./NavigationTypes";
import AnimalDetailScreen from "../screens/AnimalDetailScreen";

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainStackGroup() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <MainStack.Screen
        name="AnimalDetails"
        component={AnimalDetailScreen}
        options={{ title: "Animal Details", presentation: "modal" }}
      />
      <MainStack.Screen
        name="AddNewScreen"
        component={AddNewScreen}
        options={{
          title: "Add New Animal",
          presentation: "modal",
        }}
      />
      <MainStack.Screen
        name="UpdateScreen"
        component={UpdateScreen}
        options={{
          title: "Update Details",
          presentation: "modal",
        }}
      />
    </MainStack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainStackGroup />
    </NavigationContainer>
  );
}
