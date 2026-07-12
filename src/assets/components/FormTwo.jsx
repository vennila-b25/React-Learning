import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormTwo() {
  const [Data, setData] = useState({});
  const [isHide, setIsHide] = useState(false);
  

  const {register,handleSubmit,} = useForm();

  const submitData = (da) => {
    setData(da);
    setIsHide(true);
  };

  return (
    <div>
      <h1>Form</h1>

      {!isHide ? (
        <form onSubmit={handleSubmit(submitData)}>
          <label>Name</label>
          <br />
          <input
           
            placeholder="Enter Name"
            {...register("name")}
          />

          <br />
          <br />

          <label>Age</label>
          <br />
          <input
        
            placeholder="Enter Age"
            {...register("age")}
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Name: {Data.name}</h2>
          <h2>Age: {Data.age}</h2>
        </div>
      )}
    </div>
  );
}

export default FormTwo;