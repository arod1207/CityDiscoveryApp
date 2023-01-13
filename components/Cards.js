import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      {data?.map((data, _index) => (
        <TouchableOpacity
          key={_index}
          className="border-2  rounded-xl border-gray-200 w-full shadow-lg my-2"
          onPress={() =>
            navigation.navigate("Details", {
              data: data,
              _index: _index,
            })
          }
        >
          <View className="items-center py-2 px-2">
            <Image
              source={{
                uri: data?.photo?.images?.original?.url
                  ? data?.photo?.images?.original?.url
                  : "https://cdn.pixabay.com/photo/2019/09/22/02/19/city-4494971_1280.jpg",
              }}
              className="w-full h-48 shadow-lg rounded-xl"
            />
          </View>
          <Text className="text-xl text-[#00b1bf] font-semibold mt-4 ml-2">
            {data.name ? data.name : "Not Available"}
          </Text>
          <Text className="text-xs text-gray-400 font-semibold mb-2 ml-2">
            {data.location_string}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Cards;
