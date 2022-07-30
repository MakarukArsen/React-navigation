import React from 'react';
import classes from "./contacts.module.scss"

const Contact = ({contact}) => {
    const {firstName, lastName, phone, gender, photo} = contact;
    let genderImage = gender;
    if (gender === "male"){
        genderImage = "male.png";
    } else if (gender === "female"){
        genderImage = "female.png";
    } else genderImage = "undef.png";

    return (
        <div className={classes.Contact}>
            <img className={classes.personImage} src={require(`../../../images/${photo}`)} />
            <div className={classes.initials}>
                <div className={classes.firstName}>{firstName}</div>
                <div className={classes.lastName}>{lastName}</div>
            </div>
            <div className={classes.phone}>{phone}</div>
            <img className={classes.genderIcon} src={require(`../../../images/${genderImage}`)} alt="gender"/>
        </div>
    );
};

export default Contact;