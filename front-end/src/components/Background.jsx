function Background({ children }) {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#4616A6] to-[#250C59]">
			<div className="absolute inset-0 z-0 overflow-auto">
				{children}
			</div>
		</div>
	);
}

export default Background;
