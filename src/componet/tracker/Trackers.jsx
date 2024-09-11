import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import './tracker.css'

export const Trackers = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber) {
      setIsLoading(true);
      // Simulate an API call with a timeout
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to the results page with the tracking number
        navigate(`/tracking-result/${trackingNumber}`); // Use `navigate` instead of `history.push`
      }, 2000); // Simulate a 2-second delay
    }
  };

    return (
      <div ref={ref} className={`container d-flex justify-content-center align-items-center ${inView ? 'slide-in-right' : 'slide-out-right'}`} style={{ minHeight: '100vh' }}>
  <div className="card p-4 text-white" style={{ backgroundColor: '#FF5722', borderRadius: '10px', maxWidth: '600px', width: '100%' }}>
    <h2 className="text-white">
      <span role="img" aria-label="magnifying glass">🔍</span> Track Package{' '}
      <span className="small" style={{ fontWeight: 'lighter' }}> / With Your Tracking Number</span>
    </h2>

    
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        
      </div>
      <button type="submit" className="btn btn-dark buttt" disabled={isLoading}>
          {isLoading ? (
            <div className="spinner-border spinner-border-sm text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            'TRACK RESULT'
          )}
        </button>
    </form>

    {/* Informational note */}
    <p className="text-light">
      *Enter the tracking number given to you by sender to see the status and location of your package/shipment.
    </p>
  </div>
</div>

    )  
}
