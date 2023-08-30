import React from "react";
import { Link } from "react-router-dom";
import Resturant from '../Images/restauranfood.jpg'
export default function Banner() {
    return (

        <header className="banner-header">
            <section className="banner-section">
                <div className="div1">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Discover Little Lemon Restaurant, a family-owned Mediterranean gem weaving cherished recipes with a modern twist. Indulge in bruschetta, Greek salads, and our signature zesty Lemon Dessert, all capturing the essence of tradition and innovation on your plate. Join us for an unforgettable dining experience where the Mediterranean's timeless flavors take center stage.
                    </p>
                    <Link to='./Reservation'> < button className="res-button" aria-label="On Click">Reserve</button></Link>
                </div>
                <div className="div2">
                    <img src={Resturant} alt="Resturant Image" />
                </div>
            </section>
        </header>

    )
}