import React from "react";

function ProductCard({
  name,
  description,
  image,
  price,
  onAddToCart,
  discount,
}) {
  return (
    <div className="product-card">
      <div className="product-image">{image}</div>
      <div className="product-name">{name}</div>
      <div className="proudct-description">{description}</div>

      {discount ? (
        <div className="product-price">
          <div className="price-original">Original price : {price}</div>
          <div className="price-discount">Discounted price : {discount}</div>
        </div>
      ) : (
        <div className="product-price">{price}</div>
      )}

      <button onClick={onAddToCart} className="button button-primary">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
