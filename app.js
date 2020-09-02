// requre -> node module을 어딘가에서 가져오는것 express라는 폴더를 현재 가지고있는 폴더나 폴더에 없으면 node module안에 express라는 폴더를 찾는다.
// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {userRouter} from "./router";
//그리고 app에 express를 실행해서 담는다.
const app = express()

// req => 서버에서 정보를 얻는것 
const handleHome = (req, res) => {
    //뭔가에 응답하게하려면 send를 사용
    res.send("Hello from my ass")
}

const hadnlePropfile = (req, res) => {
    res.send("your on my profile")
}

//helmet사용은 보안을 위해서 사용한다.
app.use(cookieParser());
app.use(bodyParser.json({extends : true}));
app.use(bodyParser.urlencoded({extends : true}));
app.use(helmet());
app.use(morgan("dev"));

//라우트 형식
app.get("/" ,handleHome);

app.get("/profile", hadnlePropfile);

//use의 의미는 누군가가 /user 경로에 접속하면 router.js에있는 모든 걸 쓰겠다는 뜻
app.use("/user", userRouter);

export default app;