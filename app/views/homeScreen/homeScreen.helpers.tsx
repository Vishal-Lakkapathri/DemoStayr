import resultsType from "./homeScreen.types";

export const transformResults = (results: Array<resultsType>) =>
	results.map((result: resultsType, index: number) => {
		return {
			...result,
			id: index + 1,
			title: result.name,
		};
	});
