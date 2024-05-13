import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Map from "../components/Map";
import NavigationCard from "../components/NavigationCard";
import RideOptionCard from "../components/RideOptionCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>MapScreen</Text>
      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            options={{
              headerShown: false,
            }}
            component={NavigationCard}
          />
          <Stack.Screen
            name="RideOptionCard"
            options={{
              headerShown: false,
            }}
            component={RideOptionCard}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
