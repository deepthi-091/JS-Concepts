function loginuser(name="guest"){
    return new Promise(resolve =>{
        setTimeout(() => {
        resolve("hello"+{userid:1,username:name});
    }, 1000);
    })
}
function fetchdata(userid){
    return new Promise(_,reject =>{
        setTimeout(() => {
        reject("data fetch and verication ..");
    }, 2000);
    })
}
function sucess(userid){
   return new Promise(resolve => {
     setInterval(()=>{
        resolve("sucess");
    },1000)
   })
}
function fetchposts(userid){
    return new Promise(resolve => {
        setInterval(()=>{
        resolve("posts data...");
    },1000);
    })
}
function logout(userid){
    return new Promise(resolve =>{
        setInterval(()=>{
        resolve("logout sucess");
    })
    })
}

async function insta(){
    try{
        console.log("welcome to insta");
        const user=await loginuser("deepthi");
        console.log("login sucess");
        const data=await fetchdata(user.userid);
        console.log(data);
        const suc=await sucess(user.userid);
        console.log(suc)
        const post=await fetchposts(user.userid);
        console.log(post)
        const log=await logout(user.userid);
        console.log(log);
        
    }
    catch(e){
        console.log(e.name);
        console.log(e.stack);
    }
}
insta();
