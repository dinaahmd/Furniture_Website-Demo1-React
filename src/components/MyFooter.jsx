import React, { Component } from 'react'
import '../CSS/MyFooter.css';
export class MyFooter extends Component {
    render() {
        return (
            <div className='bg-dark text-light'>
                <footer className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-google"></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                    </section>
{/* 
                    <section className='text-center'>
                        <div className='text-md-start mt-5'>
                            <div className='mt-3'>
                                <div className='mx-auto mb-4 md-3 lg-4 xl-3'>
                                    <h6 className='text-uppercase fw-bold m-4'>
                                        Furnitchy
                                    </h6>
                                    <p className='mx-4'>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='text-center bg-dark text-ligth'>
                        © 2023 Copyright
                    </div> */}
                   
                </footer>
            </div>
        )
    }
}