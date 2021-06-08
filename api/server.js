const express = require("express");

const AccountsRouter = require("./accounts/accounts-router")

const server = express();
server.use(express.json());

server.use("/api/accounts",AccountsRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;
