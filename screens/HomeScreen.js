import React, { useLayoutEffect } from "react";

import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  //Remove Header//
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center space-x-1 mx-6 mt-6">
        <View className="bg-black w-12 h-12 rounded-full justify-center items-center">
          <Text className="text-[#00B1BF] text-2xl font-bold">Go</Text>
        </View>
        <Text className="text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 py-4">
        <Text className="text-4xl text-[#8f969b]">Enjoy the trip with</Text>
        <Text className="text-[#00B1BF] text-4xl font-bold">Good Moments</Text>
      </View>

      <View className="mx-6 ">
        <Text className="text-lg text-[#8f969b]">
          Lorem Ipsum is simply dummy test of the pringint and typesetting
          industry.
        </Text>
      </View>
      <View className="bg-[#00B1BF] w-[400px] h-[400px] rounded-full absolute bottom-32 -right-36"></View>
      <View className="bg-[#E99265] w-[400px] h-[400px] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="items-center absolute bottom-10 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00b1bf] rounded-full justify-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00b1bf]"
          >
            <Text className="text-3xl text-white font-bold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
