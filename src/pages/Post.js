import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { encrypt} from 'caesar-shift';
 
function Post() {

    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    var [CaesarKey, setCeaserKey] = useState("");

    let onChange = (event) => {
        var newKey = event.target.value;
        setCeaserKey(newKey);
    };

    const en = encrypt(CaesarKey, `${postObject.postText}`);

    const downloadTxtFileEN = () => {
        const element = document.createElement("a");
        const file = new Blob([`${en}`, "          ~crypted by CleaverCipher."], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "ENCrypted.txt";
        document.body.appendChild(element);
        element.click();
      };

   useEffect(() => {
            axios.get(`http://localhost:3001/post/byId/${id}`).then((response) => {
                setPostObject(response.data);
            });
}, [id]);


    return (
        <div className="postPage">
           <div className="left">
               <div className="post" id="individual">
                <div className="title">Tytul: {postObject.title}</div>
                <div className="post">Wpis: {postObject.postText}</div>
                <div className="footerPost">Nick: {postObject.username}</div>   
               </div>
            </div>
            <div className="right">
                <div className="addCommentContainer">
                <form><input type="number" onChange={onChange}></input></form>
                    
                    <br></br>Wybrałeś algorytm cezara o liczbie przesunięć:{CaesarKey}.
                <p>Tekst wprowadzony:<br></br> "{postObject.postText}"</p>
                <p>Tekst zaszyfrowany:<br></br> "{en}" </p>
                <p><button onClick={downloadTxtFileEN}>Pobierz zaszyfrowany plik</button></p>
                </div>
            </div>
        </div>  
    )
}
export default Post;
