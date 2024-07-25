const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).send('Access denied');
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send('Invalid token');
    }
  };
  
  const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).send('Forbidden');
      }
      next();
    };
  };
  export default {authenticateJWT, authorizeRoles};