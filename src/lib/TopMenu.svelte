<script>
    export let selectcomp
</script>

<div class = "topmenu">
    <div on:click={()=>selectcomp(0)}>
        Menu item 1
    </div>

    <div on:click={()=>selectcomp(1)}>
        Menu item 2
    </div>

    <div on:click={()=>selectcomp(2)}>
        Menu item 3
    </div>

    <div on:click={()=>selectcomp(3)}>
        Menu item 4
    </div>
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

</style>