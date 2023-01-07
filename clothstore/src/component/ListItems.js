import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../Data/Products";

const ListItems=()=> {
  const [data, setData] = useState([]);
  let params = useParams();
  const category = params.title;

  useEffect(() => {
    setData(Products);
  }, []);

  return (
    <div>
      <div className="row m-2 rows-cols-auto">
        <div className="col-2">
          <ListItemsSideNav />
        </div>

        <div className="col">
          <div className="container">
            <div className="row">
              {data.map((item) => {
                if (category === item.type) {
                  console.log(item.type);
                  return (
                    <ListItemsProductColumn
                      id={item.id}
                      brnd={item.Brandname}
                      price={item.Price}
                      type={item.type}
                      description={item.desc}
                      Img={item.Imgurl}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItems;

const ListItemsSideNav = () => {
  return (
    <>
      <nav className="nav flex-column w-100">
        <a
          className="nav-link text-dark font-weight-bold mt-2 p-2 nvlink"
          href="#"
        >
          Home
        </a>
        <a className="nav-link text-dark fon nvlink p-3" href="#">
          Categoires
        </a>
        <a className="nav-link text-dark fon nvlink p-3" href="#">
          Sort By
        </a>
        <a className="nav-link text-dark fon nvlink p-3" href="#">
          Filter
        </a>
        <a className="nav-link text-dark fon nvlink p-3" href="#">
          Brands
        </a>
        <a className="nav-link text-dark fon nvlink p-3" href="#">
          Color
        </a>
      </nav>
    </>
  );
};

const ListItemsProductColumn = (props) => {
  const id = props.id;
  const product = props;
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
