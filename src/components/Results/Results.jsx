import React from 'react'
import { FlexDiv } from "../../assets/styles/utils";
import { List, ListItem } from "./styles";
import file from "../../assets/images/file.svg";

const Results = () => {
	return (
		<List>
			<ListItem>
				<FlexDiv>
					<img src={file} width={50} height={40} alt="Buscar" />
					<div>scss</div>
				</FlexDiv>
				<div>3</div>
			</ListItem>
			<ListItem>
				<FlexDiv>
					<img src={file} width={50} height={40} alt="Buscar" />
					<div>scss</div>
				</FlexDiv>
				<div>3</div>
			</ListItem>
			<ListItem>
				<FlexDiv>
					<img src={file} width={50} height={40} alt="Buscar" />
					<div>scss</div>
				</FlexDiv>
				<div>3</div>
			</ListItem>
		</List>
	)
}

export default Results
