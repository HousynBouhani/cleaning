import React, { useContext, useEffect } from "react";
import GalleryContext from "../../context/gallery/galleryContext";
import "./gallerie.css";
const Galerie = (props) => {
  const galleryContext = useContext(GalleryContext);

  const { fetchPublicPhotos, photos } = galleryContext;

  useEffect(() => {
    fetchPublicPhotos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  if (photos.length === 0) {
    return (
      <div className="row m-0" style={{ height: "350px" }}>
        <div className="w-100 col">
          <div>
            <div className="my-5 d-flex justify-content-center">
              <div>Momentan keine Fotos</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="w-100 col">
            <div>
              <h2 className="my-5 d-flex justify-content-center">Galerie</h2>
            </div>
          </div>
        </div>
        {
          <div className="gallery" id="gallery">
            {photos.map((photo) => (
              <div className="mb-3 pics animation all 2" key={photo._id}>
                <a
                  target="_blank"
                  href={`http://localhost:5000/${photo.image}`}  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src={`http://localhost:5000/${photo.image}`}
                    alt="gallery"
                    width="600"
                    height="400"
                  />
                </a>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
};

export default Galerie;
