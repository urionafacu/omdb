import styles from './navbar.module.scss';
import Logo from '../../assets/logo.png';
import { Text } from '../../atoms';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigation = useNavigate();
	return (
		<nav className={styles.navbar} onClick={() => navigation('/')}>
			<img
				alt='logo'
				src={Logo}
				className={styles.navbar__logo}
			/>
			<Text
				variant='subtitle'
				className={styles.navbar__title}
			>
				MovieBox
			</Text>
		</nav>
	)
};

export default Navbar