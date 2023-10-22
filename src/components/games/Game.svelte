<script lang="ts">
	import type { Game } from '$lib/types/games';
	
	export let game: Game;
	export let owner: string;
	let loading = false;
	let loaded = false;
	const mintGame = async () => {
	loading = true;
    const url = `https://proxy-livid-eta.vercel.app/api/mainnet-collection`;
    const requestData = {
        jsonrpc: '2.0',
        id: 'helius-test',
        method: 'mintCompressedNft',
        params: {
            name: game.name,
            symbol: game.symbol,
            owner: owner,
			delegate: "HuXKdwmhosykXwvGjQSSL73hBFC9m7XNijgYD5AVV65G",
            description: game.description,
            collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
            uri: game.uri,
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
		loading = false;
		loaded = true;
    } catch (error) {
    }
};

</script>

<div class="flex justify-center my-4 mx-2 mb-2">
	<div class="card nft w-72 lg:w-60 md:w-52 bg-base-100 shadow-sm image-full border-2 border-transparent shadow-white hover:border-white hover:border-2">
		<figure class="w-full box-border"><img class="w-full opacity-60 object-cover box-border" src={game.image} alt={game.name} /></figure>
		<div class="card-body flex flex-col h-full">
			<h2 class="card-title text-white text-base mb-4">{game.name}</h2>
			<div class="flex-grow overflow-y-auto max-h-24 mb-4"> <!-- Added max-h-40 -->
				<p class="text-white">{game.description}</p>
			</div>
			<div class="card-actions w-full">
				{#if loading}
				<span class="loading loading-infinity loading-lg m-auto mt-2"></span>
				{:else if loaded}
				<a href="/play" class="w-full">
				<button class="btn bg-gradient-to-r from-green-700 to-green-800 w-full text-white my-2">Play</button>
				</a>
				{:else if game.name === "TBD"}
				<button disabled class="btn bg-gradient-to-r hover:from-red-900 hover:to-red-900 from-red-600 to-red-800 w-full text-white my-2" on:click={mintGame}>Mint</button>

				{:else}
				<button class="btn bg-gradient-to-r hover:from-red-900 hover:to-red-900 from-red-600 to-red-800 w-full text-white my-2" on:click={mintGame}>Mint</button>
				{/if}
			</div>
		</div>
	</div>
</div>


<style>
	.nft {
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
		transition: transform 0.2s ease-in-out;
	}
	.nft:hover {
		transform: translateY(-2px);
	}
</style>