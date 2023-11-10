import Container from '@/components/container';
import FormWrap from '@/components/form-wrap';
import RegisterForm from '@/components/forms/register-form';

export default function LoginPage() {
	return (
		<main className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-950 to-gray-950">
			<Container>
				<FormWrap>
					<RegisterForm />
				</FormWrap>
			</Container>
		</main>
	);
}
