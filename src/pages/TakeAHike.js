import React, { useState } from "react";
import { hikes } from "../components/hikesData"; // Import the hikes data from hikesData.js
import "../TakeAHike.css"; // Import styles for the page

const TakeAHike = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    distance: null,
    length: null,
    wildernessArea: "",
  });
  const [selectedHike, setSelectedHike] = useState(null);

  // Filter hikes based on selected filters
  const filteredHikes = hikes.filter((hike) => {
    return (
      (selectedFilters.distance
        ? hike.distanceFromSeattle <= selectedFilters.distance
        : true) &&
      (selectedFilters.length ? hike.length <= selectedFilters.length : true) &&
      (selectedFilters.wildernessArea
        ? hike.wildernessArea.includes(selectedFilters.wildernessArea)
        : true)
    );
  });

  // Get unique wilderness areas for the dropdown
  const wildernessAreas = [
    ...new Set(hikes.map((hike) => hike.wildernessArea)),
  ];
  const handleHikeClick = (hike) => {
    setSelectedHike(hike);
  };

  return (
    <div className="take-a-hike-page">
      <h1>Take a Hike</h1>
      <div className="centered-intro">
        <b>
          <i>
            Looking for your next adventure? Here are some hikes we have
            enjoyed! Use the filters below to narrow down your search.
          </i>
        </b>
      </div>
      {/* Filters */}
      <div className="filters">
        <div className="filter">
          <label>Distance from Seattle (miles):</label>
          <input
            type="number"
            value={selectedFilters.distance || ""}
            onChange={(e) =>
              setSelectedFilters({
                ...selectedFilters,
                distance: e.target.value,
              })
            }
            placeholder="Max distance"
          />
        </div>
        <div className="filter">
          <label>Hike Length (miles):</label>
          <input
            type="number"
            value={selectedFilters.length || ""}
            onChange={(e) =>
              setSelectedFilters({ ...selectedFilters, length: e.target.value })
            }
            placeholder="Max length"
          />
        </div>
        <div className="filter">
          <label>Wilderness Area:</label>
          <select
            value={selectedFilters.wildernessArea}
            onChange={(e) =>
              setSelectedFilters({
                ...selectedFilters,
                wildernessArea: e.target.value,
              })
            }
          >
            <option value="">Select Wilderness Area</option>
            {wildernessAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        {filteredHikes.map((hike) => (
          <div
            className="photo-container"
            key={hike.id}
            onClick={() => handleHikeClick(hike)}
          >
            <img
              src={hike.coverPhotos[0]}
              alt={hike.name}
              className="hike-photo"
            />
            <div className="photo-title">{hike.name}</div>
          </div>
        ))}
      </div>

      {/* Display Hike Details */}
      {selectedHike && (
        <div className="hike-details">
          <h2>{selectedHike.name}</h2>
          <p>
            <strong>Wilderness Area:</strong> {selectedHike.wildernessArea}
          </p>
          <p>
            <strong>Hike Length:</strong> {selectedHike.length} miles
          </p>
          <p>
            <strong>Dogs Allowed:</strong>{" "}
            {selectedHike.dogsAllowed ? "Yes" : "No"}
          </p>
          <p>
            <strong>Highlights:</strong> {selectedHike.highlights}
          </p>
          <p>
            <strong>Permit:</strong>{" "}
            {selectedHike.permit}
          </p>
          <p>
            <strong>Distance from Seattle:</strong>{" "}
            {selectedHike.distanceFromSeattle} miles
          </p>

          <div className="hike-photos">
            {selectedHike.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Hike ${index}`}
                className="hike-photo-detail"
              />
            ))}
          </div>
          <section className="featured-video">
            {selectedHike.youtubeVideo && (
              <iframe width="560" height="315" 
                src={selectedHike.youtubeVideo}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default TakeAHike;
