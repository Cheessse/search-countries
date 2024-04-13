import { Container, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';
import { Loader } from '../components/Loader/Loader';
import { CountryList } from 'components';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const countryData = await getCountries();
        setCountries(countryData);
        console.log(countryData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>Error</p>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
