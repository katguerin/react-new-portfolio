import React, { useState } from 'react';
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      fileName: 'browser.png',
      name: 'Netflix Movie Picker',
      category: 'Opossum',
      description: 'Netflix Movie Picker is a site that helps you narrow down what movie or show you would like to watch next. You can enter parameters for movie or series, genre, release year range, and IMDB rating. You can also sort results by rating, date, title and runtime. Save titles you want to watch to your Watchlist for later!',
    },
    {
      fileName: 'communityboard.png',
      name: 'Community Board',
      category: 'Opossum',
      description: 'An apartment’s bulletin board for tenants to log into, communicate with each other, and see any building notifications.',
    },
    {
      fileName: 'op1.jpg',
      name: 'Opossum 1',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op2.jpg',
      name: 'Opossum 2',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op3.jpg',
      name: 'Opossum 3',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op4.jpg',
      name: 'Opossum 4',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op5.jpg',
      name: 'Opossum 5',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op6.jpg',
      name: 'Opossum 6',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      fileName: 'op7.jpg',
      name: 'Opossum 7',
      category: 'Opossum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal 
        currentPhoto={currentPhoto}
        onClose={toggleModal} />}

      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img 
          src={require(`../../assets/photos/${category}/${image.fileName}`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name} />
        ))} 
      </div>
    </div>
  )
}

export default PhotoList;
