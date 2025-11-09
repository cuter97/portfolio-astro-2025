// Import all SVGs as URLs
const icons = import.meta.glob("../../icons/skills/*.svg", {
  eager: true,
  query: "?url",
  import: "default"
}) as Record<string, string>;

interface IconProps {
  name: string;
  className?: string;
}

export const LazyIcon = ({ name, className }: IconProps) => {
  const iconUrl = icons[`../../icons/skills/${name}.svg`];

  if (!iconUrl) {
    return (
      <div
        className={`${className || "w-12 h-12"} bg-gray-200 rounded`}
        title={`Icon '${name}' not found`}
      />
    );
  }

  return (
    <img
      src={iconUrl}
      className={className}
      alt={name}
      style={{ display: 'block' }}
    />
  );
};
