<script>

import IconButton from './IconButton.svelte';
import { copyTextToClipboard } from '../lib/Utils.js';
import { createEventDispatcher, onMount } from 'svelte';

export let password = '';

let copyElement;

const dispatch = createEventDispatcher();
const onMounted = () => copyElement = document.querySelector('.input-password');
const onClick = () => copyElement.select();

onMount(onMounted);

function copy() {
    copyTextToClipboard(password);
    dispatch('copy');
}

</script>

<style>
    .input-password-wrapper {
        border-bottom: 2px solid rgba(255,255,255,0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .input-password {
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0.085em;
        width: 100%;

        background: none;
        border: none;
        color: white;
        padding: 16px 8px;
    }

    .input-password::selection {
        background-color: white;
        color: var(--col-primary);
    }

    .input-password-actions{
        display: flex;
    }
</style>

<div>
    <b class="label text-white">Generated Password</b>
    <div class="input-password-wrapper">
        <input class="input-password" id="pasword" type="text" readonly value={password} on:click={onClick}>
        <div class="input-password-actions">
            <IconButton icon="refresh" on:click={() => dispatch('refresh')}/>
            <IconButton icon="content_copy" id="copy" on:click={copy}/>
        </div>
    </div>
</div>