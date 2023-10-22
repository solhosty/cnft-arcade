<script lang="ts">
    import { onMount } from "svelte";
	import type { LayoutData } from "./$types";
	import { getAsset } from "$lib/api/solana/getAsset";
	import { walletStore } from "@svelte-on-solana/wallet-adapter-core";
	import { goto } from "$app/navigation";
    export let data: LayoutData;
    let nft;
    let iframeUrl = "";

    onMount(async () => {
        // Assuming you have a function `getNFTById` that fetches an NFT by its ID.
        nft = await getAsset(data.props.id);
        iframeUrl = nft.content.files[1].uri;
    });

</script>

{#if iframeUrl}
<h1 class="text-white text-center text-2xl pt-4 md:pt-20 lg:pt-10"> {nft.content.metadata.name}</h1>
    <div class="flex justify-center my-2 h-screen bg-black">
        {#if nft.content.metadata.name === "Whack A Minion"}
        <iframe 
            class="rounded-xl" 
            src={"https://games.hostynft.repl.co/wam/test/"} 
            frameborder="0" 
            title="Game"
            width="400"
            height="620"
            allowfullscreen
        ></iframe>
        {:else}
        <iframe 
        class="rounded-xl" 
        src={iframeUrl} 
        frameborder="0" 
        title="Game"
        width="400"
        height="620"
        allowfullscreen
    ></iframe>
        {/if}
    </div>
{:else}
    <h2 class="mt-16 text-center">Loading game...</h2>
{/if}
