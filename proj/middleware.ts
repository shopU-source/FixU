import { NextRequest, NextResponse } from 'next/server';
import { getTokenFromRequest, verifyToken } from './lib/auth';

// Paths that require authentication
const protectedPaths = [
  // '/profile',
  '/bookings',
  '/api/orders',
  '/api/user',
];

// Paths that are always public
const publicPaths = [
  '/',
  '/login',
  '/register',
  '/services',
  '/how-it-works',
  '/testimonials',
  '/locations',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/validate',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if this is a protected path
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  
  // If it's not a protected path, don't apply authentication checks
  if (!isProtectedPath) {
    return NextResponse.next();
  }

  // Get token from cookies or headers
  const token = getTokenFromRequest(request);
  
  // No token found, redirect to login
  if (!token) {
    // For API routes, return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // For page routes, redirect to login
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }
  
  // Verify token
  const payload = verifyToken(token);
  
  // Token is invalid
  if (!payload) {
    // For API routes, return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    // For page routes, redirect to login
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }
  
  // Token is valid, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/bookings/:path*',
    '/api/orders/:path*',
    '/api/user/:path*'
  ],
};
