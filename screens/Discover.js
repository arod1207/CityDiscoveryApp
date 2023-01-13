import React, { useLayoutEffect, useState } from "react";
import { GOOGLE_API_KEY } from "@env";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";

const Discover = () => {
  const [bl_lat, setBl_lat] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  //Remove Header//
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="mx-6 mt-6">
        <View className="flex-col justify-between">
          <Text className="text-[#00B1BF] text-3xl font-semibold">
            Discover
          </Text>
          <Text className="text-[#8f969b] text-3xl">the Beauty today</Text>
          <Image
            source={Avatar}
            className="h-12 w-12 rounded-md shadow-md absolute top-0 right-0"
          />
        </View>
      </View>

      <View className="my-6 mx-6">
        <View className="flex-row space-x-2 border-2 border-gray-200 px-4 rounded-2xl items-center shadow-lg bg-white">
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setBl_lat(details?.geometry?.viewport.southwest.lat);
              setTr_lat(details?.geometry?.viewport.northeast.lat);
              setBl_lng(details?.geometry?.viewport.southwest.lng);
              setTr_lng(details?.geometry?.viewport.northeast.lng);
            }}
            query={{
              key: GOOGLE_API_KEY,
              language: "en",
            }}
          />
        </View>
      </View>
      <ScrollView>
        <MenuContainer
          bl_lat={bl_lat}
          tr_lat={tr_lat}
          bl_lng={bl_lng}
          tr_lng={tr_lng}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
