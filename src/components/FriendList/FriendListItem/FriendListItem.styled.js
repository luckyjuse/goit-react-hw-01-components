import styled from '@emotion/styled';

export const FriendListLi = styled.li`
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: left;
  width: 100%;
  border-radius: 10px;
  background-color: white;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (!active ? '#ff4c4c' : '#4ec844')};
`;
