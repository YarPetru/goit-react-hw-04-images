import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import { Component } from 'react';
import * as API from '../api/api';
import Loader from '../Loader';
// import { toast } from 'react-toastify';

class ImageGallery extends Component {
  state = {
    pics: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      console.log(this.props.query);
      console.log(prevProps.query);
      try {
        this.setState({ isLoading: true });
        const pics = await API.getPictures(this.props.query);
        this.setState({ pics });
        // console.log(this.state.pics.id);
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { pics, isLoading } = this.state;
    return (
      // Добавить проверку на корректность запроса - если ничего не рендерится, тоаст - введите корректный запрос
      <>
        {isLoading && <Loader />}
        {pics.length > 0 && (
          <ul className={s.gallery}>
            {pics.map(pic => (
              <ImageGalleryItem
                key={pic.id}
                alt={pic.tag}
                src={pic.webformatURL}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
