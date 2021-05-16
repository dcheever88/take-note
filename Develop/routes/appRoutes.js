const fs = require("fs");
const path = require("path");

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);

        // api/notes get routes
        app.get("/api/notes", (req, res) => {
            res.json(notes);
        });

        // api/notes post route
        app.post("/api/notes", (req, res) => {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("New Note Added: " + newNote.title);
        });

        // retrieve notes by id
        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        });

        // delete notes by id
        app.delete("/api/notes/:id", (req, res) => {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Note Deleted: " + req.params.id);
        });

        // retrieve / display notes.html
        app.get("/notes", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        // retrieve /display index.html
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // update json
        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
                if (err) throw err;
                return true;
            });
        }
    });
}