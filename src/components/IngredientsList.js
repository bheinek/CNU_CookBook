import { Card, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

export function IngredientsList({ ingredients }) {
  return (
    <Card body>
      <CardTitle tag="h4"> Ingredience: </CardTitle>

      {ingredients?.map((ingredient) => {
        // ? is a condition to wait for fetching the data from api
        return (
          <ListGroup flush key={ingredient._id} >
            <CardText key={ingredient._id}>
              <ListGroupItem>
                {ingredient.amount} {ingredient.amountUnit} {ingredient.name}
              </ListGroupItem>
            </CardText>
          </ListGroup>
        );
      })}
    </Card>
  );
}
