<script>
import LengthSlider from '../components/LengthSlider.svelte';
import PasswordInput from '../components/PasswordInput.svelte';
import PasswordOptions from '../components/PasswordOptions.svelte';
import { PasswordGenerator } from '../lib/PasswordGenerator.js';
import IconButton from '../components/IconButton.svelte';
import SnackBar from '../components/SnackBar.svelte';

export let pg = new PasswordGenerator();

let password;
let hasCopied;
let passwordCopied;

const generatePassword = () => password = pg.generate();
const onCopy = (evt) => {
    hasCopied = true;
    passwordCopied = password;
};

$: password = pg.generate();
</script>

<style>
    .home {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>

<div class="home">
   <div>
        <PasswordInput 
            on:refresh={generatePassword}
            on:copy={onCopy}
            password={password} />
   </div>

   <div style="padding-top: 60px">
        <LengthSlider bind:value={pg.options.length} />
    </div>

    <div style="padding-top: 60px">
        <PasswordOptions bind:options={pg.options} />
   </div>

    <SnackBar showing={hasCopied} on:change={(evt) => hasCopied = evt.detail}>
        <span>Copied to clipboard: <b>{passwordCopied}</b></span>
        <IconButton on:click={() => hasCopied = false} icon="close" color="var(--col-primary)"/>
    </SnackBar>
</div>