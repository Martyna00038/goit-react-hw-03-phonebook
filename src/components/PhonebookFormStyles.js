import styled from 'styled-components';

export const ContactFormUi = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const ContactFormInput = styled.input`
  width: 250px;
  height: 25px;
  font-size: 15px;
  border-radius: 6px;
  border-width: 2px;
`;

export const ContactAddButton = styled.button`
  height: 30px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #ff6200;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #ff8800;
  }

  &:active {
    background-color: #ff9900;
  }
`;
