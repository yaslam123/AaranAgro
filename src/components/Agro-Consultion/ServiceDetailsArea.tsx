"use client";
import React, { useState } from "react";

const WhatWeOffer = [
  {
    id: 1,
    title: "Personalized Farm Assessments",
    description:
      "We evaluate your farm’s unique conditions, including soil quality, climate, crop type, and resource availability, to develop customized recommendations.",
  },
  {
    id: 2,
    title: "Crop Management Strategies",
    description:
      "From planting to harvest, we provide guidance on optimizing yields and maintaining crop health.",
  },
  {
    id: 3,
    title: "Sustainable Practices",
    description:
      "Learn how to implement eco-friendly methods to conserve resources, enhance soil fertility, and reduce environmental impact.",
  },
  {
    id: 4,
    title: "Pest and Disease Control",
    description:
      "Get expert advice on identifying, managing, and preventing pest and disease outbreaks with minimal chemical usage.",
  },
  {
    id: 5,
    title: "Market Insights",
    description:
      "Stay ahead with insights into market trends, crop pricing, and strategies for increasing profitability.",
  },
];
const WhyChoose = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Our team comprises agricultural experts with years of experience in various farming practices and technologies.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We understand that no two farms are the same, which is why our consultations are personalized to your specific needs.",
  },
  {
    id: 3,
    title: "Continuous Support",
    description:
      "Beyond one-time advice, we offer ongoing support to help you adapt to challenges and capitalize on opportunities.",
  },
  {
    id: 4,
    title: "Focus on Results",
    description:
      "Our goal is to help farmers increase productivity, profitability, and sustainability.",
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
                  <img src="assets/img/service3.1.jpg" alt="img" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>Expert Guidance for Smarter Farming</h3>
                  <p>
                    Aaran Agro Consultation Service is designed to empower
                    farmers with the knowledge, strategies, and insights needed
                    to make informed decisions and optimize agricultural
                    practices. Whether you’re a small-scale farmer or managing
                    large-scale operations, our team of experts is here to guide
                    you toward achieving your farming goals.
                  </p>
                </div>
                <div className="working-process-details"></div>
                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>Grow Smarter, Not Harder</h3>
                  <p>
                    With FarmHub’s Agro Consultation Service, you gain access to
                    actionable insights and expert recommendations that drive
                    results. Let us help you cultivate success and
                    sustainability in your agricultural journey. <br /> Book
                    Your Consultation today and take the first step toward
                    smarter farming.
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
                    <h4>Why Choose Our Agro Consultation Service?</h4>
                    {WhyChoose.map((item, i) => (
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
