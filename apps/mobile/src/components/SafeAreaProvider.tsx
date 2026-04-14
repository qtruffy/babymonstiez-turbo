'use client';

import { SafeArea } from 'capacitor-plugin-safe-area';
import { useEffect } from 'react';

type Props = {
	children: React.ReactNode;
};

type SafeAreaInsets = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

export default function SafeAreaProvider({ children }: Props) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		let removeListener: (() => void) | undefined;

		const applyInsets = (insets: SafeAreaInsets) => {
			const root = document.documentElement;

			root.style.setProperty('--safe-area-inset-top', `${insets.top}px`);
			root.style.setProperty('--safe-area-inset-right', `${insets.right}px`);
			root.style.setProperty('--safe-area-inset-bottom', `${insets.bottom}px`);
			root.style.setProperty('--safe-area-inset-left', `${insets.left}px`);
		};

		const init = async () => {
			try {
				const { insets } = await SafeArea.getSafeAreaInsets();
				applyInsets(insets);

				const listener = await SafeArea.addListener(
					'safeAreaChanged',
					({ insets }) => applyInsets(insets),
				);

				removeListener = () => listener.remove();
			} catch {
				applyInsets({ top: 0, right: 0, bottom: 0, left: 0 });
			}
		};

		init();

		return () => {
			removeListener?.();
		};
	}, []);

	return <>{children}</>;
}
