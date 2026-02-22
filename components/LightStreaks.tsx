'use client'

export default function LightStreaks() {
  return (
    <>
      <div
        className="light-streak top-10 left-10"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="light-streak top-20 right-20"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="light-streak bottom-20 left-1/4"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="light-streak bottom-10 right-10"
        style={{ animationDelay: '6s' }}
      />
    </>
  )
}
