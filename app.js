const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const session = require("express-session");

// app.use(express.static(`${__dirname}/css`));
// app.use(express.static(`${__dirname}/js`));
app.use(express.static(`views`));
// app.use(express.static(`css`));
// app.use(express.static(`${__dirname}/views`));
// app.use(express.static(`views`));

app.set('view engine', 'pug');
app.set('views', './views');
// app.set('views', './');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secure: false,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge:(1000 * 60 * 30)
    },
}));

const host = '127.0.0.1';
const port = 3000;

const pool = require("./mysqlcon");

app.get('/', (req, res) => {
// <<<<<<< HEAD
    if (req.session.uid==undefined) {
        let dataPrim =null;
        return res.render('index', {loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim});
    }
    try {
        pool.getConnection((err, connection) => {
            connection.query(`SELECT * FROM userinfo WHERE userid= "${req.session.uid}"`, (err, result) => {
                if (err) throw err;
                
                let id = result[0].userid;
                let point = result[0].userpoint;
                let dataPrim = {id: id, point: point};
                res.render('index', {loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim});
                connection.release();
            });
        })
    } catch (err) {
        if (err) throw err;
        connection.release();
    }
    // res.render('index', {loginstate:req.session.loginstate, id:req.session.uid}); 
    // console.log("loginstate: " + req.session.loginstate);
    // console.log("session uid: " + req.session.uid);
// =======
//     res.render('index', {loginstate:req.session.loginstate, id:req.session.uid, userpoint:req.session.userpoint}); 
//     console.log(req.session.loginstate);
//     console.log(req.session.uid);
//     console.log(req.session.userpoint);
// >>>>>>> b815abcf2ccb248b5149500a9410aeaff41616ed
});

// ???????????????????????????
// app.get('/skinTrade', (req, res) => {
//     res.render('garen'); 
// });

// ???????????????
app.get('/mypage', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        var sQuery = `SELECT * FROM userboard  where userid='${req.session.uid}'`;
        connection.query(sQuery, (err, rows, fields) => {
            if(err) throw err;

            console.log(rows.length);
            console.log(rows[0]);

            connection.query(`SELECT champseq FROM userinfo where userid="${req.session.uid}"`, (err, result)=> {
                if (err) throw err;
                let tmp =result[0].champseq.split('/');
                if (tmp.length==1) {
                    let imgsrc = null;
                    connection.release();
                    return res.render('mypage', {title:"???????????????", imgsrc: imgsrc, rows:rows, pass:true, loginstate:req.session.loginstate, id:req.session.uid});
                }
                let imgsrc = []
                console.log(tmp);
                tmp.forEach(val => {
                    let number = Number(val);
                    console.log(typeof(number));
                    if (val!=0) {
                        console.log(number);
                        let test = `${number}`;
                        console.log(typeof(test));
                        connection.query(`SELECT imgsrc FROM skininfo where seq="${number}"`, (err, res4) => {
                            if (err) console.log('error');
                            console.log("res: " + res4[0].imgsrc);
                            let a = `img/skin/${res4[0].imgsrc.split('_')[0]}/${res4[0].imgsrc}`;
                            let path = {imgsrc: a};
                            imgsrc.push(path);
                            console.log(imgsrc);
                            if (imgsrc.length==tmp.length-1) {
                                res.render('mypage', {title:"???????????????", imgsrc: imgsrc, rows:rows, pass:true, loginstate:req.session.loginstate, id:req.session.uid});
                                connection.release();
                            }
                            // res.render('mypage', {title:"???????????????", rows:rows, pass:true, loginstate:req.session.loginstate, id:req.session.uid});
                        })
                    }
                })
                // console.log('imgsrc: ' + imgsrc);
            });
                    
            
        
            // let skinName = [];
                
            // var sQuery = `SELECT champseq FROM userinfo  where userid='${req.session.uid}'`;
            // connection.query(sQuery, (err, result, fields) => {
            //     if(err) throw err;
            //     result[0].champseq.split('/');
            //     for(i=0; i<result[0].champseq.split('/').length; i++) {
            //         if(i=0) {continue}
            //         else{
            //             var skQuery = `SELECT imgsrc FROM skininfo where seq='${result[i]}'`
            //             connection.query(skQuery, (err, result, fields) => {
            //                 var name = result[0].split('_')[0];
            //                 var path = `img/skin/${name}/${result[0]}`;
            //                 skinName.push({skinsrc:path});
            //                 res.render('mypage', {title:"???????????????", rows:rows, skinpath:skinName, pass:true, loginstate:req.session.loginstate, id:req.session.uid});
            //             });
            //         };
            //     }
            // })
        });
    });
});

