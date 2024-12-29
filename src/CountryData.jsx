import { useEffect, useState } from "react";

const CountryData = () => {
  const [countryCode, setCountryCode] = useState("AU");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCountryCode(e.target.value);
  };

  useEffect(() => {
    const url = `https://restcountries.com/v2/alpha/${countryCode}`;
    let ignore = false;
    const getData = async (url) => {
      setIsLoading(true);
      console.log("getDataCalled");

      try {
        const response = await fetch(url);
        let res = await response.json();

        if (ignore === false) {
          setData(res);
          setError(null);
          setIsLoading(false);
        }
      } catch (error) {
        setData(null);
        setError(error);
        setIsLoading(false);
      }

      // setTimeout(async () => {}, 3000); // put try catch insdie the time out to introduce some artificial delay
    };

    getData(url);

    return () => {
      ignore = true;
    };
  }, [countryCode]);

  return (
    <div>
      <h2>Country data</h2>
      <header>
        <h3>Country Info:</h3>

        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span>Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>
      {data && (
        <article>
          <h2>{data.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </div>
  );
};

export default CountryData;
