// ConcealLock.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { FaStar, FaMoneyBill, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';

import './ProductDetails.css'

import { useQuote } from './QuoteContext';



// Importing images
import ConcealLock1 from "../img/PRODUCT1/ConcealLock/GT_900_1.jpg";
import ConcealLock2 from "../img/PRODUCT1/ConcealLock/GT_900_2.jpg";
import ConcealLock3 from "../img/PRODUCT1/ConcealLock/GT_900_3.jpg";
import ConcealLock4 from "../img/PRODUCT1/ConcealLock/GT_900_4.jpg";
import ConcealLock5 from "../img/PRODUCT1/ConcealLock/GT_900_5.jpg";
import ConcealLock6 from "../img/PRODUCT1/ConcealLock/GT_900_6.jpg";
import ConcealLock7 from "../img/PRODUCT1/ConcealLock/GT_900_7.jpg";
import ConcealLock8 from "../img/PRODUCT1/ConcealLock/GT_900_8.jpg";
import ConcealLock9 from "../img/PRODUCT1/ConcealLock/GT_900_9.jpg";
import ConcealLock10 from "../img/PRODUCT1/ConcealLock/GT_900_10.jpg";

import ConcealLock11 from "../img/PRODUCT1/ConcealLock/GT_900_11.jpg";
import ConcealLock12 from "../img/PRODUCT1/ConcealLock/GT_900_12.jpg";
import ConcealLock13 from "../img/PRODUCT1/ConcealLock/GT_900_13.jpg";
import ConcealLock14 from "../img/PRODUCT1/ConcealLock/GT_900_14.jpg";
import ConcealLock15 from "../img/PRODUCT1/ConcealLock/GT_900_15.jpg";
import ConcealLock16 from "../img/PRODUCT1/ConcealLock/GT_900_16.jpg";
import ConcealLock17 from "../img/PRODUCT1/ConcealLock/GT_900_17.jpg";
import ConcealLock18 from "../img/PRODUCT1/ConcealLock/GT_900_18.jpg";
import ConcealLock19 from "../img/PRODUCT1/ConcealLock/GT_900_19.jpg";
import ConcealLock20 from "../img/PRODUCT1/ConcealLock/GT_900_20.jpg";


import ConcealLock21 from "../img/PRODUCT1/ConcealLock/GT_900_21.jpg";
import ConcealLock22 from "../img/PRODUCT1/ConcealLock/GT_900_22.jpg";
import ConcealLock23 from "../img/PRODUCT1/ConcealLock/GT_900_23.jpg";
import ConcealLock24 from "../img/PRODUCT1/ConcealLock/GT_900_24.jpg";
import ConcealLock25 from "../img/PRODUCT1/ConcealLock/GT-3003.jpg";
import ConcealLock26 from "../img/PRODUCT1/ConcealLock/GT-3004.jpg";
import ConcealLock27 from "../img/PRODUCT1/ConcealLock/GT-3008.jpg";
import ConcealLock28 from "../img/PRODUCT1/ConcealLock/GT-3009.jpg";
import ConcealLock29 from "../img/PRODUCT1/ConcealLock/lock1.png";
import ConcealLock30 from "../img/PRODUCT1/ConcealLock/lock2.png";


import ConcealLock31 from "../img/PRODUCT1/ConcealLock/lock3.png";
import ConcealLock32 from "../img/PRODUCT1/ConcealLock/lock4.png";
import ConcealLock33 from "../img/PRODUCT1/ConcealLock/lock5.png";
// import ConcealLock34 from "../img/PRODUCT1/ConcealLock/lock6.jpg";


