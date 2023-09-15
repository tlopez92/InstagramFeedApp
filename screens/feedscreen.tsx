import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Alert,
    Platform
} from 'react-native';
import data from '../instagram-feed/data';
import {Feather} from "@expo/vector-icons";
import Stories from './Stories'
import Constants from 'expo-constants'
import Article from "./Article";
import { Camera} from 'expo-camera';

const FeedScreen: React.FC = () => {
    const INSTAGRAM_LOGO="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png";
    const [showCamera, setShowCamera] = useState(false);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const styles = StyleSheet.create({
        stories: {
            marginBottom: 20,
            flexDirection: 'row',
            overflow: 'hidden',
        },
        container: {
            flex: 1,
            padding: 10,
            paddingTime: Constants.statusBarHeight,
            backgroundColor: 'white'
        },
        header: {
            borderBottomWidth: 1,
            borderBottomColor: '#dbdbdb',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            height: 44
        },
        logo: {
            flex: 1,
            height: 30,
            resizeMode: "contain"
        }
    });

    function renderItem ({item, index}) {
        if(index === 0) {
            return (
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} />
                    </View>
                    <Article item={item} />
                </>
            );
        } else {
            return <Article item={item} />;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24} 
                    onPress={() => {
                        setShowCamera(showCamera);
                        setCameraType(Camera.Constants.Type)
                    }}
                    />
                </TouchableOpacity>
                <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data.articles}
                keyExtractor={article => article.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
            {
                showCamera && (
                    <Camera style={{flex: 1}} type={cameraType}>
                        <View style={styles.cameraContainer}>
                            <TouchableOpacity onPress={() => setShowCamera(false)}>
                                <Feather name="x" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )
            }
        </SafeAreaView>
    );
};

export default FeedScreen;