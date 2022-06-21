import { Component } from 'react';
import s from './ImageGallery.module.css';

// const ImageGalleryItem = ({ id, alt, src }) => {
class ImageGalleryItem extends Component {
  // handleItemClick = () => {};

  render() {
    const { id, src, alt, largeImageURL, onItemClick } = this.props;
    return (
      <li key={id} className={s.galleryItem}>
        <img
          className={s.galleryItemImage}
          src={src}
          alt={alt}
          largeImageURL={largeImageURL}
          onClick={onItemClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
