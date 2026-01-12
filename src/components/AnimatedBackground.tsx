export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-black"
      style={{
        // Simple matrix-style background using CSS only
        backgroundImage: `
          radial-gradient(circle at top, rgba(0, 255, 0, 0.15), transparent 55%),
          radial-gradient(circle at bottom, rgba(0, 255, 0, 0.15), transparent 55%),
          linear-gradient(rgba(0, 255, 0, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 0, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 2px 16px, 16px 2px",
        backgroundBlendMode: "screen",
      }}
    />
  );
}
