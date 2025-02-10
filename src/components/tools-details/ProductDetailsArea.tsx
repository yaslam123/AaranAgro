"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import seeds_data from "@/data/seeds_data";
import sprayers_data from "@/data/sprayers_data";
import tools_data from "@/data/tools_data";

import Image from "next/image";

export default function ProductDetailsArea({ product }: { product: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [items, setItems] = useState(tools_data);

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
                        <Link href={`/tools-details/${item.id}`}>
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
            {/* only for sprayer products */}
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

                {/*  */}
                <div className="col-xl-7 col-lg-6">
                  <div className="product-infowrap">
                    <h3 className="title">{product.title}</h3>
                    <p>{product.description}</p>

                    {/* Details */}
                    <h3 className="title">
                      <button className="tablink">Details</button>
                    </h3>
                    <ul className="about-list2 mb-40 gap-2">
                      {/* Dynamically map product details */}
                      {Array.from({ length: 5 }, (_, index) => index + 1).map(
                        (detailIndex) => {
                          const detailKey =
                            `detail${detailIndex}` as keyof typeof product;
                          const detailValue = product[detailKey];

                          // Only render details if they exist
                          if (detailValue) {
                            return (
                              <li key={detailIndex}>
                                <i className="fa-solid fa-check"></i>
                                <span className="cmn-name p900-clr fw-medium">
                                  {detailValue}
                                </span>
                              </li>
                            );
                          }
                          return null;
                        }
                      )}
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
