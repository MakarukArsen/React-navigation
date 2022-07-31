import React, { useState } from "react";
import { v4 } from "uuid";

import Header from "../header/Header";
import Contact from "./Contact";
import { contacts } from "../../../constants";

import MaleIcon from "../../icons/MaleIcon";
import FemaleIcon from "../../icons/FemaleIcon";
import classes from "./contacts.module.scss";

const Contacts = () => {
    const [list, setList] = useState(contacts);
    const [maleChecked, setMaleChecked] = useState(false);
    const [femaleChecked, setFemaleChecked] = useState(false);
    const [value, setValue] = useState("");

    const handleMaleChangeCheck = () => {
        setMaleChecked(!maleChecked);
        filteredContacts();
    };

    const handleFemaleChangeCheck = () => {
        setFemaleChecked(!femaleChecked);
        filteredContacts();
    };

    const filteredContacts = list
        .filter((contact) => {
            contact = Object.values(contact).join();
            return contact.toLowerCase().includes(value.toLowerCase());
        })
        .filter((contact) => {
            if (maleChecked && femaleChecked) {
                return contact.gender;
            } else if (maleChecked) {
                return contact.gender === "male";
            } else if (femaleChecked) {
                return contact.gender === "female";
            } else {
                return contact;
            }
        });

    return (
        <div className="Contacts">
            <Header />
            <div className={classes.Contacts}>
                <form className={classes.form}>
                    <input className={classes.search} type="text" onChange={(e) => setValue(e.target.value)} />
                    <label className={classes.checkbox + " " + classes.maleCheckbox}>
                        <MaleIcon width={35} heigth={35} status={maleChecked ? "active" : null} />
                        <input type="checkbox" checked={maleChecked} onChange={handleMaleChangeCheck} />
                    </label>
                    <label className={classes.checkbox + " " + classes.femaleCheckbox}>
                        <FemaleIcon width={35} heigth={35} status={femaleChecked ? "active" : null} />
                        <input type="checkbox" checked={femaleChecked} onChange={handleFemaleChangeCheck} />
                    </label>
                </form>
                {filteredContacts.map((contact) => (
                    <Contact contact={contact} key={v4()} />
                ))}
            </div>
        </div>
    );
};

export default Contacts;
