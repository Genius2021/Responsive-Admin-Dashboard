import "./ProductPage.css";
import { Link } from "react-router-dom";
import Chart from "../components/charts/Chart"
import { productData } from "../data/userData"
import { Publish } from "@mui/icons-material";

function ProductPage() {
    return (
        <div className="product">
           <div className="product__title__container">
             <h1 className="product__title">Product</h1>
             <Link to="/newProduct">
                <button className="product__add__button">
                    Create
                </button>
             </Link>
           </div>
           <div className="product__top">
               <div className="product__top__left">
                   <Chart data={productData} dataKey="Sales" title="Sales Performance" />
               </div>
               <div className="product__top__right">
                   <div className="product__info__top">
                       <img src="/images/img2.jpg" alt="" className="product__info__image" />
                       <span className="product__name">Apple Ipad</span>
                   </div>
                   <div className="product__info__bottom">
                       <div className="product__info__item">
                         <span className="product__info__key">Id:</span>
                         <span className="product__info__value">123</span>
                       </div>
                       <div className="product__info__item">
                         <span className="product__info__key">Sales:</span>
                         <span className="product__info__value">$123</span>
                       </div>
                       <div className="product__info__item">
                         <span className="product__info__key">Active:</span>
                         <span className="product__info__value">yes</span>
                       </div>
                       <div className="product__info__item">
                         <span className="product__info__key">In stock:</span>
                         <span className="product__info__value">no</span>
                       </div>
                   </div>
               </div>
           </div>
           <div className="product__bottom">
             <form className="product__form">
                <div className="product__form__left">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple Airpod" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="product__form__right">
                    <div className="product__upload">
                      <img src="/images/img3.jpg" alt="" className="product__upload__image" />
                      <label htmlFor="file">
                          <Publish className="product__upload__icon" />
                      </label>
                          <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="product__upload__button">Update</button>
                </div>
             </form>
           </div>
           
        </div>
    )
}

export default ProductPage
