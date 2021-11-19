import {
  getFirestore, setDoc, doc,
  serverTimestamp
} from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

class FirebaseDocument {
  static getSlugTitles(title) {
    const splitter = title.toLowerCase().split(' ');
    return splitter.join('-');
  }

  static async insertDataFirestore({ title, description }) {
    try {
      const docs = await setDoc(doc(db, 'blogs', this.getSlugTitles(title)), {
        title,
        description,
        timestamp: serverTimestamp()
      });
      console.log(docs);
    } catch (error) {
      console.log(error);
    }
  }
}

export default FirebaseDocument;
