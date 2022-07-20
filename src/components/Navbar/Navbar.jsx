import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <nav>
                <div>
                    <h1>YourChallenge</h1>
                </div>
                <div>
                    <h2>Product</h2>
                    <h2>Download</h2>
                    <h2>Pricing</h2>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
