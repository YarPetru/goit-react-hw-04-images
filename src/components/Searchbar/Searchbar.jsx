import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  static propTypes = {
    onGetWord: PropTypes.func.isRequired,
  };

  state = {
    queryWord: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.queryWord.trim() === '') {
      return toast.warn('Enter your query please', {
        theme: 'colored',
      });
    }

    this.props.onGetWord(this.state.queryWord);
    this.setState({ queryWord: '' });
  };

  handleInputChange = e => {
    this.setState({ queryWord: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
            <FcSearch />
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            value={this.state.queryWord}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
