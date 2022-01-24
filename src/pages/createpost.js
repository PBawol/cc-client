import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function CreatePOST() {

    let navigate = useNavigate();

    const initialValues = {
        title: "",
        postText: "",
        username: ""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().max(100, "Tytuł może posiadać maksymalnie 100 znaków, proszę, zmień tekst!"),
        postText: Yup.string().required().max(100, "Maksymalnie można wpisać 100 znaków, jeśli chcesz dodać więcej, zrób to za pomocą pliku w następnym oknie"),
        username: Yup.string().min(3, "Nick musi posiadać 3 lub więcej znaków!").max(20, "Twój nick nie może być dłuższy niż 25 znaków!").required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/post", data).then((response) => {
      navigate(`/`);
    });
};



    return (
        <div className='createPostPage'>
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}
            >
                <Form className='formContainer'>
                    
                    <label>Tytuł: </label>
                    <ErrorMessage name="title" component="span" /> 
                    <Field id="inputCreatePost" name="title" placeholder="(ex. Tytuł)" autocomplete="off"/>
                    
                    <label>Wpis: </label> 
                    <ErrorMessage name="postText" component="span" /> 
                    <Field id="inputCreatePost" name="postText" placeholder="(ex. Zrobimy zajebisty projekt)" autocomplete="off"/>
                    
                    <label>Twój nick: </label>
                    <ErrorMessage name="username" component="span" /> 
                    <Field id="inputCreatePost" name="username" placeholder="(ex. Miłosz)" autocomplete="off"/>
                    
                    <button type="submit">Dodaj wpis!</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePOST;


