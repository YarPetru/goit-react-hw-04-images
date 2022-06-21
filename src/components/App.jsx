import React, { Component } from 'react';
import * as API from './api/api';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
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
    activeId: null,
    status: 'idle',
    page: 1,
    showModal: false,
    pickedPicture: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log(`active img is ${this.state.activeId}`);
    if (prevState.queryWord !== this.state.queryWord) {
      // console.log(this.props.query);
      // console.log(prevProps.query);
      try {
        this.setState({ status: 'pending' });
        const pics = await API.getPictures(
          this.state.queryWord,
          this.state.page
        );
        this.setState({ pics, status: 'resolved' });
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

  openModal = e => {
    this.setState({ showModal: true, pickedPicture: e.target });
    console.log(e.target);
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { pics, status, error, showModal, pickedPicture } = this.state;

    // if (status === 'idle') {
    //   return <p>Enter your query</p>;
    // }

    // if (status === 'pending') {
    //   return <Loader />;
    // }

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

        {status === 'resolved' && pics.length > 0 && (
          <>
            <ImageGallery pics={pics} onItemClick={this.openModal} />
            <Button onClick={this.handleLoadMore} />
          </>
        )}

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

// {
//       toast.warn(`Нет картинок соответствующих запросу ${this.props.query}`, {
//         theme: 'colored',
//         // ПОЧЕМУ ДВА РАЗ ПОЯВЛЯЕТСЯ, может лучше обработать в другом месте
//       });
//     }

// if (!this.state.pics) {
//   return Promise.reject(
//     new Error(`нет картинок соответствующих запросу ${this.props.query}`)
//   );
// }
