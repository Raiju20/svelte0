<script>
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
</script>

<div>
<h1 class='wrapper' style="color: {selected}">Pick a colour</h1>

    <div >
        <button
            aria-current={selected === 'red'}
            aria-label="red"
            style="background: red"
            on:click={() => selected = 'red'}
        ></button>
    
        <button
            aria-current={selected === 'orange'}
            aria-label="orange"
            style="background: orange"
            on:click={() => selected = 'orange'}
        ></button>
    
        <button
            aria-current={selected === 'yellow'}
            aria-label="yellow"
            style="background: yellow"
            on:click={() => selected = 'yellow'}
        ></button>

        <button
            aria-current={selected === 'green'}
            aria-label="green"
            style="background: green"
            on:click={() => selected = 'green'}
        ></button>

        <button
        aria-current={selected === 'blue'}
        aria-label="blue"
        style="background: blue"
        on:click={() => selected = 'blue'}
        ></button>

        <button
        aria-current={selected === 'indigo'}
        aria-label="indigo"
        style="background: indigo"
        on:click={() => selected = 'indigo'}
        ></button>

        <button
        aria-current={selected === 'violet'}
        aria-label="violet"
        style="background: violet"
        on:click={() => selected = 'violet'}
        ></button>

    </div>
</div>



    <style>
        h1 {
            transition: color 0.2s;
        }
    
        div {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 10px;
            max-width: 00px;
            align-items: center;
        }
    
        button {
            aspect-ratio: 1;
            border-radius: 50%;
            background: var(--color, #fff);
            transform: translate(-2px,-2px);
            filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
            transition: all 0.1s;
        }
    
        button[aria-current="true"] {
            transform: none;
            filter: none;
            box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
        }

        div button {
        border:1px solid black;
        padding:10px;  
        }

        .wrapper{
        border:1px solid rgb(66, 66, 66);
        border-radius: 30px;
        padding:30px;
        }
    </style>