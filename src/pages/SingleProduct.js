import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import AddItemToCart from '../components/AddItemToCart';
import ProductImages from '../components/ProductImages';
import { Link } from 'react-router-dom';
import { Loading, Error } from '../components';

const SingleProduct = () => {
  const navigate = useNavigate();
  const { handle } = useParams();
  const {
    fetchProductWithHandle,
    product,
    product_loading: loading,
    product_error: error,
  } = useProductsContext();

  useEffect(() => {
    fetchProductWithHandle(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (error) {
    return <Error />;
  }

  if (loading || !product.title) {
    return <Loading />;
  }

  const { title, descriptionHtml, images } = product;

  return (
    <Wrapper className="page">
      <Link to="/shop" className="btn">
        back to shop
      </Link>
      <div className="section-center">
        <ProductImages images={images} />
        <InfoWrapper>
          <h2>{title}</h2>
          <h5>${product && product.variants[0].price}</h5>
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

  .btn {
    margin-bottom: 2rem;
    background-color: var(--clr-primary);
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
