import Link from "next/link";
import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section className="servicevm-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service1.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Agro Tech Solutions
                  </Link>
                  <img src="assets/img/icon/water-hose.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service2.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Green House Solutions
                  </Link>
                  <img src="assets/img/icon/ser-flower.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service3.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Agro Consultation
                  </Link>
                  <img src="assets/img/icon/map-plant.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
