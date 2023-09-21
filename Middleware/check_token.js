const verifyToken = async (req, res, next)=> {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token invalid' });
      }
  
      req.userId = decoded.userId; 
      next(); 
    });
  }
  