import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/router";
import styles from "./recipe.module.css";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import KeyfordsForm from "@/components/keywordsForm/KeywordsForm";

// export async function getServerSideProps(ctx: any) {
//   const { data } = await axios.get(
//     `http://localhost:8080/recipe/${ctx.query.id}`
//   );
//   console.log("data", data);

//   return {
//     props: {
//       recipe: data,
//     },
//   };
// }

export default function RecipePage() {
  const [recipe, setRecipe] = useState<any>();
  const router = useRouter();

  console.log("id[idfaile]", router);

  const fetchRecipe = async () => {
    const response = await axios.get(
      `http://localhost:8080/recipe/${router.query._id}`
    );
    setRecipe(response.data.recipe);
    console.log(response.data.recipe);
  };

  useEffect(() => {
    if (router.query._id) {
      fetchRecipe();
    }
  }, [router.query]);

  return (
    <div>
      <Navbar />
      {recipe && (
        <div className={styles.content}>
          <h1>{recipe.title}</h1>
          <div className={styles.details}>
            <div className={styles.leftContainer}>
              <img className={styles.mainImage} src={recipe.image} />
            </div>
            <div className={styles.rightContainer}>
              <h4>Preparation time: {recipe.prepTime}</h4>
              <h4>Servings: {recipe.servings}</h4>
              <div>
                <h4>Ingredients:</h4>
                {recipe.ingredientList}
              </div>
              <div>
                <h4>Preparation description:</h4>
                {recipe.description}
              </div>
            </div>
          </div>
          <KeyfordsForm />
        </div>
      )}

      <Footer />
    </div>
  );
}
