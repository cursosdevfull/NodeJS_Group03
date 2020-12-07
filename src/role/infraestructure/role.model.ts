import mongoose, { Schema } from 'mongoose';

const schema: Schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	isActive: {
		type: Boolean,
		default: true,
	},
});

export default mongoose.model('Role', schema);
