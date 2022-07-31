import React, { useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./contactInfo.module.scss";

import Header from "../header/Header";
import { contacts } from "../../../constants";

const ContactInfo = () => {
    const { id } = useParams();
    const [contact, useContact] = useState(contacts);
    let user = contact.filter((contact) => (contact.id === +id ? contact : null));
    const { firstName, lastName, phone, gender, photo } = user[0];
    let genderImage = gender;
    if (gender === "male") {
        genderImage = "male.png";
    } else if (gender === "female") {
        genderImage = "female.png";
    } else genderImage = "undef.png";
    return (
        <div>
            <Header />
            <div className={classes.Contact}>
                <div className={classes.main}>
                    <img className={classes.personImage} src={require(`../../../images/${photo}`)} />
                    <div className={classes.info}>
                        <div className={classes.initials}>
                            <div className={classes.firstName}>Name: {firstName}</div>
                            <div className={classes.lastName}>Last name: {lastName}</div>
                        </div>
                        <div className={classes.phone}>Phone: {phone}</div>
                        <div className={classes.gender}>
                            Sex: {gender}
                            <img className={classes.genderIcon} src={require(`../../../images/${genderImage}`)} alt="gender" />
                        </div>
                    </div>
                </div>
                <div className={classes.about}>
                    About myself: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
