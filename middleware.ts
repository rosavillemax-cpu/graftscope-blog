import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') || ''
  
  // Redirect graftscope.org to graftscope.com/blog
  if (host.includes('graftscope.org')) {
    const path = request.nextUrl.pathname
    const search = request.nextUrl.search
    return NextResponse.redirect(
      `https://graftscope.com/blog${path}${search}`,
      { status: 301 }
    )
  }
  
  // Skip if already on /en or /de or static files
  if (pathname.startsWith('/en') || pathname.startsWith('/de') || 
      pathname.startsWith('/_next') || pathname.startsWith('/api') ||
      pathname.includes('.')) {
    return NextResponse.next()
  }

  // Get country from Vercel geo headers
  const country = request.headers.get('x-vercel-ip-country') || 'TR'
  
  // German-speaking countries -> /de
  if (['DE', 'AT', 'CH'].includes(country)) {
    return NextResponse.redirect(new URL('/de' + pathname, request.url))
  }
  
  // Turkey -> /
  if (country === 'TR') {
    return NextResponse.next()
  }
  
  // Everyone else -> /en
  return NextResponse.redirect(new URL('/en' + pathname, request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
