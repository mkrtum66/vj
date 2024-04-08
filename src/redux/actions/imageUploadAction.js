import {
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
} from '../reducers/imageUploadReducer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { projectStorage, db } from '../../firebase/config';
import { v4 as uuid } from 'uuid';

export const uploadImage = (file, place) => async dispatch => {
  dispatch({ type: UPLOAD_IMAGE_START });
  const storageRef = ref(projectStorage, `images/${place}/${file.name}`);

  try {
    // Upload the image to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Save the image URL to Firestore
    const imageDocRef = doc(db, `${place}`, uuid()); // Assuming a collection named "images"
    await setDoc(imageDocRef, { imgUrl: downloadURL, name: file.name });

    dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: downloadURL });
  } catch (error) {
    dispatch({ type: UPLOAD_IMAGE_FAIL, payload: error.message });
  }
};
