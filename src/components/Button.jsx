function Button({ isCompleted, children, ...props }) {
  return (
    <button
      className={`p-2 cursor-pointer ${
        isCompleted ? "bg-amber-200" : "bg-amber-300"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
