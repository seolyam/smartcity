export default function BackgroundElements() {
  return (
    <>
      {/* Main black background */}
      <div className="fixed inset-0 bg-black" />

      {/* More visible white grid overlay */}
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle ambient gradients */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-900/5 via-blue-800/3 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-900/8 via-blue-800/4 to-transparent" />
      </div>
    </>
  )
}
