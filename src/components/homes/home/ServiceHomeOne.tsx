import Link from "next/link";
import React from "react";

type Props = {
  style_2?: boolean;
};

export default function ServiceHomeOne({ style_2 }: Props) {
  return (
    <>
      {/* service-section white-bg */}
      <section
        className={`service-section  pb-60 p100-bg ${
          style_2 ? "" : "space-top"
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  How We Do It
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Harvesting dreams <br /> One crop at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="wow fadeInUp" data-wow-delay=".3s">
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/count1.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="#" className="title">
                    Mission
                  </Link>
                  <p>
                    Our mission at Aaran Agritrade Ltd is to empower modern
                    farmers with innovative solutions, including advanced
                    machinery, drip irrigation, and greenhouse technologies. We
                    aim to boost farmers' productivity and income while
                    promoting sustainable tropical vegetable farming and
                    improved forage quality.
                  </p>
                </div>
              </div>
            </div>
            <div className=" wow fadeInUp" data-wow-delay=".5s">
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/wheat-sesh.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="#" className="title">
                    Vission
                  </Link>
                  <p>
                    Our vision is to make Aaran Agritrade Ltd the leader in
                    tropical vegetable seeds in Somalia and East Africa by
                    delivering high-quality seeds, embracing innovation, and
                    supporting farmers. We strive to set the standard for
                    sustainable farming and contribute to agricultural
                    prosperity.
                  </p>
                </div>
              </div>
            </div>
            <div className=" wow fadeInUp" data-wow-delay=".7s">
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/smart-flower.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="#" className="title">
                    Objectives
                  </Link>
                  <p>
                    Our objective is to collaborate with authorities to ensure
                    compliance and align with local regulations. We empower
                    farmers through education on mitigating seasonal challenges,
                    promoting diversified crops, and enhancing productivity in
                    varying climates.
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
