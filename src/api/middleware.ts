import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (req: any, res: any, next: any) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log(hashedPassword);
  req.body.password = hashedPassword;
  next();
};

export const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};
