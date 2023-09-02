<script lang="ts">
  import { onMount } from "svelte";
  import Post from "./lib/post.svelte";
  import Postdata from "./assets/gistfile1.txt?raw";

  let xPosts = [];
  let dates = [];
  let groupPosts = [];
  let charLength = 0;

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
  });
</script>

<main>
  <h1>ar<span id="x">X</span>iv</h1>
  <span id="void"><span>{charLength}</span> characters thrown to a void</span>
  {#each groupPosts.reverse() as group}
    <div>
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
  }
  #void span {
    color: #ddd;
    border-bottom: 1px dashed;
  }
</style>
