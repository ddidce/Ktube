import {videos} from "../db";

//render 함수의 첫번째 파라미터는 템플릿, 두번쨰는 템플릿에 추가할 정보
//                                       가 담긴 객체

export const home = (req, res) => res.render("home" ,{ pageTitle : 'Home', videos});

export const search = (req, res) => {
    const {
        query : { term : searchingBy }
    } = req;
    res.render("search", {pageTitle : 'search', searchingBy});
}

export const upload = (req, res) => res.render("upload", {pageTitle : 'Upload'});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : 'Video Detail'});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : 'Edit Video'});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : 'Delete Video'});
