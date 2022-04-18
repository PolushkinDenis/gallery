import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/photosReducer";
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'

const Gallery = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const { photos, loading } = useSelector(state => state)

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">
      <Link to={`/details:${props.id}`} state={{ data: props }}>Подробнее</Link>
    </Tooltip>
  );

  const separation = (photos) => {
    let arrOfcategory = [];
    let count = 0
    for (let i = 0; i < 4; i++) {
      let arr = [];
      for (let j = 0; j < 6; j++) {
        arr.push(photos[count])
        count++
      }
      arrOfcategory.push(arr)
    }
    setCategory(arrOfcategory)
  }

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  useEffect(() => {
    if (photos.length > 0) {
      separation(photos)
    }
  }, [photos])

  if (loading) {
    return (
      <div className="loader">
        <Spinner  animation="border" variant="primary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <div className="main-gallery">
      <Header />
      {category.length > 0 && (
        <main>
          <h1>Gallery</h1>
          <div className="gallery">
            {category.map((categoryItem, index) => (
              <div key={index}>
                <h2>Категория {index + 1}</h2>
                {categoryItem.map((photo) => (
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
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default Gallery;
