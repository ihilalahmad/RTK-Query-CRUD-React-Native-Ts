import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamList = {
  HomeScreen: undefined;
  AnimalDetails: {
    title: string;
    description: string;
    thumbnail: string;
  };
  AddNewScreen: undefined;
  UpdateScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "HomeScreen"
>;

export type AnimalDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  "AnimalDetails"
>;

export type AddNewScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "AddNewScreen"
>;

export type UpdateScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "UpdateScreen"
>;
