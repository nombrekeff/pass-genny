<script>

import IconButton from './IconButton.svelte';

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

        background: none;
        border: none;
        color: white;
        padding: 16px 8px;
    }

    .input-password-actions{
        display: flex;
    }
</style>

<div>
    <b class="label text-white">Generated Password</b>
    <div class="input-password-wrapper">
        <input class="input-password" type="text" readonly value="ptfG_*anBRt">
        <div class="input-password-actions">
            <IconButton icon="refresh"/>
            <IconButton icon="content_copy"/>
        </div>
    </div>
</div>