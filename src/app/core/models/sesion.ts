import { User } from "./user";

export interface Sesion {
  activeSesion: boolean,
  activeUser?: User
}