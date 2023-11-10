import type { Metadata } from 'next';

import './globals.css';
import { Inter } from 'next/font/google';
import AuthContext from '@/context/authContext';
import { Toaster } from 'react-hot-toast';

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
			<body className={`${inter.className} bg-blue-950`}>
				<AuthContext>
					<Toaster
						position="bottom-right"
						reverseOrder={false}
						toastOptions={{ style: { color: '#020617' } }}
					/>
					{children}
				</AuthContext>
			</body>
		</html>
	);
}
