function EmptyState({ onAddClick }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <h2 className="text-lg font-semibold text-body ">All clear for now!</h2>
      <p className="mt-1 text-sm text-muted max-w-sm">
        Ready to tackle something new?{" "}
        <button
          className="font-semibold text-primary cursor-pointer"
          onClick={onAddClick}
        >
          Add
        </button>{" "}
        a task above.
      </p>
    </div>
  );
}

export default EmptyState;
