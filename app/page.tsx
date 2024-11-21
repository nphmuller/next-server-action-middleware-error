"use client";

import { actionThatThrowsViaMiddleware } from "./actions";

export default function Home() {
  return (
    <button
      onClick={async () => {
        try {
          await actionThatThrowsViaMiddleware();
        } catch {
          console.log("Caught error");
        }
      }}
    >
      Click for action that throws
    </button>
  );
}
