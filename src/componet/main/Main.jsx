import './main.css';
import { useInView } from 'react-intersection-observer';
export const Main = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.1,    // Trigger when 10% of the navbar is in view
  });
 
  const services = [
    { title: 'COURIER', description: 'For our same-day service, shipments received before 10:00am are guaranteed to be delivered to selected airport cities.', icon: '📦' },
    { title: 'LOGISTICS', description: 'Our Domestic Economy Service has been specifically designed to suit both individual and corporate organisations.', icon: '🚚' },
    { title: 'E-COMMERCE', description: 'Our e-Commerce services can save you time and money in an increasingly competitive and fast-changing business landscape.', icon: '🛒' },
    { title: 'INTERNATIONAL', description: 'Our international express service delivers time-sensitive documents and parcels nationwide to over 200 countries.', icon: '🌍' },
    { title: 'SPECIALISED SOLUTIONS', description: 'Our customised business solutions can either address your entire supply chain or smaller elements within it.', icon: '💼' },
    { title: 'CUSTOM SOLUTIONS', description: 'Every business has different supply chain challenges, which means that standard solutions are rarely effective.', icon: '⚙️' },
  ];


  return (
    <div className={`container text-center my-5 ${inView ? 'slide-in' : 'slide-out'}`} ref={ref}>
    <h2 className="mb-4" style={{ color: '#FF5722', fontWeight:800}}>You have a need, we have the SOLUTION</h2>
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
