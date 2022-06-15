import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  render() {
    return (
      <div>
        <Loader />

        <Searchbar onSubmit="" />
        <ImageGallery />

        {/* Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится. */}
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
