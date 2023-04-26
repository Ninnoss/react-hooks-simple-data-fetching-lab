// create your App component here
import React, { useEffect, useState } from 'react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImage(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <img
      src={image}
      alt="A Random Dog"></img>
  );
};

export default App;
