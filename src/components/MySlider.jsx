import React, { Component } from 'react';
import '../CSS/MySlider.css';
export default class Slider extends Component {
    render() {
        return (
            <div>
                <div id="carouselExample" className="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="pexels-atbo-245208.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="pexels-mark-mccammon-1080721.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="pexels-pixabay-265004.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
