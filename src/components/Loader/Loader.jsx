import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={style}>
      <ThreeDots
        style={style}
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
