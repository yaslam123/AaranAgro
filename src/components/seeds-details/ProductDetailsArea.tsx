"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import seeds_data from "@/data/seeds_data";

import Image from "next/image";

export default function ProductDetailsArea({ product }: { product: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [items, setItems] = useState(seeds_data);

  return (
    <>
      <section className="product-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-3 col-md-5 pe-xl-4">
              <div className="product-details-leftbar mb-60">
                <div className="product-categori-select">
                  <h4>Our Products</h4>
                </div>
                <div className="tab-faq faq wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion-section d-grid gap-xxl-3 gap-lg-3 gap-2">
                    {items.map((item, i) => (
                      <ul className="about-list2 gap-2">
                        <Link href={`/seeds-details/${item.id}`}>
                          <li>
                            <i className="fa-solid p900-clr fa-arrow-right" />
                            <span className="cmn-name p900-clr fw-medium">
                              {item.title}
                            </span>
                          </li>
                        </Link>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="row g-4 mb-60 product-infowrap">
                <div className="col-xl-5 col-lg-6">
                  <div className="shop-details-wrap">
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[Navigation, Thumbs]}
                      className="swiper mySwiper2 "
                    >
                      {product.thumbnails.map((img: string, index: number) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="shop-details-bigthumb">
                            <Image
                              src={img}
                              alt={`${product.title} Image ${index + 1}`}
                              width={600}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>
                      ))}

                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </Swiper>
                    <Swiper
                      onSwiper={(swiper) => setThumbsSwiper(swiper)}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={3}
                      freeMode={true}
                      watchSlidesProgress={true}
                      breakpoints={{
                        480: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                        991: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1199: {
                          slidesPerView: 5,
                          spaceBetween: 24,
                        },
                      }}
                      className="swiper mySwiper"
                    >
                      {product.thumbnails.map((img: string, index: number) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="shop-details-samll d-center">
                            <Image
                              src={img}
                              alt={`${product.title} Image ${index + 1}`}
                              width={600}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="product-infowrap">
                    <h3 className="title">{product.title}</h3>
                    <p>{product.description}</p>
                    <h3 className="title">
                      <button className="tablink">Description</button>
                    </h3>
                    <ul className="about-list2 mb-40 gap-2">
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Category:
                        </span>{" "}
                        {product.category}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Enviroment:
                        </span>{" "}
                        {product.enviroment}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Suitable Climate:
                        </span>{" "}
                        {product.suitableClimate}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Germination time:
                        </span>{" "}
                        {product.germinationTime}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Sowing depth:
                        </span>{" "}
                        {product.sowingDepth}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Between spaces:
                        </span>{" "}
                        {product.betweenSpaces}
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span className="cmn-name p900-clr fw-medium">
                          Harvesting time:
                        </span>{" "}
                        {product.harvestingTime}
                      </li>
                    </ul>
                    <Link href="/contact" className="cmn-btn d-inline-flex">
                      Get In Touch
                    </Link>
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
