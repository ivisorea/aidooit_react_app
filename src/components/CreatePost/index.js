import React from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./styles";
import { TextEditor } from "../TextEditor";

export const CreatePost = () => {
    
    const onSubmit = async data => {
        try {
          const { data: newPost } = await axios.post("http://localhost:4000/post", data, {
            //headers: { Authorization: localStorage.getItem('token') }
          });
          console.log(newPost);
        } catch (error) {
          console.log(error);
        }
      };

    //Here I need register the form and in the input
    const { 
        handleSubmit, 
        formState: { errors },
        control,
    } = useForm({title: '',image: '', body: ''});

   return (
     <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title' className='form-label'>
                Title:
                <input
                className={errors.title ? 'form-control is-invalid' : 'form-control'}
                //{...register('title', { required: true })}
                />
                </label>
                {errors.title && <div className='invalid-feedback'>Title is required</div>}
                <label htmlFor='image' className='form-label'>
                Image:
                <input
                className={errors.image ? 'form-control is-invalid' : 'form-control'}
                //{...register('title', { required: true })}
                />
                </label>
            </div>
            <Controller 
                control={control}
                name='body'
                rules={{ required: 'Body cannot be empty' }}
                render = { ({ field: { onChange, value } }) => 
                    <TextEditor onChange={onChange} />
                    }
                />
            
            <Button className="btn" type='submit'>Create Post</Button>
        </form>
     </>
    );
};

