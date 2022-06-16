import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  const style = {
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <ThreeDots
      style={style}
      height="100"
      width="100"
      color="#3f51b5"
      ariaLabel="loading"
    />
  );
};

export default Loader;
