import axios from "axios";

import { transformResults } from './homeScreen.helpers'

const endpointURL = "https://swapi.dev";

export const getCharactersService = async () => {
	try {
		const { data } = await axios.get(`${endpointURL}/api/people/`);
    const transformedResults = transformResults(data?.results)
		return transformedResults;
	} catch (error) {
		return error;
	}
};
