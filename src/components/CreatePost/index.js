import React from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Button, EditorForm } from "./styles";
import { TextEditor } from "../TextEditor";

export const CreatePost = () => {
    
    const onSubmit = async data => {
        try {
          const { data: newPost } = await axios.post("http://localhost:4000/post", data, {
            headers: { Authorization: localStorage.getItem('token') }
          });
          console.log(newPost);
        } catch (error) {
          console.log(error);
        }
      };

    //Here I need register the form and in the input
    const { 
        register,
        handleSubmit, 
        setValue,
        formState: { errors },
        control,
    } = useForm({title: '',image: '', body: ''});


    setValue('image', 'TEST')
   return (
        <EditorForm onSubmit={handleSubmit(onSubmit)}>
            <>
                <label htmlFor='title' className='form-label'>
                Title:
                <input
                className={errors.title ? 'form-control is-invalid' : 'form-control'}
                {...register('title', { required: true })}
                />
                </label>
                {errors.title && <div className='invalid-feedback'>Title is required</div>}
                <input type='file'/>
                <label htmlFor='image' className='form-label'>
                Image:
                <input 
                className={errors.image ? 'form-control is-invalid' : 'form-control'}
                {...register('image', { required: true })}
                />
                </label>
            </>
            <Controller 
                control={control}
                name='body'
                rules={{ required: 'Body cannot be empty' }}
                render = { ({ field: { onChange, value } }) => 
                    <TextEditor onChange={onChange} />
                    }
                />
            
            <Button className="btn" type='submit'>Create Post</Button>
        </EditorForm>
    );
};

