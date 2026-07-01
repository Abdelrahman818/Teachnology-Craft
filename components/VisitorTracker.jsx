"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    const referrer = document.referrer;
    if (!referrer) return;

    const currentHost = window.location.host;
    try {
      const refererUrl = new URL(referrer);
      if (refererUrl.host === currentHost) return;
    } catch (error) {
      return;
    }

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
