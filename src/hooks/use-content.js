import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
	const [content, setContent] = useState([]);

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContents = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));
				setContent(allContents);
			})
			.catch((error) => {
				console.log(error.message);
			});
		//eslint-disable-next-line
	}, []);

	return { [target]: content };
}
