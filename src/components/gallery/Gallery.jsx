import React, { useEffect } from "react";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/photosReducer";

const Gallery = () => {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)
  console.log(photos)

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])
  return (
    <div>
      <Header />
      <main>
        Gallery
      </main>
    </div>
  );
}

export default Gallery;
