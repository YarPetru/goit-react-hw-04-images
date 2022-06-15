import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem />
      <li>1 pic</li>
      <li>2 pic</li>
      <li>3 pic</li>
      <li>1 pic</li>
      <li>2 pic</li>
      <li>3 pic</li>
      <li>1 pic</li>
      <li>2 pic</li>
      <li>3 pic</li>
      <li>1 pic</li>
      <li>2 pic</li>
      <li>3 pic</li>
    </ul>
  );
};

export default ImageGallery;
