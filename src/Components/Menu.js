import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
    const recipes = [
        {
            id: 1,
            title: "Greek salad",
            price: 12.99,
            image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
        },
        {
            id: 2,
            title: "Bruchetta",
            price: 5.99,
            image: "https://i.ibb.co/317GqZv/Bruchetta.png",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: 4.78,
            image: "https://i.ibb.co/sm6MfcH/desert.jpg",
            description:
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },

    ];
    const linkstyle = { textDecoration: 'none', color: 'black' }
    return (
        <div className="menu-container">
            <div className="menu-div1-text">
                <h2>This Week Specials! </h2>
                <Link style={linkstyle} to="../Menu">
                    <button className="menu-button">Online Menu</button>
                </Link>
            </div>
            <div className="menu-div2-card">
                {
                    recipes.map(
                        (dish) => (
                            <div key={dish.id} className="card-div">
                                <img src={dish.image} alt={dish.title} height='100px' className="card-img" />
                                <div className="card-heading">
                                    <h5 className="card-title">{dish.title}</h5>
                                    <p className="card-price">${dish.price}</p>
                                </div>
                                <p className="card-description">{dish.description}</p>

                                <button className="card-button">Order Now</button>
                            </div>
                        )
                    )
                }
            </div>
        </div>

    )
}