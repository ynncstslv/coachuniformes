'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import { signIn, useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import toast from 'react-hot-toast';

import Input from '@/components/inputs/input';
import SocialButton from '@/components/social-button';
import { Button } from '@/components/ui/button';

import { BsGoogle } from 'react-icons/bs';

const RegisterForm = () => {
	const router = useRouter();
	const session = useSession();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: { name: '', email: '', password: '' },
	});

	useEffect(() => {
		if (session?.status === 'authenticated') router.push('/');
	}, [session?.status, router]);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => signIn('credentials', data))
			.catch(() => toast.error('Algo deu errado!'))
			.finally(() => setIsLoading(false));
	};

	const onSocial = (action: string) => {
		setIsLoading(true);

		signIn(action, { redirect: false })
			.then((callback) => {
				if (callback?.error) toast.error('Algo deu errado!');

				if (callback?.ok && !callback.error)
					toast.success('Login realizado com sucesso!');
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div>
			<div className="flex items-center justify-start gap-6">
				<Image
					src="/assets/images/coach-icon.png"
					alt="logo"
					width={80}
					height={80}
				/>
				<div className="">
					<h1 className="mb-1 font-bold text-2xl text-gray-950 md:mb-2 md:text-3xl">
						Registre-se
					</h1>
					<p className="font-light text-sm text-neutral-500">
						Crie uma nova conta!
					</p>
				</div>
			</div>
			<hr className="my-6" />
			<Input
				id="name"
				label="Nome"
				type="text"
				placeholder="John Doe"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<Input
				id="email"
				label="Email"
				type="email"
				placeholder="johndoe@mail.com"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				placeholder="********"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<div className="relative mt-6">
				<div className="flex items-center absolute inset-0">
					<div className="w-full border-t border-neutral-300" />
				</div>
				<div className="flex justify-center relative text-sm">
					<span className="px-2 text-neutral-500 bg-white">
						ou registre-se com
					</span>
				</div>
			</div>
			<div className="mt-6">
				<SocialButton
					icon={BsGoogle}
					label="Google"
					onClick={() => {
						onSocial('google');
					}}
				/>
			</div>
			<hr className="my-8 border-neutral-300" />
			<Button
				className="w-full text-gray-950 bg-lime-500 transition hover:bg-lime-500 hover:opacity-80"
				onClick={handleSubmit(onSubmit)}
				disabled={isLoading}
			>
				Registre-se
			</Button>
			<div className="flex gap-2 justify-center py-2 mt-3 text-xs text-neutral-500">
				<div>Já possui uma conta?</div>
				<Link href="/login" className="underline cursor-pointer">
					Login!
				</Link>
			</div>
		</div>
	);
};

export default RegisterForm;
