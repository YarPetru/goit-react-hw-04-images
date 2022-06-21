import React, { Component } from 'react';
import * as API from './api/api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Loader from './Loader';
import Button from './Button';

export class App extends Component {
  state = {
    queryWord: '',
    pics: [],
    error: null,
    status: 'idle',
    page: 1,
    // showModal: false,
    pickedPicture: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.queryWord !== this.state.queryWord) {
      try {
        this.setState({ status: 'pending' });
        const pics = await API.getPictures(
          this.state.queryWord,
          this.state.page
        );
        this.setState({ pics, status: 'resolved', page: 1 });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
        console.log(error);
      }
    }

    if (prevState.page !== this.state.page && this.state.page > 1) {
      try {
        this.setState({ status: 'pending' });
        const newPics = await API.getPictures(
          this.state.queryWord,
          this.state.page
        );

        this.setState(prevState => ({
          pics: [...prevState.pics, ...newPics],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
        console.log(error);
      }
    }
    this.makeScroll();
  }

  handleFormSubmit = queryWord => {
    this.setState({ queryWord });
  };

  makeScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = pic => {
    this.setState({ pickedPicture: pic });
    console.log(pic);
    // console.log(e.target);
  };

  closeModal = () => {
    this.setState({ pickedPicture: null });
  };

  render() {
    const { pics, status, error, pickedPicture } = this.state;

    if (status === 'rejected') {
      return (
        <p>{`Oops. Something went wrong :( Please try again:${error.message}`}</p>
      );
    }

    return (
      <div className="container">
        <Searchbar onGetWord={this.handleFormSubmit} />

        {status === 'idle' && <p>Enter your query</p>}

        {status === 'pending' && <Loader />}

        {status === 'resolved' &&
          pics.length === 0 &&
          toast.warn(
            `Нет картинок соответствующих запросу ${this.state.queryWord}`,
            { theme: 'colored' }
          )}

        {status === 'resolved' && pics.length > 0 && (
          <>
            <ImageGallery pics={pics} onItemClick={this.openModal} />
            <Button onClick={this.handleLoadMore} />
          </>
        )}

        {pickedPicture && (
          <Modal
            src={pickedPicture.largeImageURL}
            alt={pickedPicture.tags}
            onClose={this.closeModal}
          />
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
}
