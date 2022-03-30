import { Text } from '../../atoms';
import EmptyImage from '../../assets/empty.png';
import styles from './emptyState.module.scss';

const EmptyState = () => {
	return (
		<section className={styles.empty}>
			<img
				src={EmptyImage}
				alt='empty'
				className={styles.empty__image}
			/>
			<Text variant='title' className={styles.empty__title}>
				Don’t know what to search?
			</Text>
			<Text color='secondary' variant='bodyBig' className={styles.empty__subtitle}>
				Here´s an offer you can´t refuse
			</Text>
		</section>
	);
};

export default EmptyState;