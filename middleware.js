import { NextResponse } from "next/server";

const BACKEND_API = process.env.VISITOR_API_URL || "http://localhost:4000/api/visitor-source";
const FRONTEND_HOST = process.env.NEXT_PUBLIC_FRONTEND_HOST || "www.technology-craft.com";

export async function middleware(request) {
  const referer = request.headers.get("referer") || request.headers.get("referrer");
  const host = request.headers.get("host");

  if (!referer) {
    return NextResponse.next();
  }

  try {
    const refererUrl = new URL(referer);
    if (refererUrl.host === host || refererUrl.host === FRONTEND_HOST) {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.next();
  }

  const headers = new Headers();
  headers.set("referer", referer);
  const cookie = request.headers.get("cookie");
  if (cookie) {
    headers.set("cookie", cookie);
  }

  const response = await fetch(BACKEND_API, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  const nextResponse = NextResponse.next();
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) {
    nextResponse.headers.set("set-cookie", setCookie);
  }

  return nextResponse;
}

export const config = {
  matcher: ["/", "/about", "/services/:path*", "/contact", "/visitor-sources"],
};
