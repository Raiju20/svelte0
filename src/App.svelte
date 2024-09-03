<script>
  let name = 'grass';
  let name1 = 'frog';
  import Nested from './Nested.svelte';
</script>

<main>
<p>Всем привет! / {name1}</p>
<h>Всем пока! / {name}<h>
<p>This is a paragraph:</p>
<Nested />
</main>

<style>
	main {
		color: darkblue;
		font-family: 'Comic Sans MS', cursive;
		font-size: 3em;
	}
  p {
		color: orange;
		font-family: 'Times', cursive;
		font-size: 1em;
	}
</style>