const products = [
  { name: 'Door Handle', MOQ: '80 pc', image: "/83.jpg", rating: 4.8, rate: 10, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Metal Screw', MOQ: '80 pc', image: "/84.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Chipboard Screw', MOQ: '80 pc', image: "/90.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Wooden Screw', MOQ: '80 pc', image: "/86.jpg", rating: 4.8, rate: 50, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Anchor Screw', MOQ: '80 pc', image: "/87.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'FLange Hex SDS Screw', MOQ: '80 pc', image: "/88.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Truss head SDS Screw', MOQ: '80 pc', image: "/1.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Nylon Anchor Screw', MOQ: '80 pc', image: "/36.jpg", rating: 4.8, rate: 90, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Gypsum Screw', MOQ: '80 pc', image: "/37.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'SDS Screw', MOQ: '80 pc', image: "/46.jpg", rating: 4.8, rate: 100, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },


  { name: 'Giriraj Screw', MOQ: '80 pc', image: "/47.jpg", rating: 4.8, rate: 10, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Metal Screw', MOQ: '80 pc', image: "/48.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Chipboard Screw', MOQ: '80 pc', image: "/52.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Wooden Screw', MOQ: '80 pc', image: "/76.jpg", rating: 4.8, rate: 50, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Anchor Screw', MOQ: '80 pc', image: "/89.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'FLange Hex SDS Screw', MOQ: '80 pc', image: "/90.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Truss head SDS Screw', MOQ: '80 pc', image: "/100.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Nylon Anchor Screw', MOQ: '80 pc', image: "/91.jpg", rating: 4.8, rate: 90, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Gypsum Screw', MOQ: '80 pc', image: "/92.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'SDS Screw', MOQ: '80 pc', image: "/93.jpg", rating: 4.8, rate: 100, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },


  { name: 'Giriraj Screw', MOQ: '80 pc', image: "/94.jpg", rating: 4.8, rate: 10, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Metal Screw', MOQ: '80 pc', image: "/95.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Chipboard Screw', MOQ: '80 pc', image: "/96.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Wooden Screw', MOQ: '80 pc', image: "/97.jpg", rating: 4.8, rate: 50, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Anchor Screw', MOQ: '80 pc', image: "/98.jpg", rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'FLange Hex SDS Screw', MOQ: '80 pc', image: "/99.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Truss head SDS Screw', MOQ: '80 pc', image: "/115.jpg", rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Nylon Anchor Screw', MOQ: '80 pc', image: "/GT_ 900_15.jpg", rating: 4.8, rate: 90, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  // { name: 'Gypsum Screw', MOQ: '80 pc', image: ConcealLock29, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  // { name: 'SDS Screw', MOQ: '80 pc', image: ConcealLock30, rating: 4.8, rate: 100, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },


  // { name: 'Giriraj Screw', MOQ: '80 pc', image: ConcealLock31, rating: 4.8, rate: 10, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  // { name: 'Metal Screw', MOQ: '80 pc', image: ConcealLock32, rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  // { name: 'Chipboard Screw', MOQ: '80 pc', image: ConcealLock33, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  // // { name: 'Wooden Screw', MOQ: '80 pc', image: ConcealLock34, rating: 4.8, rate: 50, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
 
];


const itemsPerPage = 6;

function ConcealLock() {
  const [activePage, setActivePage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToQuote } = useQuote();

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = products.slice(startIndex, endIndex);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for authentication status



  const loginPrompt = () => {
    alert('Please log in to add items to the cart');
    // You can replace this alert with your actual login prompt logic, such as displaying a modal or redirecting to the login page
  };


  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  const handleShowModal = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
 // if (!isLoggedIn) {
    //   // If user is not logged in, show login prompt or redirect to login page
    //   loginPrompt(); // Example function to display login prompt
    //   return;
    // }
    addToQuote(product);
    toast.success(`INR{product.name} added to get Quotes`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section id="product" className="block product-block">
      <Container fluid>
        <Row className='portfoliolist'>
          {currentPageData.map((product, index) => (
            <Col sm={4} key={index}>
              <div className='portfolio-wrapper'>
                <div>
                  <Image src={product.image} onClick={() => handleShowModal(product)} />
                  <div className='label text-center'>
                    <h3>{product.name}</h3>
                    {/* <p>{`M.O.Q INR{product.MOQ}`}</p> */}
                    {/* <div className='istar'>
                      <FaStar className="rating-star" />
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <span className="quantity-number">Qty: </span> 
                    <span className="quantity-number">1x</span> */}
                    {/* <FaTimes className="quantity_icon" /> */}
                    {/* <div className='imoney'>
                      <FaMoneyBill className="money-icon" />
                      <span className="rate">{product.rate}</span>
                    </div> */}
                    <div>
                    {/* <button className="learn-more-button" onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Pagination>{paginationItems}</Pagination>
      </Container>

<section className='prodinfo' >
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal product-details-modal" >
        <Modal.Header closeButton>
          <Modal.Title> 
            <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top mr-3"
            />
          </Navbar.Brand>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="productcard">
            <Col xs={12} md={5} className="photo">
              <Image src={selectedProduct && selectedProduct.image} />
            </Col>
            <Col xs={12} md={7} className="description">      
        <h2>{selectedProduct && selectedProduct.name}</h2>
        <h4>Perfect ConcealLock</h4>
        <h1>{selectedProduct && selectedProduct.rate}INR</h1>
        <p>{selectedProduct && selectedProduct.info} </p>
        <Button className="learn-more-button" onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
              </Button>
        {/* <Button className="close-button">Close</Button> */}

            </Col>
          </Row>
        </Modal.Body>

        
      </Modal>
      </section>
      <ToastContainer />
    </section>
  );
}

export default ConcealLock;