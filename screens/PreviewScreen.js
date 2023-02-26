import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { WebView } from 'react-native-webview';

const PreviewScreen = ({ route }) => {
    return (
        <WebView 
        source={{uri: route.params.previewUrl}}
        />
    );
};

export default PreviewScreen;