const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');
const viewPath = path.join(__dirname, './views');

app.listen(3000, () => {console.log("http://127.0.0.1:3000")});


app.set('view engine', 'pug');
app.set('views', viewPath);
app.locals.pretty = true;

app.use('/', express.static(publicPath));

/*

/index          -> 메인페이지       - index/index.pug
/shop           -> 상품리스트       - shop/list.pug
/shop/2         -> 2번 상품 페이지  - shop/detail.pug 
/member         -> 로그인 패이지    - memeber/login.pug
/member/join    -> 회원가입         - member/join.pug
/pay            -> 결제페이지       - pay/pay.pug
*/

app.get('/index', (req, res, next) => {

});

app.get('/shop', (req, res, next) => {

});

app.get('/shop/:id', (req, res, next) => {

});

app.get('/member', (req, res, next) => {

});

app.get('/member/join', (req, res, next) => {

});

app.get('/cart', (req, res, next) => {

});

app.get('/pay', (req, res, next) => {

});



