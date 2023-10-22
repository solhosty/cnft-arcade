<script>
	import Wallet from "../solana/Wallet.svelte";
</script>

<div class="header-text relative w-full flex flex-col md:flex-row bg-black m-0 p-0 justify-center items-center overflow-visible">
	<div class="flex flex-col text-center mb-4 md:mb-0">
        <a href="/">
            <h1 class="text-4xl text-white mt-5">
                Minion Arcade
            </h1>
        </a>
	</div>
	<div class="md:absolute right-4 top-4 md:top-auto overflow-visible z-50"> <!-- Adjusted the positioning and added z-index -->
		<Wallet/>
	</div>
</div>

<style>
    @import '../../app.css';
</style>
