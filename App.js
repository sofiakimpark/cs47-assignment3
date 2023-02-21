import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("tracks", tracks);
  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks}/>;
  } else {
    contentDisplayed = <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
      {/* <Text onPress={getSpotifyAuth}>Fetch</Text> */}
    </SafeAreaView>
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
