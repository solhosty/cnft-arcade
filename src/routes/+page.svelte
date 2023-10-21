<script>
	import { walletStore as walletStore$ } from '@svelte-on-solana/wallet-adapter-core';
	import Choice from "../components/Choice.svelte";
	import Wallet from "../components/solana/Wallet.svelte";

</script>

	<div class="w-full">
		<img src="/minion.png" class="w-48 pt-10 m-auto" alt=""/>
		{#if !$walletStore$?.connected}
		<div>
			<h1 class="text-center text-white my-4"> Connect wallet to start playing. </h1>
			<Wallet/>
		</div>
		{:else if $walletStore$?.connected}
			<div class="mins w-full h-full mt-0 pt-0">
			<Choice/>
			</div>
		{/if}
     </div>
