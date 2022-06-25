import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useProductsContext from '../context/products-context';

const ProductImages = ({ images }) => {
  const {
    product: { handle },
  } = useProductsContext();
  const pictures = images.map((image) => {
    return image.src;
  });

  const { product } = useProductsContext();
  const [mainImg, setMainImg] = useState(pictures[0]);

  useEffect(() => {
    setMainImg(pictures[0]);
  }, [handle]);

  return (
    <Wrapper>
      <img src={mainImg} alt="main" className="main" />
      <div className="gallery">
        {pictures.map((image, index) => {
          return (
            <img
              src={image}
              alt={product.handle}
              key={index}
              onClick={() => setMainImg(pictures[index])}
              className={`${image === mainImg ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
    /* height: 100%; */
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-tertiary);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
        width: 75px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
`;

export default ProductImages;
