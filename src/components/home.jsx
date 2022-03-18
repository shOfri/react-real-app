import React from "react";
import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <div className="col-8">
      <PageHeader
        title={
          <>
            Real <i className="bi bi-layers-half"></i> App Home
          </>
        }
      />
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quod officiis animi. Laborum incidunt, doloribus numquam magnam nobis
        repellat, rerum quisquam a aut ratione dolor enim nesciunt modi officia
        consequuntur atque iste placeat, pariatur iure voluptatem doloremque sit
        quam suscipit voluptate! Explicabo mollitia impedit illo aspernatur ab
        nisi quisquam asperiores.
      </p>
    </div>
  );
};

export default Home;
