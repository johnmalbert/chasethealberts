import React, { useState } from "react";
import "../ParksPassport.css"; // Import the CSS file for styling

const parks = [
  { id: 1, name: "Acadia", image: "/images/parks/acad.png" },
  { id: 3, name: "Arches", image: "/images/parks/arch.png" },
  { id: 4, name: "Badlands", image: "/images/parks/badl.png" },
  { id: 5, name: "Big Bend", image: "/images/parks/bibe.png" },
  { id: 6, name: "Biscayne", image: "/images/parks/bisc.png" },
  { id: 7, name: "Black Canyon of the Gunnison", image: "/images/parks/blca.png" },
  { id: 8, name: "Bryce Canyon", image: "/images/parks/brca.png" },
  { id: 9, name: "Canyonlands", image: "/images/parks/cany.png" },
  { id: 10, name: "Capitol Reef", image: "/images/parks/care.png" },
  { id: 11, name: "Carlsbad Caverns", image: "/images/parks/cave.png" },
  { id: 12, name: "Channel Islands", image: "/images/parks/chis.png" },
  { id: 13, name: "Congaree", image: "/images/parks/cong.png" },
  { id: 14, name: "Crater Lake", image: "/images/parks/crla.png" },
  { id: 15, name: "Cuyahoga Valley", image: "/images/parks/cuva.png" },
  { id: 16, name: "Death Valley", image: "/images/parks/deva.png" },
  { id: 17, name: "Denali", image: "/images/parks/dena.png" },
  { id: 18, name: "Dry Tortugas", image: "/images/parks/drto.png" },
  { id: 19, name: "Everglades", image: "/images/parks/ever.png" },
  { id: 20, name: "Gates of the Arctic", image: "/images/parks/gaar.png" },
  { id: 22, name: "Glacier", image: "/images/parks/glac.png" },
  { id: 23, name: "Glacier Bay", image: "/images/parks/glba.png" },
  { id: 24, name: "Grand Canyon", image: "/images/parks/grca.png" },
  { id: 25, name: "Grand Teton", image: "/images/parks/grte.png" },
  { id: 26, name: "Great Basin", image: "/images/parks/grba.png" },
  { id: 27, name: "Great Sand Dunes", image: "/images/parks/grsa.png" },
  { id: 28, name: "Great Smoky Mountains", image: "/images/parks/grsm.png" },
  { id: 29, name: "Guadalupe Mountains", image: "/images/parks/gumo.png" },
  { id: 30, name: "Haleakalā", image: "/images/parks/hale.png" },
  { id: 31, name: "Hawaiʻi Volcanoes", image: "/images/parks/havo.png" },
  { id: 32, name: "Hot Springs", image: "/images/parks/hosp.png" },
  { id: 33, name: "Indiana Dunes", image: "/images/parks/indu.png" },
  { id: 34, name: "Isle Royale", image: "/images/parks/isro.png" },
  { id: 35, name: "Joshua Tree", image: "/images/parks/jotr.png" },
  { id: 36, name: "Katmai", image: "/images/parks/katm.png" },
  { id: 37, name: "Kenai Fjords", image: "/images/parks/kefj.png" },
  { id: 38, name: "Kings Canyon", image: "/images/parks/kica.png" },
  { id: 39, name: "Kobuk Valley", image: "/images/parks/kova.png" },
  { id: 40, name: "Lake Clark", image: "/images/parks/lacl.png" },
  { id: 41, name: "Lassen Volcanic", image: "/images/parks/lavo.png" },
  { id: 42, name: "Mammoth Cave", image: "/images/parks/maca.png" },
  { id: 43, name: "Mesa Verde", image: "/images/parks/meve.png" },
  { id: 44, name: "Mount Rainier", image: "/images/parks/mora.png" },
  { id: 45, name: "North Cascades", image: "/images/parks/noca.png" },
  { id: 46, name: "Olympic", image: "/images/parks/olym.png" },
  { id: 47, name: "Petrified Forest", image: "/images/parks/pefo.png" },
  { id: 48, name: "Pinnacles", image: "/images/parks/pinn.png" },
  { id: 49, name: "Redwood", image: "/images/parks/redw.png" },
  { id: 50, name: "Rocky Mountain", image: "/images/parks/romo.png" },
  { id: 51, name: "Saguaro", image: "/images/parks/sagu.png" },
  { id: 52, name: "Sequoia", image: "/images/parks/seki.png" },
  { id: 53, name: "Shenandoah", image: "/images/parks/shen.png" },
  { id: 54, name: "Theodore Roosevelt", image: "/images/parks/thro.png" },
  { id: 55, name: "Virgin Islands", image: "/images/parks/viis.png" },
  { id: 56, name: "Voyageurs", image: "/images/parks/voya.png" },
  { id: 57, name: "White Sands", image: "/images/parks/whsa.png" },
  { id: 58, name: "Wind Cave", image: "/images/parks/wica.png" },
  { id: 59, name: "Wrangell-St. Elias", image: "/images/parks/wrst.png" },
  { id: 60, name: "Yellowstone", image: "/images/parks/yell.png" },
  { id: 61, name: "Yosemite", image: "/images/parks/yose.png" },
  { id: 62, name: "Zion", image: "/images/parks/zion.png" },
];

