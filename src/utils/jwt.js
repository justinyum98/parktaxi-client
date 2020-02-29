import jwt from 'jsonwebtoken';

const verifyJWT = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

export default verifyJWT;
