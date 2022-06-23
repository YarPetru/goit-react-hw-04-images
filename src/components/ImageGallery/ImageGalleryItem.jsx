import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

// const ImageGalleryItem = ({ id, alt, src }) => {
class ImageGalleryItem extends Component {
  static propTypes = {
    onItemClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  render() {
    const { id, src, alt, onItemClick } = this.props;
    return (
      <li key={id} className={s.galleryItem}>
        <img
          className={s.galleryItemImage}
          src={src}
          alt={alt}
          onClick={onItemClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
