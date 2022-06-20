import React, { Component } from 'react';
// import * as API from './api/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

export class App extends Component {
  state = {
    queryWord: '',
    showModal: false,
    pickedPicture: null,
  };

  handleFormSubmit = queryWord => {
    this.setState({ queryWord });
  };

  openModal = e => {
    this.setState({ showModal: true, pickedPicture: e.target });
    console.log(e.target);
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { queryWord, showModal, pickedPicture } = this.state;
    return (
      <div className="container">
        <Searchbar onGetWord={this.handleFormSubmit} />

        <ImageGallery
          // pictures={pics}
          query={queryWord}
          onItemClick={this.openModal}
        />

        {showModal && (
          <Modal
            src={pickedPicture.src}
            alt={pickedPicture.tags}
            onClose={this.closeModal}
          />
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
}
