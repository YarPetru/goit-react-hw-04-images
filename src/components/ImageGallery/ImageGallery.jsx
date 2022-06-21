import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { pics, onItemClick } = this.props;

    return (
      <>
        <ul className={s.gallery}>
          {pics.map(pic => (
            <ImageGalleryItem
              key={pic.id}
              alt={pic.tag}
              src={pic.webformatURL}
              onItemClick={() => onItemClick(pic)}
            />
          ))}
        </ul>
      </>
    );
  }
}

// ----------------- class OLD ImageGallery extends Component {
//   state = {
//     pics: [],
//     error: null,
//     activeId: null,
//     status: 'idle',
//     page: 1,
//   };

//   componentDidMount() {}

//   async componentDidUpdate(prevProps, prevState) {
//     // console.log(`active img is ${this.state.activeId}`);
//     if (prevProps.query !== this.props.query) {
//       // console.log(this.props.query);
//       // console.log(prevProps.query);
//       try {
//         this.setState({ status: 'pending' });
//         const pics = await API.getPictures(this.props.query, this.state.page);
//         this.setState({ pics, status: 'resolved' });
//       } catch (error) {
//         this.setState({ error, status: 'rejected' });
//         console.log(error);
//       }
//     }

//     if (prevState.page !== this.state.page && this.state.page > 1) {
//       try {
//         this.setState({ status: 'pending' });
//         const newPics = await API.getPictures(
//           this.props.query,
//           this.state.page
//         );

//         this.setState(prevState => ({
//           pics: [...prevState.pics, ...newPics],
//           status: 'resolved',
//         }));
//         // this.makeScroll();
//       } catch (error) {
//         this.setState({ error, status: 'rejected' });
//         console.log(error);
//       }
//     }
//     this.makeScroll();
//   }

//   makeScroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   handleItemClick = activeId => {
//     this.setState({ activeId });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { status, pics, error } = this.state;

//     if (status === 'idle') {
//       return <p>Enter your query</p>;
//     }

//     if (status === 'pending') {
//       return <Loader />;
//     }

//     if (status === 'rejected') {
//       return (
//         <p>{`Oops. Something went wrong :( Please try again:${error.message}`}</p>
//       );
//     }

//     if (status === 'resolved' && pics.length > 0) {
//       return (
//         <>
//           <ul className={s.gallery}>
//             {pics.map(pic => (
//               <ImageGalleryItem
//                 key={pic.id}
//                 alt={pic.tag}
//                 src={pic.webformatURL}
//                 onItemClick={this.props.onItemClick}
//                 // onItemClick={() => this.handleItemClick(pic.id)}
//               />
//             ))}
//           </ul>
//           <Button onClick={this.handleLoadMore} />
//         </>
//       );
//     } else {
//       toast.warn(`Нет картинок соответствующих запросу ${this.props.query}`, {
//         theme: 'colored',
//         // ПОЧЕМУ ДВА РАЗ ПОЯВЛЯЕТСЯ, может лучше обработать в другом месте
//       });
//     }
//   }
// }

export default ImageGallery;
