import axios from 'axios';

const API_KEY = '24976419-6a714440e2e2c554aceb2e7c2';
// https://pixabay.com/api/?q=cat&page=1&key=24976419-6a714440e2e2c554aceb2e7c2&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async queryWord => {
  const response = await axios.get(
    `/?q=${queryWord}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
