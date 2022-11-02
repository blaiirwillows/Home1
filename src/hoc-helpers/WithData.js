import { useState, useEffect } from "react";
import service from "../service";

export default (WrappedComponent) => 
({...props}) => {
    const  [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    const servise = new service();

    useEffect(() => {
        servise
        .getAllPosts()
        .then((data) => setPosts(data))
        .catch((err) => setError(err.message))
        .finally(setLoading(false));
    }, []);

    if(loading) {
        return <div>loading...</div>
    }

    if(error){
        console.log(error);
        return <div>{error}</div>
    };

    return <WrappedComponent {...props} data={posts}/>;
};