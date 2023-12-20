// controllers/urlController.js
const shortid = require('shortid');
const Url = require('../models/Url');

exports.shortenURL = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  try {
    const url = await Url.create({ originalUrl, shortUrl });
    res.json({ originalUrl: url.originalUrl, shortUrl: url.shortUrl });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.redirectURL = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
