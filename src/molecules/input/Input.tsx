import SearchLogo from 'assets/search.png';
import { InputProps } from './input.types';
import styles from './input.module.scss';

const Input = (props: InputProps) => {
	return (
		<div className={styles.container}>
			<img
				src={SearchLogo}
				alt='search logo'
				className={styles.container__logo}
			/>
			<input className={styles.container__input} {...props} />
		</div>
	)
};

export default Input;