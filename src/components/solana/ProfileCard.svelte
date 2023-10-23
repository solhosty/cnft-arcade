<script>
	// @ts-nocheck
	import { createQuery } from '@tanstack/svelte-query';
	import { getNFTs } from '$lib/api/solana/getNFTs.ts';
	import '../../app.css';


	const nftsQuery = createQuery({
		queryKey: ['nfts'],
		queryFn: getNFTs
	});
</script>

<body class="">
	{#if $nftsQuery.isLoading}
	<span class="loading loading-dots loading-lg m-auto flex justify-center pt-20 mt-20"></span>
	{:else if $nftsQuery.isError}
		<h2 class="loading loading-dots loading-lg m-auto flex justify-center pt-20 mt-20 ">Error fetching NFTs, please refresh and make sure a wallet is connected that has Minions.</h2>
	{:else}
	<div class="justify-center my-6 mb-2 grid grid-cols-1 lg:grid-cols-3 w-9/12 lg:w-7/12 md:w-7/12 m-auto gap-2 ">
		{#each $nftsQuery.data as nft}
		<div class="card border-2 border-white rounded-xl my-2 border-opacity-25 hover:border-opacity-100 w-full md:w-52 lg:w-64 bg-base-100 image-full overflow-hidden">
			<figure class="box-border"><img class="w-full opacity-60 object-cover box-border" src={nft.metadata.image} alt={nft.nft.content.metadata.name} /></figure>
			<div class="card-body flex flex-col h-full">
				<h2 class="card-title text-white text-base mb-4">{nft.metadata.name}</h2>
				<div class="flex-grow overflow-y-auto max-h-24 w-48 overflow-x-hidden mb-4"> <!-- Added max-h-40 -->
					<p class="text-white">{nft.metadata.description}</p>
				</div>
				<div class="card-actions w-full">
					<a href='/play/{nft.nft.id}' class="w-full">
						<button class="btn w-full border-2 border-opacity-25 hover:border-opacity-100 rounded-lg"> Play </button>
					</a>
		       </div>
			</div>
		</div>
		{/each}
	</div>
	{/if}
	</body>
	
