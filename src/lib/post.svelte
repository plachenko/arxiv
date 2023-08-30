<script>
  export let post;
  let time = new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
    new Date(post.date)
  );
</script>

<div class="post {post.thread ? 'thread' : ''}">
  <div class="date">{time}</div>
  <div>
    {post.post}
  </div>
</div>

<style>
  .post {
    margin: 10px 10px;
    background-color: #555;
    padding: 20px;
    border-radius: 4px;
    text-align: justify;
    position: relative;
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
</style>
