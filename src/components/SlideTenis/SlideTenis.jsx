import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";

import "./slideTenis.css";

export const SlideTenis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const images = [
    "/SlideTenis-image/slide1.png",
    "/SlideTenis-image/slide2.png",
    "/SlideTenis-image/slide3.png",
    "/SlideTenis-image/slide4.png",
  ];

  const colorToIndexMap = {
    red: 0,
    orange: 1,
    gray: 2,
    green: 3,
  };

  // Referência para o Swiper
  const swiperRef = useRef(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const index = colorToIndexMap[color];
    setCurrentIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleBuyClick = () => {
    if (!selectedSize && !selectedColor) {
      console.log("Selecione um tamanho e uma cor.");
    } else if (!selectedSize) {
      console.log("Selecione um tamanho.");
    } else if (!selectedColor) {
      console.log("Selecione uma cor.");
    } else {
      console.log("Compra realizada com sucesso!");
      setSelectedSize(null);
      setSelectedColor(null);
    }
  };

  return (
    <div className="flex-body">
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={false}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="carousel-images"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Imagem ${index + 1}`} className="active" />
            </SwiperSlide>
          ))}

          <div className="thumbnails">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Miniatura ${index + 1}`}
                // onClick={() => goToImage(index)}
                className={
                  index === currentIndex ? "thumbnail active" : "thumbnail"
                }
              />
            ))}
          </div>
        </Swiper>
      </div>

      <div className="text-content">
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <p className="product-category">Casual | Nike | REF: 38416711</p>
        <div className="product-rating">
          <span>⭐⭐⭐⭐⭐</span>{" "}
          <span className="rating-value">
            4.7 <Icon icon="material-symbols-light:star" />
          </span>
          <span className="avaliacoes">(90 avaliações)</span>
        </div>

        <div className="product-price">
          <span className="current-price">R$ 219,00</span>
          <span className="old-price">R$ 219,00</span>
        </div>
        <p className="description">Descrição do produto</p>

        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="product-size">
          <p>Tamanho</p>
          <div className="size-options">
            {[39, 40, 41, 42, 43].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-color">
          <p>Cor</p>
          <div className="color-options">
            {["red", "orange", "gray", "green"].map((color) => (
              <button
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorSelect(color)}
              ></button>
            ))}
          </div>
        </div>
        <button onClick={handleBuyClick} className="buy-button">
          <Button label="COMPRAR" size="x-medium" style="warning" />
        </button>
      </div>
    </div>
  );
};
