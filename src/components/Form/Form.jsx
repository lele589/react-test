import React from 'react'
import { FlexDiv } from "../../assets/styles/utils";
import { Input, InputContainer, Submit } from "./styles"
import search from "../../assets/images/search.svg";

const Form = () => {
	return (
		<InputContainer>
			<FlexDiv flexDirection="column" justifyContent="flex-start">
				<Input placeholder="https://api.github.com/repos/userName/repoName"/>
			</FlexDiv>
			<Submit>
				<img src={search} width={21} height={21} alt="Buscar" />
			</Submit>
		</InputContainer>
	)
}

export default Form
