import React, { useState, useEffect } from 'react'
import { FlexDiv } from "../../assets/styles/utils";
import { List, ListItem } from "./styles";
import file from "../../assets/images/file.svg";

const Results = ({ list }) => {
	const [ filteredList, setFilteredList ] = useState({})

	const groupItems = (items) => {
		const uniqs = items.reduce((acc, val) => {
			acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
			return acc;
		}, {});
		setFilteredList(uniqs)
	}

	useEffect(() => {
		list.length > 0 && groupItems(list)
	}, [list]);

	return (
		<List>
			{ Object.keys(filteredList).length > 0 &&
				Object.keys(filteredList).map((key, index) => (
						<ListItem key={index}>
							<FlexDiv>
								<img src={file} width={50} height={40} alt="Buscar" />
								<div>{key}</div>
							</FlexDiv>
							<div>{filteredList[key]}</div>
						</ListItem>
					)
				)
			 }
		</List>
	)
}

export default Results
