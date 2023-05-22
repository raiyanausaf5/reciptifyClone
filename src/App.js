import { useState, useEffect } from 'react';
import axios from 'axios';

const CLIENT_ID = "b1d038f87be141efa43989f7368d8c4f";
const SPOTIFY_AUHTORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3003/";
const RESPONSE_TYPE = "token";
const WEB_API_ENDPOINT = "https://api.spotify.com/v1";
const PLAYLIST_ID = "0a3SuzfZFOZANzFbHmxcAb";

function App() {
  
  const getPlaylist = async (e) => {
    let token = window.localStorage.getItem("token")
    console.log(token)
    const {data} = await axios.get(`${WEB_API_ENDPOINT}/playlists/${PLAYLIST_ID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
          limit: 50,
        }
    })
    return data.name
  }

  function handleLogin() {
    window.location = `${SPOTIFY_AUHTORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&response_type=${RESPONSE_TYPE}`
    const hash = window.location.hash
    console.log(hash)
    let token = window.localStorage.getItem("token")
  
    if (hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.localStorage.setItem("token", token)
    }
  }
  
  return ( 
    <>
    <button onClick={handleLogin}>log in with spotify</button>
    <button onClick={getPlaylist}>get playlist</button>
    </>
      
  );
}
export default App;
