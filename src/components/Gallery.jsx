import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  ArrowLeft, ArrowRight, ArrowsAngleExpand, PlusSquare} from 'react-bootstrap-icons';
import Header from './Header';

const headingStyle = {
  marginTop: '7rem',
  color: '#000000',
  fontWeight: 'bold',
  textShadow: '-20px -20px 3px rgba(0, 0, 0, 0.1)',
};

const overlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '90%',
  height: '20%',
  background: 'rgba(255, 255, 255, 0.9)',
  margin: '15px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  opacity: 0,
  transition: 'opacity 0.3s',
};

const filterItemStyle = {
  display: 'inline-block',
  marginRight: '10px',
  cursor: 'pointer',
};

const filterListStyle = {
  listStyle: 'none',
  fontWeight: '500',
  paddingRight: '1rem',
  marginTop:'0.5rem'
};

const imageContainerStyle = {
  marginTop: '0.5rem',
  marginRight: '-1rem',
  height: '300px',
  position: 'relative',
  overflow: 'hidden',
};

const imageList = {
  coperate: [
    { src: '/pics-1.jpg', title: 'Coperate' },
    { src: '/pics-2.jpg', title: 'Coperate' },
  ],
  traditional: [
    { src: '/pics-6.jpg', title: 'Traditional' },
    { src: '/pics-12.jpg', title: 'Traditional' },
  ],
  english: [
    { src: '/pics-10.jpg', title: 'English' },
    { src: '/pics-7.jpg', title: 'English' },
  ],
};

function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [expandedImage, setExpandedImage] = useState(null);

  const [displayedImages, setDisplayedImages] = useState(generateAllCategory());

  function generateAllCategory() {
    const allImages = [];
    for (const category in imageList) {
      allImages.push(
        ...imageList[category].map((image) => ({
          ...image,
          overlayVisible: false,
        }))
      );
    }
    return allImages;
  }

  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setDisplayedImages(generateAllCategory());
    } else {
      setDisplayedImages(
        imageList[filter].map((image) => ({
          ...image,
          overlayVisible: false,
        }))
      );
    }
  };

  const handleMouseEnter = (index) => {
    const updatedImages = [...displayedImages];
    updatedImages[index].overlayVisible = true;
    setDisplayedImages(updatedImages);
  };

  const handleMouseLeave = (index) => {
    const updatedImages = [...displayedImages];
    updatedImages[index].overlayVisible = false;
    setDisplayedImages(updatedImages);
  };

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? displayedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="gallery pt-1 pb-3" style={{ backgroundColor: '#f2f2f2' }}>
      <h2 style={headingStyle}>

        GALLERY
      </h2>
      <p>Explore our curated collection of clothing, style and inspiring looks</p>
      <div className="container">
        <div className="row">
          <div className="row-lg-12 d-flex justify-content-center aos-init aos-animate" data-aos="fade-up">
            <ul className="row-lg-12 d-flex pb-3" id="portfolio-flters" style={filterListStyle}>
              <li style={filterListStyle}>
                <span
                  style={{
                    ...filterItemStyle,
                    color: activeFilter === 'all' ? '#ce1c668c' : 'black',
                  }}
                  data-filter="*"
                  onClick={() => handleFilterClick('all')}
                >
                  ALL
                </span>
              </li>
              <li style={filterListStyle}>
                <span
                  style={{
                    ...filterItemStyle,
                    color: activeFilter === 'coperate' ? '#ce1c668c' : 'black',
                  }}
                  data-filter=".filter-coperate"
                  onClick={() => handleFilterClick('coperate')}
                >
                  COPERATE
                </span>
              </li>
              <li style={filterListStyle}>
                <span
                  style={{
                    ...filterItemStyle,
                    color: activeFilter === 'traditional' ? '#ce1c668c' : 'black',
                  }}
                  data-filter=".filter-traditional"
                  onClick={() => handleFilterClick('traditional')}
                >
                  TRADITIONAL
                </span>
              </li>
              <li style={filterListStyle}>
                <span
                  style={{
                    ...filterItemStyle,
                    color: activeFilter === 'english' ? '#ce1c668c' : 'black',
                  }}
                  data-filter=".filter-english"
                  onClick={() => handleFilterClick('english')}
                >
                  ENGLISH
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-4 col-sm-6 portfolio-item filter-${image.category}`}
              style={{ position: 'relative' }}
            >
              <div
                style={imageContainerStyle}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img src={image.src} alt={image.alt} style={{ maxWidth: '100%' }} />
                <div
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                  style={{
                    ...overlayStyle,
                    opacity: image.overlayVisible ? 1 : 0,
                  }}
                >
                  <h6 className="d-flex justify-content-start" style={{ paddingLeft: '10px' }}>
                    Category: {image.title}
                  </h6>
                  <div className="d-flex" style={{ padding: '10px' }}>
                    <div
                      className="btn btn-outline-none"
                      style={{ width: '20px', marginRight: '5px' }}
                      onClick={() => openCarousel(index)}
                    >
                      <PlusSquare />
                    </div>
                    <div
                      className="btn btn-outline-none"
                      style={{ width: '20px', marginRight: '5px' }}
                      onClick={() => setExpandedImage(image)}
                    >
                      <ArrowsAngleExpand />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div className="modal" style={{ display: 'block', marginTop:'4.5rem' }}>
            <Header/>
          <div className="modal-content bg-dark">
            <span
              className="close text-light"
              style={{ cursor: 'pointer', height: '50px', width: '50px', fontSize: '30px', backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: '0', left:'0'  }}
              onClick={() => setExpandedImage(null)}
            >
          <ArrowLeft/> 
            </span>
            <img src={expandedImage.src} alt={expandedImage.title} style={{ maxWidth: '40%', maxHeight: '100vh', marginTop:'4rem' }}  />
          </div>
        </div>
      )}

      {/* Carousel Modal */}
      {carouselOpen && (
      <div className="modal" style={{ display: 'block' }}>
           <Header/>
       <div className="modal-content" style={{ display: 'flex',marginTop:'4rem', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
       <span
           className="close text-light"
           style={{ cursor: 'pointer', height: '50px', color:'grey', width: '50px', fontSize: '40px', position: 'absolute', top: '0', right:'0' }}
           onClick={closeCarousel}
           onMouseEnter={(e) => {
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'grey';
          }}>
            &times;
  
         </span>
         <button
           className="btn btn-outline-none text-light"
           style={{ fontSize: '30px', marginRight: '20px', position: 'absolute', left: '5rem',backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
           onClick={goToPrevImage}
         >
       <ArrowLeft/>
         </button>
      
         <img src={displayedImages[currentImageIndex].src} alt={displayedImages[currentImageIndex].title} style={{ maxWidth: '100%', maxHeight: '100vh' }} />
         <button
           className="btn btn-outline-none text-light"
           style={{ fontSize: '30px', marginLeft: '20px', position: 'absolute', right: '5rem', backgroundColor: 'rgba(0, 0, 0, 0.4)'  }}
           onClick={goToNextImage}
         >
         <ArrowRight/>
         </button>
       </div>
     </div>
     
      )}
    </section>
  );
}

export default Gallery;

