import { ImageResponse } from "next/og";
import { personalData } from "@/data/personal";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: "white",
          background: "#3b82f6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          borderRadius: "20px",
        }}
      >
        {personalData.name.charAt(0)}
      </div>
    ),
    {
      ...size,
    }
  );
}
