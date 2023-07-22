var hljs=function(){"use strict";var t={exports:{}};function n(t){return t instanceof Map?t.clear=t.delete=t.set=()=>{throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{throw Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{e=t[e];"object"!=typeof e||Object.isFrozen(e)||n(e)}),t}t.exports=n,t.exports.default=n;class O{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function l(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach(e=>{for(const t in e)n[t]=e[t]}),n}const s=e=>!!e.scope||e.sublanguage&&e.language;class N{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){var t,n,a;s(e)&&(a="",a=e.sublanguage?"language-"+e.language:([e,t]=[e.scope,{prefix:this.classPrefix}["prefix"]],e.includes(".")?[""+t+(n=e.split(".")).shift(),...n.map((e,t)=>""+e+"_".repeat(t+1))].join(" "):""+t+e),this.span(a))}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const i=(e={})=>{var t={children:[]};return Object.assign(t,e),t};class r{constructor(){this.rootNode=i(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){e=i({scope:e});this.add(e),this.stack.push(e)}closeNode(){if(1<this.stack.length)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(t,e){return"string"==typeof e?t.addText(e):e.children&&(t.openNode(e),e.children.forEach(e=>this._walk(t,e)),t.closeNode(e)),t}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{r._collapse(e)}))}}class z extends r{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){e=e.root;e.sublanguage=!0,e.language=t,this.add(e)}toHTML(){return new N(this,this.options).value()}finalize(){return!0}}function c(e){return e?"string"==typeof e?e:e.source:null}function o(e){return d("(?=",e,")")}function H(e){return d("(?:",e,")*")}function P(e){return d("(?:",e,")?")}function d(...e){return e.map(e=>c(e)).join("")}function g(...e){var t,n="object"==typeof(t=(n=e)[n.length-1])&&t.constructor===Object?(n.splice(n.length-1,1),t):{};return"("+(n.capture?"":"?:")+e.map(e=>c(e)).join("|")+")"}function u(e){return RegExp(e.toString()+"|").exec("").length-1}const k=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function h(e,{joinWith:t}){let s=0;return e.map(e=>{var t=s+=1;let n=c(e),a="";for(;0<n.length;){const e=k.exec(n);if(!e){a+=n;break}a+=n.substring(0,e.index),n=n.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+(Number(e[1])+t):(a+=e[0],"("===e[0]&&s++)}return a}).map(e=>`(${e})`).join(t)}var e="[a-zA-Z]\\w*",p="[a-zA-Z_]\\w*",b="\\b\\d+(\\.\\d+)?",U="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",$="\\b(0b[01]+)",f={begin:"\\\\[\\s\\S]",relevance:0},F={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[f]},K={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[f]},m=(e,t,n={})=>{e=l({scope:"comment",begin:e,end:t,contains:[]},n),e.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0}),t=g("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return e.contains.push({begin:d(/[ ]+/,"(",t,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),e},G=m("//","$"),W=m("/\\*","\\*/"),q=m("#","$"),_=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:e,UNDERSCORE_IDENT_RE:p,NUMBER_RE:b,C_NUMBER_RE:U,BINARY_NUMBER_RE:$,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{var t=/^#![ ]*\//;return e.binary&&(e.begin=d(t,/.*\b/,e.binary,/\b.*/)),l({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:f,APOS_STRING_MODE:F,QUOTE_STRING_MODE:K,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:m,C_LINE_COMMENT_MODE:G,C_BLOCK_COMMENT_MODE:W,HASH_COMMENT_MODE:q,NUMBER_MODE:{scope:"number",begin:b,relevance:0},C_NUMBER_MODE:{scope:"number",begin:U,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:$,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[f,{begin:/\[/,end:/\]/,relevance:0,contains:[f]}]}]},TITLE_MODE:{scope:"title",begin:e,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:p,relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function Z(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}const X=(t,e)=>{if(t.beforeMatch){if(t.starts)throw Error("beforeMatch cannot be used with starts");var n=Object.assign({},t);Object.keys(t).forEach(e=>{delete t[e]}),t.keywords=n.keywords,t.begin=d(n.beforeMatch,o(n.begin)),t.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},t.relevance=0,delete n.beforeMatch}},V=["of","and","for","in","not","or","if","then","parent","list","value"];function Q(t,a,e="keyword"){const s=Object.create(null);return"string"==typeof t?n(e,t.split(" ")):Array.isArray(t)?n(e,t):Object.keys(t).forEach(e=>{Object.assign(s,Q(t[e],a,e))}),s;function n(n,e){(e=a?e.map(e=>e.toLowerCase()):e).forEach(e=>{var t,e=e.split("|");s[e[0]]=[n,(t=e[0],(e=e[1])?Number(e):(e=>V.includes(e.toLowerCase()))(t)?0:1)]})}}const J={},S=e=>{console.error(e)},Y=(e,...t)=>{console.log("WARN: "+e,...t)},E=(e,t)=>{J[e+"/"+t]||(console.log(`Deprecated as of ${e}. `+t),J[e+"/"+t]=!0)},y=Error();function ee(e,t,{key:n}){let a=0;var s=e[n],i={},r={};for(let e=1;e<=t.length;e++)r[e+a]=s[e],i[e+a]=!0,a+=u(t[e-1]);e[n]=r,e[n]._emit=i,e[n]._multi=!0}function te(i){function r(e,t){return RegExp(c(e),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=u(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);var e=this.regexes.map(e=>e[1]);this.matcherRe=r(h(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;var t,n,e=this.matcherRe.exec(e);return e?(t=e.findIndex((e,t)=>0<t&&void 0!==e),n=this.matchIndexes[t],e.splice(0,t),Object.assign(e,n)):null}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&(!n||n.index!==this.lastIndex)){const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count)&&this.considerAll(),n}}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=l(i.classNameAliases||{}),function t(n,a){const s=n;if(!n.isCompiled){[function(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)},function(e,t){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}},function(e){if((t=e).scope&&"object"==typeof t.scope&&null!==t.scope&&(t.beginScope=t.scope,delete t.scope),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),t=e,Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw S("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),y;if("object"!=typeof t.beginScope||null===t.beginScope)throw S("beginScope must be object"),y;ee(t,t.begin,{key:"beginScope"}),t.begin=h(t.begin,{joinWith:""})}var t=e;if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw S("skip, excludeEnd, returnEnd not compatible with endScope: {}"),y;if("object"!=typeof t.endScope||null===t.endScope)throw S("endScope must be object"),y;ee(t,t.end,{key:"endScope"}),t.end=h(t.end,{joinWith:""})}},X].forEach(e=>e(n,a)),i.compilerExtensions.forEach(e=>e(n,a)),n.__beforeBegin=null,[function(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Z,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance)&&(e.relevance=0)},function(e,t){Array.isArray(e.illegal)&&(e.illegal=g(...e.illegal))},function(e,t){void 0===e.relevance&&(e.relevance=1)}].forEach(e=>e(n,a)),n.isCompiled=!0;let e=null;"object"==typeof n.keywords&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),e=n.keywords.$pattern,delete n.keywords.$pattern),e=e||/\w+/,n.keywords&&(n.keywords=Q(n.keywords,i.case_insensitive)),s.keywordPatternRe=r(e,!0),a&&(n.begin||(n.begin=/\B|\b/),s.beginRe=r(s.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(s.endRe=r(s.end)),s.terminatorEnd=c(s.end)||"",n.endsWithParent)&&a.terminatorEnd&&(s.terminatorEnd+=(n.end?"|":"")+a.terminatorEnd),n.illegal&&(s.illegalRe=r(n.illegal)),n.contains||(n.contains=[]),n.contains=[].concat(...n.contains.map(e=>{return(t="self"===e?n:e).variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(e=>l(t,{variants:null},e))),t.cachedVariants||(function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(t)?l(t,{starts:t.starts?l(t.starts):null}):Object.isFrozen(t)?l(t):t);var t})),n.contains.forEach(e=>{t(e,s)}),n.starts&&t(n.starts,a),s.matcher=(e=>{const t=new o;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(s)}return s}(i)}class ne extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const M=a,ae=l,se=Symbol("nomatch");{var w={};const j=Object.create(null),L=Object.create(null),D=[];let N=!0;const B="Could not find the language '{}', did you forget to load/include a language module?",C={disableAutodetect:!0,name:"Plain text",contains:[]};let k={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function ie(e){return k.noHighlightRe.test(e)}function re(e,t,n){let a="",s="";"object"==typeof t?(a=e,n=t.ignoreIllegals,s=t.language):(E("10.7.0","highlight(lang, code, ...args) has been deprecated."),E("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),s=e,a=t),void 0===n&&(n=!0);e={code:a,language:s},T("before:highlight",e),t=e.result||R(e.language,e.code,n);return t.code=e.code,T("after:highlight",t),t}function R(o,l,c,e){const r=Object.create(null);function i(){if(!b.keywords)return m.addText(E);let e=0,t=(b.keywordPatternRe.lastIndex=0,b.keywordPatternRe.exec(E)),n="";for(;t;){n+=E.substring(e,t.index);var a=p.case_insensitive?t[0].toLowerCase():t[0],s=(i=a,b.keywords[i]);if(s){const[e,i]=s;if(m.addText(n),n="",r[a]=(r[a]||0)+1,r[a]<=7&&(y+=i),e.startsWith("_"))n+=t[0];else{const n=p.classNameAliases[e]||e;m.addKeyword(t[0],n)}}else n+=t[0];e=b.keywordPatternRe.lastIndex,t=b.keywordPatternRe.exec(E)}var i;n+=E.substring(e),m.addText(n)}function d(){(null!=b.subLanguage?()=>{if(""!==E){let e=null;if("string"==typeof b.subLanguage){if(!j[b.subLanguage])return void m.addText(E);e=R(b.subLanguage,E,!0,f[b.subLanguage]),f[b.subLanguage]=e._top}else e=A(E,b.subLanguage.length?b.subLanguage:null);0<b.relevance&&(y+=e.relevance),m.addSublanguage(e._emitter,e.language)}}:i)(),E=""}function s(e,t){let n=1;const a=t.length-1;for(;n<=a;){if(e._emit[n]){const a=p.classNameAliases[e[n]]||e[n],s=t[n];a?m.addKeyword(s,a):(E=s,i(),E="")}n++}}function g(e,t){e.scope&&"string"==typeof e.scope&&m.openNode(p.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m.addKeyword(E,p.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),E=""):e.beginScope._multi&&(s(e.beginScope,t),E="")),b=Object.create(e,{parent:{value:b}})}function u(e){var t=e[0],n=l.substring(e.index),a=function e(t,n,a){let s=(e=>(e=e&&e.exec(a))&&0===e.index)(t.endRe);if(s){if(t["on:end"]){const a=new O(t);t["on:end"](n,a),a.isMatchIgnored&&(s=!1)}if(s){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,n,a)}(b,e,n);if(!a)return se;n=b;for(b.endScope&&b.endScope._wrap?(d(),m.addKeyword(t,b.endScope._wrap)):b.endScope&&b.endScope._multi?(d(),s(b.endScope,e)):n.skip?E+=t:(n.returnEnd||n.excludeEnd||(E+=t),d(),n.excludeEnd&&(E=t));b.scope&&m.closeNode(),b.skip||b.subLanguage||(y+=b.relevance),(b=b.parent)!==a.parent;);return a.starts&&g(a.starts,e),n.returnEnd?0:t.length}let h={};function t(e,t){var n=t&&t[0];if(E+=e,null==n)return d(),0;if("begin"===h.type&&"end"===t.type&&h.index===t.index&&""===n){if(E+=l.slice(t.index,t.index+1),N)return 1;{const l=Error(`0 width match regex (${o})`);throw l.languageName=o,l.badRule=h.rule,l}}if("begin"===(h=t).type){var a,s=t,i=s[0],e=s.rule,r=new O(e);for(const O of[e.__beforeBegin,e["on:begin"]])if(O&&(O(s,r),r.isMatchIgnored))return a=i,0===b.matcher.regexIndex?(E+=a[0],1):(v=!0,0);return e.skip?E+=i:(e.excludeBegin&&(E+=i),d(),e.returnBegin||e.excludeBegin||(E=i)),g(e,s),e.returnBegin?0:i.length}if("illegal"===t.type&&!c){const o=Error('Illegal lexeme "'+n+'" for mode "'+(b.scope||"<unnamed>")+'"');throw o.mode=b,o}if("end"===t.type){const o=u(t);if(o!==se)return o}if("illegal"===t.type&&""===n)return 1;if(1e5<x&&x>3*t.index)throw Error("potential infinite loop, way more iterations than matches");return E+=n,n.length}const p=I(o);if(!p)throw S(B.replace("{}",o)),Error('Unknown language: "'+o+'"');var n=te(p);let a="",b=e||n;const f={},m=new k.__emitter(k);var _=[];for(let e=b;e!==p;e=e.parent)e.scope&&_.unshift(e.scope);_.forEach(e=>m.openNode(e));let E="",y=0,w=0,x=0,v=!1;try{for(b.matcher.considerAll();;){x++,v?v=!1:b.matcher.considerAll(),b.matcher.lastIndex=w;const o=b.matcher.exec(l);if(!o)break;const O=t(l.substring(w,o.index),o);w=o.index+O}return t(l.substring(w)),m.closeAllNodes(),m.finalize(),a=m.toHTML(),{language:o,value:a,relevance:y,illegal:!1,_emitter:m,_top:b}}catch(e){if(e.message&&e.message.includes("Illegal"))return{language:o,value:M(l),illegal:!0,relevance:0,_illegalBy:{message:e.message,index:w,context:l.slice(w-100,w+100),mode:e.mode,resultSoFar:a},_emitter:m};if(N)return{language:o,value:M(l),illegal:!1,relevance:0,errorRaised:e,_emitter:m,_top:b};throw e}}function A(t,e){e=e||k.languages||Object.keys(j);n=t,(a={value:M(n),illegal:!1,relevance:0,_top:C,_emitter:new k.__emitter(k)})._emitter.addText(n);var n=a,a=e.filter(I).filter(le).map(e=>R(e,t,!1)),e=(a.unshift(n),a.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(I(e.language).supersetOf===t.language)return 1;if(I(t.language).supersetOf===e.language)return-1}return 0})),[n,a]=e,e=n;return e.secondBest=a,e}function x(e){var t=(e=>{let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";var n=k.languageDetectRe.exec(t);if(n){const t=I(n[1]);return t||(Y(B.replace("{}",n[1])),Y("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>ie(e)||I(e))})(e);if(!ie(t)){if(T("before:highlightElement",{el:e,language:t}),0<e.children.length&&(k.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),k.throwUnescapedHTML))throw new ne("One of your code blocks includes unescaped HTML.",e.innerHTML);var n=e.textContent,a=t?re(n,{language:t,ignoreIllegals:!0}):A(n),s=(e.innerHTML=a.value,e),i=a.language;t=t&&L[t]||i,s.classList.add("hljs"),s.classList.add("language-"+t),e.result={language:a.language,re:a.relevance,relevance:a.relevance},a.secondBest&&(e.secondBest={language:a.secondBest.language,relevance:a.secondBest.relevance}),T("after:highlightElement",{el:e,result:a,text:n})}}let e=!1;function v(){"loading"!==document.readyState?document.querySelectorAll(k.cssSelector).forEach(x):e=!0}function I(e){return e=(e||"").toLowerCase(),j[e]||j[L[e]]}function oe(e,{languageName:t}){(e="string"==typeof e?[e]:e).forEach(e=>{L[e.toLowerCase()]=t})}function le(e){e=I(e);return e&&!e.disableAutodetect}function T(e,t){const n=e;D.forEach(e=>{e[n]&&e[n](t)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",()=>{e&&v()},!1),Object.assign(w,{highlight:re,highlightAuto:A,highlightAll:v,highlightElement:x,highlightBlock:e=>(E("10.7.0","highlightBlock will be removed entirely in v12.0"),E("10.7.0","Please use highlightElement now."),x(e)),configure:e=>{k=ae(k,e)},initHighlighting:()=>{v(),E("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:()=>{v(),E("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:(t,e)=>{let n=null;try{n=e(w)}catch(e){if(S("Language definition for '{}' could not be registered.".replace("{}",t)),!N)throw e;S(e),n=C}n.name||(n.name=t),(j[t]=n).rawDefinition=e.bind(null,w),n.aliases&&oe(n.aliases,{languageName:t})},unregisterLanguage:e=>{delete j[e];for(const t of Object.keys(L))L[t]===e&&delete L[t]},listLanguages:()=>Object.keys(j),getLanguage:I,registerAliases:oe,autoDetection:le,inherit:ae,addPlugin:e=>{var t;(t=e)["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=e=>{t["before:highlightBlock"](Object.assign({block:e.el},e))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=e=>{t["after:highlightBlock"](Object.assign({block:e.el},e))}),D.push(e)}}),w.debugMode=()=>{N=!1},w.safeMode=()=>{N=!0},w.versionString="11.7.0",w.regex={concat:d,lookahead:o,either:g,optional:P,anyNumberOfTimes:H};for(const w in _)"object"==typeof _[w]&&t.exports(_[w]);return Object.assign(w,_),w}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs),hljs.registerLanguage("plaintext",e=>({name:"Plain text",aliases:["text","txt"],disableAutodetect:!0})),(()=>{var e=(()=>{"use strict";return e=>{var t=e.regex,n={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]},t=(Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]}),{className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}),a={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,t]},t=(t.contains.push(s),{begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]}),i=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),r={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[i,e.SHEBANG(),r,t,e.HASH_COMMENT_MODE,a,{match:/(\/[a-z._-]+)+/},s,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}})();hljs.registerLanguage("bash",e)})(),hljs.registerLanguage("wasm",e=>{e.regex;var t=e.COMMENT(/\(;/,/;\)/);return t.contains.push("self"),{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,keyword:["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"]},contains:[e.COMMENT(/;;/,/$/),t,{match:[/(?:offset|align)/,/\s*/,/=/],className:{1:"keyword",3:"operator"}},{className:"variable",begin:/\$[\w_]+/},{match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},{begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",3:"title.function"}},e.QUOTE_STRING_MODE,{match:/(i32|i64|f32|f64)(?!\.)/,className:"type"},{className:"keyword",match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/},{className:"number",relevance:0,match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/}]}}),hljs.registerLanguage("rust",e=>{var t=e.regex,t={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let\b)/,e.IDENT_RE,t.lookahead(/\s*\(/))},n="([ui](8|16|32|64|128|size)|f(32|64))?",a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:s,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:a},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{begin:"\\b0x([A-Fa-f0-9_]+)"+n},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{keyword:"Self",built_in:a,type:s}},{className:"punctuation",begin:"->"},t]}}),hljs.registerLanguage("ini",e=>{var t=e.regex,n={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},a=e.COMMENT(),s=(a.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}],{className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]}),i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},e={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},r={begin:/\[/,end:/\]/,contains:[a,i,s,e,n,"self"],relevance:0},o=t.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[a,{className:"section",begin:/\[+/,end:/\]+/},{begin:t.concat(o,"(\\s*\\.\\s*",o,")*",t.lookahead(/\s*=\s*[^#\s]/)),className:"attr",starts:{end:/$/,contains:[a,r,i,s,e,n]}}]}});
