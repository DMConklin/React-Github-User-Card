import React from 'react';

const UserCard = (props) => {
    return(
        <div>
            <h1>Name: {props.user.login}</h1>
            <img src={props.user.avatar_url} alt="avatar" />
            <h5>Followers: {props.user.followers}</h5>

        </div>
    )
}

export default UserCard;