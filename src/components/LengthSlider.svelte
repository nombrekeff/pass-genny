
<script>
import { onMount} from 'svelte';

export let value = 12;
export let min = 2;
export let max = 64;

// Used to render a gradient up to valPercent
// this is done to highlight the left-hand side of the range slider
let valPercent = 0;

onMount(() =>{
    const mySlider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");

    function sliderChanged() {
        valPercent = (mySlider.value / max ) * 100 - min;
        mySlider.style.background = `linear-gradient(to right, #fff ${valPercent}%, rgba(255,255,255,0.5) ${valPercent}%)`;
        sliderValue.style.left = `${valPercent}%`;
    }

    sliderChanged(); 
    mySlider.addEventListener('input', sliderChanged);
});
</script>

<div>
    <b class="label text-white">Length: <span id="slider-value">{value}</span></b>
    <div class="container">
        <input type="range" id="slider" min={min} max={max} bind:value={value}>
        <span class="range-start">{min}</span>
        <span class="range-end">{max}</span>
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

    .range-start { left: 0; }
    .range-end { right: 0; }
</style>
