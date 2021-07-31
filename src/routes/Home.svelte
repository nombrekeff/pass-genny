<script>
import LengthSlider from '../components/LengthSlider.svelte';
import PasswordInput from '../components/PasswordInput.svelte';
import PasswordOptions from '../components/PasswordOptions.svelte';


function lengthChanged(evt) {}


</script>

<style>
    .home {
        width: 100%;
        height: 100%;
    }
</style>

<div class="home">
   <div >
        <PasswordInput></PasswordInput>
   </div>

   <div style="padding-top: 60px">
        <LengthSlider on:change="{lengthChanged}"/>
    </div>

    <div style="padding-top: 60px">
        <PasswordOptions on:change={(options) => {
            console.log('Options changed', options.detail);
        }}/>
   </div>
</div>