import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  serviceId?: mongoose.Types.ObjectId;
  serviceName: string;
  serviceProvider: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduledDate: Date;
  price: number;
  address: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerNotes?: string;
  createdAt: Date;
}

const OrderSchema: Schema<IOrder> = new Schema({
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
  serviceName: { type: String, required: true },
  serviceProvider: { type: String },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  scheduledDate: { type: Date, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  customerName: { type: String },
  customerPhone: { type: String },
  customerEmail: { type: String },
  customerNotes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default OrderSchema;
