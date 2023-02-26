import asyncHandler from 'express-async-handler';
import Anime from '../models/eventModel.js';

export const allEvents = asyncHandler(async (req, res) => {
  if (!req.user) return res.status(400).send('user not found');
  const user = req.user;
  try {
    const animes = await Anime.findById(user._id);
    const limit = req.query.limit || animes.length;
    res.status(200);
    res.json(animes.slice(0, limit));
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

export const filterEvents = asyncHandler(async (req, res) => {
  if (!req.user) return res.status(400).send('user not found');
  const status = req.body.status;
  const user = req.user;
  try {
    const event = await Anime.find({ status: status });
    if (!event) return res.status(400).send('no anime found');
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send('filter error');
    throw new Error(error.message);
  }
});

export const createEvent = asyncHandler(async (req, res) => {
  const { anime, status } = req.body;
  if (!req.user) return res.status(400).send('user not found');
  if (!anime || !status)
    return res.status(400).send('please fill all the fields');
  const user = req.user;

  try {
    var addanime = await Anime.create({
      anime,
      creator: user,

      status,
    });

    res.status(200).send(addanime);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
