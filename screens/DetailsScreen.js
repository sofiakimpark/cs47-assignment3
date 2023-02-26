import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';

const DetailsScreen = ({route}) => {
    return (
        <WebView source={{uri: route.params.externalUrl}} />
    );
};

export default DetailsScreen

const styles = StyleSheet.create ({});