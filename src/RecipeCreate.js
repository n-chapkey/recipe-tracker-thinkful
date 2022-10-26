import React, { useState } from "react";

function RecipeCreate({handleCreate}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {

    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    })

  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    handleCreate({...formData});
    setFormData({...initialFormState});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input size="9" name="name" placeholder="Name" onChange={handleChange} value={formData.name}></input></td>
            <td><input size="9" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}></input></td>
            <td><input size="9" name="photo" placeholder="URL" onChange={handleChange} value={formData.photo}></input></td>
            <td><textarea size="9"name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea size="9" name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
