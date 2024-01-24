import { Image, StyleSheet, Text, View } from "react-native";
import { AnimalDetailsProps } from "../app-navigation/NavigationTypes";
import { useLayoutEffect } from "react";

const AnimalDetailScreen = ({ navigation, route }: AnimalDetailsProps) => {
  const { title, description, thumbnail } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);

  return (
    <View style={styles.stylMainContainer}>
      <Image style={styles.styleImage} source={{ uri: thumbnail }} />
      <Text style={styles.styleTitle}>{title}</Text>
      <Text style={styles.styleDescription}>{description}</Text>
    </View>
  );
};

export default AnimalDetailScreen;

const styles = StyleSheet.create({
  stylMainContainer: {
    flex: 1,
    // alignItems: "center",
    marginTop: 0,
  },
  styleImage: {
    width: "100%",
    height: 300,
  },
  styleTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 24,
    marginLeft: 16,
  },
  styleDescription: {
    fontSize: 16,
    fontWeight: "200",
    marginTop: 8,
    marginLeft: 16,
  },
});
