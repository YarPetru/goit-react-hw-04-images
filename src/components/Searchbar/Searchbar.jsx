import { Component } from 'react';
import s from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
            <FcSearch />
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
