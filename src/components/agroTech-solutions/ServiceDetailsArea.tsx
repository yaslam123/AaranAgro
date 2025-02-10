"use client";
import React, { useState } from "react";

const WhatWeOffer = [
  {
    id: 1,
    title: "Precision Farming Tools?",
    description:
      "Leverage data-driven insights to optimize crop management, monitor soil health, and increase yields.",
  },
  {
    id: 2,
    title: "Modern Agricultural Equipment",
    description:
      "From automated machinery to smart irrigation systems, we provide tools that save time and reduce labor.",
  },
  {
    id: 3,
    title: "Sustainable Practices",
    description:
      "Adopt eco-friendly methods to improve soil fertility, reduce chemical usage, and promote long-term agricultural health.",
  },
];
const WhyChooseUs = [
  {
    id: 1,
    title: "Expert Support?",
    description:
      "Our team of agricultural experts is dedicated to guiding farmers at every step, ensuring the successful integration of technology into their practices.",
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "We tailor our services to meet the specific needs of small-scale and large-scale farmers.",
  },
  {
    id: 3,
    title: "Proven Results",
    description:
      "With our solutions, farmers have reported significant improvements in productivity and cost-efficiency.",
  },
];

export default function ServiceDetailsArea() {
  const [isOpen, setIsOpen] = useState(0);

  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  };

  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/service1.1.jpg" alt="img" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>Empowering Farmers with Cutting-Edge Technology</h3>
                  <p>
                    At Aaran AgroLTD, we are committed to revolutionizing
                    agriculture by integrating innovation and technology into
                    every aspect of farming. Our Agro Tech Solutions are crafted
                    to meet the evolving needs of farmers, enabling them to
                    overcome traditional challenges and embrace modern,
                    efficient practices. By leveraging the latest advancements
                    in agricultural technology, we aim to empower farmers to
                    maximize productivity, enhance operational efficiency, and
                    adopt sustainable practices that benefit both their
                    livelihoods and the environment.
                  </p>
                </div>
                <div className="working-process-details"></div>
                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>Let’s Grow Together</h3>
                  <p>
                    Step into the future of farming with FarmHub’s Agro Tech
                    Solutions. Together, we can cultivate a more prosperous and
                    sustainable agricultural landscape. Contact Us Today to
                    learn more or request a personalized consultation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-details-left">
                <div
                  className="tab-faq faq mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    <h4>What We Offer</h4>
                    {WhatWeOffer.map((item, i) => (
                      <div
                        key={i}
                        className={`accordion-single ${
                          isOpen === i ? "active" : ""
                        }`}
                      >
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button"
                          >
                            {item.title}
                          </button>
                        </h5>
                        <div
                          className="content-area"
                          style={{ display: isOpen === i ? "block" : "none" }}
                        >
                          <div className="content-body">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-faq faq mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    <h4>Why Choose Us?</h4>
                    {WhyChooseUs.map((item, i) => (
                      <div
                        key={i}
                        className={`accordion-single ${
                          isOpen === i ? "active" : ""
                        }`}
                      >
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button"
                          >
                            {item.title}
                          </button>
                        </h5>
                        <div
                          className="content-area"
                          style={{ display: isOpen === i ? "block" : "none" }}
                        >
                          <div className="content-body">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
