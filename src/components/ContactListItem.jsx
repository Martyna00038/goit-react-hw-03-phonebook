import PropTypes from 'prop-types';

import {
  ContactListItemLi,
  ContactListItemName,
  ContactListItemTel,
  ContactListItemRemoveBtn,
} from './ContactListItem.styled';

const ContactListItem = ({ name, tel, id, onDeleteContact }) => {
  return (
    <ContactListItemLi key={id}>
      <ContactListItemName>{name}</ContactListItemName>
      <ContactListItemTel>{tel}</ContactListItemTel>
      <ContactListItemRemoveBtn onClick={() => onDeleteContact(id)}>
        Delete
      </ContactListItemRemoveBtn>
    </ContactListItemLi>
  );
};

export default ContactListItem;

ContactListItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
