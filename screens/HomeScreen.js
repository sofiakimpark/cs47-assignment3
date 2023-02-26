import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

export default function HomeScreen() {
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
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });
