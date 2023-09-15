import React, {useEffect, useState} from "react";
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
import {AntDesign, Feather} from "@expo/vector-icons";

const styles = StyleSheet.create({
    article: {
        flex: 1,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        height: 60
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 14,
        color: '#262626',
        marginLeft: 12
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        resizeMode: 'contain',
        backgroundColor: 'red',
        margin: 0,
        padding: 0
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingHorizontal: 8
    },
    actionLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionButton: {
        marginRight: 8
    },
    info: {
        paddingHorizontal: 15
    },
    likes: {
        marginTop: 5,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#262626'
    },
    comments: {
        color: 'gray',
        fontSize: 10,
        marginBottom: 5
    }
});

function getInitialState(item) {
    const article = data.articles.find(article => article.id === item.id);
    return {
        likes: article.likes,
        commentCount: article.commentCount
    };
}

export default function Article({item})
{
    const initialState = getInitialState(item);
    const [likes, setLikes] = useState(initialState.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [commentCount, setCommentCount] = useState(initialState.commentCount);
    const [comment, setComment] = useState('');
    
    function handleComment(){
        Alert.prompt('Leave a comment.', '', text => {
            setComment(text);
            setCommentCount(prevCommentCount => prevCommentCount + 1);
        });
    }
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
                        <TouchableOpacity style={styles.actionButton}
                                          onPress={() => {
                                              setIsLiked(!isLiked);
                                              setLikes(isLiked ? prevLikes => prevLikes - 1 : prevLikes => prevLikes + 1);
                                          }}
                        >
                            <AntDesign name={isLiked ? 'heart' : 'hearto'} color={isLiked ? 'red' : 'black'} size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}
                                            onPress={handleComment}
                        >
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
                        {likes} likes
                    </Text>
                    <Text style={styles.comments}>
                        View all {commentCount} comments
                    </Text>
                </View>
            </View>
    )
}