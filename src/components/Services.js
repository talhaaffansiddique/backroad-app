import React from "react";
import { Title } from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, title, icon, text } = service;
          return (
            <article className="service">
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">saving money</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
