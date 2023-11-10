import type { Metadata } from 'next';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Coach Camisaria & Uniformes',
	description:
		'Loja e fábrica de uniformes profissionais, camisetas promocionais e derivados, onde o cliente é o nosso principal parceiro.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-blue-950`}>{children}</body>
		</html>
	);
}
