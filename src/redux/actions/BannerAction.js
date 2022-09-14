import { filmService } from "../../services/FilmServices";
import { SET_BANNER } from "../constants";

export const getBannerAction = () => {
  return async (dispatch) => {
    try {
      const result = await filmService.getListBanner();
      dispatch({
        type: SET_BANNER,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
