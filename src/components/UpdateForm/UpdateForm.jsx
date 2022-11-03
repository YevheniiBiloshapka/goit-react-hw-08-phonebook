import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'components/redux/contacts/contacts-operation';

export const UpdateForm = ({ contacts, closeForm }) => {
  const [name, setName] = useState(contacts.name);
  const [number, setNumber] = useState(contacts.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contacts, name, number }));
    setName('');
    setNumber('');
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Number:{' '}
        <input
          type="text"
          name="number"
          onChange={handleChange}
          value={number}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
