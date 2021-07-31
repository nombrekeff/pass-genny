<script>
    import { Link } from "svelte-routing";
    import Logo from './Logo.svelte';
</script>

<style>
    .sidenav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        width: 15%;
        min-width: 15%;
        border-radius: 25px;
        padding: 80px 0;
    }

    .sidenav nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .version {
        font-size: 12px;
        color: var(--col-primary);
        opacity: 0.6;
    }
</style>

<div class="sidenav">
    <Logo/>
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="challenge">Challenge</Link>
        <a href="https://github.com/nombrekef" target="_blank">GitHub</a>
    </nav>

    <span class="version">v0.0.1</span>
</div>
