import React from "react";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import Footer from "./Footer";
export default function About() {
    return (
        <div className="about-container">
            <div>
                <h2>Litte Lemon</h2>
                <h3>Chicago</h3>
                <p>Discover Little Lemon Restaurant where tradition meets innovation. Chefs Mario and Adrian blend classic Mediterranean recipes with a modern twist. Try our Greek salad, inventive bruschetta, and tangy lemon dessert. Experience culinary excellence at its finest.
                </p>
            </div>
            <div className="about-img-parent">
                <div><img src={image1} className="image1" alt="Chef image" />
                </div>
                <div>  <img src={image2} className="image2" alt="chef image" />
                </div>
            </div>
        </div>

    )
}