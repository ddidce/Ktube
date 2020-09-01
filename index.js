// requre -> node module을 어딘가에서 가져오는것 express라는 폴더를 현재 가지고있는 폴더나 폴더에 없으면 node module안에 express라는 폴더를 찾는다.
// const express = require('express');
import express from "express";
//그리고 app에 express를 실행해서 담는다.
const app = express()

const PORT = 4000;

const handleListening = () => {
    console.log(`listening on: http://localhost:${PORT}`);
}

// req => 서버에서 정보를 얻는것 
const handleHome = (req, res) => {
    //뭔가에 응답하게하려면 send를 사용
    res.send("Hello from my ass")
}

const hadnlePropfile = (req, res) => {
    res.send("your on my profile")
}


//라우트 형식
app.get("/", handleHome);

app.get("/profile", hadnlePropfile);

app.listen(PORT, handleListening);