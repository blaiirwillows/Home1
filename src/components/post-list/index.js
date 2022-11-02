import React from "react";
import WithData from "../../hoc-helpers/WithData";
import PostDetails from "../post-details";
import classes from "./styles.module.css";

const PostList = ({data}) => {
    const renderedPosts = data.map(({id, title, userId})=> 
    (
        <div key={`post-${id}`} className={classes.post}>
            <h2>{id}</h2>
            <h3>user id: {userId} </h3>
            <p>{title}</p>
        </div>
    ))
    return (
        <div className={classes.posts}> {renderedPosts} </div>
    )
}
<PostDetails/>
export default WithData(PostList);