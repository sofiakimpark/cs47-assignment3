import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    headerShown: false,
      }}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} 
      options={{
        headerStyle: { backgroundColor: 'black'},
        headerTitleStyle: { color: 'white' },
      }}/>
      <Stack.Screen name="PreviewScreen" component={PreviewScreen}
      options={{
        headerStyle: { backgroundColor: 'black'},
        headerTitleStyle: { color: 'white' },
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
