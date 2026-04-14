'use client';

import * as labIcons from '@lucide/lab';
import { IconNode, icons, Icon as LucideIcon, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';

type IconName = keyof typeof icons | keyof typeof labIcons;

type IconProps = {
	name: IconName;
};

type UseIconProps = Omit<LucideProps, 'ref'> & IconProps;

/**
 * The Icon component — supports both lucide-react and lucide-lab icons via `name`.
 *
 * lucide-react icons are PascalCase, lucide-lab icons are camelCase.
 *
 * @example lucide-react
 * <Icon name="Camera" size={24} />
 *
 * @example lucide-lab
 * <Icon name="coconut" size={24} />
 */
const Icon = forwardRef<SVGSVGElement, UseIconProps>(
	({ name = 'Camera', ...props }, ref) => {
		if (name in icons) {
			const NamedIcon = icons[name as keyof typeof icons];
			return <NamedIcon ref={ref} {...props} />;
		}

		if (name in labIcons) {
			const iconNode = labIcons[name as keyof typeof labIcons] as IconNode;
			return <LucideIcon ref={ref} iconNode={iconNode} {...props} />;
		}

		console.warn(`Icon "${name}" not found in lucide-react or @lucide/lab`);
		return null;
	},
);
Icon.displayName = 'Icon';

export { Icon };
export type { IconName, IconProps, UseIconProps };
