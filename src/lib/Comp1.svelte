<script>
    export let app_function
</script>

<div class='wrapper'>
<h1>
    Компонент 1
</h1>
<div>
    <button on:click={()=>app_function('Сообщение 1')}>Кнопка 1</button>
</div>
</div>

<style>
    button{
        width: 100px;
        height:50px;
        background-color: purple;
        color:azure
    }
    .wrapper{
        border:1px solid silver;
        border-radius: 30px;
        padding:30px;
    }
</style>