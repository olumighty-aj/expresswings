import 'bootstrap/dist/css/bootstrap.min.css';
import './service.css';

import { faWarehouse, faPlane, faShip, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the component comes into view
        threshold: 0.1,    // Trigger when 10% of the component is in view
      });

  return  (
    <div className={`container my-4 ${inView ? 'slide-in' : 'slide-out'}`} ref={ref}>
      <div className="row rowes text-white text-center">
        {/* Warehousing Services */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div className="p-3 h-100 d-flex flex-column justify-content-center">
            <div className="mb-2">
              <FontAwesomeIcon icon={faWarehouse} size='40' className="iconss" />
            </div>
            <h5 className='orang'>Sustainable</h5>
            <p className='pest'>Warehousing Services</p>
          </div>
        </div>

        {/* Air Freight Services */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div className="p-3 bg-white h-100 d-flex flex-column justify-content-center text-dark">
            <div className="mb-2">
              <FontAwesomeIcon icon={faPlane} className="icons" />
            </div>
            <h5 className='oran'>Reliable</h5>
            <p className='pest'>Air Freight Services</p>
          </div>
        </div>

        {/* Ocean Freight Services */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div className="p-3 bg-white h-100 d-flex flex-column justify-content-center text-dark">
            <div className="mb-2">
              <FontAwesomeIcon icon={faShip} className="icons" />
            </div>
            <h5 className='oran'>Innovative</h5>
            <p className='pest'>Ocean Freight Services</p>
          </div>
        </div>

        {/* Road Freight Services */}
        <div className="col-12 col-md-3">
          <div className="p-3 h-100 d-flex flex-column justify-content-center">
            <div className="mb-2">
              <FontAwesomeIcon icon={faTruck} className="iconss" />
            </div>
            <h5 className='orang'>Flexible</h5>
            <p className='pest'>Road Freight Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
