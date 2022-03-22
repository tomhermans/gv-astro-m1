<script>
  const ducks_orig = ["Huey", "Dewey", "Louie"];
  const ducks = [
    { name: "Huey", id: 0 },
    { name: "Dewey", id: 1 },
    { name: "Louie", id: 2 },
  ];

  let selectedDucks = new Set();

  const onCheckDuck = (event) => {
    if (event.target.checked) {
      selectedDucks.add(ducks[event.target.value]);
    } else {
      selectedDucks.delete(ducks[event.target.value]);
    }
    selectedDucks = selectedDucks;
    console.log({ selectedDucks });
  };

  const onSelectAll = (event) => {
    if (event.target.checked) {
      selectedDucks.clear();
      selectedDucks = new Set([...ducks]);
    } else {
      selectedDucks.clear();
    }
    selectedDucks = selectedDucks;
    console.log({ selectedDucks });
  };
</script>

<div class="flex">
  <ul class="flex-1" style="padding: 1rem;background: hsla(0,0%,0%,.5)">
    <li>
      <input
        type="checkbox"
        id="select-all"
        checked={selectedDucks.size === ducks.length}
        on:change={onSelectAll}
      />
      <label for="select-all"><strong>Select all</strong></label>
    </li>
    {#each ducks as duck}
      <li>
        <input
          type="checkbox"
          id="cb{duck.id}"
          value={duck.id}
          checked={selectedDucks.has(duck)}
          on:change={onCheckDuck}
        />
        <label for="cb{duck.id}">{duck.name}</label>
      </li>
    {/each}
  </ul>

  <div class="flex-1" style="padding: 1rem;background: hsla(0,0%,80%,.1)">
    <p>
      <span>{selectedDucks.size}</span> ducks selected. <br />Show List of
      selected:
    </p>
    <ul>
      {#each [...selectedDucks] as item}
        <li>
          ➔
          {item.id}
          {item.name}
          <!-- {ducks[item[0]].name} -->
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    display: flex;
    align-items: center;
    padding: 2px;
  }
  span {
    font-weight: bold;
    color: #ff7900;
    padding: 0.2rem 0.4rem;
    background: #324f7b;
    margin-right: 0.2rem;
  }
  label {
    margin-left: 0.5rem;
  }
  input {
    margin: 0;
  }
  .flex {
    display: flex;
  }
  .flex-1 {
    flex-grow: 1;
  }
</style>
