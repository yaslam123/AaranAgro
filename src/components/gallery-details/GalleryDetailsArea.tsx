import React from "react";

export default function GalleryDetailsArea() {
  return (
    <>
      <section className="gallery-detailssection overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center mb-40">
            <div className="col-lg-8">
              <div className="gallery-headleft-details">
                <img
                  src="assets/img/gallery/gallery-details-thumb1.jpg"
                  alt="Aaran Agritrade Gallery"
                />
                <div className="content">
                  <h3>Showcasing Our Journey and Impact</h3>
                  <p>
                    At Aaran Agritrade Ltd, we take pride in transforming
                    Somalia’s agricultural landscape through innovation,
                    quality, and a deep commitment to empowering farmers. Our
                    gallery captures the dedication and efforts we’ve invested
                    in advancing sustainable agricultural practices, improving
                    productivity, and contributing to the nation’s food
                    security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gallery-headright-details">
                <h4>Our Farming Practices</h4>

                <div className="author-details">
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Client
                      <span>:</span>
                    </span>
                    <span className="info">Agro Communities</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Author
                      <span>:</span>
                    </span>
                    <span className="info">Aaran Agritrade Team</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Date
                      <span>:</span>
                    </span>
                    <span className="info">2025</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Category
                      <span>:</span>
                    </span>
                    <span className="info">Agriculture & Innovation</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Range
                      <span>:</span>
                    </span>
                    <span className="info">Customized Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-content-gallery">
            <div
              className="thumb w-100 mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <img
                src="assets/img/gallery/gallery-details-thumb12.jpg"
                alt="Aaran Agritrade Projects"
                className="w-100"
              />
            </div>
            <div className="cont-box1 mb-40 wow fadeInUp" data-wow-delay=".4s">
              <h3>Transforming Agriculture Through Innovation</h3>
              <p>
                Our services include providing high-quality seeds, fertilizers,
                and pesticides, as well as advanced greenhouse solutions and
                modern farming technologies. We collaborate with international
                partners to bring global expertise to local farming communities,
                ensuring increased yields and sustainability.
              </p>
            </div>
            <div className="cont-box2 mb-40 wow fadeInUp" data-wow-delay=".5s">
              <h3>Empowering Farmers with Knowledge</h3>
              <p>
                Aaran Agritrade conducts training sessions and workshops to
                educate farmers on best practices, sustainable methods, and the
                use of modern technologies. By equipping them with the right
                tools and knowledge, we enable them to achieve long-term success
                and prosperity.
              </p>
            </div>
            <div className="other-listing wow fadeInUp" data-wow-delay=".6s">
              <ul>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Providing High-Quality Agricultural Inputs</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Building Advanced Greenhouse Solutions</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Partnering with Global Agricultural Leaders</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Fostering Sustainability in Farming</h5>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Empowering Farmers with Innovation</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Enhancing Productivity and Efficiency</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Ensuring Food Security Nationwide</h5>
                </li>
                <li>
                  <i className="fa-regular fa-circle-dot"></i>
                  <h5>Supporting Communities Through Training</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
