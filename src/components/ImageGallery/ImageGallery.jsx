import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import { useEffect } from 'react';

const ImageGallery = ({ pics, onItemClick }) => {
  useEffect(() => {
    if (pics.length === 0) {
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [pics]);

  return (
    <>
      <ul className={s.gallery}>
        {pics.map(pic => (
          <ImageGalleryItem
            key={pic.id}
            alt={pic.tags}
            src={pic.webformatURL}
            onItemClick={() => onItemClick(pic)}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func,
};

export default ImageGallery;
