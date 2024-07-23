import { AppDataSource } from "../config/data-source";
import UserRepository from "./UserRepository";
import CredentialRepository from "./CredentialRepository"
import AppointmentRepository from "./AppointmentRepository";

const UserRep = UserRepository;

const CredRep = CredentialRepository;

const AppointRep = AppointmentRepository;

export default {UserRep, CredRep, AppointRep}