import { Request as Req, Response as Res, NextFunction as Next } from "express";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

export interface IRequest {
  user?: IUser;
}

export type Request = Req & IRequest;
export type Response = Res & IRequest;
export type NextFunction = Next;
