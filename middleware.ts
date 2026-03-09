import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip if already on /en or /de or static files
  if (pathname.startsWith('/en') || pathname.startsWith('/de') || 
      pathname.startsWith('/_next') || pathname.startsWith('/api') ||
      pathname.includes('.')) {
    return NextResponse.next()
  }

  // Get country from Vercel geo headers
  const country = request.headers.get('x-vercel-ip-country') || 'TR'
  
  // Turkish users stay on /
  if (country === 'TR') {
    return NextResponse.next()
  }
  
  // Everyone else redirect to /en
  return NextResponse.redirect(new URL('/en' + pathname, request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
