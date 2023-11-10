const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className="max-w-[90%] mx-auto 2xl:max-w-[80%]">{children}</div>;
};

export default Container;
