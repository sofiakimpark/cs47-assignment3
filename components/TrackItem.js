import { View, StyleSheet, Text, Image} from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { Themes } from "../assets/Themes";
import { Ionicons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";


export default function TrackItem({albumName, duration, imageUrl, 
    songArtists, songTitle, previewUrl, externalUrl}) {
        const navigation = useNavigation();
        return (
            <View style={styles.tracks}>
                
                <Pressable onPress={() => navigation.navigate('PreviewScreen', {previewUrl})}>
                    <Ionicons name="play-circle" size={22} color="green"/>
                </Pressable>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                </View>
                <View style={styles.title}>
                    <Pressable onPress={() => navigation.navigate('DetailsScreen', {externalUrl})}>
                        <Text style={styles.text} numberOfLines={1}>{songTitle}</Text>
                    </Pressable>
                        <View>
                            {songArtists.map((item) => {
                                return (
                                    <Text style={styles.text}>
                                        {item.name}
                                    </Text>
                                );
                            })}   
                        </View>
                </View>
                <View style={styles.album}>
                    <Text style={styles.text} numberOfLines={1}>{albumName}</Text>
                </View>
                <View style={styles.duration}>
                    <Text style={styles.text}>{millisToMinutesAndSeconds(duration)}</Text>
                </View>   
            </View>
        );
    };

    const styles = StyleSheet.create({
        tracks: {
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            color: Themes.colors.white,
        },
        image: {
            width: 50,
            height: 50,
            resizeMode: 'contain',
            marginLeft: 5,
        },
        duration: {
            width: "17%",
        },
        album: {
            width: "25%",

        },
        index: {
            width: "5%",

        },
        title: {
            width: "43%",
        },
        imageContainer: {
            width: "20%"
        },

    });