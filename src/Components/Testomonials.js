
import React from "react";
import men1 from '../Images/men1.jpg'
import men2 from '../Images/men2.jpg';
import blackwomen from '../Images/women black.jpg';
import women from '../Images/women.jpg';
export default function Testomonials() {
    const test = [
        {
            id: 1,
            name: "Li Wei",
            description: "I love Little Lemon Restaurant! The Greek salad and bruschetta are amazing, a perfect blend of tradition and innovation. And that lemon dessert it's a masterpiece!",
            image: men1
        },
        {
            id: 2,
            name: "Sarah Thompson",
            description: "Little Lemon nails it with their Mediterranean dishes. The bruschetta's twist is genius, and the lemon dessert is heavenly. A modern take on classics!",
            image: men2
        }, {
            id: 3,
            name: "Alex Patel",
            description: "Little Lemon is a gem! Their Greek salad, bruschetta, and lemon dessert showcase a beautiful blend of old and new. A family favorite for sure!",
            image: blackwomen

        }, {
            id: 4,
            name: "Emily Carter",
            description: "At Little Lemon, tradition meets modern in the most delicious way. Greek salad and bruschetta with a twist are winners. And that lemony dessert  perfection!",
            image: women
        },
    ]
    return (
        <>
            <div className="test-container">
                <h2>Testomonials</h2>
                <div className="test-container-div">
                {
                    test.map(
                        (e) => {
                            return (
                                <div className="test-card">
                                    <div className="test-img-name">
                                        <img className="test-img" src={e.image} alt="error" height={100} />
                                        <p className="test-name">{e.name}</p>
                                    </div>
                                    <p className="test-description">{e.description}</p>
                                </div>
                            )
                        }
                    )
                }
                </div>
            </div>

        </>

    )
}

