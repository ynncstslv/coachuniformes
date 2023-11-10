'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function LandingPage() {
	return (
		<main className="">
			<Button onClick={() => signOut()}>Sair</Button>
		</main>
	);
}
