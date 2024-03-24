import React, { useState, useEffect } from "react";
import "./WorksCarrousel.Styled.css";
import ReactImageGallery from "react-image-gallery";
import portfolioService from "../../api/portfolio/portfolioService";
export default function WorksCarrousel() {
  const [allWorks, setAllWorks] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        let allWorks = await portfolioService.getPortfolios();
        setAllWorks(allWorks.data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    getServices();
  }, []);

  const allWorksData = allWorks.map((work) => ({
    original: work.work_image_url,
    thumbnail: work.work_image_url,
    description: work.work_name,
  }));

  return (
    <div className="react-image-galley-main-container">
      <div className="react-image-galley-main-container-title">
        <h1>Nuestros trabajos</h1>
      </div>
      <ReactImageGallery
        thumbnailPosition="bottom"
        items={allWorksData}
        showPlayButton={true}
        showFullscreenButton={true}
        showThumbnails={true}
        showNav={true}
        showBullets={true}
        slideOnThumbnailOver={true}
      />
    </div>
  );
}
