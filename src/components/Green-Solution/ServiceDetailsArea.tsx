"use client";
import React, { useState } from "react";

const WhatWeOffer = [
  {
    id: 1,
    title: "Custom Greenhouse Design",
    description:
      "Tailored solutions to suit your specific crops, climate, and farming needs.",
  },
  {
    id: 2,
    title: "Durable Materials",
    description:
      "We use high-quality materials that ensure long-lasting performance and optimal crop protection.",
  },
  {
    id: 3,
    title: "Innovative Technology Integration",
    description:
      "Our greenhouses come equipped with advanced features like climate control, automated irrigation, and energy-efficient systems to optimize growth conditions.",
  },
  {
    id: 4,
    title: "End-to-End Support",
    description:
      "From initial planning and construction to training on greenhouse operations, we are with you every step of the way.",
  },
];
const BenefitsOfGreenhouses = [
  {
    id: 1,
    title: "Extended Growing Seasons",
    description: "Grow crops year-round, even in harsh weather conditions.",
  },
  {
    id: 2,
    title: "Higher Yields",
    description:
      "Control the environment to achieve consistent and improved harvests.",
  },
  {
    id: 3,
    title: "Efficient Resource Use",
    description:
      "Save water and energy with precision irrigation and climate management.",
  },
  {
    id: 4,
    title: "Pest and Disease Control",
    description:
      "Protect crops from harmful pests and diseases for healthier produce.",
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
                  <img src="assets/img/service2.1.jpg" alt="img" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>Creating Sustainable Farming Environments</h3>
                  <p>
                    At Aaran Agritrade LTD, we specialize in designing and
                    constructing advanced greenhouses that transform how farmers
                    grow crops. Our greenhouse building service provides farmers
                    with the tools and infrastructure needed to cultivate
                    high-yield, quality crops year-round, regardless of external
                    weather conditions.
                  </p>
                </div>
                <div className="working-process-details"></div>
                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>Why Choose Aaran Agritrade?</h3>
                  <p>
                    With years of expertise and a farmer-first approach, FarmHub
                    is committed to providing sustainable and reliable
                    greenhouse solutions. Our goal is to help you achieve
                    maximum productivity and profitability while maintaining
                    environmental sustainability.
                  </p>
                </div>
                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>Build Your Future in Farming</h3>
                  <p>
                    Experience the benefits of modern greenhouse farming with
                    FarmHub. Let us help you create a sustainable and profitable
                    farming environment tailored to your unique needs. <br />{" "}
                    Contact Us Today to get started on your greenhouse project.
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
                    <h4>What We Offer:</h4>
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
                    <h4>Benefits of Greenhouses:</h4>
                    {BenefitsOfGreenhouses.map((item, i) => (
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
