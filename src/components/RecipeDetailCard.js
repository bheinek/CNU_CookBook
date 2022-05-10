import { Card, CardImg, CardBody, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import placeholder from '../images/food-placeholder.png';

export function RecipeDetailCard({ preparationTime, servingCount, directions, lastModifiedDate, sideDish }) {
    return (

        <Card >
            <CardImg src={placeholder} />
            <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> Délka přípravy: {preparationTime} min. </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Počet porcí: {servingCount}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Příloha: {sideDish}</CardSubtitle>
                <CardText>{directions}</CardText>
                <CardFooter className="mb-2 text-muted">Naposledy upraveno: {lastModifiedDate}</CardFooter>
            </CardBody>
        </Card>


    );
}