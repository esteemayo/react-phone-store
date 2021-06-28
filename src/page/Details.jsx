import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalState";
import ButtonContainer from "../components/Button";

const Details = () => {
  const { detailProduct, addToCart, openModal } = useGlobalContext();

  const { id, img, info, price, title, inCart, company } = detailProduct;

  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* end of title */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt={title} className="img-fluid" />
        </div>
        {/* prdoduct info */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>model: {title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>${price}</span>
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product :
          </p>
          <p className="text-muted lead">{info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
