import { FC } from 'react';

import { IconType } from 'react-icons';

import { Button } from './ui/button';

interface SocialButtonProps {
	icon: IconType;
	label: string;
	onClick: () => void;
}

const SocialButton: FC<SocialButtonProps> = ({
	icon: Icon,
	label,
	onClick,
}) => {
	return (
		<Button
			className="w-full font-light text-sm text-neutral-500 border rounded-md border-neutral-400 bg-transparent transition hover:bg-transparent hover:opacity-80"
			onClick={onClick}
		>
			<Icon className="mr-2" /> {label}
		</Button>
	);
};

export default SocialButton;
