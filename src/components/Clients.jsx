import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init();

// Define your component
function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* Add the CSS for the black and white to color effect, image size, and zoom effect directly within your component */}
      <style>
        {`
          /* CSS for the black and white to color hover effect */
          .img-black-and-white {
            filter: grayscale(100%);
            transition:filter 0.3s, transform 0.7s; ;
            width: 100px; /* Adjust the width as needed */
            height: auto; /* Maintain aspect ratio */
          }
          .image-container:hover .img-black-and-white {
            filter: grayscale(0%);
            transform: scale(1.1); /* Zoom out a bit on hover */
          }
        `}
      </style>

      <section  className="clients bg-light aos-init aos-animate" data-aos="fade-up">
        <div className="container pb-3 pt-3"   style={{ marginTop:'7rem'}}>
          <div className="row d-flex align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-1.png" alt="Client 1" className="img-fluid img-black-and-white" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-2.png" alt="Client 2" className="img-fluid img-black-and-white" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-3.png" alt="Client 3" className="img-fluid img-black-and-white" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-4.png" alt="Client 4" className="img-fluid img-black-and-white" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-5.png" alt="Client 5" className="img-fluid img-black-and-white" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="image-container mt-4">
                <img src="/client-6.png" alt="Client 6" className="img-fluid img-black-and-white" />
              </div>
            </div>
            {/* Add more image elements as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
