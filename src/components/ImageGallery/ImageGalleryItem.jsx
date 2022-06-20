import { Component } from 'react';
import s from './ImageGallery.module.css';

// const ImageGalleryItem = ({ id, alt, src }) => {
class ImageGalleryItem extends Component {
  // handleItemClick = () => {};

  render() {
    return (
      <li key={this.props.id} className={s.galleryItem}>
        <img
          className={s.galleryItemImage}
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.props.onItemClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
