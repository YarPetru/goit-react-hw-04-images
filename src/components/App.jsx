import React, { useState, useEffect } from 'react';
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

export const App = () => {
  const [queryWord, setQueryWord] = useState('');
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(1);
  const [pickedPicture, setPickedPicture] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPics = async () => {
      try {
        setStatus('pending');
        const pics = await API.getPictures(queryWord, page);
        console.log(pics);

        if (queryWord && pics.length === 0) {
          setStatus('resolved');
          toast.warn(
            `There are no picturues related to your query: ${queryWord}`,
            {
              theme: 'colored',
            }
          );
          return setPics([]);
        }

        if (queryWord && pics.length > 0) {
          setPics(pics);
          setStatus('resolved');
          return;
        }

        if (queryWord && pics.length > 0 && page > 1) {
          setPics(prevpics => [...prevpics, ...pics]);
          setStatus('resolved');
          return;
        }
      } catch (error) {
        setError(error);
        setStatus('rejected');
        console.log(error);
        return;
      }
    };
    getPics();
    makeScroll();
  }, [page, queryWord]);

  // if (prevState.page !== this.state.page && this.state.page > 1) {
  //   try {
  //     this.setState({ status: 'pending' });
  //     const newPics = await API.getPictures(
  //       this.state.queryWord,
  //       this.state.page
  //     );

  //     this.setState(prevState => ({
  //       pics: [...prevState.pics, ...newPics],
  //       status: 'resolved',
  //     }));
  //   } catch (error) {
  //     this.setState({ error, status: 'rejected' });
  //     console.log(error);
  //   }
  // }

  const handleFormSubmit = queryWord => {
    setQueryWord(queryWord);
  };

  const makeScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = pic => {
    setPickedPicture(pic);
    console.log(pic);
  };

  const closeModal = () => {
    setPickedPicture(null);
  };

  return (
    <div className="container">
      <Searchbar onGetWord={handleFormSubmit} />
      {status === 'idle' && <p>Enter your query</p>}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <p>{`Oops. Something went wrong :( Please try again:${error.message}`}</p>
      )}

      {status === 'resolved' && pics.length > 0 && (
        <>
          <ImageGallery pics={pics} onItemClick={openModal} />
          <Button onClick={handleLoadMore} />
        </>
      )}

      {pickedPicture && (
        <Modal
          src={pickedPicture.largeImageURL}
          alt={pickedPicture.tags}
          onClose={closeModal}
        />
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};
