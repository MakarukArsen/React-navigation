import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./header.module.scss"
const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.logo}>
                <img className={classes.logo__image} src={require("../../../assets/awesome.png")} alt='image'/>
            </div>
            <ul className={classes.links}>
                <Link className={classes.link} to="/">Home</Link>
                <Link className={classes.link} to="/posts">Posts</Link>
                <Link className={classes.link} to="/insta-posts">Insta</Link>
                <Link className={classes.link} to="/contacts">Contacts</Link>
            </ul>
            <div className={classes.button}></div>
        </header>
    );
};

export default Header;