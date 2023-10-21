// @ts-nocheck
import { userPublicKey } from '../../stores';
import { get } from 'svelte/store';
import type { RequestInfo } from 'undici-types';

const { VITE_PUBLIC_API_KEY } = import.meta.env

const getNFTs = async () => {
	const publicKey = get(userPublicKey);
	const data = await fetch(`https://rpc.helius.xyz/?api-key=${VITE_PUBLIC_API_KEY}`, { 
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			jsonrpc: '2.0',
			id: '1',
			method: 'getAssetsByOwner',
			params: {
				"ownerAddress": `${publicKey}`,
				"page": 1,
				"limit": 1000
			},
	})
})
const r = await data.json()
const myNfts = await r.result.items;
const nfts = await Promise.all(
	myNfts.map(async (nft: { content: { json_uri: RequestInfo; }; grouping: { group_value: string; }; }) => {
		try {
			const response = await fetch(nft.content.json_uri);
			const metadata = await response.json();
			if (metadata.name && metadata.image && nft.grouping[0].group_value === "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG") {
				return {
					nft,
					metadata
				};
			} else {
				return null;
			}
		} catch (error) {}
	})
).then((nfts) => nfts.filter((nft) => nft));

return nfts;
};

export { getNFTs };
