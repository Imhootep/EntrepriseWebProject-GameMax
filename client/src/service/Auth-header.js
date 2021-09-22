export default function authHeader(){
    const user = JSON.parser(localStorage.getItem('user'))

    if(user && user.signedJWT){
        return {Authorization:'Bearer ' + user.signedJWT };

    }else{
        return {};
    }
}