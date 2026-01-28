import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cart from "./Cart";
import Form from "./Form";

//create your first component
const Home = () => {
	return (
		<>
			<Cart />
			<Form /> 
		
		</>
		
	);
};

export default Home;