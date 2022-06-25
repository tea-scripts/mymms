import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import AddItemToCart from '../components/AddItemToCart';
import ProductImages from '../components/ProductImages';

const SingleProduct = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, product } = useProductsContext();

  useEffect(() => {
    fetchProductWithHandle(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle]);

  if (!product.title) {
    return (
      <div className="page">
        <div className="loader" style={{ margin: '0 auto' }}></div>
      </div>
    );
  }

  const { title, descriptionHtml, images } = product;

  // console.log(product);

  return (
    <Wrapper className="page">
      <div className="section-center">
        <ProductImages images={images} />
        {/* <img src={product.images[0].src} alt="" /> */}
        <InfoWrapper>
          <h2>{title}</h2>
          <h5>${product.variants[0].price}</h5>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          ></div>
          <p className="stock">
            <span>available:</span>
            {product.availableForSale ? ' in stock' : ' out of stock'}
          </p>
          <p className="vendor">
            <span>vendor:</span> {product.vendor}
          </p>
          <hr />
          <AddItemToCart product={product} />
        </InfoWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section-center {
    display: grid;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .section-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
`;

const InfoWrapper = styled.article`
  font-family: var(--bodyFont);
  color: var(--clr-paragraph);

  .desc {
    text-transform: none;
    display: block;
    font-size: 0.95rem;
    word-spacing: 2px;
    letter-spacing: 0.5px;

    ul {
      margin-bottom: 1em;

      li {
        list-style-type: disc;
        margin-left: 1.2em;
      }
    }
  }
  h5 {
    margin: 0;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  h2 {
    margin: 2rem 0 1rem;
  }
  .stock,
  .vendor {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 120px auto;
    font-size: 0.9rem;
    letter-spacing: 0.5px;

    span {
      font-weight: 600;
      font-family: var(--bodyFont);
    }
  }

  .cart-btn {
    background: var(--clr-tertiary);
    padding: 0.5em 1em;
    display: block;
    width: 10rem;
    color: var(--clr-white);
    text-align: center;
    border-radius: 5px;
    transition: var(--transition);

    :hover {
      box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
      -webkit-box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
      -moz-box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 0;
    }
  }
`;

export default SingleProduct;
