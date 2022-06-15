import s from './ImageGallery.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={s.galleryItem}>
      <img className={s.galleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
