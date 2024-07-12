import axios from 'axios';

const getData = async (userId) => {
    try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const userData = userResponse.data;
        const userPosts = postsResponse.data;

        return {
            ...userData,
            posts: userPosts,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default getData;
