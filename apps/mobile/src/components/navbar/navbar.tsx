'use client';

import { Icon, IconName } from '@repo/ui/components/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links: { index: number; label: string; href: string; icon: IconName }[] =
	[
		{ index: 0, label: 'News', href: '/news', icon: 'home' },
		{ index: 1, label: 'Concert', href: '/concerts', icon: 'Tickets' },
		{ index: 2, label: 'LightStick', href: '/lightstick', icon: 'Flashlight' },
		{ index: 3, label: 'Stickers', href: '/stickers', icon: 'SwatchBook' },
		{ index: 4, label: 'Account', href: '/account', icon: 'User' },
	];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<footer className="bg-[#0B1013] border-t border-neutral-900">
			<div className="mb-safe px-6 flex flex-row justify-between items-center h-12">
				{links
					.sort((a, b) => a.index - b.index)
					.map((link) => (
						<Link
							key={link.index}
							href={link.href}
							className="text-white px-4 py-1"
						>
							<Icon
								name={link.icon}
								size={26}
								className={`${
									pathname === link.href
										? 'stroke-white fill-transparent'
										: 'stroke-neutral-400 fill-transparent'
								} transition-colors duration-150`}
							/>
						</Link>
					))}
			</div>
		</footer>
	);
};

export { Navbar };
