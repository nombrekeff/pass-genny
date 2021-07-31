<script>
import { navigate } from "svelte-routing";
</script>

<style>
    .challenge {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: start;
        flex-direction: column;
        perspective: 300px;
    }

    .title {
        color: white;
        margin: 0 0 64px 0;
        position: relative;
    }

    .title div {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0.085em;
        text-align: left;
    }

    .title::after {
        content: '';
        position: absolute;
        width: 128px;
        height: 4px;
        bottom: -32px;
        left: 0;
        background: white;
        border-radius: 3px;
    }

    .title b {
        font-family: Montserrat;
        font-size: 64px;
        font-style: normal;
        font-weight: 800;
        line-height: 69px;
        letter-spacing: 0.085em;
    }

    .heading {
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 32px;
        letter-spacing: 0.14em;
        color: white;
        margin: 0 0 128px 0;
    }

    .cta {
        background: white;
        color: var(--col-primary);
        border: none;
        height: 60px;
        width: 284px;
        border-radius: 6px;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        line-height: 22px;
        letter-spacing: 0.085em;
        text-align: center;
        cursor: pointer;
        transform: rotateX(0deg);
        transition: transform 0.3s ease;
        overflow: hidden;
    }
</style>

<div class="challenge">
    <div class="title">
        <div>DESIGN / DEV</div>
        <b>CHALLENGE #1</b>
    </div>

    <p class="heading">
        This challenge consisted in designing and coding a <b>password generator</b> in 2 days.
    </p>
 
    <button class="cta" on:click={() => navigate('/')}>
        <span>TRY <b>THE GENNY</b></span>
    </button>
</div>