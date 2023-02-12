import styles from "@/styles/Home.module.css";
import Recipe from "../components/recipe/Recipe";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import SearchBar from "@/components/searchBar/SearchBar";

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:8080/myRecipes");
  return {
    props: {
      recipes: response.data.recipes,
    },
  };
}

export default function Home(props: any) {
  const [recipes, setRecipes] = useState<any>(props.recipes);
  const [filter, setFilter] = useState<any>("");

  const onChangeFilterInputHander = (recipeValue: any) => {
    setFilter(recipeValue);
  };

  console.log("props.response", props.recipes);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.searchwrapper}>
        {/* <SearchBar /> */}
        <input
          placeholder="Search..."
          value={filter}
          onChange={(recipe) => onChangeFilterInputHander(recipe.target.value)}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button onClick={() => Router.push("/newRecipe")} text="Add recipe" />
      </div>
      <div className={styles.recipesWrapper}>
        {recipes.length === 0 ? (
          <div className={styles.emptyContainer}>
            There are no recipes available at the moment.
          </div>
        ) : (
          recipes
            .filter((recipe: any) => recipe.keywords.includes(filter))
            .map((recipe: any) => {
              return (
                <Recipe
                  _id={recipe._id}
                  title={recipe.title}
                  imgSrc={recipe.image}
                  prepTime={recipe.prepTime}
                />
              );
            })
        )}
      </div>
      <Footer />
    </div>
  );
}
