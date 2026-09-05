function EmptyState({ heading, message, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <h2 className="text-lg font-semibold text-body ">{heading}</h2>
      <p className="mt-1 text-sm text-muted max-w-sm">{message}</p>
      <button
        className="mt-4 font-semibold bg-primary hover:bg-primary-hover rounded text-surface py-2 px-3 transition-colors"
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </div>
  );
}

export default EmptyState;
