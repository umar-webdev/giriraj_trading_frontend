import React, { useState, useEffect } from 'react';
import { useQuote } from './QuoteContext';
import { FaStar, FaTimes, FaMoneyBill } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import Spinner from './Spinner'; // Import the Spinner component

const QuotePages = () => {
  const { state } = useQuote();
  const { selectedProducts } = state;
  const [showInvoice, setShowInvoice] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading state

  // Function to get user email from the JWT token
  const getUserEmailFromToken = () => {
    const userToken = localStorage.getItem('userToken');
    console.log('User Token:', userToken);

    if (userToken) {
      try {
        const decodedToken = jwtDecode(userToken);
        console.log('Decoded Token:', decodedToken);
        return decodedToken.userEmail;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

    return null;
  };


  const handleGetFinalQuotes = async () => {
    try {
      console.log('Attempting to get final products...');
      setLoading(true); // Set loading state to true before fetch
      const userEmail = getUserEmailFromToken();
      console.log('User Email from token:', userEmail);

      if (!userEmail) {
        // User is not logged in, show a toast message or handle the error
        alert('Please log in first to get the final products');
        setLoading(false); // Set loading state to false after handling the error
        return;
      }

      // Construct the request payload
      const requestData = {
        userEmail,
        products: selectedProducts.filter(
          (product) =>
            !isNaN(product.rate) && !isNaN(product.quantity) && product.name
        ),
      };

      // Make the fetch request
      const response = await fetch('https://giriaj-trading-backend.onrender.com/sendQuotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `INR{localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      console.log('Response from server:', result);

      if (response.ok) {
        // Handle success response, e.g., show success message or update UI
        alert('products sent successfully');
        setShowInvoice(true); // Show the invoice modal after successful sending
      } else {
        // Handle error response, e.g., show error message or handle specific errors
        console.error('Error sending products:', result.error);
       alert('Error sending products. Please try again later.');
      }
    } catch (error) {
      console.error('Error in handleGetFinalQuotes:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Ensure loading state is updated regardless of success or error
    }
  };



  // Calculate the total price of selected products
  const totalWithoutGST = selectedProducts.reduce((total, product) => {
    return total + parseFloat(product.rate) * parseInt(product.quantity, 10);
  }, 0);

  // Calculate GST (18%)
  const GSTPercentage = 18;
  const GSTAmount = (totalWithoutGST * GSTPercentage) / 100;

  // Calculate total including GST
  const totalWithGST = totalWithoutGST + GSTAmount;

  return (
    <section className="block product-block">
      <div className="container">
        <div className="title-holder">
          <h2>Your products</h2>
        </div>
        <div className="row">
          {selectedProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="image-container">
                  <img
                    src={product.image}
                    className="img-fluid rounded thumbnail-image"
                    alt={product.name}
                  />
                </div>
                <div className="product-detail-container p-3" style={{}}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="product-name">{product.name}</h3>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <div>
                      <FaStar className="rating-star" />
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <div className="quantity-container">
                      <span className="quantity-number">Qty: </span>
                      <span className="quantity-number">{product.quantity}</span>
                      <FaTimes className="quantity-icon" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="money-container">
                      <FaMoneyBill className="money-icon" />
                      <span className="rate">INR{product.rate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-12">
            <button className="learn-more-button text-center Quote-button" onClick={handleGetFinalQuotes}>
              Get Final products
            </button>
          </div>
        </div>
      </div>

      {loading && <Spinner />} {/* Show spinner while loading */}

      {showInvoice && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{
            display: 'block',
            backgroundImage: `url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invoice</h5>
                <button type="button" className="btn-close" onClick={() => setShowInvoice(false)}></button>
              </div>
              <div className="modal-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Total Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>INR{product.rate}</td>
                        <td>INR{(product.quantity * parseFloat(product.rate)).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Total (excluding GST): INR{totalWithoutGST.toFixed(2)}</p>
                <p>GST ({GSTPercentage}%): INR{GSTAmount.toFixed(2)}</p>
                <p>Total (including GST): INR{totalWithGST.toFixed(2)}</p>
              </div>
              <div className="modal-footer">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="learn-more-button text-center Quote-button"
                    onClick={() => setShowInvoice(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuotePages;