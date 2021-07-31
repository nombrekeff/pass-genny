<script>
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    export let showing = false;
    let isShowing = false;

    const dispatch = createEventDispatcher();

    let closeTimeout;

    $: {
        isShowing = showing;
        clearTimeout(closeTimeout);
        
        closeTimeout = setTimeout(() => {
            isShowing = false;
            dispatch('change', isShowing);
        }, 3e3);
    } 
</script>

<style>
    .snackbar {
        width: calc(100% - 64px);
        position: absolute;
        bottom: 0;
        padding: 12px 32px;
        font-size: 14px;
        background: white;
        color: var(--col-primary);
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

{#if isShowing}
    <div class="snackbar" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
        <slot></slot>
    </div>
{/if}   