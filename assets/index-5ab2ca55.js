var re=Object.defineProperty;var se=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(se(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();function $(){}function q(e){return e()}function C(){return Object.create(null)}function S(e){e.forEach(q)}function J(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function Y(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function k(){return x(" ")}function de(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function B(e,t){t=""+t,e.data!==t&&(e.data=t)}let j;function Z(e){j=e}function he(){if(!j)throw new Error("Function called outside component initialization");return j}function ce(e){he().$$.on_mount.push(e)}const T=[],X=[];let _=[];const D=[],fe=Promise.resolve();let P=!1;function pe(){P||(P=!0,fe.then(Q))}function N(e){_.push(e)}const L=new Set;let I=0;function Q(){if(I!==0)return;const e=j;do{try{for(;I<T.length;){const t=T[I];I++,Z(t),me(t.$$)}}catch(t){throw T.length=0,I=0,t}for(Z(null),T.length=0,I=0;X.length;)X.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];L.has(n)||(L.add(n),n())}_.length=0}while(T.length);for(;D.length;)D.pop()();P=!1,L.clear(),Z(e)}function me(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function ge(e){const t=[],n=[];_.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),_=t}const O=new Set;let b;function ee(){b={r:0,c:[],p:b}}function te(){b.r||S(b.c),b=b.p}function w(e,t){e&&e.i&&(O.delete(e),e.i(t))}function G(e,t,n,o){if(e&&e.o){if(O.has(e))return;O.add(e),b.c.push(()=>{O.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function E(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e){e&&e.c()}function ne(e,t,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),N(()=>{const d=e.$$.on_mount.map(q).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...d):S(d),e.$$.on_mount=[]}),i.forEach(N)}function oe(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(T.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,o,i,d,p,g=[-1]){const c=j;Z(e);const s=e.$$={fragment:null,ctx:[],props:d,update:$,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:C(),dirty:g,skip_bound:!1,root:t.target||c.$$.root};p&&p(s.root);let a=!1;if(s.ctx=n?n(e,t.props||{},(r,u,...l)=>{const h=l.length?l[0]:u;return s.ctx&&i(s.ctx[r],s.ctx[r]=h)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](h),a&&ve(e,r)),u}):[],s.update(),a=!0,S(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const r=ue(t.target);s.fragment&&s.fragment.l(r),r.forEach(A)}else s.fragment&&s.fragment.c();t.intro&&w(e.$$.fragment),ne(e,t.target,t.anchor),Q()}Z(c)}class ie{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){oe(this,1),this.$destroy=$}$on(t,n){if(!J(n))return $;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const we="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);function W(e){let t;return{c(){t=y("span"),t.textContent="(click to show)",v(t,"id","showTxt"),v(t,"class","svelte-1tudgk9")},m(n,o){Y(n,t,o)},d(n){n&&A(t)}}}function be(e){let t,n,o,i,d,p,g,c,s,a=!e[2]&&W();return{c(){t=y("div"),n=y("div"),n.textContent=`${e[4]}`,o=k(),i=y("div"),d=x(e[3]),p=k(),a&&a.c(),v(n,"class","date svelte-1tudgk9"),v(t,"class",g="post "+(e[0].thread=="cont"&&e[1]?"thread":"")+" "+(e[0].thread=="end"?"endThread":"")+" "+(e[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")},m(r,u){Y(r,t,u),m(t,n),m(t,o),m(t,i),m(i,d),m(i,p),a&&a.m(i,null),c||(s=de(t,"click",e[5]),c=!0)},p(r,[u]){u&8&&B(d,r[3]),r[2]?a&&(a.d(1),a=null):a||(a=W(),a.c(),a.m(i,null)),u&3&&g!==(g="post "+(r[0].thread=="cont"&&r[1]?"thread":"")+" "+(r[0].thread=="end"?"endThread":"")+" "+(r[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")&&v(t,"class",g)},i:$,o:$,d(r){r&&A(t),a&&a.d(),c=!1,s()}}}function Ie(e,t,n){let{post:o}=t,{idx:i}=t,d=new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(o.date)),p=!1,c=o.post.split(" ").map(a=>{let r="blah".split("").map(u=>Math.floor(Math.random()*20)>10?u.toUpperCase():u).join("");for(let u=0;u<Math.floor(a.length/4);u++)r+=r;return a.includes("...")?r+"...":a.includes(".")?r+".":a.includes("?")?r+"?":a.includes(",")?r+",":a.includes("!")?r+"!":r}).join(" ");function s(){n(3,c=o.post),n(2,p=!0)}return e.$$set=a=>{"post"in a&&n(0,o=a.post),"idx"in a&&n(1,i=a.idx)},[o,i,p,c,d,s]}class Te extends ie{constructor(t){super(),ae(this,t,Ie,be,K,{post:0,idx:1})}}const _e=`[
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
`;function U(e,t,n){const o=e.slice();return o[4]=t[n],o}function R(e,t,n){const o=e.slice();return o[7]=t[n],o[9]=n,o}function z(e){let t,n;return t=new Te({props:{idx:e[9],post:e[7]}}),{c(){ye(t.$$.fragment)},m(o,i){ne(t,o,i),n=!0},p(o,i){const d={};i&1&&(d.post=o[7]),t.$set(d)},i(o){n||(w(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){oe(t,o)}}}function F(e){let t,n,o,i=e[4][0].date.split(",")[0]+"",d,p,g,c,s=E(e[4]),a=[];for(let u=0;u<s.length;u+=1)a[u]=z(R(e,s,u));const r=u=>G(a[u],1,1,()=>{a[u]=null});return{c(){t=y("div"),n=y("div"),o=y("span"),d=x(i),p=k();for(let u=0;u<a.length;u+=1)a[u].c();g=k(),v(o,"class","svelte-1j0ee6r"),v(n,"class","dateGroup svelte-1j0ee6r")},m(u,l){Y(u,t,l),m(t,n),m(n,o),m(o,d),m(t,p);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null);m(t,g),c=!0},p(u,l){if((!c||l&1)&&i!==(i=u[4][0].date.split(",")[0]+"")&&B(d,i),l&1){s=E(u[4]);let h;for(h=0;h<s.length;h+=1){const f=R(u,s,h);a[h]?(a[h].p(f,l),w(a[h],1)):(a[h]=z(f),a[h].c(),w(a[h],1),a[h].m(t,g))}for(ee(),h=s.length;h<a.length;h+=1)r(h);te()}},i(u){if(!c){for(let l=0;l<s.length;l+=1)w(a[l]);c=!0}},o(u){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)G(a[l]);c=!1},d(u){u&&A(t),V(a,u)}}}function ke(e){let t,n,o,i,d,p,g,c,s,a=E(e[0].reverse()),r=[];for(let l=0;l<a.length;l+=1)r[l]=F(U(e,a,l));const u=l=>G(r[l],1,1,()=>{r[l]=null});return{c(){t=y("main"),n=y("h1"),n.innerHTML='ar<span id="x" class="svelte-1j0ee6r">X</span>iv',o=k(),i=y("span"),d=y("span"),p=x(e[1]),g=x(" characters thrown to a void"),c=k();for(let l=0;l<r.length;l+=1)r[l].c();v(d,"class","svelte-1j0ee6r"),v(i,"id","void"),v(i,"class","svelte-1j0ee6r")},m(l,h){Y(l,t,h),m(t,n),m(t,o),m(t,i),m(i,d),m(d,p),m(i,g),m(t,c);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(t,null);s=!0},p(l,[h]){if((!s||h&2)&&B(p,l[1]),h&1){a=E(l[0].reverse());let f;for(f=0;f<a.length;f+=1){const M=U(l,a,f);r[f]?(r[f].p(M,h),w(r[f],1)):(r[f]=F(M),r[f].c(),w(r[f],1),r[f].m(t,null))}for(ee(),f=a.length;f<r.length;f+=1)u(f);te()}},i(l){if(!s){for(let h=0;h<a.length;h+=1)w(r[h]);s=!0}},o(l){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)G(r[h]);s=!1},d(l){l&&A(t),V(r,l)}}}function Ze(e,t,n){let o=[],i=[],d=[],p=0;return ce(g=>{o=[...JSON.parse(_e)],o.sort((s,a)=>new Date(a.date)-new Date(s.date)),o.forEach(s=>{s.date=new Date(s.date).toLocaleString("en-US",{timeZone:"America/New_York"}),n(1,p+=s.post.length);const a=s.date.split(",")[0];i[a]?i[a]=[s,...i[a]]:i[a]=[s]});let c=0;for(let s in i)n(0,d[c]=i[s],d),c++}),[d,p]}class $e extends ie{constructor(t){super(),ae(this,t,Ze,ke,K,{})}}new $e({target:document.getElementById("app")});
