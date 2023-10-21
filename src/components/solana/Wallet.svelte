<script lang="ts">
	//@ts-nocheck
	import { walletStore as walletStore$ } from '@svelte-on-solana/wallet-adapter-core';
	import { onMount } from 'svelte';
	import {
		WalletMultiButton,
		WalletProvider,
		ConnectionProvider
	} from '@svelte-on-solana/wallet-adapter-ui';
	import {
		PhantomWalletAdapter,
		SolflareWalletAdapter,
		LedgerWalletAdapter,
		UnsafeBurnerWalletAdapter,

	} from '@solana/wallet-adapter-wallets';
	import '../../app.css';
	import { userPublicKey } from '$lib/stores';
	import { get } from 'svelte/store';


	const userWallet = get(userPublicKey);
	let wallets: (PhantomWalletAdapter | SolflareWalletAdapter | LedgerWalletAdapter | UnsafeBurnerWalletAdapter)[];
	const localStorageKey = 'solWalletAdapter';
	onMount(async () => {
		wallets = [
			new PhantomWalletAdapter(),
			new SolflareWalletAdapter(),
			new UnsafeBurnerWalletAdapter()
		];
	});
	$: {
		if ($walletStore$?.connected) {
			console.log('Wallet Connected.');
			userPublicKey.set($walletStore$.publicKey);
		} else {
			console.log('Wallet Not Connected.');
			userPublicKey.set('');
		}
	}

	const { VITE_PUBLIC_API_KEY } = import.meta.env
	const network =
		`https://rpc.helius.xyz/?api-key=${VITE_PUBLIC_API_KEY}`;
</script>

<WalletProvider {localStorageKey} {wallets} autoConnect />
			<ConnectionProvider {network} />
			<WalletMultiButton>
				<h2>Connect</h2>
			</WalletMultiButton>


            <style>

                :global(.wallet-adapter-button-trigger) {
                    background-color: rgba(0, 0, 0, 0.3);
                    font-family: 'proxima-nova-condensed', sans-serif;
                    margin: auto;
                    border-radius: 10px;
                    justify-content: center;
                    position: relative;
                    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
                }
            
            </style>