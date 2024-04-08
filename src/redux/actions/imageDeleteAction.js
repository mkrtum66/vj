import { db, projectStorage } from '../../firebase/config';
import { ref, deleteObject } from 'firebase/storage';
import { doc, deleteDoc } from 'firebase/firestore';

export const DELETE_IMAGE_START = 'DELETE_IMAGE_START';
export const DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS';
export const DELETE_IMAGE_FAIL = 'DELETE_IMAGE_FAIL';

export const delImage = (imageName, place, id) => async dispatch => {
  dispatch({ type: DELETE_IMAGE_START });

  // Construct the reference to the image file in Firebase Storage
  const imageRef = ref(projectStorage, `images/${place}/${imageName}`);

  try {
    // Delete the image file from Firebase Storage
    await deleteObject(imageRef);

    // Delete the Firestore document referencing the image
    await deleteDoc(doc(db, `${place}`, id));

    dispatch({ type: DELETE_IMAGE_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_IMAGE_FAIL, payload: error.message });
  }
};
