<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from "svelte";
  import Post from "./lib/post.svelte";
  import Postdata from "./assets/gistfile1.txt?raw";

  let xPosts = [];
  let dates = [];
  let groupPosts = [];
  let charLength = 0;
  let modal = false;

  onMount((e) => {
    xPosts = [...JSON.parse(Postdata)];
    xPosts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });


    xPosts.forEach((e) => {
      e.date = new Date(e.date).toLocaleString("en-US", {
        timeZone: "America/New_York",
      });

      charLength += e.post.length;

      const date = e.date.split(",")[0];
      if (dates[date]) {
        dates[date] = [e, ...dates[date]];
      } else {
        dates[date] = [e];
      }
    });

    let idx = 0;

    for (let key in dates) {
      groupPosts[idx] = dates[key];
      idx++;
    }
    groupPosts.reverse();
  });

  function toggleModal() {
    modal = !modal;
  }
</script>

<main>
  <h1>ar<span id="x">X</span>iv</h1>
  <span id="void" on:click={toggleModal}
    ><span>{charLength}</span> characters thrown to a void -- what is happening!?</span
  >
  {#if modal}
    <div id="modal" in:fade={{duration: 400, delay: 300}} out:fade={{duration: 200}}>
      <p>
        This is an archive of a few old X (twitter) posts I made as <a
          href="https://www.twitter.com/dennylovesthis">@dennylovesthis</a
        >
      </p>
      <p>
        I've archived them for personal retrieval but I don't feel as if any of
        these text based posts sparked inspiration or joy in me or anyone else.
        That's why it felt right to 'blah' them to remind myself and the world
        that action is more meaningful than words can ever be.
      </p>
      <p>
        The source code to this site can be found <a
          href="https://www.github.com/plachenko/arxiv">here</a
        >
        and the script I used to scrape old timeline posts (text only) can be found
        <a
          href="https://gist.github.com/plachenko/4a41777914699704a98ea47b3964099b"
          >here</a
        >
      </p>
      <p>Thank you for reading these and I hope you have a great day!</p>
    </div>
  {:else}
    <div in:fade={{delay: 300, duration: 250}} out:fade={{duration: 300}}>
      {#each groupPosts as group}
        <div >
          <div class="dateGroup">
            <span>
              {group[0].date.split(",")[0]}
            </span>
          </div>
          {#each group as post, idx}
            <Post {idx} {post} />
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  #x {
    color: #000;
    background: linear-gradient(#222, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #fff;
    /* text-shadow: 0 0 0px #fff; */
  }

  #subhead {
    border-bottom: 1px solid #888;
    padding: 0 10px 5px 10px;
  }
  .thread {
    border-left: 2px solid;
  }
  .dateGroup {
    border-bottom: 1px solid #666;
    width: 100%;
    text-align: left;
    position: relative;
    margin: 30px 0;
  }
  .dateGroup span {
    display: inline-block;
    height: 20px;
    background-color: #333;
    position: absolute;
    top: -12px;
    left: 10px;
    padding: 0px 10px;
  }
  #void {
    background-color: #222;
    font-size: 12px;
    border-radius: 10px;
    padding: 5px 10px;
    color: #777;
    cursor: pointer;
  }
  #void span {
    color: #ddd;
    border-bottom: 1px dashed;
  }

  #void :hover {
    background-color: #555;
    color: #000;
  }

  #modal {
    padding: 15px;
    background-color: #444;
    border-radius: 10px;
    margin: 20px auto;
    min-height: 150px;
    text-align: left;
    border: 2px solid #666;
    max-width: 550px;
  }
  #modal p {
    padding: 0px;
  }
  #modal a {
    display: inline-block;
    background-color: #333;
    padding: 3px 8px;
    border-radius: 5px;
    color: #888;
  }
</style>
