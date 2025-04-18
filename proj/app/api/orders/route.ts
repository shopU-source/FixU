import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.userId) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    await connectDB();

    const user = await User.findById(payload.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ orders: user.orders });

  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = getTokenFromRequest(request);
    // console.log("Token extracted:", token ? `${token.substring(0, 10)}...` : "No token");

    if (!token) {
      // console.log("No token found in request");
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    // console.log("Token verification result:", decoded ? "Valid" : "Invalid");

    if (!decoded || !decoded.userId) {
      // console.log("Token verification failed");
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const orderData = await request.json();
    // console.log("Received order data:", orderData);

    await connectDB();

    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user.orders.push({
      ...orderData,
      createdAt: new Date()
    });

    await user.save();
    // console.log("Order saved successfully");

    return NextResponse.json({ success: true, message: 'Order saved successfully' });

  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json({ error: 'Server error processing order' }, { status: 500 });
  }
}
