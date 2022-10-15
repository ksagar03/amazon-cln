// this file is created for manupilating the data layer

export const initialstate = {
  Basket: [],
};

export const to_get_final_subtotal = (Basket) =>
  Basket?.reduce((amt, item) => item.price + amt, 0);
// this above one is very useful one this is used to calculate the finar subtotal
// console.log(Basket?.reduce((amt, item) => item.price + amt, 0));
//This below code defines the how or when to dispatch a data to data layer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        Basket: [...state.Basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
