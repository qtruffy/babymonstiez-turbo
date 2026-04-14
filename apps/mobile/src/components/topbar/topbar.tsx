'use client';

import { Icon } from '@repo/ui/components/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const Topbar = ({ title = 'Babymonstiez' }: { title?: string }) => {
	const pathname = usePathname();

	const formattedTitle = useMemo(() => {
		if (pathname === '/') return 'babymonstiez';
		if (pathname === '/awards') return 'awards';
		if (pathname === '/trophies') return 'trophies';
		if (pathname === '/concerts') return 'concerts';
		if (pathname === '/stickers') return 'stickers';
		return title;
	}, [pathname]);

	return (
		<header className="bg-[#0B1013] border-b border-neutral-900">
			<div className="mt-safe px-4 flex flex-row justify-between items-center h-12">
				<div className="relative">
					<div className="flex flex-row justify-baseline items-center h-12">
						<Link href="/trophies" className="relative text-white px-4 py-1">
							<Icon
								name="Trophy"
								size={22}
								className={`${
									pathname === '/trophies'
										? 'stroke-white fill-transparent'
										: 'stroke-neutral-400 fill-transparent'
								} transition-colors duration-150`}
							/>
							<div className="absolute -top-1.5 right-1.5 text-xs flex items-center justify-center text-white font-medium w-4 h-4 bg-red-500 rounded-full">
								1
							</div>
						</Link>
					</div>
				</div>
				<div className="uppercase text-white text-base tracking-wide font-joyride-std">
					{formattedTitle}
				</div>
				<div className="relative">
					<div className="flex flex-row justify-baseline items-center h-12">
						<Link href="/awards" className="relative text-white px-4 py-1">
							<Icon
								name="Award"
								size={22}
								className={`${
									pathname === '/awards'
										? 'stroke-white fill-transparent'
										: 'stroke-neutral-400 fill-transparent'
								} transition-colors duration-150`}
							/>
							<div className="absolute -top-1.5 right-1.5 text-xs flex items-center justify-center text-white font-medium w-4 h-4 bg-red-500 rounded-full">
								1
							</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Topbar };
