import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleOverlayClick}>
        <div className={s.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
