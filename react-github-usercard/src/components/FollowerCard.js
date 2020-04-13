import React from 'react';
import { FollowerDiv, FollowerName, FollowerAvatar } from './styles';

const FollowerCard = (props) => {
    return(
        <FollowerDiv>
            <FollowerName>{props.follower.login}</FollowerName>
            <FollowerAvatar src={props.follower.avatar_url} alt="avatar" />
        </FollowerDiv>
    )
}

export default FollowerCard;