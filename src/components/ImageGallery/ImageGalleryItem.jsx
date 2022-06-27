// import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ id, src, alt, onItemClick }) => {
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
};

ImageGalleryItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
