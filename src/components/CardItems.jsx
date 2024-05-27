import React, { useEffect, useState } from "react";
import Icon_1 from '../assets/Icon_1.png'

const CardItems = () => {
  const [cardItems, setCardItems] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [searchInput,setSearchInput] = useState("")
  const [filters,setFilters] = useState("all")


// Fetch data from the API on component mount
  useEffect(() => {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCardItems(data), setCardsData(data);
      });
  }, []);

  // Filter cards based on category
  const filterCards = (category) => {
    if (category !== "all") {
      const filterData = cardsData.filter((item) => item.tag === category);
      setCardItems(filterData);
    } else {
      // If "all" is selected, show all cards
      setCardItems(cardsData);
    }
    setFilters(category)
  };

  // Handle search input change
  const handleCahnge = (e) =>{
    setSearchInput(e.target.value)

    // Filter items based on search input
    const searchItems = cardsData.filter((item) => 
      item.title.toLowerCase().includes(e.target.value)
    );
    setCardItems(searchItems)
  }

  return (
    <>
      <div className="card">
        <div className="buttons-container">
          <button className={filters === "all" ? "" : "inactive"} onClick={() => filterCards("all")}>Resources</button>
          <button className={filters === "request" ? "" : "inactive"} onClick={() => filterCards("request")}>Requestes</button>
          <button className={filters === "user" ? "" : "inactive"} onClick={() => filterCards("user")}>Users</button>
        </div>
        <div className="search_button_container">
          <input type="text" placeholder="Search..." class="search-input" value={searchInput} onChange={(e)=>{handleCahnge(e)}}/>
            <img src={Icon_1} />
        </div>
        <div className="all_cards_container">
          {cardItems?.map((item) => (
            <div key={item.id} className="card_items_container">
              <div className="card_title_container">
                <div>
                  <img src={item.icon_url} />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.category}</p>
                </div>
              </div>
              <div className="card-links-description">
              <a href={item.link} target="_blank">{item.link}</a>
              <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardItems;
