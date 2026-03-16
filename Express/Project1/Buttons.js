import React from "react";

const url = "http://localhost:5001";

const call = (action, path)=>{
    fetch(`${url}`,{
        action: action,
        headers: {'Content-Type' : 'application/json'}
    }).then((res)=>{
        return res.text();
    }).then((data)=>{
        alert(`Response: ${data}`);
    })
};

function App(){
    return(
        <>
        <h1>
            Welcome to my Server Buttons...
        </h1>
        <div>
            <button onClick={()=> call('GET', '/')}>Get</button>
            <button onClick={()=> call('POST', '/user')}>Post</button>
            <button onClick={()=> call('PUT', '/update')}>Update/Put</button>
            <button onClick={()=> call('DELETE', '/delete')}>Delete</button>
        </div>
        </>
    )
}

export default App;