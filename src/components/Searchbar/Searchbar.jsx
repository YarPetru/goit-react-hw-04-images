import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onGetWord }) => {
  // static propTypes = {
  //   onGetWord: PropTypes.func.isRequired,
  // };

  const [queryWord, setQueryWord] = useState('');

  // state = {
  //   queryWord: '',
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (queryWord.trim() === '') {
      return toast.warn('Enter your query please', {
        theme: 'colored',
      });
    }
    onGetWord(queryWord);
    // setQueryWord('');
  };

  const handleInputChange = e => {
    setQueryWord(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
          <FcSearch />
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          value={queryWord}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onGetWord: PropTypes.func.isRequired,
};

export default Searchbar;
