import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import initialData from '../instagram-feed/data';

const FeedScreen: React.FC = () => {

    const renderArticleItem = ({ item }) => (
        <View style={{ margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.avatar} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </View>
            <Image source={item.image} style={{ width: '100%', height: 200 }} />
            <Text>Likes: {item.likes}</Text>
            <Text>Comments: {item.commentCount}</Text>
            <FlatList
                data={item.comments}
                keyExtractor={comment => comment.name}
                renderItem={({ item: comment }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>{comment.name}: </Text>
                        <Text>{comment.text}</Text>
                    </View>
                )}
            />
        </View>
    );

    return (
        <FlatList
            data={initialData.articles}
            keyExtractor={article => article.id}
            renderItem={renderArticleItem}
        />
    );
};

export default FeedScreen;
