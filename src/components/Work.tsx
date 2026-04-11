import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Land Area Calculator",
    category: "GPS Measurement Tool",
    tools: "Google Maps SDK, CoreLocation, SQLite",
    image: "/images/landarea.png",
    link: "https://apps.apple.com/us/app/land-distance-area-calculator/id1437869326",
  },
  {
    title: "Body Tune Editor",
    category: "Body Editor",
    tools: "Body Reshape, MetalKit, Height Adjust, Face Retouch",
    image: "/images/bodytune.png",
    link: "https://apps.apple.com/us/app/body-tune-face-body-editor/id6761005775",
  },
  {
    title: "Wallpaper OS 17",
    category: "Live Wallpapers App",
    tools: "Live Wallpapers, Dynamic Effects",
    image: "/images/wallpaperos17.png",
    link: "https://apps.apple.com/us/app/wallpapers-os-17-dynamic/id6444822284",
  },
  {
    title: "Geotag Map Camera",
    category: "GPS Camera App",
    tools: "CoreLocation, MapKit, Camera APIs",
    image: "/images/geotagcamera.png",
    link: "https://apps.apple.com/us/app/geotag-map-camera-gps-camera/id6444712443",
  },
  {
    title: "GPS Navigation",
    category: "Navigation App",
    tools: "Real-time GPS Routing, Nearby Places",
    image: "/images/gpsnav.png",
    link: "https://apps.apple.com/us/app/gps-navigation-get-direction/id6444224294",
  },
  {
    title: "World Spots View",
    category: "Interactive Map App",
    tools: "Mapbox SDK, Location Markers",
    image: "/images/worldspots.png",
    link: "https://apps.apple.com/us/app/world-spots-view/id6755466608",
  },
  {
    title: "Live Football TV",
    category: "Sports App",
    tools: "Live Scores, Real-time Updates",
    image: "/images/livefootball.png",
    link: "https://apps.apple.com/us/app/live-football-tv-live-scores/id6499262491",
  },
  {
    title: "Widget Kit",
    category: "Personalization Tool",
    tools: "UIKit, SwiftUI, WidgetKit",
    image: "/images/widgetkit.png",
    link: "https://apps.apple.com/us/app/widget-kit-date-time-widget/id6477915702",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1025) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const maxIndex = projects.length > itemsToShow ? projects.length - itemsToShow : 0;

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{ minWidth: `${100 / itemsToShow}%` }}
                >
                  <div className="editorial-content">
                    <div className="editorial-number">
                      <h3>{String(index + 1).padStart(2, "0")}</h3>
                    </div>
                    <div className="editorial-details">
                      <h4>{project.title}</h4>
                      <p className="editorial-category">{project.category}</p>
                      <div className="editorial-tools">
                        <span className="tools-label">Tools & Features</span>
                        <p>{project.tools}</p>
                      </div>
                    </div>
                  </div>
                  <div className="editorial-image-wrapper">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {itemsToShow === 1 && (
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
