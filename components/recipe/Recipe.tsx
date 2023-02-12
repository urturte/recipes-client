import React from "react";
import styles from "./recipe.module.css";
import Router from "next/router";

type RecipeType = {
  title: string;
  imgSrc: string;
  prepTime: string;
  _id: string;
};

const Recipe: React.FC<RecipeType> = ({ title, imgSrc, prepTime, _id }) => {
  const onClickHandler = () => {
    Router.push(`/recipe/${_id}`);

    console.log(_id);
  };
  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} alt="recipe" src={imgSrc}></img>
      </div>

      <div className={styles.description}>
        <h2>{title}</h2>
        <h4>{prepTime}</h4>
      </div>
    </div>
  );
};
export default Recipe;
