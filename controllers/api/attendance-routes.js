const router = require("express").Router();
const { Attendance } = require("../../models");
// POST /api/attend
router.post("/", (req, res) => {
  Attendance.create({
    user_id: req.session.user_id,
    activity_id: req.body.activity_id,
  })
    .then((dbActivityData) => {
      res.json(dbActivityData);
      console.log(dbActivityData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/", (req, res) => {
  Attendance.destroy({
    where: {
      user_id: req.session.user_id,
      activity_id: req.body.activity_id,
    },
  })
    .then((dbActivityData) => {
      res.json(dbActivityData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
