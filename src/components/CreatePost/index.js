import React, {useEffect, useState} from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Button, EditorForm } from "./styles";
import { TextEditor } from "../TextEditor";

export const CreatePost = ({categories}) => {
    const [imageLocation, setImageLocation] = useState(['']);
    const [image, setImage] = useState();
    const [category, setCategory] = useState('');

    useEffect(() => {
      try {
        const getImageLocation = async () => {
          const formData = new FormData();
          formData.append('file', image, image.name);
          const { data: { location } } = await axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
            headers: { Authorization: localStorage.getItem('token') }
          });
          setImageLocation(location);
        };
        getImageLocation();
      } catch (error) {
        console.log(error);
      }
    }, [image]);
  
    const onSubmit = async data => {
        try {
          const { data: newPost } = await axios.post("https://aidooit-app.herokuapp.com/post", data, {
            headers: { Authorization: localStorage.getItem('token') }
          });
          console.log(newPost);
          //clear form
        } catch (error) {
          console.log(error);
        }
      };

      
      
    const { 
        register,
        handleSubmit, 
        setValue,
        formState: { errors },
        control,
       
    } = useForm({title: '',image: '', body: '', category: ''});

    setValue('image', imageLocation)
   return (
        <EditorForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title' className='form-label'>
                    Title:
                    <input
                    className={errors.title ? 'form-control is-invalid' : 'form-control'}
                    {...register('title', { required: true })}
                    />
                </label>
                    {errors.title && <div className='invalid-feedback'>Title is required</div>}
                <label>
                  Select your favorite Image
                    <input type='file'
                  onChange={e => setImage(e.target.files[0])}
                  />
                </label>
                <label htmlFor='image' className='form-label'>
                  Image:
                  <input 
                  className={errors.image ? 'form-control is-invalid' : 'form-control'}
                  {...register('image', { required: true })}
                  />
                </label>
                
            </div>
            <Controller 
                control={control}
                name='body'
                rules={{ required: 'Body cannot be empty' }}
                render = { ({ field: { onChange, value } }) => 
                    <TextEditor onChange={onChange}/>
                    }
                />
                <label>
                    Select Category
                <select 
                  className={errors.category ? 'form-control is-invalid' : 'form-control'}
                  {...register('category', { required: true })}
                > 
                  {categories.map(category => (
                      <option key={category.id} value={category._id}>{category.name}</option>
                  ))}

                </select>
                </label>
            
            <Button className="btn" type='submit'>Create Post</Button>
        </EditorForm>
    );
};

