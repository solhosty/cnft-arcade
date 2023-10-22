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
    $: if(!$walletStore.connected) {
        goto("/")
    }
</script>

{#if iframeUrl}
<h1 class="text-white text-center text-2xl pt-4 md:pt-20 lg:pt-10"> {nft.content.metadata.name}</h1>
    <div class="flex justify-center my-2 h-screen bg-black">
        <iframe 
            class="w-11/12 md:w-2/3 lg:w-1/2 xl:w-3/6 h-full rounded-xl" 
            src={iframeUrl} 
            frameborder="0" 
            title="Game"
            allowfullscreen
        ></iframe>
    </div>
{:else}
    <h2 class="mt-16 text-center">Loading game...</h2>
{/if}
