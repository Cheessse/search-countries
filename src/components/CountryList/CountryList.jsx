import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid.jsx';
import { GridItem } from '../GridItem/GridItem.jsx';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
