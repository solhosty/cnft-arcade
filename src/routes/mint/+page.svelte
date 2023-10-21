<script lang="ts">
    import { userPublicKey } from '$lib/stores';
    import { games } from '$lib/types/games';
    import Game from '../../components/games/Game.svelte';
</script>
<svelte:head> <title>Add Games</title> </svelte:head>

<div class="p-0 m-0 bg-black pt-10">
    <h1 class="text-4xl flex justify-center text-center text-white font-bold"> Available Games</h1>
    <div class="flex flex-wrap justify-center w-3/5 m-auto p-4">
        {#each games as game}
            <Game game={game} owner={$userPublicKey.toString()}  />
        {/each}
    </div>
</div>

