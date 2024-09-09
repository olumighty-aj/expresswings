import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel"
      style={{marginTop:'20px'}}
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="/src/componet/hero-section/orange.png"
						className="d-block w-100"
						alt="First slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h4>Global, Reliable, and Fast Delivery</h4>
						<h1>Bringing Your Goods Safely to Global Destinations</h1>
						<p>
							Experience hassle-free logistics services that ensure timely
							deliveries, no matter the destination.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="/src/componet/hero-section/far.jpeg"
						className="d-block w-100"
						alt="Second slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h4>Flexible, Improved And Accelerated Solutions</h4>
						<h1>Fully Sustainable Cargo & Delivery Solution</h1>
						<p>
							Representative logistics operator providing a full range of
							services in the sphere of customs clearance and transportation
							worldwide.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="/src/componet/hero-section/car.jpg"
						className="d-block w-100"
						alt="Third slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h4 style={{ color: "black" }}>Your Trusted Logistics Partner</h4>
						<h1 style={{ color: "black" }}>
							Secure and Efficient Cargo Solutions
						</h1>
						<p style={{ color: "black" }}>
							From local to international, we provide solutions that cater to
							all your logistics needs.
						</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
