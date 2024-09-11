<script>
	import Nested from './Nested.svelte';
	let test = '5';
	let count = 0;

	function increment() {
		count += 1;
	}

</script>

<main>

<div class="container">

  <div class="element1">Element 1</div>

  <div class="element2">
  Element 2
  </div>

  <div class="element3">
  Element 3
  <Nested count2={count} test2={test}/>
  </div>

</div>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

</main>

<style>
.container {

  display: flex;

  flex-wrap: wrap;

}

.element1 {

  flex-basis: 50%;

}

.element2 {

  flex-basis:25%;

}

.element3 {

  flex-basis: 25%;

}

	div{
		color: #146cdf;
	}
	
</style>