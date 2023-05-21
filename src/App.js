const CLIENT_ID = "b1d038f87be141efa43989f7368d8c4f";
const SPOTIFY_AUHTORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3003/";
const RESPONSE_TYPE = "token";
const WEB_API_ENDPOINT = "https://api.spotify.com";

function App() {
  function handleLogin() {
    window.location = `${SPOTIFY_AUHTORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&response_type=${RESPONSE_TYPE}`
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
  
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.localStorage.setItem("token", token)
    }
    console.log(WEB_API_ENDPOINT)
  }
  return ( 
      <button onClick={handleLogin}>log in with spotify</button>
  );
}

export default App;
