import React from "react";

const PostDetails = ({itemlist: {id, title, body}}) => {

    return (<ul><li key={`item=${id}`} >
        <b> {id} </b>
        <u> {title} </u>
        <i> {body} </i>
    </li></ul>)
};

export default PostDetails;