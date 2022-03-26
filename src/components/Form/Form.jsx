import React, { useState } from 'react'
import { FlexDiv } from "../../assets/styles/utils";
import { Input, InputContainer, Submit } from "./styles"
import search from "../../assets/images/search.svg";
import loader from "../../assets/images/loader.svg";
import { useAxios } from "../../hooks/useAxios";

const Form = ({  setResults }) => {

	// https://api.github.com/repos/argoproj/argo-site
	// https://api.github.com/repos/lele589/expedicion-norte
	const [inputValue, setInputValue] = useState('https://api.github.com/repos/lele589/expedicion-norte');
	const { getRepoData, loading } = useAxios();

	const handleOnChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		getRepoData(inputValue).then(results => setResults(results))
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputContainer>
				<FlexDiv flexDirection="column" justifyContent="flex-start">
					<Input value={inputValue} onChange={handleOnChange} placeholder="https://api.github.com/repos/[USER]/[REPO]"/>
				</FlexDiv>
				<Submit>
					{ loading ? (
						<img src={loader} width={21} height={21} alt="Cargando" />
					) : (
						<img src={search} width={21} height={21} alt="Buscar" />
					)}
				</Submit>
			</InputContainer>
		</form>
	)
}

export default Form
