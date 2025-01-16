import React, { useState, useEffect } from "react";
import Project from "../../Components/Project.js";
import LoadingModal from "../../Components/LoadingModal.js";

function LiveCourt() {
  const [loading, setLoading] = useState(true);

  const image = "/LiveCourtThumbnail.png";

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
          title="LiveCourt"
          subtitle="A Tennis Match Tracking App"
          image={image}
          imageAlt="Logo for Livecourt"
          description={
            <p className="projectFullDescription">
              This is a current work in progress app that allows users to track tennis matches and
              send the live scores to other interested parties live. It is web-based for ease of
              access for anyone with the appropriate link to view matches as they happen. It is
              aimed at parents of junior tennis players and will hopefully evolve to be used as a
              statistics tool by players and coaches.
              <br />
              <br />
              The site is created for use on mobile for portability and ease of use during matches.
              It is built with React, Typescript, and MaterialUI for the frontend and the backend
              will use AWS Cloud.
            </p>
          }
          skills="React  •  Typescript  •  HTML/CSS  •  MaterialUI  •  AWS Cloud"
          githubLink="https://github.com/aedawes/live-court"
        />
      )}
    </div>
  );
}

export default LiveCourt;
