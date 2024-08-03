import { useEffect, useState } from "react";
import { CDN_URL } from "../resources/constant";
import data from "../resources/data";
import Card from "./Card";

const Body = () => {
    const [restaurant, setRestaurant] = useState(data?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const [datasSet, setdataSet] = useState(restaurant);
    const [searchText, setSearchText] = useState("");
    {console.log(restaurant);}
    const filter = ()=>{
        setdataSet(
            restaurant.filter( element => element.info.name.toLowerCase().includes(searchText.toLowerCase()))
        );
    }
    useEffect(filter, [searchText]);
    return (
    <main className="main">
      <label>
        Search <input type="search" name="filter" id="filter" value={searchText} onChange={(e)=>{ setSearchText(e.target.value); }} />
      </label>
      <button id="search" onClick={filter}>
        Enter
      </button>

      {/* {console.log(data.card.card.gridElements.infoWithStyle.restaurants)} */}
      <div className="container">
        {datasSet.map(
          (data) => {
            const {
              cloudinaryImageId,
              avgRatingString,
              costForTwo,
              cuisines,
              name,
              sla,
            } = data.info;

            return (
              <Card
                name={name}
                img={CDN_URL + cloudinaryImageId}
                rating={avgRatingString}
                price={costForTwo}
                cuisine={cuisines}
                time={sla.slaString}
              />
            );
          }
        )}
      </div>
    </main>
  );
};
export default Body;
