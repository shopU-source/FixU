import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    // Get and verify token
    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    // Connect to DB and confirm user exists
    await connectDB();
    const user = await User.findById(payload.userId);
    
    if (!user) {
      return NextResponse.json({ valid: false }, { status: 404 });
    }

    // Token is valid and user exists
    return NextResponse.json({ 
      valid: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
    
  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}