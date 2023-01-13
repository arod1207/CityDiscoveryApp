import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { handleFetchData } from "../api/fetchData";

import { Attractions, Hotels, Restaurants } from "../assets";
import Cards from "./Cards";

const Menu = ({ bl_lat, tr_lat, bl_lng, tr_lng }) => {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const handleResponse = async () => {
        const response = await handleFetchData(
          type,
          bl_lat,
          tr_lat,
          bl_lng,
          tr_lng
        );
        setLoading(false);
        setData(response);
      };
      handleResponse();
    } catch (error) {
      console.log(error);
    }
  }, [type, bl_lat, tr_lat, bl_lng, tr_lng]);

  return (
    <View className="mx-6 justify-between">
      {/* //HOTELS// */}
      <View className="flex-row justify-between">
        <View className="justify-center items-center">
          <TouchableOpacity
            onPress={() => {
              setType("hotels"), handleFetchData();
            }}
            className={`w-24 h-24 rounded-full justify-center items-center bg-gray-200 ${
              type === "hotels" ? "bg-[#00B1BF]" : ""
            }`}
          >
            <Image source={Hotels} className="h-20 w-20" />
          </TouchableOpacity>
          <Text className="mt-4 text-[#00b1bf] font-bold text-lg">Hotels</Text>
        </View>
        {/* //ATTRACTIONS// */}
        <View className="justify-center items-center">
          <TouchableOpacity
            className={`bg-gray-200 w-24 h-24 rounded-full justify-center items-center ${
              type === "attractions" ? "bg-[#00B1BF]" : ""
            }`}
            onPress={() => {
              setType("attractions"), handleFetchData();
            }}
          >
            <Image source={Attractions} className="h-20 w-20" />
          </TouchableOpacity>
          <Text className="mt-4 text-[#00b1bf] font-bold text-lg">
            Attractions
          </Text>
        </View>
        {/* //RESTAURANTS// */}
        <View className="justify-center items-center">
          <TouchableOpacity
            className={`bg-gray-100 w-24 h-24 rounded-full justify-center items-center ${
              type === "restaurants" ? "bg-[#00B1BF]" : ""
            }`}
            onPress={() => {
              setType("restaurants"), handleFetchData();
            }}
          >
            <Image source={Restaurants} className="h-20 w-20" />
          </TouchableOpacity>
          <Text className="mt-4 text-[#00b1bf] font-bold text-lg">
            Restaurants
          </Text>
        </View>
      </View>

      <View className="my-4">
        {loading && <ActivityIndicator visable={loading} />}
        <Cards data={data} />
      </View>
    </View>
  );
};

export default Menu;
