// import './main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBox, faTruck, faShoppingCart, faGlobe, faComments, faRecycle } from '@fortawesome/free-solid-svg-icons';

// export const Main = () => {
//   return (
//     <div className="solution-section">
//     <h1>You have a need, we have the <span className="highlight">SOLUTION</span></h1>
//     <div className="services">
//       <div className="service-item">
//       <FontAwesomeIcon icon={faBox} className="service-icon" />
//         <h2>COURIER</h2>
//         <p>
//           For our same-day service, shipments received before 10:00am are guaranteed to be
//           delivered to selected airport cities.
//         </p>
//       </div>
//       <div className="service-item">
//       <FontAwesomeIcon icon={faTruck} className="service-icon" />
//         <h2>LOGISTICS</h2>
//         <p>
//           Our Domestic Economy Service has been specifically designed to suit both individual and corporate organisations.
//         </p>
//       </div>
//       <div className="service-item">
//       <FontAwesomeIcon icon={faShoppingCart} className="service-icon" />
//         <h2>E-COMMERCE</h2>
//         <p>
//           Our e-Commerce services can save you time and money in an increasingly competitive and fast-changing business landscape.
//         </p>
//       </div>
//       <div className="service-item">
//       <FontAwesomeIcon icon={faGlobe} className="service-icon" />
//         <h2>INTERNATIONAL</h2>
//         <p>
//           Our international express service delivers time-sensitive documents and parcels nationwide to over 200 countries.
//         </p>
//       </div>
//       <div className="service-item">
//       <FontAwesomeIcon icon={faComments} className="service-icon" />
//         <h2>SPECIALISED SOLUTIONS</h2>
//         <p>
//           Our customised business solutions can either address your entire supply chain or smaller elements within it.
//         </p>
//       </div>
//       <div className="service-item">
//       <FontAwesomeIcon icon={faRecycle} className="service-icon" />
//         <h2>CUSTOM SOLUTIONS</h2>
//         <p>
//           Every business has different supply chain challenges, which means that standard solutions are rarely effective.
//         </p>
//       </div>
//     </div>
//   </div>

  
//   )
// }

import './main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBox, faTruck, faShoppingCart, faGlobe, faComments, faRecycle } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const Main = () => {
 
  const services = [
    { title: 'COURIER', description: 'For our same-day service, shipments received before 10:00am are guaranteed to be delivered to selected airport cities.', icon: '📦' },
    { title: 'LOGISTICS', description: 'Our Domestic Economy Service has been specifically designed to suit both individual and corporate organisations.', icon: '🚚' },
    { title: 'E-COMMERCE', description: 'Our e-Commerce services can save you time and money in an increasingly competitive and fast-changing business landscape.', icon: '🛒' },
    { title: 'INTERNATIONAL', description: 'Our international express service delivers time-sensitive documents and parcels nationwide to over 200 countries.', icon: '🌍' },
    { title: 'SPECIALISED SOLUTIONS', description: 'Our customised business solutions can either address your entire supply chain or smaller elements within it.', icon: '💼' },
    { title: 'CUSTOM SOLUTIONS', description: 'Every business has different supply chain challenges, which means that standard solutions are rarely effective.', icon: '⚙️' },
  ];


  return (
    <div className="container text-center my-5">
    <h2 className="mb-4" style={{ color: '#FF5722' }}>You have a need, we have the SOLUTION</h2>
    <div className="row">
      {services.map((service, index) => (
        <div className="col-md-4 mb-3 body-man" key={index}>
          <div className="card p-3 h-100" style={{ borderRadius: '10px' }}>
            <h3 className="card-title" style={{ color: '#FF5722' }}>
              {service.icon} {service.title}
            </h3>
            <p className="card-text">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

      
      
  );
};
