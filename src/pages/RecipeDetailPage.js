import { Container, CardGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { IngredientsList } from '../components/IngredientsList';
import { RecipeDetailCard } from '../components/RecipeDetailCard';


export function RecipeDetailPage() {
  const [recipe, setRecipe] = useState({});
  const { slug } = useParams();
  //setting Date variable apperaing in Local Date format
  const lastModifiedDate = new Date(
    recipe.lastModifiedDate,
  ).toLocaleDateString();

  //getting data from api to recipe
  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  }, [slug]);

  const id = recipe._id


  return (
    <Container>
      <div> <h1>{recipe.title}</h1>
        <button onClick={() => api.delete(`/recipes/${id}`).then(alert('recept smazán'))} >smazat</button>
        <button>upravit</button> </div>
      <CardGroup>
        <RecipeDetailCard preparationTime={recipe.preparationTime} servingCount={recipe.servingCount} directions={recipe.directions} lastModifiedDate={lastModifiedDate} sideDish={recipe.sideDish} />
        <IngredientsList ingredients={recipe.ingredients} />
      </CardGroup>
    </Container>
  );
}
