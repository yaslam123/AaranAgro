import React from "react";

export default function GoogleMap() {
  return (
    <>
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.129531212068!2d45.321557924281635!3d2.0511004588439024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58433a8dd8a0cd%3A0xd74478345abe3e51!2sAARAN%20AGRITRADE%20LTD!5e0!3m2!1sen!2sso!4v1739107444401!5m2!1sen!2sso"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
