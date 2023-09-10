import React from "react";
import data from '../instagram-feed/data'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";
import {Feather} from "@expo/vector-icons";

const styles = StyleSheet.create({
    article: {
        flex: 1,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    actionLeft: {
        flexDirection: 'row',
    },
    actionButton: {
        marginRight: 10
    },
    info: {
        padding: 10
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    commentCount: {
        color: '#888'
    }
});

export default function Article({item})
{
    return(
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name} >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity>
                    <Feather name='more-horizontal' size={16} />
                </TouchableOpacity>
            </View>
                
                <Image source={item.image} style={styles.image} />
                <View style={styles.action} >
                    <View style={styles.actionLeft}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='heart' size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='message-circle' size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='send' size={24} />
                        </TouchableOpacity>
                    </View>
                        
                    <View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='bookmark' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
               
                <View style={styles.info}>
                    <Text style={styles.likes}>
                        likes
                    </Text>
                    <Text style={styles.commentCount}>
                        View all comments
                    </Text>
                </View>
            </View>
    )
}