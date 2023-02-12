import React, { useState } from "react";
import styles from "./recipeForm.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import axios from "axios";
import AddDynamicInput from "../newIngredient/NewIngredient";
import TextArea from "../textArea/TextArea";

const RecipeForm: React.FC = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [prepTime, setPreptime] = useState();
  const [servings, setServings] = useState();
  const [ingredientList, setIngredientList] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    console.log(title, image, prepTime, servings, ingredientList, description);
    if (
      title &&
      image &&
      prepTime &&
      servings &&
      ingredientList &&
      description
    ) {
      const recipeInfo = {
        title: title,
        image: image,
        prepTime: prepTime,
        servings: servings,
        ingredientList: ingredientList,
        description: description,
      };

      const response = axios.post(
        "http://localhost:8080/newRecipe",
        recipeInfo
      );
      console.log("response", response);
    } else {
      alert("Fill all windows");
    }
  };

  return (
    <div className={styles.main}>
      <h1>Add a new recipe to the meniu</h1>
      <Input
        type="text"
        onChange={setTitle}
        value={title}
        placeholder="Title"
      />
      <Input
        type="text"
        onChange={setImage}
        value={image}
        placeholder="Image URL"
      />
      <Input
        type="text"
        onChange={setPreptime}
        value={prepTime}
        placeholder="Preparation Time"
      />
      <Input
        type="text"
        onChange={setServings}
        value={servings}
        placeholder="Servings"
      />
      <TextArea
        onChange={setIngredientList}
        value={ingredientList}
        placeholder="Ingredient"
      />
      {/* <AddDynamicInput onChange={setIngredientList} value={ingredientList} /> */}

      <TextArea
        onChange={setDescription}
        value={description}
        placeholder="Description"
      />
      <div className={styles.buttonWrapper}>
        <Button text="Create" onClick={() => onClickHandler()} />
      </div>
    </div>
  );
};
export default RecipeForm;
