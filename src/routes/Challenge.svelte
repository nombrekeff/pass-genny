<script>
import { onMount } from 'svelte';

onMount(() => {
    VanillaTilt.init(document.querySelectorAll(".cta"));
});

</script>

<style>
    .challenge {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        perspective: 300px;
    }

    .title {
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 52px;
        letter-spacing: 0.085em;
        text-align: center;
        color: white;
        margin: 0 0 64px 0;
    }
    .title b {
        font-family: Montserrat;
        font-size: 64px;
        font-style: normal;
        font-weight: 800;
        line-height: 69px;
        letter-spacing: 0.085em;
        text-align: center;
    }

    .heading {
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 32px;
        letter-spacing: 0.14em;
        text-align: center;
        color: white;
        margin: 0 0 128px 0;
    }

    .cta {
        opacity: 0.8;
        background: rgb(40 44 74);
        color: white;
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
    <h4 class="title">
        Welcome to <br>
        <b>PASS GENNY</b>
    </h4>

    <p class="heading">
        Password generator, result of one of my <br> <b>monthly design/dev challenges</b>
    </p>
 
    <button class="cta" data-tilt data-tilt-glare data-tilt-max-glare="0.2" data-tilt-max="10">
        <span>TRY <b>THE GENNY</b></span>
    </button>
</div>