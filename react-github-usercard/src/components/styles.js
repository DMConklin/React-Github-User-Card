import styled from 'styled-components';

// App.js Styles
export const AppDiv = styled.div`

`;

export const FollowersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

// UserCard.js Styles
export const UserDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
`;

export const AvatarDiv = styled.div`
    width: 30vw;
`;

export const UserAvatar = styled.img`
    width: 100%;
    border-radius: 50%;
`;

export const UserDataDiv = styled.div`
    text-align: left;
`;

export const UserName = styled.h1`
    font-size: 1.25rem;
    margin: 0;
`;

export const DataList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const DataItem = styled.li`

`;

// FollowerCard.js Styles
export const FollowerDiv = styled.div`
    width: 21%;
    height: 30vw;
`;

export const FollowerName = styled.h2`
    font-size: 0.75rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const FollowerAvatar = styled.img`
    width: 100%;
`;