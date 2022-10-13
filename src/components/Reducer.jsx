// this file is created for manupilating the data layer

export const initialstate = {
  Basket: [],
};

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
