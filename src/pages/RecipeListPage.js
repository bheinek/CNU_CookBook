import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';

import { RecipesList } from '../components/RecipesList';
import { SearchInput } from '../components/SearchInput';

import { api } from '../api';

export function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    api.get('/recipes').then((response) => setRecipes(response.data));
  }, []);

  return (
    <Container>
      <h1>Recepty</h1>
      <SearchInput value={filter} setValue={setFilter} className="mb-4" />
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
