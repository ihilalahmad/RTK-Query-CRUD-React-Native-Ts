import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useGetProductsQuery } from "../apis/ProductsApi";
import { HomeScreenProps } from "../app-navigation/NavigationTypes";
import AnimalListItem from "../components/AnimalListItem";

const ProductsScreen = ({ navigation }: HomeScreenProps) => {
  const { data, error, isLoading, isError, isFetching, isSuccess, refetch } =
    useGetProductsQuery();

  return (
    <View style={styles.styleMainContainer}>
      <Button
        title="Add New Animal"
        onPress={() => navigation.push("AddNewScreen")}
      />
      {isLoading && (
        <View>
          <ActivityIndicator size="large" color={"tomato"} />
        </View>
      )}
      {isError && <Text>Something went wrong</Text>}
      {isSuccess && (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <AnimalListItem {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  styleMainContainer: {
    flex: 1,
    // justifyContent: "center",
  },
});
