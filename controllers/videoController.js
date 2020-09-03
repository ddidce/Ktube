//render 함수의 첫번째 파라미터는 템플릿, 두번쨰는 템플릿에 추가할 정보
//                                       가 담긴 객체
export const home = (req, res) => res.render("home" ,{ pageTitle : 'Home'});

export const search = (req, res) => {
    const {
        query : { term : searchingBy }
    } = req;
    res.render("Search", {pageTitle : 'Search', searchingBy});
}
export const videos = (req, res) => res.render("Videos", {pageTitle : 'Videos'});

export const upload = (req, res) => res.render("Upload", {pageTitle : 'Upload'});

export const videoDetail = (req, res) => res.render("Video Detail", {pageTitle : 'Video Detail'});

export const editVideo = (req, res) => res.render("Edit Video", {pageTitle : 'Edit Video'});

export const deleteVideo = (req, res) => res.render("Delete Video", {pageTitle : 'Delete Video'});
