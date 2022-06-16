import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ id, alt, src }) => {
  return (
    <li key={id} className={s.galleryItem}>
      <img className={s.galleryItemImage} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
