import React from 'react';
import { FollowersDiv, FollowerName, FollowerAvatar } from './styles';

const FollowerCard = (props) => {
    return(
        <FollowersDiv>
            <FollowerName>{props.follower.login}</FollowerName>
            <FollowerAvatar src={props.follower.avatar_url} alt="avatar" />
        </FollowersDiv>
    )
}

export default FollowerCard;