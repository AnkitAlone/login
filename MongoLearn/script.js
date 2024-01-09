import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ankone:ankitalone@cluster0.akxdaym.mongodb.net/LoginAdmin?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", async (req, res) => {
    try {
        const { mail, pass } = req.body;
        const newUser = new User({
            email: mail,
            password: pass
        });
        await newUser.save();
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving data to the database");
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
