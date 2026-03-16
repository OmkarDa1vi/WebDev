const express = require('express');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String }
});