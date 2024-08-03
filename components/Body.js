import { useEffect, useState } from "react";
import { CDN_URL } from "../resources/constant";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [datasSet, setdataSet] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filter = () => {
    setdataSet(
      restaurant.filter((element) =>
        element.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  useEffect(() => {
    let timer = setTimeout(filter, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchAndStore = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    const arr =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(arr);
    setRestaurant(arr);
    setdataSet(arr);
    console.log(restaurant);
  };

  useEffect(() => {
    fetchAndStore();
  }, []);

  return restaurant.length == 0 ? (
    <main className="main">
      <label>
        Search
        <input
          type="search"
          name="filter"
          id="filter"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </label>
      <button id="search" onClick={filter}>
        Enter
      </button>
      <Shimmer />
    </main>
  ) : (
    <main className="main">
      <label>
        Search
        <input
          type="search"
          name="filter"
          id="filter"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </label>
      <button id="search" onClick={filter}>
        Enter
      </button>

      <div className="container">
        {datasSet.map((data) => {
          const {
            id,
            cloudinaryImageId,
            avgRatingString,
            costForTwo,
            cuisines,
            name,
            sla,
          } = data.info;

          return (
            <Card
              key={id}
              name={name}
              img={CDN_URL + cloudinaryImageId}
              rating={avgRatingString}
              price={costForTwo}
              cuisine={cuisines}
              time={sla.slaString}
            />
          );
        })}
      </div>
    </main>
  );
};
export default Body;
