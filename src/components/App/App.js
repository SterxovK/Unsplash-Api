import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Input from "./Input/Input";
import Button from "./Button/Button";
import api from "../../Api/Api";
import Card from "./Card/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("Amsterdam");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleImputChange = (value) => {
    setSearchQuery(value);
  };

  const handleRequest = () => {
    if (searchQuery !== "") {
      setIsLoading(true);
      api
        .search({
          query: searchQuery,
        })
        .then((response) => {
          console.log("response:", response);
          const cards = response.results.map((item) => {
            return {
              id: item.id,
              src: item.urls.regular,
              title: item.description,
              author: item.user.first_name,
            };
          });
          setCards(cards);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="App">
      <div className="app__content">
        <h1>{searchQuery}</h1>
        <form className="app__search" onSubmit={handleFormSubmit}>
          <Input
            placeholder={"Search free high-resolutuon photos"}
            handleChange={handleImputChange}
          />
          <Button title={"Search"} />
        </form>
        <div className="app__cards">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            cards.map((item) => {
              return <Card key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
