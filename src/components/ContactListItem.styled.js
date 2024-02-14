import styled from 'styled-components';

export const ContactListItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactListItemName = styled.span`
  font-weight: bold;
`;
export const ContactListItemTel = styled.span`
  margin-left: 10px;
`;

export const ContactListItemRemoveBtn = styled.button`
  height: 25px;
  border-radius: 6px;
  border-width: 0px;
  background-color: red;
  color: white;
  font-size: 15px;
  margin-left: 10px;

  &:hover {
    background-color: #ff8800;
  }

  &:active {
    background-color: #ff9900;
  }
`;
