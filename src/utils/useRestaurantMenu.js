import { useEffect, useState } from "react";


const useRestaurantMenu = (id) => {
  const [cardsDetails, setCardDetails] = useState(null);
  const [menuList, setMenuList] = useState([]);

  //Get data from API
  useEffect(() => {
    getRestroInfo();
  }, []);

  const getRestroInfo = async () => {
    const res = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}`
    );
    const data = await res.json();
    setCardDetails(data?.data?.cards[0]?.card?.card?.info);
    setMenuList(
      data?.data?.cards[3] === undefined
        ? data?.data?.cards[2]
        : data?.data?.cards[3]
    );

    console.log(data?.data?.cards[3]);
  };

  console.log(menuList);
  //Retrun restrocardsDetails
  return [cardsDetails, menuList];
};

export default useRestaurantMenu;
