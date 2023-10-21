<script lang="ts">
	import ProfileCard from "../../components/solana/ProfileCard.svelte";
    import type { LayoutData } from './$types';
	import { QueryClientProvider } from '@tanstack/svelte-query';

	export let data: LayoutData;

</script>
<svelte:head> <title> Play Games</title> </svelte:head>

<div class="main h-screen">
    <div class="header-text flex flex-row justify-center pt-10">
        <img src="./play.svg" alt="" class="h-12 w-12 mx-2"/> 
        <h1 class="text-center text-white text-5xl"> Play </h1>
    </div>
    <div class="body">
        <QueryClientProvider client={data.queryClient}>
        <ProfileCard/>
        </QueryClientProvider>
    </div>
</div>
