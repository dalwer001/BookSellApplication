import React, { useEffect } from 'react';
import { FaMouse } from "react-icons/fa";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from 'react-alert';
import Loader from "../layout/Loader/Loader.js";

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <MetaData title="Book Sell" />
    
              <div className="banner">
                <p>WELCOME TO BOOK SELLING PLATFORM</p>
                <h1>FIND AMAZING BOOKS BELOW</h1>
    
                <a href="#container">
                  <button>
                    Scroll <FaMouse />
                  </button>
                </a>
              </div>
    
              <h2 className="homeHeading">Featured Books</h2>
    
              <div className="container" id="container">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </>
          )}
        </>
      );
}

export default Home;
