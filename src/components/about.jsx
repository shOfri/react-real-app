import React from "react";
import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <div className="col-8">
      <PageHeader
        title={
          <>
            Real <i className="bi bi-layers-half"></i> App About
          </>
        }
      />
      <p className="mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet
        sapiente magnam eius voluptatum ipsum beatae explicabo blanditiis quo
        perferendis fuga assumenda maxime, illum aliquid dicta eaque incidunt
        distinctio ut nobis suscipit excepturi veritatis necessitatibus
        consectetur quia! Laudantium repudiandae quibusdam nulla saepe nesciunt
        totam vel assumenda pariatur? Ab, cupiditate inventore!
      </p>
    </div>
  );
};

export default About;
