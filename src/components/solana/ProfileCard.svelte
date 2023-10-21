<script>
	// @ts-nocheck
	import { createQuery } from '@tanstack/svelte-query';
	import { getNFTs } from '$lib/api/solana/getNFTs.ts';
	import { fly } from 'svelte/transition';
	import '../../app.css';
	import { lazyLoad } from './lazyLoad.ts';
	import { fade } from 'svelte/transition';

	const nftsQuery = createQuery({
		queryKey: ['nfts'],
		queryFn: getNFTs
	});
</script>

<body class="bg-black">
	{#if $nftsQuery.isLoading}
	<span class="loading loading-dots loading-lg m-auto flex justify-center pt-20 mt-20"></span>
	{:else if $nftsQuery.isError}
		<h2 class="loading loading-dots loading-lg m-auto flex justify-center pt-20 mt-20 text-white">Error fetching NFTs, please refresh and make sure a wallet is connected that has Minions.</h2>
	{:else}
	<div class="nft-container my-6 flex flex-wrap justify-center pb-10 w-4/5 md:w-3/5 lg:w-3/5 mx-auto bg-black">
		{#each $nftsQuery.data as nft}
			<div transition:fly class="border-2 border-opacity-25 border-white hover:border-opacity-100 nft w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col justify-center items-center bg-black p-2 mt-3 mx-0.5">
				<a href={`/play/${nft.nft.id}`} class="w-full h-full">
					<img
							use:lazyLoad
							transition:fade
							class="min-img w-full object-cover"
							data-src={nft.metadata.image}
							alt={nft.metadata.name}
						/>
	
						<div class="nft-info text-white">
							<h2 class="min-name mt-2 text-xl text-center text-white opacity-100 font-bold">
								{nft.metadata.name}
							</h2>
						</div>
				</a>
			</div>
		{/each}
	</div>
	{/if}
	</body>
	
	<style>
		.min-img {
			opacity: 1;
			transition: opacity 1s;
		}
	
		.min-name {
			text-decoration: none;
			text-shadow: 0.2px black;
		}
	
		.nft {
			border-radius: 10px;
			display: flex;
			flex-direction: column; /* ensure that content flows vertically */
			box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
			transition: transform 0.2s ease-in-out;
			/* height: 300px;  You can uncomment this if you want a fixed height for the cards */
		}
		.nft:hover {
			transform: translateY(-2px);
		}
	
		.nft img {
			border-radius: 10px;
			height: auto; /* adjust this to ensure image doesn't stretch or compress */
			max-height: 70%; /* this will ensure the image doesn't take more than 70% of the card's height */
			width: 100%;
		}
	</style>
