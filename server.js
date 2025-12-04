import express from "express";
const app = express();

app.get("/status", (req, res) => {
    res.json({ online: true, players: 0 });
});

app.get("/version", (req, res) => {
    res.json({ version: "1.0.0" });
});

app.get("/update", (req, res) => {
    res.json({
        url: "https://example.com/yourgame.zip" // your download link here
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Launcher server running on port " + port));
