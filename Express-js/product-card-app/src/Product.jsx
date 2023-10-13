import "./Product.css";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

const Product = ({
  discountPercentage,
  thumbnail,
  title,
  discountPrice,
  price,
  rating,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="image-container">
                <div className="first">
                  <div className="discount-wishlist">
                    <span className="discount">{discountPercentage}%</span>
                    <span className="wishlist">
                      <BsSuitHeart className="heart-icon" />
                    </span>
                  </div>
                </div>

                <img
                  src={thumbnail}
                  alt={title}
                  className="img-fluid rounded thumbnail-image"
                />
              </div>

              <div className="product-detail-container">
                <div className="product-info">
                  <h5 className="product-name">{title}</h5>
                  <div className="product-prices">
                    <span className="new-price">&#8377;{discountPrice}</span>
                    <small className="old-price">&#8377; {price}</small>
                  </div>
                </div>

                <div className="rating-purchase">
                  <div className="rating">
                    <AiOutlineStar className="rating-star" />
                    <span className="rating-number">{rating}</span>
                  </div>

                  <span className="buy">BUY +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Adding prop-types validation
Product.propTypes = {
  discountPercentage: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discountPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Product;
