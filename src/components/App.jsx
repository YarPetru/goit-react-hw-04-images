import React, { Component } from 'react';
import * as API from './api/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    queryWord: '',
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   // fetch(
  //   //   'https://pixabay.com/api`/?q=cat&page=1&key=24976419-6a714440e2e2c554aceb2e7c2&image_type=photo&orientation=horizontal&per_page=12'
  //   // )
  //   //   .then(resp => resp.json())
  //   //   .then(pics => this.setState({ pics }));
  //   try {
  //     this.setState({ isLoading: true });
  //     const pics = await API.getPictures(this.state.queryWord);
  //     this.setState({ pics });
  //     // console.log(this.state.pics.id);
  //   } catch (error) {
  //     this.setState({ error: true });
  //     console.log(error);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  handleFormSubmit = queryWord => {
    this.setState({ queryWord });
  };

  render() {
    const { isLoading, pics, error, queryWord } = this.state;
    return (
      <div className="container">
        <Searchbar onGetWord={this.handleFormSubmit} />

        {error && <p>Oops. Something went wrong :( Please try again</p>}
        <ImageGallery
          // pictures={pics}
          query={queryWord}
        />

        {/* Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится. */}
        {/* {pics.length > 0 && <Button />} */}
        {/* <Modal /> */}

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
