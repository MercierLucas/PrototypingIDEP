import Cookies from 'js-cookie';

const API_TOKEN = "";
const API_URL="https://idep-2020.herokuapp.com/";


export function getUsers(){
    const url = "https://my-json-server.typicode.com/MercierLucas/demo_git/products";
    console.log("url:")
    console.log(url)
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


export const  register = async (firstname,lastname,username,email,password)=>{
  let reqBody = '{"forename":"'+firstname+'","surname":"'+lastname+'","username":"'+username+'","mail":"'+email+'","password":"'+password+'"}';
  let url = API_URL+'auth/register'

  const response = await fetch(url, {
      method: 'POST',
      body: reqBody, // string or object
      headers: {
        'Content-Type': 'application/json',
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      return myJson;
    } catch (error) {
      return false;
    }
}

export const  login = async (username,password)=>{
  let reqBody = '{"username":"'+username+'","password":"'+password+'"}';
  let url = API_URL+'auth/login'

  const response = await fetch(url, {
      method: 'POST',
      body: reqBody, // string or object
      headers: {
        'Content-Type': 'application/json',
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      if(typeof myJson.jwttoken !== 'undefined')
        return myJson.jwttoken
      else
        return false;
    } catch (error) {
      return false;
    }
}

export const  checkCreditentials = async (jwt)=>{
  let url = API_URL+'auth/me'
  //console.log("sending jwt "+jwt)
  const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization':'Bearer '+jwt,
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      //console.log(Object.keys(myJson))
/*       if(typeof myJson.authenticated !== 'undefined')
        return myJson.authenticated */
      if(typeof myJson.id !== 'undefined')
        return true
      else
        return false;
    } catch (error) {
      return false;
    }
}

export const  getMyInfos = async ()=>{
  let jwt = Cookies.get("jwt")
  let url = API_URL+'auth/me'
  //console.log("sending jwt "+jwt)
  const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization':'Bearer '+jwt,
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      //console.log(Object.keys(myJson))
/*       if(typeof myJson.authenticated !== 'undefined')
        return myJson.authenticated */
      if(typeof myJson.id !== 'undefined')
        return myJson
      else
        return false;
    } catch (error) {
      return false;
    }
}

export const getObjectsById = async (id)=>{
  let jwt = Cookies.get("jwt")
  let url = API_URL+'objects/owned-by?ownerId='+id
  
  //console.log("sending jwt "+jwt)
  const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization':'Bearer '+jwt,
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      //console.log(Object.keys(myJson))
/*       if(typeof myJson.authenticated !== 'undefined')
        return myJson.authenticated */
      
        return myJson

    } catch (error) {
      return false;
    }
}

export const addProduct = async (id,title,author,description,category,price)=>{
  let jwt = Cookies.get("jwt")
  let url = API_URL+'objects?ownerId='+id
  let reqBody = '{"title":"'+title+'","author":"'+author+'","description":"'+description+'","category":"'+category+'","price":'+parseInt(price)+'}';
  console.log(reqBody)
  const response = await fetch(url, {
      method: 'POST',
      body: reqBody, // string or object
      headers: {
        "Content-Type":'application/json',
        'Authorization':'Bearer '+jwt,
  
      }
    })

    try {
      const myJson = await response.json(); //extract JSON from the http response
      //console.log(Object.keys(myJson))
      if(typeof myJson.id !== 'undefined')
        return true
      else
        return false
        
    } catch (error) {
      return false;
    }
}

export const getAllProducts = async ()=>{
    let reqBody = '';
    const response = await fetch('https://my-json-server.typicode.com/MercierLucas/demo_git/products', {
        method: 'POST',
        body: reqBody, // string or object
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
      return myJson;//console.log(myJson);
}


export const getAllMessages = async ()=>{
  let reqBody = '';
  const response = await fetch('http://my-json-server.typicode.com/MercierLucas/demo_git/messages', {
      method: 'POST',
      body: reqBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    return myJson;//console.log(myJson);
}