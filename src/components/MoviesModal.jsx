import React from 'react';
import ReactModal from 'react-modal';
import {Button} from 'reactstrap'

const base_url = 'http://image.tmdb.org/t/p/';
const profile_sizes = ['w45', 'w185', 'h632', 'original'];

const customStyles = {
  content: {
    background: '#333',
    color: 'white',
    zIndex: 9,
    width: '400px',
    height: '620px',
    borderRadius: '20px'
  }
};

export default function MoviesModal({showModal, handleCloseModal, modalContentData}) {
  
  const castedIn = showModal && modalContentData.known_for.map(movie => {
    return (
      <div className='each-movie'>
        <img src={`${base_url}${profile_sizes[0]}${movie.poster_path}`} alt=""/>
        <div className='each-movie-title'>{movie.title}</div>
      </div>
    )
  })
  console.log(castedIn)
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Movie Information"
      style={customStyles}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <Button color="warning" onClick={handleCloseModal} id="modalCloseBtn" style={{float: 'right'}}>
        Close
      </Button>
      <div className="modalContent">
        <h1 id="celebrity-name">{modalContentData.name}</h1>
        <p id="celebrity-profile">
          <img
            src={`${base_url}${profile_sizes[1]}${modalContentData.profile_path}`}
            alt="celebrity avatar"
          />
        </p>
        <p id="celebrity-popularity">
          {' '}
          Popularity: <span>{modalContentData.popularity}</span>
        </p>
        <p id='movies-casted-in'>Movies {modalContentData.name} played in:</p>
        <div className='known-for-movies'>{castedIn}</div>
        
      </div>
    </ReactModal>
  );
}
