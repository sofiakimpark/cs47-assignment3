import { FlatList, View, Text, StyleSheet, Image} from "react-native"
import { Themes } from "../assets/Themes";
import TrackItem from "./TrackItem";
import React from "react";
import images from "../assets/Images/images";

const songArtists = ({item}) => {
    return item.SongArtists(value => {
        return (
            <View>
                <Text>{value.name}</Text>
            </View>
        );
    });
};


const renderTrackItem = ({item}) => (
    <TrackItem 
        albumName={item.albumName}
        duration={item.duration}
        imageUrl={item.imageUrl}
        songArtists={item.songArtists}
        songTitle={item.songTitle}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}

    />
);

const SongList = ({ tracks }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.spotify} source={images.spotify}/>
                <Text style={styles.headerText}>My Top Tracks</Text>
            </View>
            <FlatList 
            data={tracks}
            renderItem={( item ) => renderTrackItem(item)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: Themes.colors.white,
        fontsize: 20,
    },
    spotify: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    headerText: {
        fontSize: 30,
        color: Themes.colors.white,
    }

});

export default SongList;
