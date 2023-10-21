import { get } from 'svelte/store';
import { userPublicKey } from '../../stores';
const { VITE_PUBLIC_API_KEY } = import.meta.env

const getBalance = async () => {
	const wallet = get(userPublicKey);
	const url = `https://api.helius.xyz/v0/addresses/${wallet}/balances?api-key=${VITE_PUBLIC_API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	const balance = data.nativeBalance / 1000000000
	return balance.toFixed(3);
};
export { getBalance };
