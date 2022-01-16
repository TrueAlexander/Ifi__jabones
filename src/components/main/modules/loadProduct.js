import getData from "./getData";
import renderProduct from "./renderProduct";

const loadProduct = (index) => {

  getData().then((data) => {

    renderProduct(data, index);

  })

}

export default loadProduct;