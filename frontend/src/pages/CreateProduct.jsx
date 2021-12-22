import "./CreateProduct.css";

function CreateProduct() {
    return (
        <div className="create__product">
             <h1 className="new__product__title">Create Product</h1>
           {/* <div className="new__product__form__container"> */}
             <form className="new__product__form">
                    <div className="newproduct__image__upload__container">
                      <img src="/images/img3.jpg" alt="" className="new__product__upload__image" />
                      <input type="file" id="file" className="image__input" />
                    </div>
                    <div className="form__data">
                    
                    <div className="first__set">
                      <div className="item1">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" id="productName" placeholder="Apple Airpod" />
                      </div>
                      <div className="item1">
                        <label htmlFor="countInStock">Count In Stock</label>
                        <input type="number" placeholder="How many?" id="countInStock" />
                      </div>
                      <div className="item1">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" placeholder="$"/>
                      </div>
                      <div className="item1">
                        <label htmlFor="discount">Discount</label>
                        <input type="number" id="discount"  placeholder="%" className="last"/>
                      </div>
                    </div>
                    <div className="second__set">
                      <div className="item2">
                        <label htmlFor="coupon">Coupon</label>
                        <select name="Coupon" id="coupon">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                      </div>
                      <div className="item2">
                        <label htmlFor="inStock">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                      </div>
                      <div className="item2">
                        <label htmlFor="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                      <div className="item2">
                        <label htmlFor="productDescription" className="description">Product Description</label>
                        <textarea id="productDescription" placeholder="Write Description..."></textarea>
                      </div>
                      <button className="new__product__upload__button">Create Product</button>
                  </div>
             </form>
           {/* </div> */}
        </div>
    )
}

export default CreateProduct
