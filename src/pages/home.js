import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

function Home() {
    
    const [listOfPosts, setlistOfPosts] = useState([]);
    let navigate = useNavigate();

  useEffect(() =>{
    axios.get("http://localhost:3001/post").then((response) => {
      setlistOfPosts(response.data)
    });
  
  }, []);
    
    return (
        <div>
            {listOfPosts.map((value, key) => {
         return (
         <div 
         key={key}
         className='post' 
         onClick={() => {
           navigate(`/post/${value.id}`);
          }}
        >
                <div className='title'>Tytuł: {value.title}</div>
                <div className='body'>{value.postText}</div>
                <div className='footer'>Nick: {value.username}</div>
                </div>
         );
      })}
        </div>
    )
}

export default Home;