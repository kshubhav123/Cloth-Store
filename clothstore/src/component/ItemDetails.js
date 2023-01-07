import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../Data/Products";


const ItemDetails = () => {
  const [data, setData] = useState([]);

  let params = useParams();

  const num = parseInt(params.id);

  useEffect(() => {
setData(Products)
  }, []);

  return (
    <div class="p-1">
      <div className="row">
        <h2
          className="text-center p-5"
          style={{ fontFamily: "Baloo 2 cursive", backgroundColor: "#fafafa" }}
        >
          {data.map((item) => {
            if (num === item.id) {
              return item.Brandname;
            }
          })}
        </h2>
      </div>

      <div className="row container-fluid">
        <div className="col">
          {data.map((item) => {
            if (item.id === num) {
              return <ImageCaresoul Img={item.Imgurl} />;
            }
          })}
        </div>

        <div className="col p-3 mx-2">
          {data.map((item) => {
            if (item.id === num) {
              return (
                <ProductDescription
                  id={item.id}
                  brnd={item.Brandname}
                  price={item.Price}
                  oldPrice={item.oldPrice}
                  type={item.type}
                  brndTitle={item.brndTitle}
                  colors={item.color}
                  size={item.size}
                  description={item.desc}
                  Img={item.Imgurl}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

const ImageCaresoul = (props) => {
  console.log(props.Img);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide p-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.Img[0]}
              className="d-block w-100"
              height="700px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.Img[1]}
              className="d-block w-100"
              height="700px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.Img[2]}
              className="d-block w-100"
              height="700px"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
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

const ProductDescription = (props) => {
  
  const color = props.colors;
  const size = props.size;
  const description = props.description;
  // console.log("props", id);
  return (
    <>
      
      <h3
        className="text-uppercase"
        style={{
          fontFamily: "baloo2",
          letterSpacing: " 2px",
          fontWeight: "600",
        }}
      >
        {props.brndTitle}
      </h3>

      <div>
        <ul
          className="list-unstyled text-justify"
          style={{ fontWeight: "bolder" }}
        >
          <li>{props.type} </li>
        </ul>
      </div>
      <hr />

      <h6
        className="font-weight-bold mb-4"
        style={{
          fontSize: " x-large",
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}
      >
        {props.price}{" "}
        <small className="mx-3 del text-secondary">
          {" "}
          <del>{props.oldPrice}</del>{" "}
        </small>{" "}
      </h6>

      <span
        className="h6 my-1 text-dark"
        style={{ fontSize: "large", fontWeight: "bold" }}
      >
        Size
      </span>
      <br />

      <div className="btn-group my-1 mb-2 p-2">
        <div className="row row-cols-6">
          <div className="col mb-2 mx-3">
            {size.map((item) => {
              return (
                <>
                  <span
                    class="mx-3 p-3"
                    style={{
                      fontWeight: "bolder",
                    }}
                  >
                    {item}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <span
        className="h6 text-dark"
        style={{ fontSize: "large", fontWeight: "bold" }}
      >
        Colors
      </span>

      <div className="container my-2">
        <div className="row row-cols">
          <div className="col">
            {color.map((colors, index) => (
              <button
                class="btn mx-4 my-2 mb-3"
                style={{
                  background: colors,
                  width: "40px",
                  height: "40px",
                  border: "hidden",
                  borderRadius: "10px",
                  boxShadow: "1px 1px 10px",
                }}
                key={index}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <h4 class="my-4 mb-2" style={{ fontWeight: "bold", fontSize: "large" }}>
        Available Offers
      </h4>
      <div className="p-2 mb-3">
        <ul className="list-square text-justify">
          {description.map((item) => {
            return <li>{item} </li>;
          })}
        </ul>
      </div>

      <div className="d-grid p-3 my-2">
        <Link
          to={"/login"}
          className="btn btn-danger rounded p-2"
          type="button"
        >
          <span style={{ fontSize: "larger" }}>Place Your Order</span>
        </Link>
      </div>
    </>
  );
};
