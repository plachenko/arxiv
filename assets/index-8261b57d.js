var ue=Object.defineProperty;var he=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(o){if(o.ep)return;o.ep=!0;const h=n(o);fetch(o.href,h)}})();function I(){}function ee(e){return e()}function R(){return Object.create(null)}function H(e){e.forEach(ee)}function te(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function S(){return G(" ")}function fe(){return G("")}function ae(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}let E;function O(e){E=e}function me(){if(!E)throw new Error("Function called outside component initialization");return E}function ge(e){me().$$.on_mount.push(e)}const j=[],z=[];let x=[];const F=[],ye=Promise.resolve();let B=!1;function ve(){B||(B=!0,ye.then(ie))}function X(e){x.push(e)}const M=new Set;let $=0;function ie(){if($!==0)return;const e=E;do{try{for(;$<j.length;){const t=j[$];$++,O(t),we(t.$$)}}catch(t){throw j.length=0,$=0,t}for(O(null),j.length=0,$=0;z.length;)z.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];M.has(n)||(M.add(n),n())}x.length=0}while(j.length);for(;F.length;)F.pop()();B=!1,M.clear(),O(e)}function we(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function be(e){const t=[],n=[];x.forEach(a=>e.indexOf(a)===-1?t.push(a):n.push(a)),n.forEach(a=>a()),x=t}const Y=new Set;let T;function D(){T={r:0,c:[],p:T}}function W(){T.r||H(T.c),T=T.p}function b(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function _(e,t,n,a){if(e&&e.o){if(Y.has(e))return;Y.add(e),T.c.push(()=>{Y.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function L(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ie(e){e&&e.c()}function se(e,t,n){const{fragment:a,after_update:o}=e.$$;a&&a.m(t,n),X(()=>{const h=e.$$.on_mount.map(ee).filter(te);e.$$.on_destroy?e.$$.on_destroy.push(...h):H(h),e.$$.on_mount=[]}),o.forEach(X)}function re(e,t){const n=e.$$;n.fragment!==null&&(be(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(j.push(e),ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,a,o,h,d,c=[-1]){const u=E;O(e);const l=e.$$={fragment:null,ctx:[],props:h,update:I,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:R(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};d&&d(l.root);let i=!1;if(l.ctx=n?n(e,t.props||{},(s,r,...p)=>{const f=p.length?p[0]:r;return l.ctx&&o(l.ctx[s],l.ctx[s]=f)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](f),i&&Te(e,s)),r}):[],l.update(),i=!0,H(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){const s=pe(t.target);l.fragment&&l.fragment.l(s),s.forEach(k)}else l.fragment&&l.fragment.c();t.intro&&b(e.$$.fragment),se(e,t.target,t.anchor),ie()}O(u)}class de{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){re(this,1),this.$destroy=I}$on(t,n){if(!te(n))return I;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const o=a.indexOf(n);o!==-1&&a.splice(o,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);function q(e){let t;return{c(){t=y("span"),t.textContent="(click to show)",v(t,"id","showTxt"),v(t,"class","svelte-1tudgk9")},m(n,a){A(n,t,a)},d(n){n&&k(t)}}}function ke(e){let t,n,a,o,h,d,c,u,l,i=!e[2]&&q();return{c(){t=y("div"),n=y("div"),n.textContent=`${e[4]}`,a=S(),o=y("div"),h=G(e[3]),d=S(),i&&i.c(),v(n,"class","date svelte-1tudgk9"),v(t,"class",c="post "+(e[0].thread=="cont"&&e[1]?"thread":"")+" "+(e[0].thread=="end"?"endThread":"")+" "+(e[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")},m(s,r){A(s,t,r),m(t,n),m(t,a),m(t,o),m(o,h),m(o,d),i&&i.m(o,null),u||(l=ae(t,"click",e[5]),u=!0)},p(s,[r]){r&8&&C(h,s[3]),s[2]?i&&(i.d(1),i=null):i||(i=q(),i.c(),i.m(o,null)),r&3&&c!==(c="post "+(s[0].thread=="cont"&&s[1]?"thread":"")+" "+(s[0].thread=="end"?"endThread":"")+" "+(s[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")&&v(t,"class",c)},i:I,o:I,d(s){s&&k(t),i&&i.d(),u=!1,l()}}}function Ze(e,t,n){let{post:a}=t,{idx:o}=t,h=new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(a.date)),d=!1,u=a.post.split(" ").map(i=>{let s="blah".split("").map(r=>Math.floor(Math.random()*20)>10?r.toUpperCase():r).join("");for(let r=0;r<Math.floor(i.length/4);r++)s+=s;return i.includes("...")?s+"...":i.includes(".")?s+".":i.includes("?")?s+"?":i.includes(",")?s+",":i.includes("!")?s+"!":s}).join(" ");function l(){n(3,u=a.post),n(2,d=!0)}return e.$$set=i=>{"post"in i&&n(0,a=i.post),"idx"in i&&n(1,o=i.idx)},[a,o,d,u,h,l]}class $e extends de{constructor(t){super(),le(this,t,Ze,ke,ne,{post:0,idx:1})}}const je=`[
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
`;function J(e,t,n){const a=e.slice();return a[6]=t[n],a}function K(e,t,n){const a=e.slice();return a[9]=t[n],a[11]=n,a}function xe(e){let t,n,a=L(e[0].reverse()),o=[];for(let d=0;d<a.length;d+=1)o[d]=Q(J(e,a,d));const h=d=>_(o[d],1,1,()=>{o[d]=null});return{c(){for(let d=0;d<o.length;d+=1)o[d].c();t=fe()},m(d,c){for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(d,c);A(d,t,c),n=!0},p(d,c){if(c&1){a=L(d[0].reverse());let u;for(u=0;u<a.length;u+=1){const l=J(d,a,u);o[u]?(o[u].p(l,c),b(o[u],1)):(o[u]=Q(l),o[u].c(),b(o[u],1),o[u].m(t.parentNode,t))}for(D(),u=a.length;u<o.length;u+=1)h(u);W()}},i(d){if(!n){for(let c=0;c<a.length;c+=1)b(o[c]);n=!0}},o(d){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)_(o[c]);n=!1},d(d){d&&k(t),oe(o,d)}}}function Ge(e){let t;return{c(){t=y("div"),t.innerHTML=`<p class="svelte-ij523l">This is an archive of a few old X (twitter) posts I made as <a href="https://www.twitter.com/dennylovesthis" class="svelte-ij523l">@dennylovesthis</a></p> <p class="svelte-ij523l">I&#39;ve archived them for personal retrieval but I don&#39;t feel as if any of
        these text based posts sparked inspiration or joy in me or anyone else--
        many started to seem like insencere verbal toilet content used to purge
        mental blocks and thrown into a void. That&#39;s why it felt right to &#39;blah&#39;
        them to remind myself and the world that words are meaningless and
        action is all there is.</p> <p class="svelte-ij523l">The source code to this site can be found <a href="https://www.github.com/plachenko/arxiv" class="svelte-ij523l">here</a>
        and the script I used to scrape old timeline posts (text only) can be found
        <a href="https://gist.github.com/plachenko/4a41777914699704a98ea47b3964099b" class="svelte-ij523l">here</a></p> <p class="svelte-ij523l">Thank you for reading these and I hope you have a great day!</p>`,v(t,"id","modal"),v(t,"class","svelte-ij523l")},m(n,a){A(n,t,a)},p:I,i:I,o:I,d(n){n&&k(t)}}}function V(e){let t,n;return t=new $e({props:{idx:e[11],post:e[9]}}),{c(){Ie(t.$$.fragment)},m(a,o){se(t,a,o),n=!0},p(a,o){const h={};o&1&&(h.post=a[9]),t.$set(h)},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){_(t.$$.fragment,a),n=!1},d(a){re(t,a)}}}function Q(e){let t,n,a,o=e[6][0].date.split(",")[0]+"",h,d,c,u,l=L(e[6]),i=[];for(let r=0;r<l.length;r+=1)i[r]=V(K(e,l,r));const s=r=>_(i[r],1,1,()=>{i[r]=null});return{c(){t=y("div"),n=y("div"),a=y("span"),h=G(o),d=S();for(let r=0;r<i.length;r+=1)i[r].c();c=S(),v(a,"class","svelte-ij523l"),v(n,"class","dateGroup svelte-ij523l")},m(r,p){A(r,t,p),m(t,n),m(n,a),m(a,h),m(t,d);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(t,null);m(t,c),u=!0},p(r,p){if((!u||p&1)&&o!==(o=r[6][0].date.split(",")[0]+"")&&C(h,o),p&1){l=L(r[6]);let f;for(f=0;f<l.length;f+=1){const w=K(r,l,f);i[f]?(i[f].p(w,p),b(i[f],1)):(i[f]=V(w),i[f].c(),b(i[f],1),i[f].m(t,c))}for(D(),f=l.length;f<i.length;f+=1)s(f);W()}},i(r){if(!u){for(let p=0;p<l.length;p+=1)b(i[p]);u=!0}},o(r){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)_(i[p]);u=!1},d(r){r&&k(t),oe(i,r)}}}function Se(e){let t,n,a,o,h,d,c,u,l,i,s,r,p;const f=[Ge,xe],w=[];function U(g,Z){return g[2]?0:1}return l=U(e),i=w[l]=f[l](e),{c(){t=y("main"),n=y("h1"),n.innerHTML='ar<span id="x" class="svelte-ij523l">X</span>iv',a=S(),o=y("span"),h=y("span"),d=G(e[1]),c=G(" characters thrown to a void -- what is happening!?"),u=S(),i.c(),v(h,"class","svelte-ij523l"),v(o,"id","void"),v(o,"class","svelte-ij523l")},m(g,Z){A(g,t,Z),m(t,n),m(t,a),m(t,o),m(o,h),m(h,d),m(o,c),m(t,u),w[l].m(t,null),s=!0,r||(p=ae(o,"click",e[3]),r=!0)},p(g,[Z]){(!s||Z&2)&&C(d,g[1]);let N=l;l=U(g),l===N?w[l].p(g,Z):(D(),_(w[N],1,1,()=>{w[N]=null}),W(),i=w[l],i?i.p(g,Z):(i=w[l]=f[l](g),i.c()),b(i,1),i.m(t,null))},i(g){s||(b(i),s=!0)},o(g){_(i),s=!1},d(g){g&&k(t),w[l].d(),r=!1,p()}}}function Ae(e,t,n){let a=[],o=[],h=[],d=0,c=!1;ge(l=>{a=[...JSON.parse(je)],a.sort((s,r)=>new Date(r.date)-new Date(s.date)),a.forEach(s=>{s.date=new Date(s.date).toLocaleString("en-US",{timeZone:"America/New_York"}),n(1,d+=s.post.length);const r=s.date.split(",")[0];o[r]?o[r]=[s,...o[r]]:o[r]=[s]});let i=0;for(let s in o)n(0,h[i]=o[s],h),i++});function u(){n(2,c=!c)}return[h,d,c,u]}class Oe extends de{constructor(t){super(),le(this,t,Ae,Se,ne,{})}}new Oe({target:document.getElementById("app")});
