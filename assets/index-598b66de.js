var Ge=Object.defineProperty;var Ee=(e,t,n)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(Ee(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function T(){}const K=e=>e;function he(e){return e()}function oe(){return Object.create(null)}function H(e){e.forEach(he)}function z(e){return typeof e=="function"}function ce(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ae(e){return Object.keys(e).length===0}const fe=typeof window<"u";let pe=fe?()=>window.performance.now():()=>Date.now(),V=fe?e=>requestAnimationFrame(e):T;const E=new Set;function me(e){E.forEach(t=>{t.c(e)||(E.delete(t),t.f())}),E.size!==0&&V(me)}function ge(e){let t;return E.size===0&&V(me),{promise:new Promise(n=>{E.add(t={c:e,f:n})}),abort(){E.delete(t)}}}function y(e,t){e.appendChild(t)}function ye(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Oe(e){const t=v("style");return t.textContent="/* empty */",He(ye(e),t),t.sheet}function He(e,t){return y(e.head||e,t),t.sheet}function N(e,t,n){e.insertBefore(t,n||null)}function Z(e){e.parentNode&&e.parentNode.removeChild(e)}function ve(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function O(){return L(" ")}function we(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function Q(e,t){t=""+t,e.data!==t&&(e.data=t)}function Pe(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const B=new Map;let D=0;function Ye(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Le(e,t){const n={stylesheet:Oe(t),rules:{}};return B.set(e,n),n}function be(e,t,n,i,a,r,d,f=0){const h=16.666/i;let s=`{
`;for(let w=0;w<=1;w+=h){const m=t+(n-t)*r(w);s+=w*100+`%{${d(m,1-m)}}
`}const o=s+`100% {${d(n,1-n)}}
}`,l=`__svelte_${Ye(o)}_${f}`,u=ye(e),{stylesheet:p,rules:c}=B.get(u)||Le(u,e);c[l]||(c[l]=!0,p.insertRule(`@keyframes ${l} ${o}`,p.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${l} ${i}ms linear ${a}ms 1 both`,D+=1,l}function q(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),a=n.length-i.length;a&&(e.style.animation=i.join(", "),D-=a,D||Me())}function Me(){V(()=>{D||(B.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&Z(t)}),B.clear())})}let M;function Y(e){M=e}function Ce(){if(!M)throw new Error("Function called outside component initialization");return M}function Be(e){Ce().$$.on_mount.push(e)}const G=[],ie=[];let A=[];const ae=[],De=Promise.resolve();let J=!1;function Re(){J||(J=!0,De.then(_e))}function x(e){A.push(e)}const F=new Set;let S=0;function _e(){if(S!==0)return;const e=M;do{try{for(;S<G.length;){const t=G[S];S++,Y(t),Xe(t.$$)}}catch(t){throw G.length=0,S=0,t}for(Y(null),G.length=0,S=0;ie.length;)ie.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];F.has(n)||(F.add(n),n())}A.length=0}while(G.length);for(;ae.length;)ae.pop()();J=!1,F.clear(),Y(e)}function Xe(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}function We(e){const t=[],n=[];A.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),A=t}let P;function Ie(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function R(e,t,n){e.dispatchEvent(Pe(`${t?"intro":"outro"}${n}`))}const C=new Set;let k;function ee(){k={r:0,c:[],p:k}}function te(){k.r||H(k.c),k=k.p}function I(e,t){e&&e.i&&(C.delete(e),e.i(t))}function j(e,t,n,i){if(e&&e.o){if(C.has(e))return;C.add(e),k.c.push(()=>{C.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Te={duration:0};function ke(e,t,n){const i={direction:"in"};let a=t(e,n,i),r=!1,d,f,h=0;function s(){d&&q(e,d)}function o(){const{delay:u=0,duration:p=300,easing:c=K,tick:g=T,css:w}=a||Te;w&&(d=be(e,0,1,p,u,c,w,h++)),g(0,1);const m=pe()+u,_=m+p;f&&f.abort(),r=!0,x(()=>R(e,!0,"start")),f=ge($=>{if(r){if($>=_)return g(1,0),R(e,!0,"end"),s(),r=!1;if($>=m){const ne=c(($-m)/p);g(ne,1-ne)}}return r})}let l=!1;return{start(){l||(l=!0,q(e),z(a)?(a=a(i),Ie().then(o)):o())},invalidate(){l=!1},end(){r&&(s(),r=!1)}}}function Ze(e,t,n){const i={direction:"out"};let a=t(e,n,i),r=!0,d;const f=k;f.r+=1;let h;function s(){const{delay:o=0,duration:l=300,easing:u=K,tick:p=T,css:c}=a||Te;c&&(d=be(e,1,0,l,o,u,c));const g=pe()+o,w=g+l;x(()=>R(e,!1,"start")),"inert"in e&&(h=e.inert,e.inert=!0),ge(m=>{if(r){if(m>=w)return p(0,1),R(e,!1,"end"),--f.r||H(f.c),!1;if(m>=g){const _=u((m-g)/l);p(1-_,_)}}return r})}return z(a)?Ie().then(()=>{a=a(i),s()}):s(),{end(o){o&&"inert"in e&&(e.inert=h),o&&a.tick&&a.tick(1,0),r&&(d&&q(e,d),r=!1)}}}function X(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ze(e){e&&e.c()}function $e(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),x(()=>{const r=e.$$.on_mount.map(he).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...r):H(r),e.$$.on_mount=[]}),a.forEach(x)}function xe(e,t){const n=e.$$;n.fragment!==null&&(We(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(G.push(e),Re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function je(e,t,n,i,a,r,d,f=[-1]){const h=M;Y(e);const s=e.$$={fragment:null,ctx:[],props:r,update:T,not_equal:a,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:t.target||h.$$.root};d&&d(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(l,u,...p)=>{const c=p.length?p[0]:u;return s.ctx&&a(s.ctx[l],s.ctx[l]=c)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](c),o&&Ue(e,l)),u}):[],s.update(),o=!0,H(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const l=Ne(t.target);s.fragment&&s.fragment.l(l),l.forEach(Z)}else s.fragment&&s.fragment.c();t.intro&&I(e.$$.fragment),$e(e,t.target,t.anchor),_e()}Y(h)}class Se{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){xe(this,1),this.$destroy=T}$on(t,n){if(!z(n))return T;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!Ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fe);function W(e,{delay:t=0,duration:n=400,easing:i=K}={}){const a=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:r=>`opacity: ${r*a}`}}function re(e){let t;return{c(){t=v("span"),t.textContent="(click to show)",b(t,"id","showTxt"),b(t,"class","svelte-1tudgk9")},m(n,i){N(n,t,i)},d(n){n&&Z(t)}}}function qe(e){let t,n,i,a,r,d,f,h,s,o=!e[2]&&re();return{c(){t=v("div"),n=v("div"),n.textContent=`${e[4]}`,i=O(),a=v("div"),r=L(e[3]),d=O(),o&&o.c(),b(n,"class","date svelte-1tudgk9"),b(t,"class",f="post "+(e[0].thread=="cont"&&e[1]?"thread":"")+" "+(e[0].thread=="end"?"endThread":"")+" "+(e[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")},m(l,u){N(l,t,u),y(t,n),y(t,i),y(t,a),y(a,r),y(a,d),o&&o.m(a,null),h||(s=we(t,"click",e[5]),h=!0)},p(l,[u]){u&8&&Q(r,l[3]),l[2]?o&&(o.d(1),o=null):o||(o=re(),o.c(),o.m(a,null)),u&3&&f!==(f="post "+(l[0].thread=="cont"&&l[1]?"thread":"")+" "+(l[0].thread=="end"?"endThread":"")+" "+(l[0].thread=="start"?"startThread":"")+" svelte-1tudgk9")&&b(t,"class",f)},i:T,o:T,d(l){l&&Z(t),o&&o.d(),h=!1,s()}}}function Je(e,t,n){let{post:i}=t,{idx:a}=t,r=new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(i.date)),d=!1,h=i.post.split(" ").map(o=>{let l="blah".split("").map(u=>Math.floor(Math.random()*20)>10?u.toUpperCase():u).join("");for(let u=0;u<Math.floor(o.length/4);u++)l+=l;return o.includes("...")?l+"...":o.includes(".")?l+".":o.includes("?")?l+"?":o.includes(",")?l+",":o.includes("!")?l+"!":l}).join(" ");function s(){n(3,h=i.post),n(2,d=!0)}return e.$$set=o=>{"post"in o&&n(0,i=o.post),"idx"in o&&n(1,a=o.idx)},[i,a,d,h,r,s]}class Ke extends Se{constructor(t){super(),je(this,t,Je,qe,ce,{post:0,idx:1})}}const Ve=`[
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
`;function se(e,t,n){const i=e.slice();return i[6]=t[n],i}function le(e,t,n){const i=e.slice();return i[9]=t[n],i[11]=n,i}function Qe(e){let t,n,i,a,r=X(e[0]),d=[];for(let h=0;h<r.length;h+=1)d[h]=ue(se(e,r,h));const f=h=>j(d[h],1,1,()=>{d[h]=null});return{c(){t=v("div");for(let h=0;h<d.length;h+=1)d[h].c()},m(h,s){N(h,t,s);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(t,null);a=!0},p(h,s){if(s&1){r=X(h[0]);let o;for(o=0;o<r.length;o+=1){const l=se(h,r,o);d[o]?(d[o].p(l,s),I(d[o],1)):(d[o]=ue(l),d[o].c(),I(d[o],1),d[o].m(t,null))}for(ee(),o=r.length;o<d.length;o+=1)f(o);te()}},i(h){if(!a){for(let s=0;s<r.length;s+=1)I(d[s]);h&&x(()=>{a&&(i&&i.end(1),n=ke(t,W,{delay:300,duration:250}),n.start())}),a=!0}},o(h){d=d.filter(Boolean);for(let s=0;s<d.length;s+=1)j(d[s]);n&&n.invalidate(),h&&(i=Ze(t,W,{duration:300})),a=!1},d(h){h&&Z(t),ve(d,h),h&&i&&i.end()}}}function et(e){let t,n,i,a;return{c(){t=v("div"),t.innerHTML=`<p class="svelte-ij523l">This is an archive of a few old X (twitter) posts I made as <a href="https://www.twitter.com/dennylovesthis" class="svelte-ij523l">@dennylovesthis</a></p> <p class="svelte-ij523l">I&#39;ve archived them for personal retrieval but I don&#39;t feel as if any of
        these text based posts sparked inspiration or joy in me or anyone else.
        That&#39;s why it felt right to &#39;blah&#39; them to remind myself and the world
        that action is more meaningful than words can ever be.</p> <p class="svelte-ij523l">The source code to this site can be found <a href="https://www.github.com/plachenko/arxiv" class="svelte-ij523l">here</a>
        and the script I used to scrape old timeline posts (text only) can be found
        <a href="https://gist.github.com/plachenko/4a41777914699704a98ea47b3964099b" class="svelte-ij523l">here</a></p> <p class="svelte-ij523l">Thank you for reading these and I hope you have a great day!</p>`,b(t,"id","modal"),b(t,"class","svelte-ij523l")},m(r,d){N(r,t,d),a=!0},p:T,i(r){a||(r&&x(()=>{a&&(i&&i.end(1),n=ke(t,W,{duration:400,delay:300}),n.start())}),a=!0)},o(r){n&&n.invalidate(),r&&(i=Ze(t,W,{duration:200})),a=!1},d(r){r&&Z(t),r&&i&&i.end()}}}function de(e){let t,n;return t=new Ke({props:{idx:e[11],post:e[9]}}),{c(){ze(t.$$.fragment)},m(i,a){$e(t,i,a),n=!0},p(i,a){const r={};a&1&&(r.post=i[9]),t.$set(r)},i(i){n||(I(t.$$.fragment,i),n=!0)},o(i){j(t.$$.fragment,i),n=!1},d(i){xe(t,i)}}}function ue(e){let t,n,i,a=e[6][0].date.split(",")[0]+"",r,d,f,h,s=X(e[6]),o=[];for(let u=0;u<s.length;u+=1)o[u]=de(le(e,s,u));const l=u=>j(o[u],1,1,()=>{o[u]=null});return{c(){t=v("div"),n=v("div"),i=v("span"),r=L(a),d=O();for(let u=0;u<o.length;u+=1)o[u].c();f=O(),b(i,"class","svelte-ij523l"),b(n,"class","dateGroup svelte-ij523l")},m(u,p){N(u,t,p),y(t,n),y(n,i),y(i,r),y(t,d);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(t,null);y(t,f),h=!0},p(u,p){if((!h||p&1)&&a!==(a=u[6][0].date.split(",")[0]+"")&&Q(r,a),p&1){s=X(u[6]);let c;for(c=0;c<s.length;c+=1){const g=le(u,s,c);o[c]?(o[c].p(g,p),I(o[c],1)):(o[c]=de(g),o[c].c(),I(o[c],1),o[c].m(t,f))}for(ee(),c=s.length;c<o.length;c+=1)l(c);te()}},i(u){if(!h){for(let p=0;p<s.length;p+=1)I(o[p]);h=!0}},o(u){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)j(o[p]);h=!1},d(u){u&&Z(t),ve(o,u)}}}function tt(e){let t,n,i,a,r,d,f,h,s,o,l,u,p;const c=[et,Qe],g=[];function w(m,_){return m[2]?0:1}return s=w(e),o=g[s]=c[s](e),{c(){t=v("main"),n=v("h1"),n.innerHTML='ar<span id="x" class="svelte-ij523l">X</span>iv',i=O(),a=v("span"),r=v("span"),d=L(e[1]),f=L(" characters thrown to a void -- what is happening!?"),h=O(),o.c(),b(r,"class","svelte-ij523l"),b(a,"id","void"),b(a,"class","svelte-ij523l")},m(m,_){N(m,t,_),y(t,n),y(t,i),y(t,a),y(a,r),y(r,d),y(a,f),y(t,h),g[s].m(t,null),l=!0,u||(p=we(a,"click",e[3]),u=!0)},p(m,[_]){(!l||_&2)&&Q(d,m[1]);let $=s;s=w(m),s===$?g[s].p(m,_):(ee(),j(g[$],1,1,()=>{g[$]=null}),te(),o=g[s],o?o.p(m,_):(o=g[s]=c[s](m),o.c()),I(o,1),o.m(t,null))},i(m){l||(I(o),l=!0)},o(m){j(o),l=!1},d(m){m&&Z(t),g[s].d(),u=!1,p()}}}function nt(e,t,n){let i=[],a=[],r=[],d=0,f=!1;Be(s=>{i=[...JSON.parse(Ve)],i.sort((l,u)=>new Date(u.date)-new Date(l.date)),i.forEach(l=>{l.date=new Date(l.date).toLocaleString("en-US",{timeZone:"America/New_York"}),n(1,d+=l.post.length);const u=l.date.split(",")[0];a[u]?a[u]=[l,...a[u]]:a[u]=[l]});let o=0;for(let l in a)n(0,r[o]=a[l],r),o++;r.reverse()});function h(){n(2,f=!f)}return[r,d,f,h]}class ot extends Se{constructor(t){super(),je(this,t,nt,tt,ce,{})}}new ot({target:document.getElementById("app")});
