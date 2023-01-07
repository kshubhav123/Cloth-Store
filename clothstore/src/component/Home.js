import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Data/Products";

const Home=()=> {
  return (
    <div>
      <ImageCarosel />
      <ProductCards />
      <Advertizement />
    </div>
  );
}

export default Home;

const ImageCarosel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.10wallpaper.com/wallpaper/2560x1600/1205/white_t_shirt-High_Quality_wallpaper_2560x1600.jpg"
            height="520px"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.10wallpaper.com/wallpaper/2560x1600/1205/white_t_shirt-High_Quality_wallpaper_2560x1600.jpg"
            height="520px"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.10wallpaper.com/wallpaper/2560x1600/1205/white_t_shirt-High_Quality_wallpaper_2560x1600.jpg"
            height="520px"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"> Previous </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const ProductCards=() =>{
  const [productData, setProductData] = useState([]);
  useEffect(() => {
setProductData(Products)
  }, []);

  console.log(productData);

  return (
    <>
      <h2
        className="text-center p-4 m-3 mt-5"
        style={{
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          letterSpacing: "3.0px",
          fontWeight: "700",
        }}
      >
        {" "}
        Shopping Products{" "}
      </h2>

      <div className="container">
        <div className="row p-3 rows-cols-auto">
          {productData.map((data) => {
            return (
              <>
                <ProductCardColumns
                  id={data.id}
                  brnd={data.Brandname}
                  price={data.Price}
                  type={data.type}
                  description={data.desc}
                  Img={data.Imgurl}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

const ProductCardColumns=(props)=> {
  const product = props;
  console.log("props",product);
  const id = product.id;


  return (
    <>
      <div key={product.id} className="col my-4">
        <div
          className="card shadow-sm mb-3 bg-white rounded"
          style={{ width: "18rem" }}
        >
          <img
            src={product.Img[0]}
            className="card-img-top p-4"
            alt="..."
            height="280px"
          />

          <div className="card-body">
            <Link
              to={{ pathname: `/itemDetails/${id}`, state: { product } }}
              className="card-title h5 text-dark"
            >
              {props.brnd}
            </Link>

            <h6 className="font-weight-bold my-2"> {product.price} </h6>

            <small>
              <b> {product.type} </b>
            </small>


            <hr />

            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                <Link
                  className="text-dark"
                  to={{ pathname: `/itemDetails/${id}`, state: { product } }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Advertizement = () => {
  return (
    <>
      <div className="container my-4 p-1">
        <div className="row rows-cols-auto">
          <div className="col p-2">
            <img
              className="position-sticky image-fluid w-100 bg-light rounded"
              src="https://previews.123rf.com/images/goodstudio/goodstudio1912/goodstudio191200254/136516644-fashion-shop-logo-vector-illustration-luxury-clothing-store-watercolor-logotype-label-design-inscrip.jpg"
              height="400px"
              alt=""
            />
          </div>
          <div className="col">
            <div
              className="p-2"
              style={{
                fontStretch: "extra-expanded",
                letterSpacing: "1px",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              <h2 className="px-3 mb-0" >
                {" "}
                <span  style={{letterSpacing:"3.0px"}}>Fashion Store</span>
              </h2>
              <p className="text-justify p-3" style={{textAlign:"justify"}}>
                iores iste sit quae, possimus magnam nam eligendi libero in
                iusto est illum amet ut maxime aut quia. Deserunt. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Vel ad enim
                consectetur possimus amet quo qui quasi impedit porro nulla
                repudiandae adipisci soluta, ratione id voluptatem Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Adipisci facere
                quidem expedita reprehenderit maiores architecto perspiciatis
                provident voluptatum laudantium id? Est necessitatibus
                dignissimos deleniti adipisci voluptates sequi, suscipit
                quibusdam consectetur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere eligendi nisi dolorem, nam iure
                explicabo ipsum aliquid adipisci perferendis quibusdam suscipit
                libero ex, laudantium harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
