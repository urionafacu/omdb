import { TextProps } from './text.types';
import useText from './useText';

const Text = ({
	children,
	color = 'primary',
	variant = 'body',
	className: classNameProp
}: TextProps) => {
	const { className } = useText({ color, variant });
	return <div className={`${className} ${classNameProp}`}>{children}</div>
};

export default Text;