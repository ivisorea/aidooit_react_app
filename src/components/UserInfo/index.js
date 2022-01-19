import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Toolbar/styles';

export const UserInfo = () => {

const onSubmit = data => {
    console.log(data);
};

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <>
       <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div class="form-floating">
                    <input
                    type="text"
                    className={
                        errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="First name"
                    {...register("first_name", { required: true })}
                    />
                    <label for="floatingInput">First name</label>
                    {errors.email && <div>First name is required</div>}
                    <br />
                <div class="form-floating mb-3">
                    <input
                    type="text"
                    className={
                        errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="Last name"
                    {...register("last_name", { required: true})}
                    />
                    <label for="floatingInput">Last name</label>
                    {errors.email && <div>Last name is required</div>}
                    <br />
                    <hr />
                    <span>Address</span>
                <div class="form-floating">
                    <input
                    type="text"
                    className={
                        errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="Street"
                    {...register("street", { required: false })}
                    />
                    <label for="floatingInput">Street</label>
                    {errors.street && <div>Street is required</div>}

                    <br />

                <div class="form-floating">
                <input
                    type="text"
                    className={
                    errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="House number"
                    {...register("hause_number", { required: false })}
                />
                <label for="floatingInput">House number</label>
                {errors.password && <div>Password is required</div>}
                <br/>
                <div class="form-floating">
                <input
                    type="text"
                    className={
                    errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="City"
                    {...register("city", { required: false })}
                />
                <label for="floatingInput">City</label>
                {errors.city && <div>City is required</div>}
                <br/>
                <div class="form-floating">
                <input
                    type="text"
                    className={
                    errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="Zip-Code"
                    {...register("zip_code", { required: false })}
                />
                <label for="floatingInput">Zip-Code</label>
                {errors.city && <div>Zip-Code</div>}
                <br/>
                <div class="form-floating">
                <input
                    type="text"
                    className={
                    errors.name ? "form-control is invalid" : "form-control"
                    }
                    placeholder="Country"
                    {...register("country", { required: false })}
                />
                <label for="floatingInput">Country</label>
                {errors.ccountry && <div>Country is required</div>}
                <br/>
                <div className='register-button'>' 

                <Button 
                    // onClick={} 
                    className="btn rounded-pill"> 
                    <p>Save</p> 
                </Button>
        </div>
            
        <div className="login-text">
            <h5>Already have an account? Log In</h5>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</form> 
    </>
  )
  
};
