import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<div className="w-[122px] md:w-[152px]">
			<Link href="/">
				<Image
					src="/assets/images/coach-nav-logo.png"
					alt="logo"
					width={152}
					height={69}
				/>
			</Link>
		</div>
	);
};

export default Logo;
