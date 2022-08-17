const Meeting = require('../models/Meeting')

//description: Get All Meetings
//route: /meetings
exports.getMeetings = async (req, res, next) => {
  try {
    const meetings = await Meeting.find()

    return res.status(200).json({
      success: true,
      count: meetings.length,
      data: meetings,
    })
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

//description: Add a Meeting
//route endpoint: /meetings/add
exports.addMeeting = async (req, res, next) => {
  try {
    const { dateTime, users } = req.body
    const meeting = await Meeting.create(req.body)

    return res.status(201).json({
      success: true,
      data: meeting,
    })
  } catch (error) {
    if (error._message === 'meeting validation failed') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages,
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      })
    }
  }
}
