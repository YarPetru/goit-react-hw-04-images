import axios from 'axios';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

const API_KEY = '24976419-6a714440e2e2c554aceb2e7c2';
// https://pixabay.com/api/?q=cat&page=1&key=24976419-6a714440e2e2c554aceb2e7c2&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

// export const getPictures = async (queryWord, page) => {
//   const response = await axios.get(
//     `/?q=${queryWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits;
// };

export const getPictures = async (queryWord, page) => {
  const response = await axios.get(
    `/?q=${queryWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (response.data.hits.length === 0) {
    return new Error(`Нет картинок соответствующих запросу ${queryWord}`);
  } else return response.data.hits;

  // ? toast.warn(`Нет картинок соответствующих запросу ${queryWord}`, {
  //     theme: 'colored',
  //   })
  // : response.data.hits
};
