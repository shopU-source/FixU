import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Define JwtPayload interface
export interface JwtPayload {
  userId: string;
  email: string;
}

// Function to generate a JWT token
export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

// Function to verify a JWT token using jose
export async function verifyToken(token: string) {
  try {
    // console.log("Verifying token:", token.substring(0, 20) + "...");
    
    // Create a TextEncoder
    const encoder = new TextEncoder();
    
    // Convert your JWT_SECRET to Uint8Array
    const secretKey = encoder.encode(process.env.JWT_SECRET);
    
    // Verify the token
    const { payload } = await jose.jwtVerify(token, secretKey);
    
    // console.log("Token verified successfully:", payload);
    return payload;
  } catch (error) {
    console.log("Unknown token verification error:", error);
    return null;
  }
}

// Function to get the token from request (Authorization header or cookies)
export function getTokenFromRequest(request: NextRequest): string | null {
  // First try to get token from Authorization header
  const authHeader = request.headers.get('authorization');

  if (authHeader && authHeader.startsWith('Bearer ')) {
    // console.log(authHeader.split(' ')[1])
    return authHeader.split(' ')[1];
  }
  
  // Then try to get token from cookies
  const token = request.cookies.get('auth-token')?.value;
  if (token) {
    return token;
  }
  
  return null;
}
