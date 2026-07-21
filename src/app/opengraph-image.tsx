import { ImageResponse } from "next/og";
import { personalData } from "@/data/personal";

export const runtime = "edge";

export const alt = `${personalData.name} Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          color: "white",
          background: "linear-gradient(to bottom right, #000000, #111111)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "20px solid #3b82f6",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 20 }}>
          {personalData.name}
        </div>
        <div style={{ fontSize: 40, color: "#9ca3af", fontWeight: 500 }}>
          {personalData.role}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
