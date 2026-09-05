import { PanelLeft } from "lucide-react";

function CollapsedSidebar({ onToggle }) {
  return (
    <div className="bg-surface border-r border-border-strong px-2 py-5 flex items-end">
      <button
        className="text-primary hover:text-primary-hover transition-colors"
        onClick={onToggle}
      >
        <PanelLeft size={18} />
      </button>
    </div>
  );
}
export default CollapsedSidebar;
