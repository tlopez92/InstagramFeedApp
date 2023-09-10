import article from "../components/article";

const initialData =
{
    profile: {
        avatar: require('../assets/instagram-feed-images/avatar.png'),
    },
    stories: [
        {
            id: 1,
            avatar: require('../assets/instagram-feed-images/avatar1.jpg'),
            name: "John Doe",
            isSeen: false
        },
        {
            id: 2,
            avatar: require('../assets/instagram-feed-images/avatar2.jpg'),
            name: "Jane Smith",
            isSeen: false
        },
        {
            id: 3,
            avatar: require('../assets/instagram-feed-images/avatar3.jpg'),
            name: "Alice Johnson",
            isSeen: true
        },
    ],
    articles: [
        {
            id: '1',
            avatar: require('../assets/instagram-feed-images/avatar1.jpg'),
            name: 'John Doe',
            image: require('../assets/instagram-feed-images/img1.jpg'),
            likes: 123,
            commentCount: 4,
            comments: [{
                name: 'Emily',
                text: 'Great article!'
            },
                {
                    name: 'David',
                    text: 'I learned something new!'
                },
                {
                    name: 'Sophia',
                    text: 'Thanks for sharing!'
                },
                {
                    name: 'William',
                    text: 'Interesting read!'
                }]
        },
        {
            id: '2',
            avatar: require('../assets/instagram-feed-images/avatar2.jpg'),
            name: 'Jane Smith',
            image: require('../assets/instagram-feed-images/img2.jpg'),
            likes: 78,
            commentCount: 3,
            comments: [{
                name: 'Michael',
                text: 'Very informative!'
            },
                {
                    name: 'Sarah',
                    text: 'This was helpful!'
                },
                {
                    name: 'James',
                    text: 'Keep it up!'
                }]
        },
        {
            id: '3',
            avatar: require('../assets/instagram-feed-images/avatar3.jpg'),
            name: 'Alice Johnson',
            image: require('../assets/instagram-feed-images/img3.jpg'),
            likes: 45,
            commentCount: 2,
            comments: [{
                name: 'Ella',
                text: 'Amazing work!'
            },
                {
                    name: 'Henry',
                    text: 'Please post more like this!'
                }]
        },
        {
            id: '4',
            avatar: require('../assets/instagram-feed-images/avatar.png'),
            name: 'Charlie Clark',
            image: require('../assets/instagram-feed-images/img4.jpg'),
            likes: 37,
            commentCount: 1,
            comments: [{
                name: 'Grace',
                text: 'Looking forward to the next post!'
            }]
        }]
};

const data = {
    ...initialData,
    articles: initialData.articles.map(article => {
        return {
            ...article,
            comments: `View all ${article.commentCount} comments`
        }
    })
}
export default data;
