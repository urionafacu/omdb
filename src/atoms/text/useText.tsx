import classNames from 'classnames';
import { HookType } from './text.types';
import styles from './text.module.scss';

const useText = ({
	color = 'primary',
	variant = 'body',
}: HookType) => {
	const className = classNames(
		styles.text,
		styles[`text__${color}`],
		styles[`text__${variant}`],
	);
	return { className };
};

export default useText;