import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Hotels } from "../assets";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Details = ({ route }) => {
  //Remove Header//
  const navigation = useNavigation();
  const { data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View>
        <View className="mx-3 shadow-lg">
          <View className="shadow-md border-1 border border-gray-100 rounded-2xl">
            <Image
              source={{ uri: data?.photo?.images?.original?.url }}
              className="w-full h-[400px] object-contain rounded-xl"
            />
          </View>
          <Text className="text-2xl font-bold mt-4 text-[#00B1BF] mx-3">
            {data.name}
          </Text>
          <Text className="text-gray-400 mx-3">{data.location_string}</Text>
        </View>
        <TouchableOpacity
          className="absolute top-3 left-5 bg-white rounded-xl"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={40} color="#00B1BF" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="my-4 mx-3">
        <Text className="font-semibold text-base text-gray-400 mx-3">
          {data.description ? data.description : data.ranking}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
