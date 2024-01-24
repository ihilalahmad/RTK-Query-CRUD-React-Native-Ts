import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  AnimalDetailsProps,
  HomeScreenProps,
} from "../app-navigation/NavigationTypes";
import {
  useAddAnimalMutation,
  useDeleteAnimalMutation,
  useUpdateAnimalMutation,
} from "../apis/ProductsApi";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const AnimalListItem = (props: ProductProps) => {
  const { navigate } = useNavigation<HomeScreenProps>();
  const [deleteAnimal] = useDeleteAnimalMutation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate("AnimalDetails", {
          title: props.title,
          description: props.description,
          thumbnail: props.thumbnail,
        })
      }
    >
      <View style={styles.styleMainContainer}>
        <Image
          style={styles.styleProductImage}
          source={{ uri: props.thumbnail }}
        />
        <View style={styles.styleProductDetails}>
          <Text style={styles.styleTitle}>
            {props.title.length > 70
              ? props.title.substring(0, 70) + "..."
              : props.title}
          </Text>
          <Text style={styles.styleSubTitle}>
            {props.description.length > 100
              ? props.description.substring(0, 100) + "..."
              : props.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            color={"dodgerblue"}
            title="Edit"
            onPress={() => {
              navigate("UpdateScreen", {
                id: props.id,
                title: props.title,
                description: props.description,
                thumbnail: props.thumbnail,
              });
            }}
          />
          <Button
            color={"red"}
            title="Delete"
            onPress={() => deleteAnimal(props.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimalListItem;

const styles = StyleSheet.create({
  styleMainContainer: {
    flexDirection: "row",
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
  },
  styleProductImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    margin: 8,
  },
  styleProductDetails: {
    flexDirection: "column",
    marginLeft: 16,
    marginTop: 0,
    flex: 0.7,
  },
  styleTitle: {
    fontSize: 20,
    width: "80%",
    color: "black",
    overflow: "hidden",
  },
  styleSubTitle: {
    fontSize: 14,
    color: "grey",
    width: "100%",
    overflow: "hidden",
  },
});
