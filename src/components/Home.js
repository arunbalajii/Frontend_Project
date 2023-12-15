import React, { useState, useEffect } from "react";

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Generate a random number between 1 and 90
    // const randomId = Math.floor(Math.random() * 90) + 1;
    // const Capstone = `http://proddetails.eastus.cloudapp.azure.com:3000/?id=${randomId}`;
    const Capstone = `http://172.203.226.233:9100/Dashboard/rcornehl7@mozilla.com`;
    setContent(
      <iframe
        title="Capstone"
        src={Capstone}
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      />
    );
  }, []);

  return (
    <div className="container-xxl" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <header className=""></header>
      {content}
    </div>
  );
};

export default Home;
