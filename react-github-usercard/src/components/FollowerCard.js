import React from 'react';
import { FollowerDiv, FollowerName, FollowerAvatar } from './styles';

const FollowerCard = (props) => {
    return(
        <FollowerDiv>
            <FollowerAvatar src={props.follower.avatar_url} alt="avatar" />
            <FollowerName>{props.follower.login}</FollowerName>
        </FollowerDiv>
    )
}

export default FollowerCard;