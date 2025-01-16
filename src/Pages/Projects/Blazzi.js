import React, { useState, useEffect } from "react";
import Project from "../../Components/Project.js";
import LoadingModal from "../../Components/LoadingModal.js";

function Blazzi() {
  const [loading, setLoading] = useState(true);

  const image = "/BlazziThumbnail.png";

  useEffect(() => {
    const handleImageLoad = () => {
      setLoading(false);
    };

    const img = new Image();
    img.src = image;
    img.onload = handleImageLoad;
    img.onerror = handleImageLoad;
  }, [image]);

  return (
    <div>
      {loading ? (
        <LoadingModal />
      ) : (
        <Project
          link="https://medium.com/@beccablazzreese/blazzi-finding-the-perfect-nail-technician-has-never-been-easier-0dcb18024f7a"
          title="Blazzi"
          subtitle="React Native IOS Application"
          image={image}
          imageAlt="Blazzi Logo"
          description={
            <p className="projectFullDescription">
              Blazzi is an ios application that is aimed at self-employed nail technicians to help
              promote their brand and connect them with clients. The app was first designed in Figma
              and then those wireframes were converted to a functional app using React Native,
              Javascript, and vanilla CSS, using AWS Cloud and PostgreSQL for the backend.
              <br />
              <br />I was the frontend team lead for this project, managing two other developers in
              the frontend to help bring our wireframes to life.
            </p>
          }
          skills="React Native  •  Javascript  •  HTML/CSS  •  AWS Cloud  •  PostgreSQL"
        />
      )}
    </div>
  );
}

export default Blazzi;
