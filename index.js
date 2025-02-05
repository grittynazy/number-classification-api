const express = require("express");
const cors = require("cors");

// Import helper functions
const { isPrime, isPerfect, getProperties, getDigitSum, getFunFact } = require("./helpers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Root route (Home Page)
app.get("/", (req, res) => {
    res.send("Welcome to the Number Classification API! Use /api/classify-number?number=371 to test.");
});

// API route for number classification
app.get("/api/classify-number", (req, res) => {
    let num = req.query.number;

    if (!num || isNaN(num)) {
        return res.status(400).json({
            number: num,
            error: true,
            message: "Invalid number provided"
        });
    }

    num = parseInt(num);
    const response = {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: getProperties(num),
        digit_sum: getDigitSum(num),
        fun_fact: getFunFact(num)
    };

    res.json(response);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

