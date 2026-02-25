"use client";

import { useEffect } from "react";
import Script from "next/script";

const LifeInsideWidget = () => {
  useEffect(() => {
    // This function will be called once the external script is loaded
    const initializeWidget = () => {
      //@ts-ignore
      if (typeof WidgetWrapper !== "undefined") {
        //@ts-ignore
        WidgetWrapper.mount({ id: "0pQ5qkjQG3" });
      } else {
        console.error("WidgetWrapper is not defined.");
      }
    };

    // Option 1: Directly call initializeWidget if the script is already loaded
    if (window.WidgetWrapper) {
      initializeWidget();
    }

    // Option 2: If you prefer to ensure it's called after the script loads,
    // rely on the onLoad callback of the Script component below.
    // This is handled in the Script component's onLoad prop.
  }, []);

  return (
    <>
      {/* Load the external widget script */}
      <Script
        src="https://app.lifeinside.io/widget.1.0.0.js"
        strategy="afterInteractive" // Load the script after the page is interactive
        onLoad={() => {
          //@ts-ignore
          if (typeof WidgetWrapper !== "undefined") {
            //@ts-ignore
            WidgetWrapper.mount({ id: "0pQ5qkjQG3" });
          } else {
            console.error("WidgetWrapper is not defined.");
          }
        }}
        onError={() => {
          console.error("Failed to load the WidgetWrapper script.");
        }}
      />

      {/* Container for the widget, if needed */}
      <div id="widget-container"></div>
    </>
  );
};

export default LifeInsideWidget;
