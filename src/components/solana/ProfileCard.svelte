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
<div class="nft-container flex flex-wrap justify-center pb-10 w-3/5 mx-auto pt-10 min-h-screen bg-black">
    {#each $nftsQuery.data as nft}
        <div transition:fly class="border-2 border-opacity-25 border-white hover:border-opacity-100 nft w-1/4 md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center bg-black p-2 mt-3 mx-1">
				<img
					use:lazyLoad
					transition:fade
					class="min-img w-full object-cover"
					data-src={nft.metadata.image}
					alt={nft.metadata.name}
				/>

				<div class="nft-info text-white">
					<h2 class="min-name mt-2 text-base text-center text-white opacity-100 font-bold">
						{nft.metadata.name}
					</h2>
				</div>
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
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
		transition: transform 0.2s ease-in-out;
	}
	.nft:hover {
		transform: translateY(-2px);
	}

	.nft img {
		border-radius: 10px;
		height: 100%;
		width: 100%;
	}
</style>
