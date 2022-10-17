import React, {useState, useEffect} from 'react';
import OverviewApp from './Overview/OverviewApp.jsx';
import Ratings from './R&R/Ratings.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QnA from './QnA/QnA.jsx';
import axios from 'axios';

const App = () => {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    axios.get('/products/40344')
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (product.id) {
      axios.get(`/products/${product.id}/styles`)
        .then(res => setProductStyles(res.data.results))
        .catch(err => console.error(err));
    }
  }, [product]);

  useEffect(() => {
    if (productStyles.length > 0) {
      productStyles.forEach((style) => {
        if (style['default?']) {
          setCurrentStyle(style);
        }
      });
    }
  });

  const handleProductChange = (productID) => {
    axios.get(`/products/${productID}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  };

  const handleStyleChange = (styleID) => {
    productStyles.forEach((style) => {
      if (style.style_id = styleID) {
        setCurrentStyle(style);
      }
    });
  };

  return (
    <div>
      {console.log('product', product)}
      {console.log('productStyles', productStyles)}
      {console.log('currentStyle', currentStyle)}
      <OverviewApp product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange}/>
      <RelatedItems product={product} productStyles={productStyles} handleProductChange={handleProductChange}/>
      <Ratings productID={product.id}/>
      <QnA product={product}/>
    </div>

  );
};

export default App;