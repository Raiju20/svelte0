<script>
    let selectedIndex = 0;
    export let selectcomp;
    let menuItems = [
        {label: "Menu item 1" },
        {label: "Menu item 2" },
        {label: "Menu item 3" },
        {label: "Menu item 4" },
        // Add more items here...
    ];
</script>

<div class="topmenu">
    {#each menuItems as item, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class:selected={selectedIndex === i}
            on:click={() => {
                selectcomp(i);
                selectedIndex = i;
            }}
        >
            {item.label}
        </div>
    {/each}
</div>

<style>
    .topmenu {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .topmenu div {
        cursor: pointer;
    }

    .selected {
        background-color: #ccc; /* add your desired styles here */
        color: #333;
    }
</style>
