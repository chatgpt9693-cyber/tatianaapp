const FloatingZs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute text-primary/30 font-bold animate-float-z"
          style={{
            left: `${15 + i * 15}%`,
            top: `${60 + (i % 3) * 10}%`,
            fontSize: `${2 + i * 0.5}rem`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          Z
        </span>
      ))}
    </div>
  );
};

export default FloatingZs;
