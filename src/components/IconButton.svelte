<script>
    import { createEventDispatcher } from 'svelte';

    export let icon = '';
    export let id = '';
    export let color = 'rgba(255,255,255,0.5)';
    
    const dispatch = createEventDispatcher();

</script>

<style>
    .icon-button {
        background: none;
        border: none;
        color: rgba(255,255,255,0.5);
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .icon-button:hover,
    .icon-button:focus {
        background-color: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.8);
    }

    .icon-button:active {
        background-color: rgba(255,255,255,0.13);
        color: rgba(255,255,255, 1);
    }
</style>

<button id={id} class="icon-button" on:click={(evt) => dispatch('click', evt)} style={`color: ${color}`}>
    <span class="material-icons">
        {icon}
    </span>
</button>