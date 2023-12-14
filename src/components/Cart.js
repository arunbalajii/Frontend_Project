import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Cookies from 'js-cookie';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const userCookie1 = Cookies.get('userCookie');

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const user = AuthService.getCurrentUser();
        setLoggedIn(!!user);

        // If the user is logged in, extract and store their name and email
        if (user) {
          setUserName(user.userId); // Replace 'name' with the actual field name in your user object
          setUserEmail(user.email); // Replace 'email' with the actual field name in your user object
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const Capstone = `http://20.127.159.231:3000/?&id=${userName}&email=${userEmail}`;

      setContent(
        <iframe
          title="Cart"
          src={Capstone}
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
        />
      );
    } else {
      setContent(<p>Please login to access the page.</p>);
    }
  }, [loggedIn, userCookie1, userName, userEmail]);


  return (
    <div className="container-xxl" style={{ height: '100vh', width: '100vw', overflow: 'hidden', margin: 0, padding: 0 }}>
      <header className="">
        {/* Add header content if needed */}
      </header>
      {content}
    </div>
  );
};

export default Home;
