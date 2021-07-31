
<script>
import { onMount} from 'svelte';
import { createEventDispatcher } from 'svelte';

export let valPercent = 0;

const dispatch = createEventDispatcher();


onMount(() =>{
    const mySlider = document.getElementById("my-slider");
    const sliderValue = document.getElementById("slider-value");

    function slider() {
        valPercent = (mySlider.value / mySlider.max) * 100;
        mySlider.style.background = `linear-gradient(to right, #fff ${valPercent}%, rgba(255,255,255,0.5) ${valPercent}%)`;
        sliderValue.textContent = mySlider.value;
        sliderValue.style.left = `${valPercent}%`;

        dispatch('change', mySlider.value);
    }

    slider(); 

    mySlider.addEventListener('input', ()=> {
        slider();
    });
});
</script>

<div>
    <b class="label text-white">Length: <span id="slider-value">0</span></b>
    <div class="container">
        <input type="range" id="my-slider" min="0" max="64" value="12">
        <span class="range-start">
            0
        </span>

        <span class="range-end">
            64
        </span>
    </div>
</div>

<style>
    .container{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 30px 0;
        margin-top: 16px;
        position: relative;
    }
    input[type="range"]{
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 8px;
        outline: none;
    }
    input[type="range"]::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        height: 8px;
    }
    input[type="range"]::-moz-track{
        -moz-appearance: none;
        height: 8px;
    }
    input[type="range"]::-ms-track{
        appearance: none;
        height: 8px;
    }
    input[type="range"]::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
        border: none;
    }
    input[type="range"]::-moz-range-thumb{
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
        border: none;
    }
    input[type="range"]::-ms-thumb{
        appearance: none;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
        border: none;
    }
    input[type="range"]:active::-webkit-slider-thumb{
        background-color: var(--col-primary);
        border: 1px solid white;
    }
    #slider-value{
        color: white;
        text-align: center;
        border-radius: 5px;
        font-weight: normal;
    }
    .range-start, .range-end {
        position: absolute;
        bottom: 0;
        color: white;
        font-size: 12px;
    }

    .range-start {
        left: 0;
    }

    .range-end {
        right: 0;
    }
</style>
