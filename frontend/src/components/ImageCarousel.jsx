import React, { useEffect, useRef } from 'react';
import '../ImageCarousel.css';

const imageData = [
  { url: "https://www.salonanata.com/home/wp-content/uploads/2023/08/stretch2.jpg", name: "Flexibility Stretch Massage", slug: "stretch-massage" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2022/02/relief-7-min.jpg", name: "Relief Massage", slug: "relief-massage" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2022/02/plarmia-3-min.jpg", name: "Perawatan Plarmia", slug: "plarmia" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2022/02/cronna-7-min.jpg", name: "Perawatan Cronna", slug: "cronna" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/08/DSCF7261-500x500.jpg", name: "Hair Styling", slug: "hair-styling" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2020/04/hairmask-500x500.jpg", name: "Hair Mask", slug: "hair-mask" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2020/04/mengembang-500x500.jpg", name: "Mengembang Treatment", slug: "mengembang" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2020/03/maskico-500x500.jpg", name: "Maskico Treatment", slug: "maskico" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2020/01/rollericon-500x500.jpg", name: "Roller Facial", slug: "roller-facial" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/totok-1.jpg", name: "Totok Wajah", slug: "totok-wajah" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/09/DSCF6582-500x500.jpg", name: "Lulur Badan", slug: "lulur" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/09/DSCF7184-500x500.jpg", name: "Facial Whitening", slug: "facial-whitening" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/09/refleksibc-500x500.jpg", name: "Refleksi", slug: "refleksi" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/stypyd-1-500x500.jpg", name: "Hair Coloring", slug: "hair-coloring" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/DSCF6982-500x500.jpg", name: "Blow Rambut", slug: "blow-rambut" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/sanggul-2-500x500.jpg", name: "Sanggul", slug: "sanggul" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/IMG_7433-500x500.jpg", name: "Make Up Pesta", slug: "make-up" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/cuthair-500x500.jpg", name: "Haircut", slug: "haircut" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/mkp-1-500x500.jpg", name: "Make Up Wisuda", slug: "makeup-wisuda" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/09/pijatkaki2-500x500.jpg", name: "Pijat Kaki", slug: "pijat-kaki" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/mcrdr-1-500x500.jpg", name: "Manicure Pedicure", slug: "manicure-pedicure" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/08/DSCF7542-500x500.jpg", name: "Hair Spa", slug: "hair-spa" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/lmt-1-500x500.jpg", name: "Lash Lift", slug: "lash-lift" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2017/04/DSCF4549-scaled-500x500.jpg", name: "Eyebrow Treatment", slug: "eyebrow" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/08/DSCF7193-500x500.jpg", name: "Facial Acne", slug: "facial-acne" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/DSC_5085-500x500.jpg", name: "Bleaching", slug: "bleaching" },
  { url: "https://www.salonanata.com/home/wp-content/uploads/2014/07/blmt-1-500x500.jpg", name: "Body Massage", slug: "body-massage" },
];

const ImageCarousel = () => {
    const carouselRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 1;
          if (
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
            carouselRef.current.scrollWidth
          ) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 20);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-section">
        <div className="carousel-title">
          <h2>Produk Perawatan Maison Belle</h2>
          <p>Layanan Kecantikan Rambut, Wajah & Kulit Tubuh</p>
        </div>
  
        <div className="carousel-container" ref={carouselRef}>
          {imageData.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div className="image-wrapper">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="image-caption">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageCarousel;