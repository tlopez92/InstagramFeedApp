import React from 'react';
import { View, Text, Image } from 'react-native';

interface ArticleProps {
    title: string;
    content: string;
    image: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, image }) => {
    return (
        <View>
            <Image source={{ uri: image }} />
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};

export default Article;
