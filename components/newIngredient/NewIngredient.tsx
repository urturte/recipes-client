import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./newIngredient.module.css";
import Input from "@/components/input/Input";
import axios from "axios";

type AddDynamicInput = {
  value: any;
  onChange: Function;
};

const AddDynamicInput: React.FC<AddDynamicInput> = (value, onChange) => {
  const [val, setVal] = useState<string[]>(["Input 1"]);

  const handleAdd = () => {
    const abc = [...val, ""];
    setVal(abc);
  };

  const handleChange = (onChangeValue: any, i: number) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };

  const handleDelete = (i: number) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };

  console.log(val, "data-");
  const onClickHandler = () => {
    val.map(() =>
      axios.post("https://recipes-back-end.onrender.com/newRecipe", {
        ingredientList: val,
      })
    );
  };
  return (
    <>
      {val.map((data, i) => {
        return (
          <div key={i}>
            <input
              placeholder="Ingredient"
              value={data}
              onChange={(e: any) => handleChange(e, i)}
            />
            <Button
              text="Delete ingredient"
              onClick={() => handleDelete(i)}
            ></Button>
          </div>
        );
      })}
      <Button text="Add ingredient" onClick={() => handleAdd()}></Button>
      <Button text="Push ingredients" onClick={() => onClickHandler()}></Button>
    </>
  );
};

export default AddDynamicInput;
