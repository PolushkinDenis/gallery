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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">
      <Link to={`/details:${props.id}`} state={{ data: props }}>Подробнее {props.id}</Link>
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
          <div className="gallery">
            {photos.map((photo) => (
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip(photo)}
                key={photo.id}
              >
                <Image className="photo" src={photo.url}></Image>
              </OverlayTrigger>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default Gallery;
