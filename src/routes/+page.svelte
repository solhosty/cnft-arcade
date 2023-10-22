<script>
	import { walletStore as walletStore$ } from '@svelte-on-solana/wallet-adapter-core';
	import Choice from "../components/Choice.svelte";
	import Wallet from "../components/solana/Wallet.svelte";

</script>
<svelte:head> <title>cNFT Arcade</title> </svelte:head>

	<div class="w-full h-100 bg-black overflow-hidden">
		<img src="/minion.png" class="w-48 pt-10 m-auto" alt=""/>
		{#if !$walletStore$?.connected}
		<div>
			<h1 class="text-center text-white my-4 pt-8"> Connect wallet to start playing. </h1>
			<Wallet/>
		</div>
		{:else if $walletStore$?.connected}
			<div class="mins w-full h-full mt-0 mb-10 pt-0 pb-15">
			<Choice/>
			</div>
		{/if}
     </div>
