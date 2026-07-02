import { NextResponse } from "next/server";

const BACKEND_VISITOR_API = process.env.VISITOR_API_URL || process.env.NEXT_PUBLIC_VISITOR_API_URL || "http://localhost:4000/api/visitor-source";

export async function GET(request) {
  const headers = new Headers();
  const forwarded = request.headers;

  if (forwarded.has("cookie")) {
    headers.set("cookie", forwarded.get("cookie"));
  }
  if (forwarded.has("x-original-referrer")) {
    headers.set("referer", forwarded.get("x-original-referrer"));
  } else if (forwarded.has("referer")) {
    headers.set("referer", forwarded.get("referer"));
  }
  if (forwarded.has("sec-fetch-mode")) {
    headers.set("sec-fetch-mode", forwarded.get("sec-fetch-mode"));
  }
  if (forwarded.has("user-agent")) {
    headers.set("user-agent", forwarded.get("user-agent"));
  }
  if (forwarded.has("accept")) {
    headers.set("accept", forwarded.get("accept"));
  }

  try {
    const response = await fetch(BACKEND_VISITOR_API, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    const text = await response.text();
    const json = response.headers.get("content-type")?.includes("application/json")
      ? JSON.parse(text)
      : { data: text };

    const nextResponse = NextResponse.json(json, { status: response.status });
    const setCookie = response.headers.get("set-cookie");
    if (setCookie) {
      nextResponse.headers.set("set-cookie", setCookie);
    }

    return nextResponse;
  } catch (error) {
    return NextResponse.json({
      successful: false,
      msg: `Proxy error: ${error.message}`,
      backendUrl: BACKEND_VISITOR_API,
    }, { status: 500 });
  }
}
