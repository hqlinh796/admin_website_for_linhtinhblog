import React from 'react';
import styles from './Header.module.css'

const Header = props => {
    return (

        <nav className={`navbar navbar-expand-lg navbar-light justify-content-between} ${styles.navHeader}`}>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div id="my-nav" className="collapse navbar-collapse left-navbar pl-3">
                <ul className="navbar-nav">
                    <liv className="nav-item">
                        <a  className="nav-link">
                            <i className="fas fa-bars" />
                        </a>
                    </liv>
                    <li className="nav-item active">
                        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled"  tabIndex={-1} aria-disabled="true">Contact</a>
                    </li>
                </ul>
                <form method="get" action="#" className="form-inline mr-auto">
                    <div className="input-group input-group-sm">
                        <input className="form-control rounded-0 border-0 bg-light" type="text" placeholder />
                        <div className="input-group-append">
                            <button className="btn rounded-0 btn-light" type="button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="collapse navbar-collapse right-navbar pr-3">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle"  data-toggle="dropdown">
                            <i className="far fa-comments" /> <span className="sr-only" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-item">Item</div>
                        </div>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link disabled"  tabIndex={-1} aria-disabled="true">
                            <i className="far fa-bell" />
                        </a>
                    </li>
                    <li className="account nav-item account d-flex align-items-center">
                        <img alt="avatar" className="rounded-circle" style={{ height: '20px', width: '20px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM4l4uxHG2O6orQAgZ5QqSEnyqGrM40-qKix4sf3LK8iB0O7LD&usqp=CAU" />
                        <a  data-toggle="dropdown" className="dropdown-toggle text-decoration-none">
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-item">
                                <a  className="text-decoration-none"> My account</a>
                            </div>
                            <div className="dropdown-item">
                                <a  className="text-decoration-none">
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Header;