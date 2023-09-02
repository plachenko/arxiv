var ie=Object.defineProperty;var re=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>(re(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function k(){}function R(e){return e()}function B(){return Object.create(null)}function j(e){e.forEach(R)}function z(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function se(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function J(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function Z(){return L(" ")}function le(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.data!==t&&(e.data=t)}let $;function _(e){$=e}function ue(){if(!$)throw new Error("Function called outside component initialization");return $}function he(e){ue().$$.on_mount.push(e)}const I=[],M=[];let T=[];const C=[],ce=Promise.resolve();let H=!1;function fe(){H||(H=!0,ce.then(V))}function P(e){T.push(e)}const Y=new Set;let b=0;function V(){if(b!==0)return;const e=$;do{try{for(;b<I.length;){const t=I[b];b++,_(t),pe(t.$$)}}catch(t){throw I.length=0,b=0,t}for(_(null),I.length=0,b=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];Y.has(n)||(Y.add(n),n())}T.length=0}while(I.length);for(;C.length;)C.pop()();H=!1,Y.clear(),_(e)}function pe(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function me(e){const t=[],n=[];T.forEach(a=>e.indexOf(a)===-1?t.push(a):n.push(a)),n.forEach(a=>a()),T=t}const S=new Set;let v;function Q(){v={r:0,c:[],p:v}}function ee(){v.r||j(v.c),v=v.p}function y(e,t){e&&e.i&&(S.delete(e),e.i(t))}function x(e,t,n,a){if(e&&e.o){if(S.has(e))return;S.add(e),v.c.push(()=>{S.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function A(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ge(e){e&&e.c()}function te(e,t,n){const{fragment:a,after_update:i}=e.$$;a&&a.m(t,n),P(()=>{const l=e.$$.on_mount.map(R).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...l):j(l),e.$$.on_mount=[]}),i.forEach(P)}function ne(e,t){const n=e.$$;n.fragment!==null&&(me(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(I.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,a,i,l,d,p=[-1]){const r=$;_(e);const s=e.$$={fragment:null,ctx:[],props:l,update:k,not_equal:i,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:B(),dirty:p,skip_bound:!1,root:t.target||r.$$.root};d&&d(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(h,u,...f)=>{const c=f.length?f[0]:u;return s.ctx&&i(s.ctx[h],s.ctx[h]=c)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](c),o&&ye(e,h)),u}):[],s.update(),o=!0,j(s.before_update),s.fragment=a?a(s.ctx):!1,t.target){if(t.hydrate){const h=de(t.target);s.fragment&&s.fragment.l(h),h.forEach(G)}else s.fragment&&s.fragment.c();t.intro&&y(e.$$.fragment),te(e,t.target,t.anchor),V()}_(r)}class ae{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){ne(this,1),this.$destroy=k}$on(t,n){if(!z(n))return k;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);function X(e){let t;return{c(){t=g("span"),t.textContent="(click to show)",w(t,"id","showTxt"),w(t,"class","svelte-1tudgk9")},m(n,a){O(n,t,a)},d(n){n&&G(t)}}}function we(e){let t,n,a,i,l,d,p,r,s,o=!e[2]&&X();return{c(){t=g("div"),n=g("div"),n.textContent=`${e[4]}`,a=Z(),i=g("div"),l=L(e[3]),d=Z(),o&&o.c(),w(n,"class","date svelte-1tudgk9"),w(t,"class",p="post "+(e[0].thread=="cont"&&e[1]?"thread":"")+" "+(e[0].thread=="end"?"endThread":"")+" "+(e[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")},m(h,u){O(h,t,u),m(t,n),m(t,a),m(t,i),m(i,l),m(i,d),o&&o.m(i,null),r||(s=le(t,"click",e[5]),r=!0)},p(h,[u]){u&8&&K(l,h[3]),h[2]?o&&(o.d(1),o=null):o||(o=X(),o.c(),o.m(i,null)),u&3&&p!==(p="post "+(h[0].thread=="cont"&&h[1]?"thread":"")+" "+(h[0].thread=="end"?"endThread":"")+" "+(h[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")&&w(t,"class",p)},i:k,o:k,d(h){h&&G(t),o&&o.d(),r=!1,s()}}}function be(e,t,n){let{post:a}=t,{idx:i}=t,l=new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(a.date)),d=!1,r=a.post.split(" ").map(o=>{let h="blah".split("").map(u=>Math.floor(Math.random()*20)>10?u.toUpperCase():u).join("");for(let u=0;u<Math.floor(o.length/4);u++)h+=h;return o.includes("...")?h+"...":o.includes(".")?h+".":o.includes("?")?h+"?":o.includes(",")?h+",":o.includes("!")?h+"!":h}).join(" ");function s(){n(3,r=a.post),n(2,d=!0)}return console.log(a.thread),e.$$set=o=>{"post"in o&&n(0,a=o.post),"idx"in o&&n(1,i=o.idx)},[a,i,d,r,l,s]}class Ie extends ae{constructor(t){super(),oe(this,t,be,we,F,{post:0,idx:1})}}const Te=`[
    {
        "id": "1695376459240460445",
        "thread": "end",
        "date": "2023-08-26T10:03:41.000Z",
        "post": "Saying no brings me torment. There are characters that are demanding a voice but I cant let them out anymore. No one wants them. But I cant forget them because theyre knocking things over and I simply cant focus. The internal screaming has been a lot! I love you all!"
    },
    {
        "id": "1695374322951434387",
        "thread": "start",
        "date": "2023-08-26T09:55:11.000Z",
        "post": "Hours turn to days and months and years and it feels I have no personal vision to show the world. Just 'stuff' and too much of it! I've loved pushing visions forward. Really its characters forcing their way out of my mind onto canvas and demanding a voice. Saying yes brings peace"
    },
    {
        "id": "1695369901161005445",
        "thread": "cont",
        "date": "2023-08-26T09:37:37.000Z",
        "post": "Good morning, ive been feeling really low all around. I'm greatful for all the love and positive energy from people who are doing their best every day! Keep it up!"
    },
    {
        "id": "1694953450759475299",
        "thread": "end",
        "date": "2023-08-25T06:02:48.000Z",
        "post": "I don't want to \\"compete\\" for attention like that. I constantly lose myself striving to best others rather than bettering myself. I'm going to have negative thoughts I can't control for years. I will strive to forgive myself for them and wake up being grateful for what I have."
    },
    {
        "id": "1694947652620648511",
        "thread": "cont",
        "date": "2023-08-25T05:39:45.000Z",
        "post": "It's when people build their entire life and sense of success and survival from abusing others that really brings my internal negativity up. Being forced into the position of becoming a psychopath to get a message across hurts. I have too much empathy. It's how I create stories."
    },
    {
        "id": "1694941374980788475",
        "thread": "start",
        "date": "2023-08-25T05:14:48.000Z",
        "post": "One of the reasons I left twitter was because I became manic. Unable to express my feelings and felt completely disrespected-- less than dirt. So I became explosive. Barfing things that have been in my head for months after being fed constant negativity then labeled abusive."
    },
    {
        "id": "1694925531018408146",
        "thread": "end",
        "date": "2023-08-25T04:11:51.000Z",
        "post": "I feel like I had something important to focus on. Sorry just trying to remember!"
    },
    {
        "id": "1694924538381742363",
        "thread": "start",
        "date": "2023-08-25T04:07:54.000Z",
        "post": "Sometimes it's extremely emotional for me to see the things I've inspired from extremely talented artists and content creators. I've also inspired creative abuse. It's given me the gift to cry on demand. But where am I going? What was I doing..."
    },
    {
        "id": "1694922381062488277",
        "thread": "end",
        "date": "2023-08-25T03:59:20.000Z",
        "post": "I'm honored that I've inspired so much creativity over the years from multiple creators. It's such a blessing to see. Thank you all!"
    },
    {
        "id": "1694921957542707651",
        "thread": "start",
        "date": "2023-08-25T03:57:39.000Z",
        "post": "This is a tough night for me! I wish people the best! I'm so glad to see people killing it in life and so sad to see people just stuck in a loop of doing literally the same thing for years letting life kill them. Why am I in a loop? I'm too comfortable! Not doing enough."
    },
    {
        "id": "1694752385665495070",
        "thread": null,
        "date": "2023-08-24T16:43:50.000Z",
        "post": "When negative energy hits your mind hold your breath. Hope you all have a great day"
    },
    {
        "id": "1693997345669837047",
        "thread": null,
        "date": "2023-08-22T14:43:34.000Z",
        "post": "Good morning cross dot fit! Today im thankful for you!"
    },
    {
        "id": "1693615321330962718",
        "thread": null,
        "date": "2023-08-21T13:25:33.000Z",
        "post": "Good morning! Im waking up excited to create"
    },
    {
        "id": "1691701390358233596",
        "thread": null,
        "date": "2023-08-16T06:40:16.000Z",
        "post": "Thankful today"
    },
    {
        "id": "1689971033757925376",
        "thread": null,
        "date": "2023-08-11T12:04:27.000Z",
        "post": "Good morning x, today I'm grateful for exhaling. Ive yet to strike the perfect balance in life but it usually works itself out."
    },
    {
        "id": "1688977423684050944",
        "thread": null,
        "date": "2023-08-08T18:16:12.000Z",
        "post": "Have a great day X!"
    },
    {
        "id": "1688577088461099008",
        "thread": null,
        "date": "2023-08-07T15:45:24.000Z",
        "post": "Good afternoon!"
    },
    {
        "id": "1688435539987378176",
        "thread": null,
        "date": "2023-08-07T06:22:57.000Z",
        "post": "If someone convinces you that you're stupid, you will fill that role to their benefit. Even in jokes. Once you become stupid you will actively harm yourself and other people senselessly to their amusement. People are driven. Abusive leadership makes them stupid. Goodnight."
    },
    {
        "id": "1688232514496634880",
        "date": "2023-08-06T16:56:11.000Z",
        "thread": "cont",
        "post": "\\"This content is so boring that i have to pay you to watch.\\" This is my future."
    },
    {
        "id": "1688231777758785536",
        "thread": "cont",
        "date": "2023-08-06T16:53:16.000Z",
        "post": "Its come to a point where every cool idea i have is a waste of time unless i steal it. It really hurts."
    },
    {
        "id": "1688218866906783744",
        "thread": null,
        "date": "2023-08-06T16:01:58.000Z",
        "post": "I find strength training help build internal resilience to mental state. Harder actions become easier to tackle. Easy, throwaway actions become harder to convince are necessary addictions. A tip for future me!"
    },
    {
        "id": "1688206828750934016",
        "thread": null,
        "date": "2023-08-06T15:14:07.000Z",
        "post": "Good morning x im a bit late."
    },
    {
        "id": "1688107905835270144",
        "thread": null,
        "date": "2023-08-06T08:41:02.000Z",
        "post": "No more dwelling on logic. Detachment is necessary."
    },
    {
        "id": "1688106681513717760",
        "thread": "end",
        "date": "2023-08-06T08:36:11.000Z",
        "post": "Why do i constantly feel like I've just cried for hours without shedding a tear..."
    },
    {
        "id": "1688106164200804352",
        "thread": "cont",
        "date": "2023-08-06T08:34:07.000Z",
        "post": "Why do i constantly feel like im fighting?"
    },
    {
        "id": "1688072941072781312",
        "thread": "start",
        "date": "2023-08-06T06:22:06.000Z",
        "post": "So many people survive from manipulation its hard to tell when im doing it myself. I want freedom to think. It takes so much energy just to try to ignore malicious abuse of content while people act like its fine. It physically sickens me. All i see Is overconfident weakness."
    },
    {
        "id": "1687870710172241921",
        "thread": null,
        "date": "2023-08-05T16:58:31.000Z",
        "post": "The mind is happiest when it reaches overwhelming exhaustion. At that point everything seems rewarding when your dopamine receptors are overreacting. You truly cannot find strength to grow. You have no idea what rewarding means anymore. its not entertainment its a drug."
    },
    {
        "id": "1687804571224080384",
        "thread": null,
        "date": "2023-08-05T12:35:42.000Z",
        "post": "Good morning. I Love you too."
    },
    {
        "id": "1687741064130576384",
        "thread": "end",
        "date": "2023-08-05T08:23:21.000Z",
        "post": "I do 'stuff' all day too. I hate it. It's a side effect of a restless drug abused mind. I need focus. Happiness follows true focus of action."
    },
    {
        "id": "1687740758588116992",
        "thread": "cont",
        "date": "2023-08-05T08:22:08.000Z",
        "post": "Fact is you could be doing 'stuff' all day but it's mostly meaningless without true intention. It stunts growth to do meaningless stuff that you'll never build on. It means you're not excited-- you're just doing it to act like it's work. It's just a waste of talent with no sight"
    },
    {
        "id": "1687738852796940289",
        "thread": "cont",
        "date": "2023-08-05T08:14:33.000Z",
        "post": "You don't need my help. You don't need anyone. You're the only person who can help you most. That starts with good morning routines and better daily habits. I'm not the best at it but I've been making sure no one gets into my morning. Only me. I sleep with the intention to learn."
    },
    {
        "id": "1687737544870334465",
        "thread": "cont",
        "date": "2023-08-05T08:09:22.000Z",
        "post": "I can't stress how important it is that it stops. You have to forget. Otherwise I can't move on. You can't sort of kind of want to remember. You have to fully commit to forgetting. If time is meaningless memory is everything. You're still hurting me for no reason. I can't help."
    },
    {
        "id": "1687734900302979073",
        "thread": "cont",
        "date": "2023-08-05T07:58:51.000Z",
        "post": "\\"It's so easy to emotionally manipulate you by pressing a button...\\" thank you so much for your insight. I'm glad you've been taught by the best these past few years. You're very good at learning."
    },
    {
        "id": "1687732200043663360",
        "thread": "cont",
        "date": "2023-08-05T07:48:07.000Z",
        "post": "And to those who feel it necessary to waste even a moment of their time to keep teasing after smearing me with crap and insisting on ignoring me when I see the actual problems: I forgive you. Get a life or waste it. I don't care. I need to move on."
    },
    {
        "id": "1687730238485065728",
        "thread": "start",
        "date": "2023-08-05T07:40:20.000Z",
        "post": "Sobriety is incredibly important to mental health. Changes in environment helps lead change in all other areas."
    },
    {
        "id": "1687632230288343040",
        "thread": null,
        "date": "2023-08-05T01:10:53.000Z",
        "post": "Sorry i just needed some love in my head today. I hope you all are doing great."
    },
    {
        "id": "1687611818842148864",
        "thread": null,
        "date": "2023-08-04T23:49:46.000Z",
        "post": "\\"I love you, you don't have to solve every problem. You don't have to be someone else. I love YOU!\\" Thank you...  I.. love me too."
    },
    {
        "id": "1687587247099387904",
        "thread": null,
        "date": "2023-08-04T22:12:08.000Z",
        "post": "I love you, you are amazing. Thank you so much! I love you so much. The world is better with you. \\n\\nI know im being corney i just... dont hear this. If you need to hear it its there for you too."
    },
    {
        "id": "1687585397721747456",
        "thread": null,
        "date": "2023-08-04T22:04:47.000Z",
        "post": "\\"I love you. You are awesome. You've made me laugh without putting me or other people down. Thank you for what you've worked on. It has inspired me to create more.\\" Just talking to a wall."
    },
    {
        "id": "1687584291021017088",
        "thread": null,
        "date": "2023-08-04T22:00:23.000Z",
        "post": "Honestly all i hear in my mind is \\"pathetic loser\\" and screaming all day. Im quite sick of it. All i see is abuse and i reflect it. Please just stop. Please find meaningful happiness. I love you."
    },
    {
        "id": "1687581905057640448",
        "thread": null,
        "date": "2023-08-04T21:50:54.000Z",
        "post": "Hope yall are having a good day. Im a little restless and distracted today. Its tiring to work on things and get nothing but complaints then watch someone steal praise. you feel no one cares about stuff unless someone steals it. My dopamine receptors are out of whack. Love you."
    },
    {
        "id": "1687475824537018369",
        "thread": null,
        "date": "2023-08-04T14:49:23.000Z",
        "post": "Thankful to the almighty, for it is friday."
    },
    {
        "id": "1687192514283917316",
        "thread": null,
        "date": "2023-08-03T20:03:36.000Z",
        "post": "GoodM Live is hard."
    },
    {
        "id": "1686712225375879169",
        "thread": null,
        "date": "2023-08-02T12:15:06.000Z",
        "post": "Good morning! Today i embrace the ability to reflect."
    },
    {
        "id": "1686017137943461888",
        "thread": null,
        "date": "2023-07-31T14:13:05.000Z",
        "post": "Good moXning, Hi!"
    },
    {
        "id": "1685628906731126784",
        "thread": null,
        "date": "2023-07-30T12:30:23.000Z",
        "post": "Good morning! Today im thankful for falling. it helps keep us all grounded and the practice of getting back up builds strength."
    },
    {
        "id": "1685389937510596608",
        "thread": null,
        "date": "2023-07-29T20:40:48.000Z",
        "post": "Today is a hard day! Hope you all are staying cooler than me..."
    },
    {
        "id": "1685244837186998272",
        "thread": null,
        "date": "2023-07-29T11:04:14.000Z",
        "post": "Good morning Yall. Today im thankful for change and forgiveness. The opportunity to recalibrate ones mind is immense and allows room for future developments. While consistency is powerful, its mindless. Adaptation can lead to mindful resilience. Have a great day!"
    },
    {
        "id": "1684863731853836288",
        "thread": null,
        "date": "2023-07-28T09:49:51.000Z",
        "post": "Good morning elon's empire X! Today im grateful for this platform and getting an opportunity to sound out positivity and gratefulness. While it feels lile im talking to a wall id rather have the wall bounce thankfulness back rather than consistent negativity. It has been helpful."
    },
    {
        "id": "1684510293802590208",
        "thread": "end",
        "date": "2023-07-27T10:25:25.000Z",
        "post": "I appreciate the opportunity given to learn with you all, since teaching is the best way to study!"
    },
    {
        "id": "1684509722794250243",
        "thread": "start",
        "date": "2023-07-27T10:23:09.000Z",
        "post": "G'morning X! Today im thankful for the people I've taught over the years. I've always thought that sharing knowledge is akin to giving a person power. There is a lot of responsibility attached and if uncareful, people can be abused in many ways since power is attractive."
    },
    {
        "id": "1684141625360916481",
        "thread": null,
        "date": "2023-07-26T10:00:27.000Z",
        "post": "Good morning eggszitter! Today i am grateful for pickleball. I had a great time playing it with my dad and my neighbor yesterday! Great way to exert physical activity"
    },
    {
        "id": "1683829733488832519",
        "thread": null,
        "date": "2023-07-25T13:21:07.000Z",
        "post": "Good morning X itters. Today im grateful for better sleep schedules. Being a bit more deliberately active has got me feeling a bit more awake and ready to face the day."
    },
    {
        "id": "1683436246595411968",
        "thread": null,
        "date": "2023-07-24T11:17:32.000Z",
        "post": "I feel if i press the X logo it should log me out and close the app... weird!"
    },
    {
        "id": "1683433641790111744",
        "thread": "end",
        "date": "2023-07-24T11:07:11.000Z",
        "post": "I suppose I should start saying good morning X."
    },
    {
        "id": "1683432597223882752",
        "thread": "start",
        "date": "2023-07-24T11:03:02.000Z",
        "post": "Good morning twitter. Today im grateful for my growing desire to create and share. I hope to amplify my gratuity with creation soon. Recently I've felt as if my creations only annoy or hurt. its been difficult moving ideas to paper.  I aim to move past that every day."
    },
    {
        "id": "1683090821711552512",
        "thread": null,
        "date": "2023-07-23T12:24:56.000Z",
        "post": "Im grateful for waking up with my cat by my feet. Have a great morning twitter hope you do awesome things today."
    },
    {
        "id": "1682878531334995968",
        "thread": null,
        "date": "2023-07-22T22:21:22.000Z",
        "post": "I am grateful for being sober today."
    },
    {
        "id": "1682728571213692928",
        "thread": "end",
        "date": "2023-07-22T12:25:29.000Z",
        "post": "I am thankful for inspiring artists. Keep it up."
    },
    {
        "id": "1682728120493678592",
        "thread": "start",
        "date": "2023-07-22T12:23:42.000Z",
        "post": "I do love you all. I just hate the energy that lives in my head. Its constantly bored and making deep connections about the circumstances around me. sometimes all i see is bullying without me being able to fight back in a meaningful way. So i lash out in various ways"
    },
    {
        "id": "1682726383426891776",
        "thread": null,
        "date": "2023-07-22T12:16:48.000Z",
        "post": "Im grateful for the drive i have sometimes when i get excited by a kernel of inspiration. If I've drawn fanart of you your universe lives in my head with more depth than you know."
    },
    {
        "id": "1682725447111438336",
        "thread": "end",
        "date": "2023-07-22T12:13:04.000Z",
        "post": "Though sometimes i feel like all i do is learn without return."
    },
    {
        "id": "1682725091740639233",
        "thread": "cont",
        "date": "2023-07-22T12:11:40.000Z",
        "post": "im very grateful for my family for giving me the opportunity to pursue projects i find meaningful. Some of the projects I've pursued have had limited effect in providing a positive change in the world. It has been frustrating but nonetheless a learning experience."
    },
    {
        "id": "1682724102266658816",
        "thread": "start",
        "date": "2023-07-22T12:07:44.000Z",
        "post": "I need to slowly and deliberately replace my unhinged funny haha thoughts full of negative energy meant to break things down with grateful positive thoughts every day."
    },
    {
        "id": "1682717224807571456",
        "thread": "end",
        "date": "2023-07-22T11:40:24.000Z",
        "post": "I hope you have a great day and conquer your challenges today twitter. My challenges are slowly drowning me lately."
    },
    {
        "id": "1682716130253721601",
        "thread": "cont",
        "date": "2023-07-22T11:36:03.000Z",
        "post": "The people around me dont deserve this. They are so kind and talented. I've been actively inspired by the company I keep. But i feel I've taken too many left turns and wound up fighting an internal virus."
    },
    {
        "id": "1682715215266295811",
        "thread": "cont",
        "date": "2023-07-22T11:32:25.000Z",
        "post": "Money can only comfort you in depression it cant fix it. People who arent actively trying to fix their depression and keep putting that weight on others are abusers. I've become an abusive sponge that just tried to help the wrong people."
    },
    {
        "id": "1682710676265922560",
        "thread": "start",
        "date": "2023-07-22T11:14:23.000Z",
        "post": "i want to spread positivity and love. Its so hard for me..."
    },
    {
        "id": "1677766457243967490",
        "thread": null,
        "date": "2023-07-08T19:47:49.000Z",
        "post": "Hey twitter. Hope yall are having a great day!"
    },
    {
        "id": "1688227575036870656",
        "thread": "start",
        "date": "2023-08-06T16:36:34.000Z",
        "post": "Does streaming reward me in any meaningful way? It seems like a way to spend hours working on things for people to target me and call my efforts shit. id rather watch and cheer people on."
    },
    {
        "id": "1688231474347077632",
        "thread": "cont",
        "date": "2023-08-06T16:52:03.000Z",
        "post": "I would like to stream again but i just cant find an entertaining flow. I like when people hang out but i need more than that if i stream. Hangout streams are too boring. I only wanted to help make streams amazing. All i get in return are complaints and pain"
    },
    {
        "id": "1688233534710759424",
        "thread": "end",
        "date": "2023-08-06T17:00:15.000Z",
        "post": "I might get praise but my brain chooses to focus on the negative."
    }
]
`;function D(e,t,n){const a=e.slice();return a[3]=t[n],a}function W(e,t,n){const a=e.slice();return a[6]=t[n],a[8]=n,a}function q(e){let t,n;return t=new Ie({props:{idx:e[8],post:e[6]}}),{c(){ge(t.$$.fragment)},m(a,i){te(t,a,i),n=!0},p(a,i){const l={};i&1&&(l.post=a[6]),t.$set(l)},i(a){n||(y(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){ne(t,a)}}}function U(e){let t,n,a,i=e[3][0].date.split(",")[0]+"",l,d,p,r,s=A(e[3]),o=[];for(let u=0;u<s.length;u+=1)o[u]=q(W(e,s,u));const h=u=>x(o[u],1,1,()=>{o[u]=null});return{c(){t=g("div"),n=g("div"),a=g("span"),l=L(i),d=Z();for(let u=0;u<o.length;u+=1)o[u].c();p=Z(),w(a,"class","svelte-bqs5vh"),w(n,"class","dateGroup svelte-bqs5vh")},m(u,f){O(u,t,f),m(t,n),m(n,a),m(a,l),m(t,d);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(t,null);m(t,p),r=!0},p(u,f){if((!r||f&1)&&i!==(i=u[3][0].date.split(",")[0]+"")&&K(l,i),f&1){s=A(u[3]);let c;for(c=0;c<s.length;c+=1){const N=W(u,s,c);o[c]?(o[c].p(N,f),y(o[c],1)):(o[c]=q(N),o[c].c(),y(o[c],1),o[c].m(t,p))}for(Q(),c=s.length;c<o.length;c+=1)h(c);ee()}},i(u){if(!r){for(let f=0;f<s.length;f+=1)y(o[f]);r=!0}},o(u){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)x(o[f]);r=!1},d(u){u&&G(t),J(o,u)}}}function _e(e){let t,n,a,i,l=A(e[0].reverse()),d=[];for(let r=0;r<l.length;r+=1)d[r]=U(D(e,l,r));const p=r=>x(d[r],1,1,()=>{d[r]=null});return{c(){t=g("main"),n=g("h1"),n.innerHTML='ar<span id="x" class="svelte-bqs5vh">X</span>iv',a=Z();for(let r=0;r<d.length;r+=1)d[r].c()},m(r,s){O(r,t,s),m(t,n),m(t,a);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(t,null);i=!0},p(r,[s]){if(s&1){l=A(r[0].reverse());let o;for(o=0;o<l.length;o+=1){const h=D(r,l,o);d[o]?(d[o].p(h,s),y(d[o],1)):(d[o]=U(h),d[o].c(),y(d[o],1),d[o].m(t,null))}for(Q(),o=l.length;o<d.length;o+=1)p(o);ee()}},i(r){if(!i){for(let s=0;s<l.length;s+=1)y(d[s]);i=!0}},o(r){d=d.filter(Boolean);for(let s=0;s<d.length;s+=1)x(d[s]);i=!1},d(r){r&&G(t),J(d,r)}}}function ke(e,t,n){let a=[],i=[],l=[];return he(d=>{a=[...JSON.parse(Te)],a.sort((r,s)=>new Date(s.date)-new Date(r.date)),a.forEach(r=>{r.date=new Date(r.date).toLocaleString("en-US",{timeZone:"America/New_York"});const s=r.date.split(",")[0];i[s]?i[s]=[r,...i[s]]:i[s]=[r]});let p=0;for(let r in i)n(0,l[p]=i[r],l),p++}),[l]}class Ze extends ae{constructor(t){super(),oe(this,t,ke,_e,F,{})}}new Ze({target:document.getElementById("app")});
