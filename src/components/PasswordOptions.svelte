<script>
    import CheckBox from './CheckBox.svelte';
    import { createEventDispatcher } from 'svelte';
    
    export let options = {
        uppercase: true,
        lowercase: true,
        symbols: false,
        numbers: true,
        readable: false,
    };

    const dispatch = createEventDispatcher();
    const dispatchChange = () => dispatch('change', options);
</script>

<style>
    .check-row {
        display: flex;
    }
    .check-row div {
        width: 50%;
    }
</style>

<div>
    <b class="label text-white">Options</b>
    <div class="check-row">
        <div>
            <CheckBox bind:checked={options.uppercase} on:change={dispatchChange} label="Use uppercase"></CheckBox>
        </div>
        <div>
            <CheckBox bind:checked={options.symbols} on:change={dispatchChange} label="Use symbols"></CheckBox>
        </div>
    </div>
    <div class="check-row">
        <div>
            <CheckBox bind:checked={options.lowercase} on:change={dispatchChange} label="Use lowercase"></CheckBox>
        </div>
        <div>
            <CheckBox bind:checked={options.numbers} on:change={dispatchChange} label="Use numbers"></CheckBox>
        </div>
    </div>
    <div class="check-row">
        <div>
            <CheckBox disabled={true} bind:checked={options.readable} on:change={dispatchChange} label="Readable"></CheckBox>
        </div>
        <div></div>
    </div>
</div>