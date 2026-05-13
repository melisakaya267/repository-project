import { UserRepository } from "./repositories/UserRepository";

const userRepository = new UserRepository();

console.log(userRepository.getAllUsers());