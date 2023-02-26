import Mongoose from 'mongoose';

const animeSchema = Mongoose.Schema(
  {
    anime: { type: 'String', required: true },
    creator: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },

    status: { type: 'String', required: true },
  },
  { timestaps: true }
);

const Event = Mongoose.model('Anime', animeSchema);

export default Event;
