import { Routes, Route } from "react-router-dom";
import ContactInfo from "./components/pages/contacts/ContactInfo";
import Contacts from "./components/pages/contacts/Contacts";
import HomePage from "./components/pages/HomePage";
import InstaPosts from "./components/pages/InstaPosts/InstaPosts";
import Posts from "./components/pages/posts/Posts";

import "./styles.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/insta-posts" element={<InstaPosts />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contacts/:id" element={<ContactInfo />} />
            </Routes>
        </div>
    );
}

export default App;
