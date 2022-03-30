import { useState } from 'react';
import { useStore } from '../../../../particles/clientStore';
import { Text } from '../../../../atoms';
import styles from './footer.module.scss';
import { FooterProps } from './footer.types';

const Footer = ({ movieId }: FooterProps) => {
	const [commentary, setCommentary] = useState('')
	const { dispatch } = useStore();

	const handlePost = () => {
		dispatch({
			type: 'ADD_DOTTED_MOVIE',
			payload: {
				date: String(new Date()),
				message: commentary,
				movieId,
				name: 'Jack',
				rate: 5,
			},
		});
		setCommentary('');
	};

	return (
		<div className={styles.footer}>
			<Text
				variant='title'
				className={styles.footer__title}
			>
				Commentary
			</Text>

			<textarea
				className={styles.footer__textarea}
				placeholder='Add your comments here'
				onChange={(e) => setCommentary(e.target.value)}
				value={commentary}
				id='textArea'
			/>

			<button
				className={styles.footer__button}
				onClick={handlePost}
				id='postCommentaryButton'
			>
				Post
			</button>
		</div>
	)
};

export default Footer;