const FormWrap = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full min-h-fit flex items-center justify-center">
			<div className="w-full min-w-[350px] max-w-[800px] flex flex-col gap-6 p-8 rounded-xl bg-neutral-50 shadow-xl md:min-w-[400px]">
				{children}
			</div>
		</div>
	);
};

export default FormWrap;
