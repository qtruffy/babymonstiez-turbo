import { Navbar } from '../../components/navbar/navbar';
import { Topbar } from '../../components/topbar/topbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-dvh flex flex-col">
			<Topbar />
			<main className="flex-1 bg-[#0B1013]">{children}</main>
			<Navbar />
		</div>
	);
}
