import { useState } from 'react'
import './App.css';
import {
    FlexDiv,
    Title,
    Subtitle,
} from "./assets/styles/utils";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

function App() {

    const [results, setResults] = useState([]);

    return (
    <div className="app">
      <header className="title">
        <Title textAlign="center" size="big">
          Github Extension Counter
        </Title>
        <Subtitle>
            Añade la URL del repositorio que quieras analizar
        </Subtitle>
        <FlexDiv className="content" flexDirection="column" justifyContent="flex-start">
            <Form setResults={setResults} />
            <Results list={results} />
        </FlexDiv>
      </header>
    </div>
  );
}

export default App;
