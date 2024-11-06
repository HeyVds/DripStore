"./slideTenis.css"

export const SlideTenis = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
  
    const images = [
      "src/assets/imagesProduct/slide1.png", 
      "src/assets/imagesProduct/slide2.png", 
      "src/assets/imagesProduct/slide3.png",
      "src/assets/imagesProduct/slide4.png",
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
}