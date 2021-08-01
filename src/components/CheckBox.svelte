<script>
    import { createEventDispatcher } from 'svelte';

    export let label = '';
    export let checked = false;
    export let disabled = false;


    const dispatch = createEventDispatcher();

    function buttonClicked() {
        checked = !checked;
        dispatch('change', checked);
    }
</script>

<style>
    .checkbox-button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: white;
        padding: 24px 0;
        font-weight: normal;
        opacity: 0.6;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }

    .checkbox-button:hover {
        opacity: 0.8;
    }

    .checkbox-button .material-icons {
        margin-right: 16px;
    }

    .checkbox-button.checked {
        font-weight: bold;
        opacity: 1;
    }
</style>

<div>
    <button class="checkbox-button" disabled={disabled} class:checked={checked} on:click={buttonClicked}>
        <span class="material-icons">
            {checked ? 'check_box' : 'check_box_outline_blank'}
        </span>

        <span>
            {label}
        </span>
    </button>
</div>