"use client";
import { RootUI } from "@/components/component/root-ui";
import Script from "next/script";

export default function Home() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div>
          <RootUI />
          <Script type="text/javascript" id="inline-form-script">
            {function configureAhoy() {
              ahoy.configure({
                visitsUrl: "https://usebasin.com/ahoy/visits",
                eventsUrl: "https://usebasin.com/ahoy/events",
                page: "437c48626f77",
              });
              ahoy.trackView();
              ahoy.trackSubmits();
            }}
          </Script>
          <Script
            src="https://cdn.jsdelivr.net/npm/ahoy.js@0.3.9/dist/ahoy.min.js"
            async
            defer
            onLoad="configureAhoy()"
          ></Script>
        </div>
      );
    }, 2000);
  });
}
