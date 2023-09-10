import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    user: {
        width: 80,
        paddingHorizontal: 4,
    },
    avatarBorder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    plusIcon: {
        overflow: 'hidden',
        alignSelf: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 16,
        color: 'black',
        maxWidth: 64,
    },
});

export default function Story({avatar, name, isCreateStory = false, isSeen})
{
    return (
        <TouchableOpacity style={styles.user}>
            <View>
                <View style={[styles.avatarBorder, {
                    borderColor: isCreateStory 
                    ? "transparent"
                    : isSeen
                    ? "rgba(0,0,0,.0975)"
                    : "#c73191,"
                }
                ]}
                >
                    <Image source={avatar} style={styles.avatar} />
                    {isCreateStory && (
                            <View style={styles.plusIcon}>
                                <Feather name="plus" size={14} color="#fff" />
                            </View>
                    )}
                </View>
                <Text numberOfLines={1} style={styles.name}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