app.post('/logout', (req, res) => {
    delete req.session.loginstate;
    delete req.session.uid;
    delete req.session.userpoint;
    delete req.session.idx;
    res.send(`<script>window.location.href = "/"; </script>`);
});

app.get('/signup', (req, res) => {
    res.render('signup'); 
});

app.post('/signup', (req, res) => { 
    console.log(req.body.address);
    pool.getConnection((err, connection) => {
        if(err) throw err;      

        var sQuery = `INSERT INTO userinfo (userid, userpassword, username, useremail, useraddress, useraddressdet, userpoint) VALUES ('${req.body.id}', '${req.body.password}', '${req.body.username}', '${req.body.email}', '${req.body.address}', '${req.body.addressdet}', 200)`;
        var checkQuery = `SELECT userid FROM userinfo where userid='${req.body.id}'`;
        // var sQuery2 = `SELECT * FROM userboard WHERE userid=${req.session.uid}`;
        

        connection.query(checkQuery, (err, result, fields) => {
            if(err) throw err;

            if(result[0]) {
                connection.release();
                res.send('<script>alert("?????? ?????? ?????????????????? ?????? ??????????????????"); window.location.href = "/signup"; </script>');
            } else {
                connection.query(sQuery, (err, result, fields) => {
                    if(err) throw err;
                
                    console.log(result); 
                });
                connection.release();
                res.send("<script>alert('??????????????? ?????????????????????.'); window.close();</script>");
            };
        });
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `SELECT userid, userpassword, userpoint FROM userinfo where userid='${req.body.id}'`;
        console.log(sQuery);
        
        connection.query(sQuery, (err, result, fields) => {
            if(err) return err;


            console.log(result[0]);
            if(result.length == 0) {
                connection.release();
                res.send('<script>alert("???????????? ??????????????????"); window.location.href = "/login"; </script>');
            }
            else if(req.body.id == result[0].userid) {
                if(req.body.pwd == result[0].userpassword) {
                    console.log("????????? ??????");
                    req.session.loginstate = 'okay';
                    req.session.uid = result[0].userid;
                    req.session.userpoint = result[0].userpoint;
                    connection.release();
                    res.send("<script>alert('???????????????!');opener.parent.location.reload();window.close();</script>");
                    console.log(req.session.loginstate);
                    console.log(req.session.uid);
                }
                else {
                    console.log("???????????? ??????");
                    connection.release();
                    res.send('<script>alert("??????????????? ??????????????????"); window.location.href = "/login"; </script>');
                }
            }; 
        });
    });
});

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`);
})

// req.session.save(function(){ 
//     rsp.redirect('/');
// });
// delete req.session.uid;
// req.session.destory(function(err){});

app.get('/board/page', (req, res) => {  // page/1 ??? ?????????  /page ?????? ?????????????????? /page/1 ??? ????????????
    res.redirect('/board/page/1');
    console.log("==============");
    console.log(req.session.loginstate);
});

app.get('/board/page/:page', (req, res) => { // ????????? ???????????? :page??? ???????????????
    var page = req.params.page; // ?????? ???????????? params ??? req ???????????????
    pool.getConnection((err, connection) => {
        if(err) throw err;
        var sQuery =  "select idx, userid, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate, hit from userboard";  // select ?????? ?????????

        connection.query(sQuery, (err, rows) => {
            if (err) throw err;
            if (req.session.uid==null) {
                let dataPrim = null;
                connection.release();
                return res.render('boardpage', {title : '?????????', rows:rows, page:page, length:rows.length-1, page_num:10, pass:true, loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim}); 
            }
            connection.query(`SELECT * FROM userinfo WHERE userid= "${req.session.uid}"`, (err, result) => {
                if (err) throw err;
                
                let id = result[0].userid;
                let point = result[0].userpoint;
                let dataPrim = {id: id, point: point};
                connection.release();
                return res.render('boardpage', {title : '?????????', rows:rows, page:page, length:rows.length-1, page_num:10, pass:true, loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim}); 
            })
            // res.render('boardpage', {title : '?????????', rows:rows, page:page, length:rows.length-1, page_num:10, pass:true, loginstate:req.session.loginstate, id:req.session.uid}); 
            // length ????????? ???????????? ?????????,-1??? ???????????? db?????????1???????????? for???????????? 0?????? ?????? ,page_num: ??????????????? ????????? ??????
            // console.log(rows.length-1);
        });
        // connection.release();
    });
});

app.get('/board/write', (req, res) => {  // board/write ??? ???????????? ????????????????????? ??????
    console.log(req.session.uid)
    pool.getConnection((err, connection) =>{
        if(err) throw err;
        connection.query(`SELECT * FROM userinfo WHERE userid= "${req.session.uid}"`, (err, result) => {
            if (err) throw err;
            
            let id = result[0].userid;
            let point = result[0].userpoint;
            let dataPrim = {id: id, point: point};
            connection.release();
            return res.render('write', {title : "????????? ?????????", loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim});
        })
    })
    // res.render('write', {title : "????????? ?????????", loginstate:req.session.loginstate, id:req.session.uid})
});

app.post('/board/write', (req, res) => {
    var userid= req.session.uid;                   
    var title = req.body.title;
    var content = req.body.content;
    var datas = [userid, title, content]; // ?????????????????? ????????? ??????
    // req ????????? body ???????????? input ???????????? ????????????
    pool.getConnection((err, connection) =>{
        if(err) throw err;
        var sQuery = "insert into userboard(userid, title, content, regdate, modidate, hit) values(?,?,?,now(),now(),0)";  // ? ??? ????????????
        connection.query(sQuery, datas, (err,rows) => { // datas ??? ??????????????? ??????
            if (err) throw err;
            res.redirect('/board/page');
        })
        connection.release();
    });
});

app.get('/board/read/:idx', (req, res) => { // board/read/idx?????? ???????????? ?????????
    var idx = req.params.idx; // :idx ??? ????????? req ?????? ????????????
    req.session.idx = idx;
    pool.getConnection((err, connection) =>{ //????????? 1??? ??????
        if(err) throw err;
        var hQuery = `UPDATE userboard set hit=hit+1 where idx='${idx}'`;
        connection.query(hQuery,[idx], (err, result) => {
            if(err) throw err;
            var sQuery = "SELECT idx, userid, title, content, date_format(modidate, '%Y-%m-%d %H:%i:%s') modidate, " +   
            "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate, hit from userboard where idx=?";
            connection.query(sQuery,[idx], (err, rows) => {  // ????????? ??????????????????????????? ?????????idx??? ??????????????? ?????????
                if(err) throw err;
                var cQuery = "SELECT idx, userid, comments, likecnt from commentboard where board_idx=?";
                connection.query(cQuery,[idx], (err, comrows) => {
                    if(err) throw err;
                    connection.query(`SELECT * FROM userinfo WHERE userid= "${req.session.uid}"`, (err, result) => {
                        if (err) throw err;
                        
                        let id = result[0].userid;
                        let point = result[0].userpoint;
                        let dataPrim = {id: id, point: point};
                        connection.release();
                        return res.render('read', {title : '??? ????????????', rows:rows[0], comrows:comrows, loginstate:req.session.loginstate, id:req.session.uid, dataPrim:dataPrim}); // ???????????? ????????????????????? ????????? ??????
                    })
                })
                    // res.render('read', {title : '??? ????????????', rows:rows[0], comrows:comrows, loginstate:req.session.loginstate, id:req.session.uid}); // ???????????? ????????????????????? ????????? ??????
            })
            
        // connection.release();
        });
    });
});

app.post('/board/update', (req, res) => {
    console.log("update")
    var idx = req.body.idx;
    var userid = req.session.uid;
    var title = req.body.title;
    var content = req.body.content;
    var datas = [idx, userid, title, content]; // ??????????????? ?????? datas ??? ?????????

    pool.getConnection((err, connection) => {
        if(err) throw err;
        
        var cQuery = `SELECT userid FROM userboard where idx='${idx}'`
        connection.query(cQuery, (err, result) =>{
            if(err) throw err;

            console.log(result[0].userid);
            if(userid == result[0].userid) {
                var sQuery = `UPDATE userboard set userid='${userid}', title='${title}', content='${content}' ,modidate=now()  where idx='${idx}'`; 
                connection.query(sQuery, datas, (err, result) => {
                    if (err) console.error(err);
                    else {
                        res.redirect('/board/read/' + idx);
                    }
                    connection.release();
                });
            } 
            else {
                res.send('<script>alert("???????????? ????????? ??? ????????????"); window.location.href = "/board/page"; </script>');
            }
        });
    })
    
});

app.post('/board/delete', (req, res) => {
    console.log("delete")
    var userid = req.session.uid;
    var idx = req.body.idx;
    var passwd = req.body.passwd;
    var datas = [idx, passwd];

    pool.getConnection((err, connection) => {
        if(err) throw err;

        var cQuery = `SELECT userid FROM userboard where idx='${idx}'`
        connection.query(cQuery, (err, result) =>{
            if(err) throw err;

            console.log(result[0].userid);
            if(userid == result[0].userid) {
                var sQuery = `DELETE from userboard where idx='${idx}'`; // ???????????? ????????? ?????? ????????? ?????????
                    connection.query(sQuery, datas, (err, result) => {
                    if(err) throw err;
                    else {
                        res.redirect('/board/page')
                    }
                    connection.release();
                }); 
            }
            else{
                res.send('<script>alert("???????????? ????????? ??? ????????????"); window.location.href = "/board/page"; </script>');
            }
        });
    });
});

app.get('/board/rewrite', (req, res) => { 
    var idx = req.session.idx; 
    pool.getConnection((err, connection) =>{ 
        if(err) throw err;

        // if(err) throw err;
        var sQuery = "SELECT idx, userid, title, content, date_format(modidate, '%Y-%m-%d %H:%i:%s') modidate, " +   
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate, hit from userboard where idx=?";

        connection.query(sQuery,[idx], (err, rows) => {  // ????????? ??????????????????????????? ?????????idx??? ??????????????? ?????????
            if(err) throw err;
            
            let id = result[0].userid;
            let point = result[0].userpoint;
            let dataPrim = {id: id, point: point};
            connection.release();
            return res.render('rewrite', {title : '??? ??????/??????', rows:rows[0], loginstate:req.session.loginstate, id:req.session.uid, dataPrim: dataPrim})
            
            // res.render('read', {title : '??? ??????/??????', rows:rows[0], loginstate:req.session.loginstate, id:req.session.uid}); // ???????????? ????????????????????? ????????? ??????
        });
    // connection.release();
//         connection.query(sQuery,[idx], (err, rows) => {  
//             if(err) throw err;
        
//             res.render('rewrite', {title : '??? ??????/??????', rows:rows[0], loginstate:req.session.loginstate, id:req.session.uid});
//         });
//         connection.release();

    });
});


app.post('/board/comment', (req, res) => {
    var userid = req.session.uid;
    var comments = req.body.comment;
    var board_idx = req.body.idx;
    var idx = req.body.idx;
    var datas = [userid, comments, board_idx];
    pool.getConnection((err, connection) =>{
        if(err) throw err;
        var sQuery = "insert into commentboard(userid, comments, likecnt, board_idx) values(?,?,0,?)";  // ? ??? ????????????
        connection.query(sQuery, datas, (err,rows) => { // datas ??? ??????????????? ??????
            if (err) throw err;
        })
        res.redirect('/board/read/' + idx);
        connection.release();
    });
});
app.delete('/board/comment', (req, res) => {
    var userid = req.session.uid;
    var comments = req.body.comment;
    var board_idx = req.body.idx;
    var idx = req.body.comidx;
    var datas = [userid, comments, board_idx];
    pool.getConnection((err, connection) =>{
        if(err) throw err;
        var cQuery = `SELECT userid FROM commentboard where idx='${idx}'`
        connection.query(cQuery, (err, result) =>{
            if(err) throw err;

            console.log(result[0].userid);
            if(userid == result[0].userid) {
                var sQuery = `DELETE from comment where idx='${idx}'`; // ???????????? ????????? ?????? ????????? ?????????
                    connection.query(sQuery, datas, (err, result) => {
                    if(err) throw err;
                    else {
                        res.redirect('/board/page')
                    }
                    connection.release();
                }); 
            }
            else{
                res.send('<script>alert("???????????? ????????? ??? ????????????"); window.location.href = "/board/page"; </script>');
            }
        });
        
        res.redirect('/board/read/' + idx);
        connection.release();
    });
});

//sky ??????

const fsp = require('fs').promises;

app.get('/all', async(req, res) => {
    const data = await fsp.readFile('./all.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/top', async(req, res) => {
    const data = await fsp.readFile('./top.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/mid', async(req, res) => {
    const data = await fsp.readFile('./mid.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/jng', async(req, res) => {
    const data = await fsp.readFile('./jng.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/adc', async(req, res) => {
    const data = await fsp.readFile('./adc.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/sup', async(req, res) => {
    const data = await fsp.readFile('./sup.json');
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(data);
});

app.get('/skin/:name', (req, res) => { //imagetest table????????????
    var tmp = req.params.name;
    console.log(tmp);
    if (req.session.loginstate==undefined) {
        return res.send("<script>alert('???????????? ????????? ??????????????????.');window.location.href='/'</script>")};
    const sql = `SELECT * FROM imagetest WHERE champid=("${tmp}")`;
    const path = `img/skin/${tmp}/`
    let skinName = [];
    try {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            
            connection.query(sql, (err, result)=>{
                console.log("connection success!");
                if(err) throw err;
                    // console.log("imgPath: " + imgPath);

                connection.query(`SELECT * FROM skininfo WHERE imgsrc LIKE '%${tmp}%'`, (err, result) => {
                    if (err) throw err;
                    
                    else {
                        for (var element of result) {
                            skinName.push({imgsrc : `${path}${element.imgsrc}`, skin: `${element.champid}`, money: `${element.cpoint}`});
                        }
                        // console.log(result);
                        // console.log(skinName);
                        // console.log(skinName);
                        // res.render('garen', {test: skinName});

                        connection.query(`SELECT * FROM userinfo WHERE userid= "${req.session.uid}"`, (err, result) => {
                            if (err) throw err;
                            
                            let id = result[0].userid;
                            let point = result[0].userpoint;
                            let dataPrim = {id: id, point: point};
                            res.render('garen', {test: skinName, dataPrim: dataPrim});
                            connection.release();
                        });
                    }
                });
            });
        });
    } catch (err) {
        console.log(err);
    }
});

app.get('/skinTrade', (req, res) => {
    if (req.session.loginstate==undefined) {
        // let dataPrim = {id: '', point: ''};
        let dataPrim = null
        return res.render('test2', {dataPrim:dataPrim})
    }
    try {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(`SELECT * FROM userinfo WHERE userid="${req.session.uid}"`, (err, result)=>{
                if(err) throw err;
                let id = result[0].userid;
                let point = result[0].userpoint;
                console.log("id, point : " + id + " " + point);
                let dataPrim = {id: id, point: point};
                res.render('test2', {dataPrim: dataPrim});
            });
            connection.release();
        });
    } catch(err) {
        console.log(err);
    }
})

app.post('/skin/:name', (req, res) => { 
    // console.log(req.params.name);
    // console.log('userid: ' + req.session.uid);
    console.log("post");
    let tmp = req.params.name+'.jpg';
    
    const sql = `SELECT * FROM skininfo WHERE imgsrc=("${tmp}")`;
    let num = null;
    try {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(sql, (err, result)=>{
                if(err) throw err;
                let point = result[0].cpoint;
                
                num = String(result[0].seq);
                connection.query(`SELECT * FROM userinfo WHERE userid=("${req.session.uid}")`, (err, result) => {
                    if (err) throw err;
                    let tmp = result[0].champseq;
                    let money = result[0].userpoint;
                    if(tmp==undefined || !tmp.includes(num)){
                        if (money>point) {
                            tmp+=`/${num}`
                            money-=point;
                            connection.query(`UPDATE userinfo SET champseq = ("${tmp}"), userpoint = ("${money}") WHERE userid="${req.session.uid}"`, (err, result) => {
                                if (err) throw err;
                                else {
                                    console.log(result);
                                    res.send(`<script>alert("?????? ?????? ???????????????.");
                                    window.location.href='/';</script>`);
                                }
                            });
                        }
                        else {
                            res.send(`<script>alert("???????????? ???????????????.")</script>`)
                        }
                    }
                    else{
                        res.send(`<script>alert("?????? ????????? ???????????????");
                        window.location.href='/';</script>`);
                    }

                })
            });
            connection.release();
        });
    } catch (err) {
        console.log(err);
    } 
});

// app.get('/mypage', (req, res) => {
//     res.render('mypage');
// });

// app.get('/mypage/myboard', (req, res) => {
//     var sQuery = `SELECT userid FROM userboard where userid='${req.session.uid}'`;

//     pool.getConnection((err, connection) => {
//         if(err) throw err;

//         connection.query(sQuery, (err, rows) => {
//             if(err) throw err;

//             res.render('mypage', {title: '??? ????????????', rows:rows, loginstate: req.session.loginstate, id: req.session.uid});
            
//         });
//         connection.release();
//     })
// })