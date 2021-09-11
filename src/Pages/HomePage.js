import React from "react";
import { HomePageStyled } from "../Components/";
import coffeImage from "../Images/img-3.jpg";

function HomePage() {
  return (
    <>
      <HomePageStyled>
        <section
          className="homepage__top"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${coffeImage}
            )`,
            backgroundPosition: "center center",
          }}
        >
          <div className="homepage__greetings">
            <h3>Good Evening!</h3>
            <h4>SATARDAY, SEPTEMBER 11, 2021</h4>
          </div>
          <div className="homepage__gradient"></div>
        </section>
        <div className="homepage__down">some note pad componetns</div>
      </HomePageStyled>
    </>
  );
}

export default HomePage;
