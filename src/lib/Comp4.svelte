<script>
    export let app_function
</script>

<div class='wrapper'>
<h1>
    Компонент 4
</h1>
<div>
    <button on:click={()=>app_function('Сообщение 4')}>Кнопка 4</button>
</div>
</div>

<style>
    button{
        width: 100px;
        height:50px;
        background-color: rgb(22, 184, 108);
        color:azure
    }
    .wrapper{
        border:1px solid silver;
        border-radius: 30px;
        padding:30px;
    }
</style>