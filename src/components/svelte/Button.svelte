<script>
  let message = "";
  export let color;
</script>

<button
  on:click={() => (message += "hello!")}
  style="background: {color}; padding: 1rem"
>
  Say Hello
</button>

<div class="message">
  {message}
</div>
