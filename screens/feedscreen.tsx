import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import data from '../instagram-feed/data';

const FeedScreen: React.FC = () => {

    const renderArticleItem = ({ item }) => (
        <View style={{ margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.avatar} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </View>
            <Image source={item.image} style={{ width: '100%', height: 200 }} />
            <Text>Name: {item.name}</Text>
            <Text>Likes: {item.likes}</Text>
            <Text>Comments: {item.comments}</Text>
        </View>
    );

    return (
        <FlatList
            data={data.articles}
            keyExtractor={article => article.id}
            renderItem={renderArticleItem}
        />
    );
};

export default FeedScreen;