const ParksPassport = () => {
  const [passport, setPassport] = useState([]);
  const [totalParks, setTotalParks] = useState(0);
  const [visitedParks, setVisitedParks] = useState([]);
  const [showPassport, setShowpassport] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const addToPassport = (park) => {
    if (!passport.includes(park)) {
      setPassport([...passport, park]);
      setTotalParks(totalParks + 1);
      setVisitedParks([...visitedParks, park.id]);
    }
  };

  const markAsVisited = (park) => {
    if (!visitedParks.includes(park.id)) {
      setVisitedParks([...visitedParks, park.id]);
      setPassport([...passport, park]);
      setTotalParks(totalParks + 1);
    }
  };

  const togglePassportList = () => {
    setShowpassport(!showPassport);
  };

  // Filter parks based on search term
  const filteredParks = parks.filter((park) =>
    park.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="parks-passport">
      <div className="lessons-section">
        <div className="dog-images-container">
          <img src="/images/sahale.jpg" alt="Sahale" className="dog-image" />
          <p>
            <div className="centered-intro">
              <b><i>We have visited 20 National Parks! </i></b>
              <br></br>
              Some of our top five include North Cascades, Glacier, Mount Rainier, Yosemite, and Canyonlands.
              <br></br>
              Can you match or beat 20 Parks? How many have you visited?
            </div>
          </p>
          <img src="/images/vesper.jpg" alt="Vesper" className="dog-image" />
        </div>
      </div>
      <h1>Parks Passport</h1>

      <div className="passport">
        <h2 className="clickable-header" onClick={togglePassportList}>
          Your Passport ({totalParks} parks)
        </h2>
        {!showPassport && (<h5 className="clickable-header" onClick={togglePassportList}>Click to view your passport</h5>)}
        {showPassport && (<h5 className="clickable-header" onClick={togglePassportList}>Click to hide</h5>)}
        {showPassport && (
          <div className="passport-list">
            {passport.map((park) => (
              <div key={park.id} className="passport-item">
                <img src={park.image} alt={park.name} />
                <p className="park-name">{park.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a park..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as the user types
        />
      </div>

      {/* Filtered Parks List */}
      <div className="parks-list">
        {filteredParks.length > 0 ? (
          filteredParks.map((park) => (
            <div
              key={park.id}
              className="park-card"
              onClick={() => addToPassport(park)}
            >
              <img src={park.image} alt={park.name} />
              <p className="park-name">{park.name}</p>
              <button
                className={`visit-button ${
                  visitedParks.includes(park.id) ? "visited" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  markAsVisited(park);
                }}
              >
                {visitedParks.includes(park.id) ? "Visited" : "Mark as visited!"}
              </button>
            </div>
          ))
        ) : (
          <p>No parks match your search.</p> // Message if no parks match the search
        )}
      </div>
    </div>
  );
};

export default ParksPassport;
