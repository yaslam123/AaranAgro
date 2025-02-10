"use client";
import portfolio_data from "@/data/portfolio_data";
import seeds_data from "@/data/seeds_data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// data
const categories = ["All", ...new Set(seeds_data.map((item) => item.category))];

export default function ProductListArea() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(seeds_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(seeds_data);
    } else {
      const findItems = seeds_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  // handle price

  const all_data = seeds_data;

  return (
    <>
      <section className="product-list-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-9">
              <div className="filter-mixtup">
                <div className="mixtup-filtering d-flex justify-content-center mb-60">
                  <div className="filter-btns">
                    {categories.map((cate, i) => (
                      <React.Fragment key={i}>
                        <button
                          onClick={() => filterItems(cate)}
                          className={`${
                            cate === activeCategory
                              ? "mixitup-control-active"
                              : ""
                          }`}
                        >
                          {cate}
                        </button>{" "}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="all-catagorys">
                  {items.map((item, i) => (
                    <div key={i} className="mix category-a" data-order="1">
                      <div className="feature-itemsv1">
                        <Image
                          src={item.images[0]} // Use the first image in the array
                          alt={item.title}
                          className="f-thumb"
                          width={150} // Provide a width
                          height={150} // Provide a height
                        />
                        <div className="content">
                          <Link
                            href={`/seeds-details/${item.id}`}
                            className="title"
                          >
                            {item.title}
                          </Link>
                          <p>{item.imgDesc}</p>

                          <Link
                            href={`/seeds-details/${item.id}`}
                            className="add-tocart"
                          >
                            View Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-list-leftbar">
                <h5 className="title">Our Product</h5>
                <div className="product-cate">
                  <ul className="product-list">
                    {items.map((item, i) => (
                      <li>
                        <Link href={`/seeds-details/${item.id}`}>
                          <span className="name">{item.title}</span>{" "}
                          <i className="fa-solid p900-clr fa-chevron-right" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="show-filter">Showing 1-16 Of 47 Result</span>
                <div className="colo-filter">
                  <h5 className="product-title">Filter By Color</h5>
                  <ul className="color-style">
                    <li>
                      <span className="color-item">
                        <span className="clr-step v1"></span>
                        Yellow
                      </span>
                      <span className="step">1</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v2"></span>
                        Black
                      </span>
                      <span className="step">2</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v3"></span>
                        White
                      </span>
                      <span className="step">3</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v4"></span>
                        Green
                      </span>
                      <span className="step">4</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v5"></span>
                        Blue
                      </span>
                      <span className="step">5</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v6"></span>
                        Red
                      </span>
                      <span className="step">6</span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v6"></span>
                        Gray
                      </span>
                      <span className="step">7</span>
                    </li>
                  </ul>
                </div>
                <div className="product-status">
                  <h5 className="product-title">Product Status</h5>
                  <ul className="color-style">
                    <li>
                      <span className="color-item">
                        In Stock
                        <span className="clr-step v1"></span>
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        On Sale
                        <span className="clr-step v2"></span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
