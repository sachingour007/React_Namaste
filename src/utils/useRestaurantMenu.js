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
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2990485&lng=72.8547727&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    // console.log(data?.data?.cards[2].card.card.info);
    setCardDetails(data?.data?.cards[2]?.card?.card?.info);
    setMenuList(data?.data?.cards[4]);

    // console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  };

  console.log(menuList);
  //Retrun restrocardsDetails
  return [cardsDetails, menuList];
};

export default useRestaurantMenu;