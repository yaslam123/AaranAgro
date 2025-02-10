import Link from "next/link";
import React from "react";

export default function AboutHomeTwo() {
  return (
    <>
      <section className="about-section style-v01 space-top pb-60 mb-3 white-bg">
        <div className="container">
          <div className="row g-4 r">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div
                className="about-thumv02 position-relative w-100 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <img src="assets/img/About2.jpg" alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    OUR COMPANY PROFILE
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Farming with passion
                  </h2>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Aaran Agritrade Ltd was founded on January 1, 1989, by a
                    group of young scholars committed to delivering high-quality
                    seeds, agricultural inputs, and services to farmers across
                    Somalia. Responding to the growing demand for premium seeds
                    and agricultural products, our company has expanded its
                    operations nationwide and now has a direct or indirect
                    presence in more than five federal states.
                  </p>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Registered with several key governmental bodies, Aaran
                    Agritrade Ltd is a recognized leader in the agricultural
                    sector in Somalia. Our registrations include the Ministry of
                    Agriculture and Irrigation (February 2, 1989), the Ministry
                    of Commerce and Industry (April 17, 2013), the Somali
                    Chambers of Commerce and Industry (July 2, 2014), and the
                    Municipality of Mogadishu where our headquarters are based
                    (registered on February 10, 2020).
                  </p>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    We maintain strong partnerships with international seed
                    producers and agricultural input companies from Italy,
                    Holland, France, and Yemen. Our strategic focus is on
                    developing seed varieties that offer durability, extended
                    shelf life, and high yields, all while being environmentally
                    friendly. These varieties are well-suited for both
                    commercial outdoor and greenhouse cultivation, catering to
                    commercial growers and professional sectors alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
