import React from 'react';
import { UserDiv, AvatarDiv, UserAvatar, UserDataDiv, UserName } from './styles';

const UserCard = (props) => {
    return(
        <UserDiv>
            <AvatarDiv>
                <UserAvatar src={props.user.avatar_url} alt="avatar" />
            </AvatarDiv>
            <UserDataDiv>
                <UserName>Name: {props.user.login}</UserName>
            </UserDataDiv>
        </UserDiv>
    )
}

export default UserCard;