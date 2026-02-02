"use client";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <spline-viewer
        url="https://prod.spline.design/XYlmk0ZdchAWNPek/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
        ></spline-viewer>
    </div>
  );
}
