const express = require('express')
const router = express.Router()
const checkHit = () => console.log("DICK")

const spinConnect_controller = require('./routes/spinConnect_controller')
// const discogs_controller = require('./routes/discogsRouter')
// const spotify_controller = require('./routes/spotifyRouter')
// const soundCloud_controller = require('./routes/soundCloudRouter')

router.use('/user', spinConnect_controller)
// router.use('/discogs', discogs_controller)
// router.use('/spotify', spotify_controller)
// router.us('/sound_cloud', soundCloud_controller)

module.exports = router