// this file is created for manupilating the data layer

export const initialstate = {
  Basket: [],
};

export const to_get_final_subtotal = (Basket) =>
  Basket?.reduce((amt, item) => item.price + amt, 0);
// this above one is very useful one this is used to calculate the finar subtotal
//  this reduce keyword is used to ittirate through out the Basket list and tally up the sub total.
// console.log(Basket?.reduce((amt, item) => item.price + amt, 0));
//This below code defines the how or when to dispatch a data to data layer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        Basket: [...state.Basket, action.item], //...state.Basket --> means current item present inside basket(array)
        //  action.item--> means the product which will be added to basket
        // here ...state defines the current state(for eg: if we have 2 products in our cart then
        // that will be our current state )
      };
    case "REMOVE_FROM_CART":
      const index = state.Basket.findIndex((item) => item.id === action.id);
      // this above line finds the index of that
      // if we have same product more than once then it will return the index of first id matched.
      // eg: [1,2,3,2,2,2] in this array,we want to find the index of value 2 then the above line will return '1'
      let newBasket = [...state.Basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        // if that index is there then this splice function will remove it
        // eg: [1,2,3,2,2,2] in this array,we want to remove 2 then it will remove the value at index 1 and
        //  give us the array(i.e it will return [1,3,2,2,2])
      } else {
        alert(
          " It seems item is not there in cart, please add that item to the cart"
        );
      }
      return {
        ...state,
        Basket: newBasket,
      };
      case "USER_STATE":
        {
          return{
            ...state,
            user: action.user,
            user_name: action.user_name
          }

        }

    // return{
    //   ...state,
    //   Basket: state.Basket.filter(item => item.id !== action.id)
    // this above line will not work properlly when we have same product two times
    // for eg: if i have added pendrive to cart more than one time, then when we click on btn(remove from cart)
    // it will remove all pendrives at same time
    // So to overcome this we need to find the index of that in that array

    // }
    default:
      return state;
  }
};

export default reducer;
