import React from 'react';
import { UserDiv, UserName, UserAvatar } from './styles';

const UserCard = (props) => {
    return(
        <UserDiv>
            <UserName>Name: {props.user.login}</UserName>
            <UserAvatar src={props.user.avatar_url} alt="avatar" />
        </UserDiv>
    )
}

export default UserCard;