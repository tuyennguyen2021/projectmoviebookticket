import { GET_LIST_THEATER, LAY_DS_HTR, LAY_DS_CR } from "../constants";

const initialState = {
  heThongRapChieu: [],
  listHeThongRap: [],
  listCumRap: [],
};
export const listTheaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_THEATER: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }
    case LAY_DS_HTR: {
      state.listHeThongRap = action.listHeThongRap;
      return { ...state };
    }

    case LAY_DS_CR: {
      state.listCumRap = action.listCumRap;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
