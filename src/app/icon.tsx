import { ImageResponse } from "next/og";
import { personalData } from "@/data/personal";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          color: "white",
          background: "#3b82f6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          borderRadius: "50%",
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
