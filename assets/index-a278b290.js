var ae=Object.defineProperty;var ie=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(ie(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Z(){}function U(e){return e()}function L(){return Object.create(null)}function x(e){e.forEach(U)}function D(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function re(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function J(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function G(){return N(" ")}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.data!==t&&(e.data=t)}let k;function _(e){k=e}function le(){if(!k)throw new Error("Function called outside component initialization");return k}function de(e){le().$$.on_mount.push(e)}const b=[],z=[];let I=[];const M=[],ue=Promise.resolve();let E=!1;function he(){E||(E=!0,ue.then(R))}function H(e){I.push(e)}const Y=new Set;let w=0;function R(){if(w!==0)return;const e=k;do{try{for(;w<b.length;){const t=b[w];w++,_(t),ce(t.$$)}}catch(t){throw b.length=0,w=0,t}for(_(null),b.length=0,w=0;z.length;)z.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];Y.has(n)||(Y.add(n),n())}I.length=0}while(b.length);for(;M.length;)M.pop()();E=!1,Y.clear(),_(e)}function ce(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function fe(e){const t=[],n=[];I.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),I=t}const j=new Set;let v;function V(){v={r:0,c:[],p:v}}function Q(){v.r||x(v.c),v=v.p}function y(e,t){e&&e.i&&(j.delete(e),e.i(t))}function $(e,t,n,o){if(e&&e.o){if(j.has(e))return;j.add(e),v.c.push(()=>{j.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function S(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function pe(e){e&&e.c()}function ee(e,t,n){const{fragment:o,after_update:a}=e.$$;o&&o.m(t,n),H(()=>{const l=e.$$.on_mount.map(U).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...l):x(l),e.$$.on_mount=[]}),a.forEach(H)}function te(e,t){const n=e.$$;n.fragment!==null&&(fe(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(b.push(e),he(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,o,a,l,d,f=[-1]){const i=k;_(e);const r=e.$$={fragment:null,ctx:[],props:l,update:Z,not_equal:a,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:L(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};d&&d(r.root);let s=!1;if(r.ctx=n?n(e,t.props||{},(p,u,...c)=>{const h=c.length?c[0]:u;return r.ctx&&a(r.ctx[p],r.ctx[p]=h)&&(!r.skip_bound&&r.bound[p]&&r.bound[p](h),s&&me(e,p)),u}):[],r.update(),s=!0,x(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const p=se(t.target);r.fragment&&r.fragment.l(p),p.forEach(O)}else r.fragment&&r.fragment.c();t.intro&&y(e.$$.fragment),ee(e,t.target,t.anchor),R()}_(i)}class oe{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){te(this,1),this.$destroy=Z}$on(t,n){if(!D(n))return Z;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ge="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ge);function ye(e){let t,n,o,a,l=e[0].post+"",d,f;return{c(){t=g("div"),n=g("div"),n.textContent=`${e[1]}`,o=G(),a=g("div"),d=N(l),T(n,"class","date svelte-zqj2w8"),T(t,"class",f="post "+(e[0].thread?"thread":"")+" svelte-zqj2w8")},m(i,r){P(i,t,r),m(t,n),m(t,o),m(t,a),m(a,d)},p(i,[r]){r&1&&l!==(l=i[0].post+"")&&K(d,l),r&1&&f!==(f="post "+(i[0].thread?"thread":"")+" svelte-zqj2w8")&&T(t,"class",f)},i:Z,o:Z,d(i){i&&O(t)}}}function ve(e,t,n){let{post:o}=t,a=new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(o.date));return e.$$set=l=>{"post"in l&&n(0,o=l.post)},[o,a]}class we extends oe{constructor(t){super(),ne(this,t,ve,ye,F,{post:0})}}const be=`[
    {
        "id": "1695376459240460445",
        "thread": "end",
        "date": "2023-08-26T10:03:41.000Z",
        "post": "Saying no brings me torment. There are characters that are demanding a voice but I cant let them out anymore. No one wants them. But I cant forget them because theyre knocking things over and I simply cant focus. The internal screaming has been a lot! I love you all!"
    },
    {
        "id": "1695374322951434387",
        "thread": null,
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
        "thread": "cont",
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
        "thread": "cont",
        "date": "2023-08-25T04:07:54.000Z",
        "post": "Sometimes it's extremely emotional for me to see the things I've inspired from extremely talented artists and content creators. I've also inspired creative abuse. It's given me the gift to cry on demand. But where am I going? What was I doing..."
    },
    {
        "id": "1694922381062488277",
        "thread": "cont",
        "date": "2023-08-25T03:59:20.000Z",
        "post": "I'm honored that I've inspired so much creativity over the years from multiple creators. It's such a blessing to see. Thank you all!"
    },
    {
        "id": "1694921957542707651",
        "thread": null,
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
        "thread": null,
        "date": "2023-08-06T16:56:11.000Z",
        "post": "\\"This content is so boring that i have to pay you to watch.\\" This is my future."
    },
    {
        "id": "1688231777758785536",
        "thread": null,
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
        "thread": null,
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
        "thread": null,
        "date": "2023-08-05T08:22:08.000Z",
        "post": "Fact is you could be doing 'stuff' all day but it's mostly meaningless without true intention. It stunts growth to do meaningless stuff that you'll never build on. It means you're not excited-- you're just doing it to act like it's work. It's just a waste of talent with no sight"
    },
    {
        "id": "1687738852796940289",
        "thread": null,
        "date": "2023-08-05T08:14:33.000Z",
        "post": "You don't need my help. You don't need anyone. You're the only person who can help you most. That starts with good morning routines and better daily habits. I'm not the best at it but I've been making sure no one gets into my morning. Only me. I sleep with the intention to learn."
    },
    {
        "id": "1687737544870334465",
        "thread": null,
        "date": "2023-08-05T08:09:22.000Z",
        "post": "I can't stress how important it is that it stops. You have to forget. Otherwise I can't move on. You can't sort of kind of want to remember. You have to fully commit to forgetting. If time is meaningless memory is everything. You're still hurting me for no reason. I can't help."
    },
    {
        "id": "1687734900302979073",
        "thread": null,
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
        "thread": null,
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
        "thread": "cont",
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
        "thread": "cont",
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
        "thread": null,
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
        "thread": "cont",
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
        "thread": null,
        "date": "2023-07-22T11:14:23.000Z",
        "post": "i want to spread positivity and love. Its so hard for me..."
    },
    {
        "id": "1677766457243967490",
        "thread": null,
        "date": "2023-07-08T19:47:49.000Z",
        "post": "Hey twitter. Hope yall are having a great day!"
    }
]`;function X(e,t,n){const o=e.slice();return o[3]=t[n],o}function W(e,t,n){const o=e.slice();return o[6]=t[n],o}function q(e){let t,n;return t=new we({props:{post:e[6]}}),{c(){pe(t.$$.fragment)},m(o,a){ee(t,o,a),n=!0},p(o,a){const l={};a&1&&(l.post=o[6]),t.$set(l)},i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){$(t.$$.fragment,o),n=!1},d(o){te(t,o)}}}function C(e){let t,n,o,a=e[3][0].date.split(",")[0]+"",l,d,f,i,r=S(e[3]),s=[];for(let u=0;u<r.length;u+=1)s[u]=q(W(e,r,u));const p=u=>$(s[u],1,1,()=>{s[u]=null});return{c(){t=g("div"),n=g("div"),o=g("span"),l=N(a),d=G();for(let u=0;u<s.length;u+=1)s[u].c();f=G(),T(o,"class","svelte-z157bo"),T(n,"class","dateGroup svelte-z157bo")},m(u,c){P(u,t,c),m(t,n),m(n,o),m(o,l),m(t,d);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(t,null);m(t,f),i=!0},p(u,c){if((!i||c&1)&&a!==(a=u[3][0].date.split(",")[0]+"")&&K(l,a),c&1){r=S(u[3]);let h;for(h=0;h<r.length;h+=1){const B=W(u,r,h);s[h]?(s[h].p(B,c),y(s[h],1)):(s[h]=q(B),s[h].c(),y(s[h],1),s[h].m(t,f))}for(V(),h=r.length;h<s.length;h+=1)p(h);Q()}},i(u){if(!i){for(let c=0;c<r.length;c+=1)y(s[c]);i=!0}},o(u){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);i=!1},d(u){u&&O(t),J(s,u)}}}function Ie(e){let t,n,o,a,l=S(e[0].reverse()),d=[];for(let i=0;i<l.length;i+=1)d[i]=C(X(e,l,i));const f=i=>$(d[i],1,1,()=>{d[i]=null});return{c(){t=g("main"),n=g("h1"),n.innerHTML='ar<span id="x" class="svelte-z157bo">X</span>iv',o=G();for(let i=0;i<d.length;i+=1)d[i].c()},m(i,r){P(i,t,r),m(t,n),m(t,o);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(t,null);a=!0},p(i,[r]){if(r&1){l=S(i[0].reverse());let s;for(s=0;s<l.length;s+=1){const p=X(i,l,s);d[s]?(d[s].p(p,r),y(d[s],1)):(d[s]=C(p),d[s].c(),y(d[s],1),d[s].m(t,null))}for(V(),s=l.length;s<d.length;s+=1)f(s);Q()}},i(i){if(!a){for(let r=0;r<l.length;r+=1)y(d[r]);a=!0}},o(i){d=d.filter(Boolean);for(let r=0;r<d.length;r+=1)$(d[r]);a=!1},d(i){i&&O(t),J(d,i)}}}function Te(e,t,n){let o=[],a=[],l=[];return de(d=>{o=[...JSON.parse(be)],o.forEach(i=>{i.date=new Date(i.date).toLocaleString("en-US",{timeZone:"America/New_York"});const r=i.date.split(",")[0];a[r]?a[r]=[i,...a[r]]:a[r]=[i]});let f=0;for(let i in a)n(0,l[f]=a[i],l),f++}),[l]}class _e extends oe{constructor(t){super(),ne(this,t,Te,Ie,F,{})}}new _e({target:document.getElementById("app")});
