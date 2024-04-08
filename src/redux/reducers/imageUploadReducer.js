export const UPLOAD_IMAGE_START = 'UPLOAD_IMAGE_START';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL';

const initialState = {
  loading: false,
  imageUrl: null,
  error: null,
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_START:
      return { ...state, loading: true, error: null };
    case UPLOAD_IMAGE_SUCCESS:
      return { ...state, loading: false, imageUrl: action.payload, error: null };
    case UPLOAD_IMAGE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default uploadImageReducer;
