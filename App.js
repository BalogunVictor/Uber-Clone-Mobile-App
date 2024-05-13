import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./components/MapScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="MapScreen"
            options={{
              headerShown: false,
            }}
            component={MapScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
