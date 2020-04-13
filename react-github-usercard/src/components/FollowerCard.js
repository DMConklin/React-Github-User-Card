import React from 'react';

const FollowerCard = (props) => {
    return(
        <div>
            <h2>{props.follower.login}</h2>
            <img src={props.follower.avatar_url} alt="avatar" />
        </div>
    )
}

export default FollowerCard;