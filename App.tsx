import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppNavigation from "./src/app-navigation/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      {/* <SafeAreaView style={styles.container}>
        <ProductsScreen />
        <StatusBar style="auto" />
      </SafeAreaView> */}
      <AppNavigation />
    </Provider>
  );
}
