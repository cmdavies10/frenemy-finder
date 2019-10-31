var frenemies = require("../data/friends");

module.exports = function(app) {
    app.get("/api/frenemies", function(req, res) {
        res.json(frenemies);
    });

    app.post("/api/frenemies", function(req, res) {
        var bestFrenemy = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

        for (var i = 0; i < frenemies.length; i++) {
            var currentFriend = frenemies[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDifference <= bestFrenemy.friendDifference) {
                bestFrenemy.name = currentFriend.name;
                bestFrenemy.photo = currentFriend.photo;
                bestFrenemy.friendDifference = totalDifference;
            }
        }

        frenemies.push(userData);

        res.json(bestFrenemy);
    })
}