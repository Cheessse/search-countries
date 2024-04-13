import { Container, CountryList, Heading, Section } from 'components';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/countryApi';
import { Loader } from 'components';
export const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (!value) return;
    setLoading(true);
    const load = async () => {
      try {
        const countryData = await fetchByRegion(value);
        setCountries(countryData);
        console.log(countryData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [value]);
  const handleSubmit = query => {
    setValue(query);
  };
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>Error</p>}
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
