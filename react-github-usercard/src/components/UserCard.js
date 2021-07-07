import React from 'react';
import { UserDiv, AvatarDiv, UserAvatar, UserDataDiv, UserName, DataList, DataItem } from './styles';

const UserCard = (props) => {
    return(
        <UserDiv>
            <AvatarDiv>
                <UserAvatar src={props.user.avatar_url} alt="avatar" />
            </AvatarDiv>
            <UserDataDiv>
                <UserName>{props.user.login}</UserName>
                <DataList>
                    <DataItem>Following: {props.user.following}</DataItem>
                    <DataItem>Followers: {props.user.followers}</DataItem>
                    <DataItem>Public Repos: {props.user.public_repos}</DataItem>
                </DataList>
            </UserDataDiv>
        </UserDiv>
    )
}

export default UserCard;