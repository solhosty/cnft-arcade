<script>
	import Wallet from "../solana/Wallet.svelte";
</script>

<div class="header-text relative w-full flex flex-col md:flex-row bg-black m-0 p-0 justify-center items-center">
	<div class="flex flex-col text-center mb-4 md:mb-0">
        <a href="/">
            <h1 class="text-4xl text-white mt-5">
                Minion Arcade
            </h1>
        </a>
	
	</div>
	<div class="md:absolute right-4 my-2 top-2/3 transform -translate-y-1/2">
		<Wallet/>
	</div>
</div>

<style>
    @import '../../app.css';
</style>
