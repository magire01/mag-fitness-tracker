const path = require("path");
const db = require("../model");

require("../config/connection");


module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if(err) {
                res.send(err)
            } else {
                console.log("All Workout test: ", data);
                res.json(data);
            }
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                    res.json(err)
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
                req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true }
            )
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => res.json(err));
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => res.json(err))
    });
}