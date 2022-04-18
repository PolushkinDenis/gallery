import React, { useEffect } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/photosReducer";
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Gallery.css'

const Gallery = () => {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)
  console.log(photos)

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">
      <Link to="/details:1" state={{ data: props}}>Подробнее {props.id}</Link>
    </Tooltip>
  );

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])
  return (
    <div>
      <Header />
      {photos.length > 0 && (

      
      <main>
        Gallery
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(photos[1])}
        >
          <Image className="photo" src={photos[1].url}></Image>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(photos[2])}
        >
          <Image className="photo" src={photos[2].url}></Image>
        </OverlayTrigger>
        {/* <div className="gallery">
          {photos.map((photo) => (
            <OverlayTrigger
              key={photo.id}
              placement={photo.id}
              overlay={
                <Tooltip id={`tooltip-${photo.id}`}>
                  Tooltip on <strong>{photo.id}</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary">Tooltip on {photo.id}</Button>
              <Image className="photo" src={photo.url} key={photo.id}></Image>

            </OverlayTrigger>
          ))}
        </div> */}

      </main>
      )}

    </div>
  );
}

export default Gallery;
