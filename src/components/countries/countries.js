import axios from "axios";
import { useEffect, useState } from "react";

const CountryData = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountryData, setSelectedCountryData] = useState({});
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response, "response");
        const result = getNames(response.data);
        console.log(result, "result");
        setCountries(result);
    };

    const getNames = (data) => {
        return data.map(country => country.name.official);
    };

    const fetchSelectedCountry = async (countryName) => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        console.log(response, "selected country response");
        setSelectedCountryData(response.data[0]);
        setSelectedCountry(countryName);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchSelectedCountry(searchInput);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSearchSubmit} className="search-top">
                    <input
                        type="text"
                        placeholder="Search here..."
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <h2>{selectedCountry}</h2>
            {Object.keys(selectedCountryData).length > 0 && (
                <>
                    <img src={selectedCountryData.flags.png} alt={`${selectedCountry} flag`} />
                </>
            )}
        </>
    );
};

export default CountryData;









































































// import axios from "axios";
// import { useEffect, useState } from "react";

// const CountryData = () => {
//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const [selectedCountryData, setSelectedCountryData] = useState({});
//     const [searchInput, setSearchInput] = useState("");

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//             const response = await axios.get("https://restcountries.com/v3.1/all");
//             console.log(response, "response");
//             const result = getNames(response.data);
//             console.log(result, "result");
//             setCountries(result);
//     };

//     const getNames = (data) => {
//         return data.map(country => country.name.official);
//     };

//     const selectedCountryHandler = (event) => {
//         setSelectedCountry(event.target.value);
//         fetchSelectedCountry(event.target.value);
//     };

//     const fetchSelectedCountry = async (countryName) => {
//             const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
//             console.log(response, "selected country response");
//             setSelectedCountryData(response.data[0]);
//     };

//     const handleSearchInputChange = (event) => {
//         setSearchInput(event.target.value);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         fetchSelectedCountry(searchInput);
//     };

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSearchSubmit} className="search-top">
//                     <input
//                         type="text"
//                         placeholder="Search here..."
//                         value={searchInput}
//                         onChange={handleSearchInputChange}
//                     />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>

//             {/* <h1>Country API</h1> */}
//             {/* <select value={selectedCountry} onChange={selectedCountryHandler}>
//                 {countries.map((eachCountry, index) => (
//                     <option key={index} value={eachCountry}>{eachCountry}</option>
//                 ))}
//             </select> */}
//             <h2>{selectedCountry}</h2>
//             {Object.keys(selectedCountryData).length > 0 && (
//                 <>
//                     {/* <h2>Capital City: {selectedCountryData.capital && selectedCountryData.capital[0]}</h2>
//                     <h5>Country Flag: {selectedCountryData.flag}</h5> */}
//                     <img src={selectedCountryData.flags.png} alt={`${selectedCountry} flag`} />
//                 </>
//             )}
//         </>
//     );
// };

// export default CountryData;
