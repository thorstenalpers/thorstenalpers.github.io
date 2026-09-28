import{a as e,n as t}from"./jsx-runtime-D3jfb0Ew.js";var n=e(t(),1),r=`theme`,i=`(() => {
	try {
		const stored = localStorage.getItem('${r}');
		const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.toggle('dark', dark);
	} catch {}
})();`;function a(e){let t=new MutationObserver(e);return t.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),()=>t.disconnect()}var o=()=>document.documentElement.classList.contains(`dark`)?`dark`:`light`;function s(){return(0,n.useSyncExternalStore)(a,o,()=>`light`)}function c(){let e=o()===`dark`?`light`:`dark`;document.documentElement.classList.toggle(`dark`,e===`dark`);try{localStorage.setItem(r,e)}catch{}}export{c as n,s as r,i as t};