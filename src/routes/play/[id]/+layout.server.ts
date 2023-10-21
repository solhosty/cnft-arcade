/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
		const nftId = params.id;
		return { props: { id: nftId } };
	};
	