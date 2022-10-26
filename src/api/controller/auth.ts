import * as model from "../../model/user";

export const createUserController = async (req: any, res: any) => {
  const user = req.body;
  const createdUser = await model.createUser(user);
  res.send({
    createdUser: createdUser,
    url: req.originalUrl,
  });
};
