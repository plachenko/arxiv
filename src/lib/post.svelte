<script>
  export let post;
  export let idx;
  let time = new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
    new Date(post.date)
  );

  let clicked = false;

  let postReplace = post.post
    .split(" ")
    .map((e) => {
      let ret = "blah"
        .split("")
        .map((e) => {
          let rand = Math.floor(Math.random() * 20);
          if (rand > 10) {
            return e.toUpperCase();
          } else {
            return e;
          }
        })
        .join("");

      for (let i = 0; i < Math.floor(e.length / 4); i++) {
        ret += ret;
      }

      if (e.includes("...")) {
        return ret + "...";
      }

      if (e.includes(".")) {
        return ret + ".";
      }

      if (e.includes("?")) {
        return ret + "?";
      }

      if (e.includes(",")) {
        return ret + ",";
      }

      if (e.includes("!")) {
        return ret + "!";
      }

      return ret;
    })
    .join(" ");

  let postTxt = postReplace;

  function replaceTxt() {
    postTxt = post.post;
    clicked = true;
  }
</script>

<div
  on:click={replaceTxt}
  class="post {post.thread == 'cont' && idx ? 'thread' : ''} {post.thread ==
  'end'
    ? 'endThread'
    : ''} {post.thread == 'start' ? 'startThread' : ''}"
>
  <div class="date">{time}</div>
  <div>
    {postTxt}

    {#if !clicked}
      <span id="showTxt">(click to show)</span>
    {/if}
  </div>
</div>

<style>
  #showTxt {
    color: #777;
    display: block;
    padding-top: 10px;
  }

  .post {
    min-width: 300px;
    cursor: pointer;
    margin: 10px 10px;
    background-color: #555;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    text-align: left;
  }
  .thread {
    border-radius: 0px;
    margin-top: -10px !important;
    border-top: 2px dashed #999;
  }

  .post .date {
    position: absolute;
    color: #999;
    background-color: #333;
    padding: 1px 5px 3px 5px;
    border-radius: 0px 0px 0px 10px;
    font-size: 10px;
    top: 0px;
    right: 0px;
    margin-bottom: 10px;
  }

  .startThread {
    border-radius: 10px 10px 0px 0px;
  }
  .endThread {
    margin-top: -10px !important;
    border-top: 2px dashed #999;
    border-radius: 0px 0px 10px 10px;
  }
</style>
