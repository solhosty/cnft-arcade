<script lang="ts">
    import { onMount } from "svelte";
	import type { LayoutData } from "./$types";
	import { getAsset } from "$lib/api/solana/getAsset";
    export let data: LayoutData;
    let nft;
    let iframeUrl = "";

    onMount(async () => {
    try {
        nft = await getAsset(data.props.id);
        const r = await fetch(nft.content.json_uri)
        const j = await r.json()
        const html = j.animation_url
        iframeUrl = html
    } catch (e) {
        
    }
});

</script>

{#if iframeUrl}
<h1 class=" text-center text-2xl pt-4 md:pt-20 lg:pt-10"> {nft.content.metadata.name}</h1>
    <div class="flex justify-center my-2 h-screen ">
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
        height="450"
        allowfullscreen
    ></iframe>
        {/if}
    </div>
{:else}
    <h2 class="mt-16 text-center">Loading game...</h2>
{/if}
