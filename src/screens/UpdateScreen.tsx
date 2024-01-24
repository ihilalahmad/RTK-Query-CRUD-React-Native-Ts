import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { UpdateScreenProps } from "../app-navigation/NavigationTypes";
import {
  useAddAnimalMutation,
  useUpdateAnimalMutation,
} from "../apis/ProductsApi";

const UpdateScreen = ({ navigation, route }: UpdateScreenProps) => {
  const { id, title, description, thumbnail } = route.params;
  const [animalTitle, setAnimalTitle] = useState("");
  const [animalDescription, setAnimalDescription] = useState("");
  const [animalThumbnail, setAnimalThumbnail] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
    setAnimalTitle(title);
    setAnimalDescription(description);
    setAnimalThumbnail(thumbnail);
  }, []);

  const [updateAnimal] = useUpdateAnimalMutation();

  const updateAnimalDetails = async () => {
    if (animalTitle === "") {
      return alert("Title should not be empty");
    } else if (animalDescription === "") {
      return alert("Description should not be empty");
    } else if (animalThumbnail === "") {
      return alert("Thumbnail should not be empty");
    } else {
      const animal = {
        id: id,
        title: animalTitle,
        description: animalDescription,
        thumbnail: animalThumbnail,
      };
      await updateAnimal(animal).then(() => {
        navigation.pop();
      });
    }
  };

  return (
    <View style={styles.styleMainContainer}>
      <Text style={styles.styleHeaderText}>{`Updating: ${title}`}</Text>
      <TextInput
        placeholder="Enter animal name"
        value={animalTitle}
        onChangeText={(input) => setAnimalTitle(input)}
        style={styles.styleInputField}
      />
      <TextInput
        placeholder="Enter animal description"
        value={animalDescription}
        onChangeText={(input) => setAnimalDescription(input)}
        style={styles.styleInputField}
      />
      <TextInput
        placeholder="Enter animal thumbnail url"
        value={animalThumbnail}
        onChangeText={(input) => setAnimalThumbnail(input)}
        style={styles.styleInputField}
      />
      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => updateAnimalDetails()}
      >
        <Text style={styles.styleButtonText}>Update Animal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  styleMainContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 24,
    // justifyContent: "center",
  },
  styleHeaderText: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
  },
  styleInputField: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 20,
  },
  styleButton: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    marginTop: 20,
    paddingLeft: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  styleButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});
