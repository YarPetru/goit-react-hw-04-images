import axios from 'axios';

const API_KEY = '24976419-6a714440e2e2c554aceb2e7c2';
// https://pixabay.com/api/?q=cat&page=1&key=24976419-6a714440e2e2c554aceb2e7c2&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async (queryWord, page) => {
  const response = await axios.get(
    `/?q=${queryWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  // if (!this.state.pics) {
  //   return Promise.reject(
  //     new Error(
  //       `нет картинок соответствующих запросу ${this.props.query}`
  //     )
  //   );
  // }
  return response.data.hits;
};
