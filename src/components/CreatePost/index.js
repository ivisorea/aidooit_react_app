import React, {useEffect, useState} from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Button, EditorForm, Image, HiddenLabel, FormContainer } from "./styles";
import { TextEditor } from "../TextEditor";
import './styles.css'

export const CreatePost = ({categories}) => {
    const [imageLocation, setImageLocation] = useState('');
    const [image, setImage] = useState();
    const showImage = ('https://app-aidooit-cloud.s3.eu-central-1.amazonaws.com/file-1642347424258-287115022.png')

    useEffect(() => {
      try {
        const getImageLocation = async () => {
          const formData = new FormData();
          formData.append('file', image, image.name);
          const { data: { location } } = await axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
            headers: { Authorization: localStorage.getItem('token') }
          });
          console.log(location);
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
         reset();
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
        reset
    } = useForm({defaultValues: { title: '',image: '', body: '', category: ''}});

      

    setValue('image', imageLocation)
   return (
     
        <EditorForm onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <div class="row">
              <div class="col-sm-12">
                <label htmlFor='title' className='form-label'>
                      Title:
                      <input
                      className={errors.title ? 'form-control is-invalid' : 'form-control'}
                      {...register('title', { required: true })}
                      />
                </label>
                {errors.title && <div className='invalid-feedback'>Title is required</div>}
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <label>
                  Upload Image
                      <div>
                        <Image src={
                            imageLocation ?
                            imageLocation :
                            showImage
                          } alt=""/>
                      </div>
                      <div class="image-upload">
                        <label for="file-input">
                        </label>
                        <input type='file'
                      onChange={e => setImage(e.target.files[0])}
                      />
                      </div>
                        
                    </label>
                </div>
                
                <div>
                  <label>
                      
                    <select 
                      className={errors.category ? 'form-control is-invalid' : 'form-control border border-0 border-bottom'}
                      {...register('category', { required: true })}
                    > 
                      <option value=''>Select Category</option>
                      {categories.map(category => (
                          <option key={category.id} value={category._id}>{category.name}</option>
                      ))}

                    </select>
                  </label>
                </div>
                
              </div>
              <div class="col-sm-8">
                <Controller 
                  control={control}
                  name='body'
                  rules={{ required: 'Body cannot be empty' }}
                  render = { ({ field: { onChange, value } }) => 
                      <TextEditor onChange={onChange}/>
                      }
                  />
              </div>
            </div>
            <br/>
            <Button className="btn rounded-pill" type='submit'>Create Post</Button>
            
                <HiddenLabel htmlFor='image' className='form-label'>
                  Image:
                  <input 
                  className={errors.image ? 'form-control is-invalid' : 'form-control'}
                  {...register('image', { required: true })}
                  />
                </HiddenLabel>
          </FormContainer>
        </EditorForm>
     
    );
};

