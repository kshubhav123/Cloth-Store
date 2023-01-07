import React from "react";
import { Link } from "react-router-dom";
import Images from "../Data/CategoriesPageData";
import Products from "../Data/Products";



const Categories=()=> {
  console.log("Dta",Products);
  return (
    <div>
      <ImageCarousel />
      <ProductCategory />
      <ProductCard />
    </div>
  );
}

export default Categories;

const ImageCarousel = () => {
  return (
    <>
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
              src="https://wallpapercave.com/wp/wp2550566.jpg"
              height="600px"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://c1.wallpaperflare.com/preview/520/865/272/t-shirt-fashion-drawing-textile-design.jpg"
              height="600px"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/2489629.jpg"
              height="600px"
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};





const ProductCategory = () => {
  console.log("image", Images);
  return (
    <>
      <h2
        className="h1 text-center font-weight-bold my-5  p-5 pb-3"
        style={{ fontFamily: "cursive" }}
      >
        Products Category
      </h2>
      <div className="container">
        <div className="row p-3 rows-cols-auto">
          {Images.map((item) => {
            return (
              <>
                <ProductCategoryColumn id={item.imageId} image={item.Imgurl} title={item.title}  />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ProductCategoryColumn = (props) => {
  
  
  const title=props.title;
  const product=props;
  
  return (
    <>
      <div className="col my-4">
        <div className="container card p-3 pb-0"  style={{
          boxShadow:"3px 4px 10x 20px",
          borderRadius:"40px",
          height:"350px",
          }}>
          <img
            src={props.image}
            className="mx-auto rounded d-block"
            width="300px"
            height="260px"
            alt="..."
          />
          <h4
            className="h4 py-4 text-center"
            style={{
              letterSpacing: "3px",
              textAlign: "center",
              }}
          >
            <Link className="text-dark" to={{ pathname: `/listitem/${title}`, state: { product }}}>
              <h4> {props.title} </h4>  
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

const ProductCard = () => {


  return (
    <>
      <h2
        className="container h2 font-weight-bold p-1 px-3 mt-5 mb-0"
        style={{ fontFamily: "cursive" }}
      >
        Latest Collection
      </h2>

      <hr className="container" />
      <div className="container">
        <div className="row p-3 rows-cols-auto">
          {Products.map((item) => {


            return (
              <>

                <ProductCardColumn
                  Id={item.id}
                  brnd={item.Brandname}
                  price={item.Price}
                  type={item.type}
                  description={item.desc}
                  Img={item.Imgurl}
                />
              </>
            );

          })}
        </div>
      </div>
    </>
  );
};

const ProductCardColumn = (props) => {
  const id=props.Id;
  const product=props;
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
};
