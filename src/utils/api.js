import { projectFirestore } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export const fetchData = async path => {
  return await getDocs(collection(projectFirestore, `${path}/`)).then(querySnapshot => {
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  });
};
