import React from 'react';
import { View, Text, Image } from 'react-native';

interface StoryProps {
    title: string;
    image: string;
}

const Story: React.FC<StoryProps> = ({ title, image }) => {
    return (
        <View>
            <Image source={{ uri: image }} />
            <Text>{title}</Text>
        </View>
    );
};

export default Story;
