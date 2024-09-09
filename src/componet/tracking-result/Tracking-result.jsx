import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBoxOpen, faTruck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './traking-result.css'

export const TrackingResult = () => {
  const { trackingNumber } = useParams(); // Get tracking number from the URL

  return (
    <div>
      <h2>Tracking Result for: <span className='tracking-number'> {trackingNumber}</span></h2>
      {/* You can display more detailed tracking info here */}
      <h4 className='tracking-history'>Tracking History </h4>


      <div className="order-status-container">
      <div className="status-item">
        <div className="icon-container">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <div className="vertical-line"></div>
        </div>
        <div className="status-details">
          <h4>Order Placed</h4>
          <p>June 10, 2018 | 03:45 pm</p>
        </div>
      </div>

      <div className="status-item">
        <div className="icon-container">
        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
          <div className="vertical-line"></div>
        </div>
        <div className="status-details">
          <h4>Order Dispatched</h4>
          <p>June 11, 2018 | 11:03 am</p>
        </div>
      </div>

      <div className="status-item">
        <div className="icon-container">
        <FontAwesomeIcon icon={faTruck} className="icon" />
          <div className="vertical-line"></div>
        </div>
        <div className="status-details">
          <h4>Order in transit</h4>
          <p>Reached at Jackline Tower, New York</p>
        </div>
      </div>

      <div className="status-item delivered">
        <div className="icon-container">
        <FontAwesomeIcon icon={faThumbsUp} className="icon thumbs-up" />
          {/* No line for the last item */}
        </div>
        <div className="status-details">
          <h4>Delivered Successfully</h4>
          <p>Not Delivered yet</p>
        </div>
      </div>
    </div>
         </div>

    
      );
};