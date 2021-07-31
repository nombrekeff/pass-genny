<script>
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    export let showing = false;

    let closeTimeout;

    $: {
        clearTimeout(closeTimeout);
        
        closeTimeout = setTimeout(() => {
            showing = false;
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

{#if showing}
    <div class="snackbar" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
        <slot></slot>
    </div>
{/if}   