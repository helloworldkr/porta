import { IconMenu, IconFolder, IconSun, IconMoon } from "./Icons";

interface Props {
  title: string;
  projectName?: string;
  onMenuToggle?: () => void;
  theme?: "dark" | "light" | "system";
  onThemeToggle?: () => void;
}

export function ChatHeader({
  title,
  projectName,
  onMenuToggle,
  theme = "dark",
  onThemeToggle,
}: Props) {
  return (
    <div className="main-header">
      {onMenuToggle && (
        <button
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          title="Open menu"
        >
          <IconMenu size={18} />
        </button>
      )}
      <span
        className="main-header-title"
        onClick={() => {
          document
            .querySelector(".chat-area")
            ?.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {title}
      </span>
      <div className="main-header-actions">
        {onThemeToggle && (
          <button
            className="theme-toggle-btn"
            onClick={onThemeToggle}
            title={`Switch theme (current: ${theme})`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <IconMoon size={16} /> : <IconSun size={16} />}
          </button>
        )}
        {projectName && (
          <span className="main-header-project">
            <IconFolder size={11} /> {projectName}
          </span>
        )}
      </div>
    </div>
  );
}

