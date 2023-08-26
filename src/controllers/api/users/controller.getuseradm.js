import Dtoclose from "../../../models/entities/dtoUsers.model.js";
import {
  ErrorInvalidArgument,
  ErrorPermissions,
} from "../../../models/error/errors.model.js";
import { userRepository } from "../../../repositories/users.repository.js";

export async function getUsersAdm(req, res, next) {
  req.logger.https("inside get-admin user");
  try {
    const user = await userRepository.findOneById(req.params.uid);
    if (user.role === "super-admin")
      throw new ErrorInvalidArgument("user role couldnt  change");
    let userRole;
    if (user.role === "admin") {
      userRole = await userRepository.updateOne(user.id, { role: "user" });
    } else {
      if (user.documents.length !== 3)
        throw new ErrorPermissions("Incomplete Documentation");
      userRole = await userRepository.updateOne(user.id, { role: "admin" });
    }
    const usrs = await userRepository.findMany();
    const users = usrs.map((usr) => {
      const dtocloseData = new Dtoclose(usr).dtoclose();
      return dtocloseData;
    });
    res.status(200).json(userRole);
  } catch (error) {
    next(error);
  }
}
