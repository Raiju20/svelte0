<script>
    export let app_function;
    import { count } from './stores.js';
    let numbers = $count;
    let selectedNumberIndex = null;
    let uniqueKeys = Array.from({ length: 10 }, (_, i) => `key-${i + 1}`);
  
    function addNumber() {
      numbers = [...numbers, numbers.length + 1];
    }
  
    function removeNumber() {
      if (numbers.length > 0) {
        numbers = numbers.slice(0, -1);
        uniqueKeys = uniqueKeys.slice(0, -1);
        if (numbers.length === 0) {
          app_function('Элементов больше нет');
        }
      }
    }
  
    function selectNumber() {
      if (selectedNumberIndex === null) {
        selectedNumberIndex = 0;
      } else {
        selectedNumberIndex = (selectedNumberIndex + 1) % numbers.length;
      }
    }
  </script>
  
  <div style="display: flex; justify-content: space-around;">
    <table>
      <tr>
        <th style="text-align: center">Элементы массива</th>
        <th style="text-align: center">Индексы элементов</th>
        <th style="text-align: center">Уникальные ключи</th>
      </tr>
      {#each numbers as number, index}
        <tr style:background-color={index === selectedNumberIndex ? 'green' : 'none'}>
          <td style="text-align: center">{number}</td>
          <td style="text-align: center">{index}</td>
          <td style="text-align: center">{Math.floor(Math.random() * 1000)}</td>
        </tr>
      {/each}
    </table>
  </div>
  
  <div style="display: flex; justify-content: space-around; margin-top: 20px;">
    <button on:click={addNumber}>Добавить</button>
    <button on:click={removeNumber} disabled={numbers.length === 0}>Удалить</button>
    <button on:click={selectNumber}>Выделить</button>
  </div>