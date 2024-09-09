import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Trackers = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Correctly use `useNavigate` to get the navigate function

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
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="card p-4 text-white" style={{ backgroundColor: '#FF5722', borderRadius: '10px', maxWidth: '600px', width: '100%' }}>
    <h2 className="text-white">
      <span role="img" aria-label="magnifying glass">🔍</span> Track Package{' '}
      <span className="small" style={{ fontWeight: 'lighter' }}> / With Your Tracking Number</span>
    </h2>

    {/* Form for tracking package */}
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
        <button type="submit" className="btn btn-dark" disabled={isLoading}>
          {isLoading ? (
            <div className="spinner-border spinner-border-sm text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            'TRACK RESULT'
          )}
        </button>
      </div>
    </form>

    {/* Informational note */}
    <p className="text-light">
      *Enter the tracking number given to you by sender to see the status and location of your package/shipment.
    </p>
  </div>
</div>

    )  
}
