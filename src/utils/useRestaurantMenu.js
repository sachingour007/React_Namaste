import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [cardsDetails, setCardDetails] = useState(null);
  const [menuList, setMenuList] = useState(null)

  //Get data from API
  useEffect(() => {
    getRestroInfo();
  }, []);

  const getRestroInfo = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=${id}`
    );
    const data = await res.json();
    setCardDetails(data?.data?.cards[0]?.card?.card?.info);
    setMenuList(data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards)

    console.log(data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
  };

  // console.log(menuList);
  //Retrun restrocardsDetails
  return [cardsDetails, menuList];
};

export default useRestaurantMenu;
