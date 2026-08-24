function TodoCounter({ completedCount, totalCount }) {
  return (
    <p className="text-muted text-sm">
      <span className="text-primary font-semibold">
        {totalCount - completedCount}
      </span>{" "}
      of {totalCount} todos left
    </p>
  );
}

export default TodoCounter;
