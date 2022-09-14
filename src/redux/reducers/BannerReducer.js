import { SET_BANNER } from "../constants";

const initialState = {
  arrImg: [],
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER: {
      state.arrImg = action.arrImg;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
