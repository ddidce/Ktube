// requre -> node module을 어딘가에서 가져오는것 express라는 폴더를 현재 가지고있는 폴더나 폴더에 없으면 node module안에 express라는 폴더를 찾는다.
// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { localsMiddleware } from "./middleware";
import routes from './routes';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
//그리고 app에 express를 실행해서 담는다.
const app = express();

//helmet사용은 보안을 위해서 사용한다.
app.use(helmet());
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json({extends : true}));
app.use(bodyParser.urlencoded({extends : true}));
app.use(morgan("dev"));

//local변수를 global변수로 사용하도록 만들어 주는것
// app.use((req, res, next) => {

// })



app.use(localsMiddleware)

//use의 의미는 누군가가 /user 경로에 접속하면 router.js에있는 모든 걸 쓰겠다는 뜻
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;