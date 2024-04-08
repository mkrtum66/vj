import {
  DELETE_IMAGE_START,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
} from '../actions/imageDeleteAction';

const initialState = {
  loading: false,
  error: null,
};

const deleteImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_IMAGE_START:
      return { ...state, loading: true };
    case DELETE_IMAGE_SUCCESS:
      return { ...state, loading: false };
    case DELETE_IMAGE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteImageReducer;
