import express, { application, Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Router } from './Router';
import { app } from './app';

dotenv.config({ path: ".env" });
new Router(app);

