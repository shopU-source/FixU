import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define Order Interface
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

// Define User Interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  orders: IOrder[];
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Order Schema
const OrderSchema: Schema<IOrder> = new Schema({
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
  serviceName: { type: String, required: true },
  serviceProvider: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  scheduledDate: { type: Date, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  customerName: { type: String },
  customerPhone: { type: String },
  customerEmail: { type: String },
  // customerNotes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// User Schema with Timestamps (createdAt & updatedAt handled by Mongoose)
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    orders: [OrderSchema],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Pre-save hook to hash password
UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Instance method for comparing password
UserSchema.methods.comparePassword = async function(this: IUser, candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Exporting the User model
const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default UserModel;
