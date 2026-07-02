"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    const referrer = document.referrer;
    if (!referrer) {
      console.log('VisitorTracker: no referrer available on start, skipping tracking');
      return;
    }

    const currentHost = window.location.host;
    try {
      const refererUrl = new URL(referrer);
      if (refererUrl.host === currentHost) {
        console.log('VisitorTracker: referrer is same host, skipping tracking', { referrer });
        return;
      }
    } catch (error) {
      console.warn('VisitorTracker: invalid referrer, skipping tracking', { referrer, error });
      return;
    }

    console.log('VisitorTracker: sending tracking request on start', { referrer });

    fetch("/api/visitor-source", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: {
        "X-Original-Referrer": referrer,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("Visitor source tracking result:", data);
      })
      .catch((error) => {
        console.error("Visitor source tracking failed:", error);
      });
  }, []);

  return null;
}
