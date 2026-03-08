(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Cf={exports:{}},ia={},bf={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Dx(){if(ng)return pt;ng=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(I,le,Ie){this.props=I,this.context=le,this.refs=E,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,le){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,le,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=S.prototype;function N(I,le,Ie){this.props=I,this.context=le,this.refs=E,this.updater=Ie||y}var D=N.prototype=new x;D.constructor=N,M(D,S.prototype),D.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function G(I,le,Ie){var ee,ce={},he=null,_e=null;if(le!=null)for(ee in le.ref!==void 0&&(_e=le.ref),le.key!==void 0&&(he=""+le.key),le)V.call(le,ee)&&!U.hasOwnProperty(ee)&&(ce[ee]=le[ee]);var we=arguments.length-2;if(we===1)ce.children=Ie;else if(1<we){for(var Pe=Array(we),je=0;je<we;je++)Pe[je]=arguments[je+2];ce.children=Pe}if(I&&I.defaultProps)for(ee in we=I.defaultProps,we)ce[ee]===void 0&&(ce[ee]=we[ee]);return{$$typeof:i,type:I,key:he,ref:_e,props:ce,_owner:F.current}}function C(I,le){return{$$typeof:i,type:I.type,key:le,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function k(I){var le={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return le[Ie]})}var X=/\/+/g;function B(I,le){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):le.toString(36)}function ie(I,le,Ie,ee,ce){var he=typeof I;(he==="undefined"||he==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(he){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case i:case e:_e=!0}}if(_e)return _e=I,ce=ce(_e),I=ee===""?"."+B(_e,0):ee,b(ce)?(Ie="",I!=null&&(Ie=I.replace(X,"$&/")+"/"),ie(ce,le,Ie,"",function(je){return je})):ce!=null&&(A(ce)&&(ce=C(ce,Ie+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace(X,"$&/")+"/")+I)),le.push(ce)),1;if(_e=0,ee=ee===""?".":ee+":",b(I))for(var we=0;we<I.length;we++){he=I[we];var Pe=ee+B(he,we);_e+=ie(he,le,Ie,Pe,ce)}else if(Pe=v(I),typeof Pe=="function")for(I=Pe.call(I),we=0;!(he=I.next()).done;)he=he.value,Pe=ee+B(he,we++),_e+=ie(he,le,Ie,Pe,ce);else if(he==="object")throw le=String(I),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return _e}function ue(I,le,Ie){if(I==null)return I;var ee=[],ce=0;return ie(I,ee,"","",function(he){return le.call(Ie,he,ce++)}),ee}function ne(I){if(I._status===-1){var le=I._result;le=le(),le.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=le)}if(I._status===1)return I._result.default;throw I._result}var oe={current:null},O={transition:null},ae={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:O,ReactCurrentOwner:F};function Q(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(I,le,Ie){ue(I,function(){le.apply(this,arguments)},Ie)},count:function(I){var le=0;return ue(I,function(){le++}),le},toArray:function(I){return ue(I,function(le){return le})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},pt.Component=S,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=N,pt.StrictMode=s,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=Q,pt.cloneElement=function(I,le,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=M({},I.props),ce=I.key,he=I.ref,_e=I._owner;if(le!=null){if(le.ref!==void 0&&(he=le.ref,_e=F.current),le.key!==void 0&&(ce=""+le.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Pe in le)V.call(le,Pe)&&!U.hasOwnProperty(Pe)&&(ee[Pe]=le[Pe]===void 0&&we!==void 0?we[Pe]:le[Pe])}var Pe=arguments.length-2;if(Pe===1)ee.children=Ie;else if(1<Pe){we=Array(Pe);for(var je=0;je<Pe;je++)we[je]=arguments[je+2];ee.children=we}return{$$typeof:i,type:I.type,key:ce,ref:he,props:ee,_owner:_e}},pt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},pt.createElement=G,pt.createFactory=function(I){var le=G.bind(null,I);return le.type=I,le},pt.createRef=function(){return{current:null}},pt.forwardRef=function(I){return{$$typeof:f,render:I}},pt.isValidElement=A,pt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ne}},pt.memo=function(I,le){return{$$typeof:d,type:I,compare:le===void 0?null:le}},pt.startTransition=function(I){var le=O.transition;O.transition={};try{I()}finally{O.transition=le}},pt.unstable_act=Q,pt.useCallback=function(I,le){return oe.current.useCallback(I,le)},pt.useContext=function(I){return oe.current.useContext(I)},pt.useDebugValue=function(){},pt.useDeferredValue=function(I){return oe.current.useDeferredValue(I)},pt.useEffect=function(I,le){return oe.current.useEffect(I,le)},pt.useId=function(){return oe.current.useId()},pt.useImperativeHandle=function(I,le,Ie){return oe.current.useImperativeHandle(I,le,Ie)},pt.useInsertionEffect=function(I,le){return oe.current.useInsertionEffect(I,le)},pt.useLayoutEffect=function(I,le){return oe.current.useLayoutEffect(I,le)},pt.useMemo=function(I,le){return oe.current.useMemo(I,le)},pt.useReducer=function(I,le,Ie){return oe.current.useReducer(I,le,Ie)},pt.useRef=function(I){return oe.current.useRef(I)},pt.useState=function(I){return oe.current.useState(I)},pt.useSyncExternalStore=function(I,le,Ie){return oe.current.useSyncExternalStore(I,le,Ie)},pt.useTransition=function(){return oe.current.useTransition()},pt.version="18.3.1",pt}var ig;function dd(){return ig||(ig=1,bf.exports=Dx()),bf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Lx(){if(rg)return ia;rg=1;var i=dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,d){var m,_={},v=null,y=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(y=h.ref);for(m in h)s.call(h,m)&&!l.hasOwnProperty(m)&&(_[m]=h[m]);if(f&&f.defaultProps)for(m in h=f.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:f,key:v,ref:y,props:_,_owner:o.current}}return ia.Fragment=t,ia.jsx=c,ia.jsxs=c,ia}var sg;function Nx(){return sg||(sg=1,Cf.exports=Lx()),Cf.exports}var at=Nx(),bt=dd(),Il={},Pf={exports:{}},Nn={},Df={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Ix(){return og||(og=1,(function(i){function e(O,ae){var Q=O.length;O.push(ae);e:for(;0<Q;){var I=Q-1>>>1,le=O[I];if(0<o(le,ae))O[I]=ae,O[Q]=le,Q=I;else break e}}function t(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var ae=O[0],Q=O.pop();if(Q!==ae){O[0]=Q;e:for(var I=0,le=O.length,Ie=le>>>1;I<Ie;){var ee=2*(I+1)-1,ce=O[ee],he=ee+1,_e=O[he];if(0>o(ce,Q))he<le&&0>o(_e,ce)?(O[I]=_e,O[he]=Q,I=he):(O[I]=ce,O[ee]=Q,I=ee);else if(he<le&&0>o(_e,Q))O[I]=_e,O[he]=Q,I=he;else break e}}return ae}function o(O,ae){var Q=O.sortIndex-ae.sortIndex;return Q!==0?Q:O.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var h=[],d=[],m=1,_=null,v=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(O){for(var ae=t(d);ae!==null;){if(ae.callback===null)s(d);else if(ae.startTime<=O)s(d),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(d)}}function b(O){if(E=!1,D(O),!M)if(t(h)!==null)M=!0,ne(V);else{var ae=t(d);ae!==null&&oe(b,ae.startTime-O)}}function V(O,ae){M=!1,E&&(E=!1,x(G),G=-1),y=!0;var Q=v;try{for(D(ae),_=t(h);_!==null&&(!(_.expirationTime>ae)||O&&!k());){var I=_.callback;if(typeof I=="function"){_.callback=null,v=_.priorityLevel;var le=I(_.expirationTime<=ae);ae=i.unstable_now(),typeof le=="function"?_.callback=le:_===t(h)&&s(h),D(ae)}else s(h);_=t(h)}if(_!==null)var Ie=!0;else{var ee=t(d);ee!==null&&oe(b,ee.startTime-ae),Ie=!1}return Ie}finally{_=null,v=Q,y=!1}}var F=!1,U=null,G=-1,C=5,A=-1;function k(){return!(i.unstable_now()-A<C)}function X(){if(U!==null){var O=i.unstable_now();A=O;var ae=!0;try{ae=U(!0,O)}finally{ae?B():(F=!1,U=null)}}else F=!1}var B;if(typeof N=="function")B=function(){N(X)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ue=ie.port2;ie.port1.onmessage=X,B=function(){ue.postMessage(null)}}else B=function(){S(X,0)};function ne(O){U=O,F||(F=!0,B())}function oe(O,ae){G=S(function(){O(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){M||y||(M=!0,ne(V))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(O){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var Q=v;v=ae;try{return O()}finally{v=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,ae){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=v;v=O;try{return ae()}finally{v=Q}},i.unstable_scheduleCallback=function(O,ae,Q){var I=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?I+Q:I):Q=I,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Q+le,O={id:m++,callback:ae,priorityLevel:O,startTime:Q,expirationTime:le,sortIndex:-1},Q>I?(O.sortIndex=Q,e(d,O),t(h)===null&&O===t(d)&&(E?(x(G),G=-1):E=!0,oe(b,Q-I))):(O.sortIndex=le,e(h,O),M||y||(M=!0,ne(V))),O},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(O){var ae=v;return function(){var Q=v;v=ae;try{return O.apply(this,arguments)}finally{v=Q}}}})(Lf)),Lf}var ag;function Ux(){return ag||(ag=1,Df.exports=Ix()),Df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Fx(){if(lg)return Nn;lg=1;var i=dd(),e=Ux();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return h.call(_,n)?!0:h.call(m,n)?!1:d.test(n)?_[n]=!0:(m[n]=!0,!1)}function y(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,u){if(r===null||typeof r>"u"||y(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,a,u,p,g,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,r,a,u){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,p,u)&&(a=null),u||p===null?v(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),O=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,I;function le(n){if(I===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Ie=!1;function ee(n,r){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){u=se}n.call(r.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),g=u.stack.split(`
`),w=p.length-1,L=g.length-1;1<=w&&0<=L&&p[w]!==g[L];)L--;for(;1<=w&&0<=L;w--,L--)if(p[w]!==g[L]){if(w!==1||L!==1)do if(w--,L--,0>L||p[w]!==g[L]){var H=`
`+p[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function ce(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case C:return"Profiler";case G:return"StrictMode";case B:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case X:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return r=n.displayName||null,r!==null?r:he(n.type)||"Memo";case ne:r=n._payload,n=n._init;try{return he(n(r))}catch{}}return null}function _e(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function je(n){var r=Pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Tt(n){n._valueTracker||(n._valueTracker=je(n))}function ft(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,r){var a=r.checked;return Q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ht(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=we(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function nt(n,r){r=r.checked,r!=null&&D(n,"checked",r,!1)}function ot(n,r){nt(n,r);var a=we(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ct(n,r.type,a):r.hasOwnProperty("defaultValue")&&Ct(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ct(n,r,a){(r!=="number"||gt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function P(n,r,a,u){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function T(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function te(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:we(a)}}function me(n,r){var a=we(r.value),u=we(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Te,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ht(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function $e(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=$e(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var ke=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,fe=null,pe=null;function De(n){if(n=Vo(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=$a(r),Ae(n.stateNode,n.type,r))}}function be(n){fe?pe?pe.push(n):pe=[n]:fe=n}function rt(){if(fe){var n=fe,r=pe;if(pe=fe=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function Ut(n,r){return n(r)}function Zt(){}var yt=!1;function Rn(n,r,a){if(yt)return n(r,a);yt=!0;try{return Ut(n,r,a)}finally{yt=!1,(fe!==null||pe!==null)&&(Zt(),rt())}}function Mn(n,r){var a=n.stateNode;if(a===null)return null;var u=$a(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var xs=!1;if(f)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){xs=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{xs=!1}function Di(n,r,a,u,p,g,w,L,H){var se=Array.prototype.slice.call(arguments,3);try{r.apply(a,se)}catch(xe){this.onError(xe)}}var Li=!1,zr=null,Br=!1,rr=null,Ra={onError:function(n){Li=!0,zr=n}};function ys(n,r,a,u,p,g,w,L,H){Li=!1,zr=null,Di.apply(Ra,arguments)}function Ca(n,r,a,u,p,g,w,L,H){if(ys.apply(this,arguments),Li){if(Li){var se=zr;Li=!1,zr=null}else throw Error(t(198));Br||(Br=!0,rr=se)}}function yi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function ba(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Pa(n){if(yi(n)!==n)throw Error(t(188))}function Ku(n){var r=n.alternate;if(!r){if(r=yi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var p=a.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===a)return Pa(p),n;if(g===u)return Pa(p),r;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=g;else{for(var w=!1,L=p.child;L;){if(L===a){w=!0,a=p,u=g;break}if(L===u){w=!0,u=p,a=g;break}L=L.sibling}if(!w){for(L=g.child;L;){if(L===a){w=!0,a=g,u=p;break}if(L===u){w=!0,u=g,a=p;break}L=L.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Da(n){return n=Ku(n),n!==null?La(n):null}function La(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=La(n);if(r!==null)return r;n=n.sibling}return null}var Na=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,q=e.unstable_shouldYield,re=e.unstable_requestPaint,Z=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ze=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function vt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,Wt=Math.log,kt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Wt(n)/kt|0)|0}var qe=64,Xt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dn(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var L=w&~p;L!==0?u=_t(L):(g&=w,g!==0&&(u=_t(g)))}else w=a&~p,w!==0?u=_t(w):g!==0&&(u=_t(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,g=r&-r,p>=g||p===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-st(r),p=1<<a,u|=n[a],r&=~p;return u}function sr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-st(g),L=1<<w,H=p[w];H===-1?((L&a)===0||(L&u)!==0)&&(p[w]=sr(L,r)):H<=r&&(n.expiredLanes|=L),g&=~L}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lt(){var n=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),n}function pn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function rn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-st(r),n[r]=a}function cn(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-st(a),g=1<<p;r[p]=0,u[p]=-1,n[p]=-1,a&=~g}}function sn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-st(a),p=1<<u;p&r|n[u]&r&&(n[u]|=r),a&=~p}}var St=0;function Si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ud,Zu,Fd,Od,kd,Qu=!1,Ia=[],or=null,ar=null,lr=null,Ao=new Map,Ro=new Map,ur=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(n,r){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(r.pointerId)}}function Co(n,r,a,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},r!==null&&(r=Vo(r),r!==null&&Zu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function ev(n,r,a,u,p){switch(r){case"focusin":return or=Co(or,n,r,a,u,p),!0;case"dragenter":return ar=Co(ar,n,r,a,u,p),!0;case"mouseover":return lr=Co(lr,n,r,a,u,p),!0;case"pointerover":var g=p.pointerId;return Ao.set(g,Co(Ao.get(g)||null,n,r,a,u,p)),!0;case"gotpointercapture":return g=p.pointerId,Ro.set(g,Co(Ro.get(g)||null,n,r,a,u,p)),!0}return!1}function Bd(n){var r=Hr(n.target);if(r!==null){var a=yi(r);if(a!==null){if(r=a.tag,r===13){if(r=ba(a),r!==null){n.blockedOn=r,kd(n.priority,function(){Fd(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ua(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ec(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return r=Vo(a),r!==null&&Zu(r),n.blockedOn=a,!1;r.shift()}return!0}function Hd(n,r,a){Ua(n)&&a.delete(r)}function tv(){Qu=!1,or!==null&&Ua(or)&&(or=null),ar!==null&&Ua(ar)&&(ar=null),lr!==null&&Ua(lr)&&(lr=null),Ao.forEach(Hd),Ro.forEach(Hd)}function bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Qu||(Qu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Po(n){function r(p){return bo(p,n)}if(0<Ia.length){bo(Ia[0],n);for(var a=1;a<Ia.length;a++){var u=Ia[a];u.blockedOn===n&&(u.blockedOn=null)}}for(or!==null&&bo(or,n),ar!==null&&bo(ar,n),lr!==null&&bo(lr,n),Ao.forEach(r),Ro.forEach(r),a=0;a<ur.length;a++)u=ur[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)Bd(a),a.blockedOn===null&&ur.shift()}var Ss=b.ReactCurrentBatchConfig,Fa=!0;function nv(n,r,a,u){var p=St,g=Ss.transition;Ss.transition=null;try{St=1,Ju(n,r,a,u)}finally{St=p,Ss.transition=g}}function iv(n,r,a,u){var p=St,g=Ss.transition;Ss.transition=null;try{St=4,Ju(n,r,a,u)}finally{St=p,Ss.transition=g}}function Ju(n,r,a,u){if(Fa){var p=ec(n,r,a,u);if(p===null)_c(n,r,u,Oa,a),zd(n,u);else if(ev(p,n,r,a,u))u.stopPropagation();else if(zd(n,u),r&4&&-1<J0.indexOf(n)){for(;p!==null;){var g=Vo(p);if(g!==null&&Ud(g),g=ec(n,r,a,u),g===null&&_c(n,r,u,Oa,a),g===p)break;p=g}p!==null&&u.stopPropagation()}else _c(n,r,u,null,a)}}var Oa=null;function ec(n,r,a,u){if(Oa=null,n=Y(u),n=Hr(n),n!==null)if(r=yi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=ba(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Oa=n,null}function Vd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Se:return 1;case Re:return 4;case Le:case ze:return 16;case et:return 536870912;default:return 16}default:return 16}}var cr=null,tc=null,ka=null;function Gd(){if(ka)return ka;var n,r=tc,a=r.length,u,p="value"in cr?cr.value:cr.textContent,g=p.length;for(n=0;n<a&&r[n]===p[n];n++);var w=a-n;for(u=1;u<=w&&r[a-u]===p[g-u];u++);return ka=p.slice(n,1<u?1-u:void 0)}function za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ba(){return!0}function Wd(){return!1}function Bn(n){function r(a,u,p,g,w){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(g):g[L]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ba:Wd,this.isPropagationStopped=Wd,this}return Q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),r}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Bn(Ms),Do=Q({},Ms,{view:0,detail:0}),rv=Bn(Do),ic,rc,Lo,Ha=Q({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(ic=n.screenX-Lo.screenX,rc=n.screenY-Lo.screenY):rc=ic=0,Lo=n),ic)},movementY:function(n){return"movementY"in n?n.movementY:rc}}),Xd=Bn(Ha),sv=Q({},Ha,{dataTransfer:0}),ov=Bn(sv),av=Q({},Do,{relatedTarget:0}),sc=Bn(av),lv=Q({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=Bn(lv),cv=Q({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=Bn(cv),hv=Q({},Ms,{data:0}),Yd=Bn(hv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=mv[n])?!!r[n]:!1}function oc(){return gv}var _v=Q({},Do,{key:function(n){if(n.key){var r=dv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Bn(_v),xv=Q({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Bn(xv),yv=Q({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),Sv=Bn(yv),Mv=Q({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Bn(Mv),wv=Q({},Ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Bn(wv),Av=[9,13,27,32],ac=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var Rv=f&&"TextEvent"in window&&!No,jd=f&&(!ac||No&&8<No&&11>=No),$d=" ",Kd=!1;function Zd(n,r){switch(n){case"keyup":return Av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function Cv(n,r){switch(n){case"compositionend":return Qd(r);case"keypress":return r.which!==32?null:(Kd=!0,$d);case"textInput":return n=r.data,n===$d&&Kd?null:n;default:return null}}function bv(n,r){if(Es)return n==="compositionend"||!ac&&Zd(n,r)?(n=Gd(),ka=tc=cr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jd&&r.locale!=="ko"?null:r.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pv[n.type]:r==="textarea"}function ep(n,r,a,u){be(u),r=Ya(r,"onChange"),0<r.length&&(a=new nc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Io=null,Uo=null;function Dv(n){vp(n,0)}function Va(n){var r=Cs(n);if(ft(r))return n}function Lv(n,r){if(n==="change")return r}var tp=!1;if(f){var lc;if(f){var uc="oninput"in document;if(!uc){var np=document.createElement("div");np.setAttribute("oninput","return;"),uc=typeof np.oninput=="function"}lc=uc}else lc=!1;tp=lc&&(!document.documentMode||9<document.documentMode)}function ip(){Io&&(Io.detachEvent("onpropertychange",rp),Uo=Io=null)}function rp(n){if(n.propertyName==="value"&&Va(Uo)){var r=[];ep(r,Uo,n,Y(n)),Rn(Dv,r)}}function Nv(n,r,a){n==="focusin"?(ip(),Io=r,Uo=a,Io.attachEvent("onpropertychange",rp)):n==="focusout"&&ip()}function Iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Va(Uo)}function Uv(n,r){if(n==="click")return Va(r)}function Fv(n,r){if(n==="input"||n==="change")return Va(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ri=typeof Object.is=="function"?Object.is:Ov;function Fo(n,r){if(ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!h.call(r,p)||!ri(n[p],r[p]))return!1}return!0}function sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function op(n,r){var a=sp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ap(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function lp(){for(var n=window,r=gt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=gt(n.document)}return r}function cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function kv(n){var r=lp(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(u!==null&&cc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,g=Math.min(u.start,p);u=u.end===void 0?g:Math.min(u.end,p),!n.extend&&g>u&&(p=u,u=g,g=p),p=op(a,g);var w=op(a,u);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=f&&"documentMode"in document&&11>=document.documentMode,ws=null,fc=null,Oo=null,hc=!1;function up(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||ws==null||ws!==gt(u)||(u=ws,"selectionStart"in u&&cc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Oo&&Fo(Oo,u)||(Oo=u,u=Ya(fc,"onSelect"),0<u.length&&(r=new nc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=ws)))}function Ga(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ts={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},dc={},cp={};f&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Wa(n){if(dc[n])return dc[n];if(!Ts[n])return n;var r=Ts[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in cp)return dc[n]=r[a];return n}var fp=Wa("animationend"),hp=Wa("animationiteration"),dp=Wa("animationstart"),pp=Wa("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,r){mp.set(n,r),l(r,[n])}for(var pc=0;pc<gp.length;pc++){var mc=gp[pc],Bv=mc.toLowerCase(),Hv=mc[0].toUpperCase()+mc.slice(1);fr(Bv,"on"+Hv)}fr(fp,"onAnimationEnd"),fr(hp,"onAnimationIteration"),fr(dp,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(pp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function _p(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Ca(u,r,void 0,n),n.currentTarget=null}function vp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var w=u.length-1;0<=w;w--){var L=u[w],H=L.instance,se=L.currentTarget;if(L=L.listener,H!==g&&p.isPropagationStopped())break e;_p(p,L,se),g=H}else for(w=0;w<u.length;w++){if(L=u[w],H=L.instance,se=L.currentTarget,L=L.listener,H!==g&&p.isPropagationStopped())break e;_p(p,L,se),g=H}}}if(Br)throw n=rr,Br=!1,rr=null,n}function Ft(n,r){var a=r[Ec];a===void 0&&(a=r[Ec]=new Set);var u=n+"__bubble";a.has(u)||(xp(r,n,2,!1),a.add(u))}function gc(n,r,a){var u=0;r&&(u|=4),xp(a,n,u,r)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function zo(n){if(!n[Xa]){n[Xa]=!0,s.forEach(function(a){a!=="selectionchange"&&(Vv.has(a)||gc(a,!1,n),gc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Xa]||(r[Xa]=!0,gc("selectionchange",!1,r))}}function xp(n,r,a,u){switch(Vd(r)){case 1:var p=nv;break;case 4:p=iv;break;default:p=Ju}a=p.bind(null,r,a,n),p=void 0,!xs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function _c(n,r,a,u,p){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var L=u.stateNode.containerInfo;if(L===p||L.nodeType===8&&L.parentNode===p)break;if(w===4)for(w=u.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;w=w.return}for(;L!==null;){if(w=Hr(L),w===null)return;if(H=w.tag,H===5||H===6){u=g=w;continue e}L=L.parentNode}}u=u.return}Rn(function(){var se=g,xe=Y(a),ye=[];e:{var ge=mp.get(n);if(ge!==void 0){var Ne=nc,Be=n;switch(n){case"keypress":if(za(a)===0)break e;case"keydown":case"keyup":Ne=vv;break;case"focusin":Be="focus",Ne=sc;break;case"focusout":Be="blur",Ne=sc;break;case"beforeblur":case"afterblur":Ne=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Sv;break;case fp:case hp:case dp:Ne=uv;break;case pp:Ne=Ev;break;case"scroll":Ne=rv;break;case"wheel":Ne=Tv;break;case"copy":case"cut":case"paste":Ne=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=qd}var Ve=(r&4)!==0,qt=!Ve&&n==="scroll",$=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var W=se,J;W!==null;){J=W;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,$!==null&&(Ee=Mn(W,$),Ee!=null&&Ve.push(Bo(W,Ee,J)))),qt)break;W=W.return}0<Ve.length&&(ge=new Ne(ge,Be,null,a,xe),ye.push({event:ge,listeners:Ve}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&a!==At&&(Be=a.relatedTarget||a.fromElement)&&(Hr(Be)||Be[Ii]))break e;if((Ne||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Be=a.relatedTarget||a.toElement,Ne=se,Be=Be?Hr(Be):null,Be!==null&&(qt=yi(Be),Be!==qt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=se),Ne!==Be)){if(Ve=Xd,Ee="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=qd,Ee="onPointerLeave",$="onPointerEnter",W="pointer"),qt=Ne==null?ge:Cs(Ne),J=Be==null?ge:Cs(Be),ge=new Ve(Ee,W+"leave",Ne,a,xe),ge.target=qt,ge.relatedTarget=J,Ee=null,Hr(xe)===se&&(Ve=new Ve($,W+"enter",Be,a,xe),Ve.target=J,Ve.relatedTarget=qt,Ee=Ve),qt=Ee,Ne&&Be)t:{for(Ve=Ne,$=Be,W=0,J=Ve;J;J=As(J))W++;for(J=0,Ee=$;Ee;Ee=As(Ee))J++;for(;0<W-J;)Ve=As(Ve),W--;for(;0<J-W;)$=As($),J--;for(;W--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=As(Ve),$=As($)}Ve=null}else Ve=null;Ne!==null&&yp(ye,ge,Ne,Ve,!1),Be!==null&&qt!==null&&yp(ye,qt,Be,Ve,!0)}}e:{if(ge=se?Cs(se):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=Lv;else if(Jd(ge))if(tp)Xe=Fv;else{Xe=Iv;var Ke=Nv}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Uv);if(Xe&&(Xe=Xe(n,se))){ep(ye,Xe,a,xe);break e}Ke&&Ke(n,ge,se),n==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ke=se?Cs(se):window,n){case"focusin":(Jd(Ke)||Ke.contentEditable==="true")&&(ws=Ke,fc=se,Oo=null);break;case"focusout":Oo=fc=ws=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,up(ye,a,xe);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":up(ye,a,xe)}var Ze;if(ac)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Es?Zd(n,a)&&(tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(jd&&a.locale!=="ko"&&(Es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Es&&(Ze=Gd()):(cr=xe,tc="value"in cr?cr.value:cr.textContent,Es=!0)),Ke=Ya(se,tt),0<Ke.length&&(tt=new Yd(tt,n,null,a,xe),ye.push({event:tt,listeners:Ke}),Ze?tt.data=Ze:(Ze=Qd(a),Ze!==null&&(tt.data=Ze)))),(Ze=Rv?Cv(n,a):bv(n,a))&&(se=Ya(se,"onBeforeInput"),0<se.length&&(xe=new Yd("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:se}),xe.data=Ze))}vp(ye,r)})}function Bo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ya(n,r){for(var a=r+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=Mn(n,a),g!=null&&u.unshift(Bo(n,g,p)),g=Mn(n,r),g!=null&&u.push(Bo(n,g,p))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yp(n,r,a,u,p){for(var g=r._reactName,w=[];a!==null&&a!==u;){var L=a,H=L.alternate,se=L.stateNode;if(H!==null&&H===u)break;L.tag===5&&se!==null&&(L=se,p?(H=Mn(a,g),H!=null&&w.unshift(Bo(a,H,L))):p||(H=Mn(a,g),H!=null&&w.push(Bo(a,H,L)))),a=a.return}w.length!==0&&n.push({event:r,listeners:w})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Sp(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function qa(n,r,a){if(r=Sp(r),Sp(n)!==r&&a)throw Error(t(425))}function ja(){}var vc=null,xc=null;function yc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(n){return Mp.resolve(null).then(n).catch(qv)}:Sc;function qv(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Po(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Po(r)}function hr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Rs,Ho="__reactProps$"+Rs,Ii="__reactContainer$"+Rs,Ec="__reactEvents$"+Rs,jv="__reactListeners$"+Rs,$v="__reactHandles$"+Rs;function Hr(n){var r=n[Mi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ii]||a[Mi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Ep(n);n!==null;){if(a=n[Mi])return a;n=Ep(n)}return r}n=a,a=n.parentNode}return null}function Vo(n){return n=n[Mi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $a(n){return n[Ho]||null}var wc=[],bs=-1;function dr(n){return{current:n}}function Ot(n){0>bs||(n.current=wc[bs],wc[bs]=null,bs--)}function It(n,r){bs++,wc[bs]=n.current,n.current=r}var pr={},mn=dr(pr),Cn=dr(!1),Vr=pr;function Ps(n,r){var a=n.type.contextTypes;if(!a)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in a)p[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function bn(n){return n=n.childContextTypes,n!=null}function Ka(){Ot(Cn),Ot(mn)}function wp(n,r,a){if(mn.current!==pr)throw Error(t(168));It(mn,r),It(Cn,a)}function Tp(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,_e(n)||"Unknown",p));return Q({},a,u)}function Za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Vr=mn.current,It(mn,n),It(Cn,Cn.current),!0}function Ap(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Tp(n,r,Vr),u.__reactInternalMemoizedMergedChildContext=n,Ot(Cn),Ot(mn),It(mn,n)):Ot(Cn),It(Cn,a)}var Ui=null,Qa=!1,Tc=!1;function Rp(n){Ui===null?Ui=[n]:Ui.push(n)}function Kv(n){Qa=!0,Rp(n)}function mr(){if(!Tc&&Ui!==null){Tc=!0;var n=0,r=St;try{var a=Ui;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ui=null,Qa=!1}catch(p){throw Ui!==null&&(Ui=Ui.slice(n+1)),Na(Se,mr),p}finally{St=r,Tc=!1}}return null}var Ds=[],Ls=0,Ja=null,el=0,jn=[],$n=0,Gr=null,Fi=1,Oi="";function Wr(n,r){Ds[Ls++]=el,Ds[Ls++]=Ja,Ja=n,el=r}function Cp(n,r,a){jn[$n++]=Fi,jn[$n++]=Oi,jn[$n++]=Gr,Gr=n;var u=Fi;n=Oi;var p=32-st(u)-1;u&=~(1<<p),a+=1;var g=32-st(r)+p;if(30<g){var w=p-p%5;g=(u&(1<<w)-1).toString(32),u>>=w,p-=w,Fi=1<<32-st(r)+p|a<<p|u,Oi=g+n}else Fi=1<<g|a<<p|u,Oi=n}function Ac(n){n.return!==null&&(Wr(n,1),Cp(n,1,0))}function Rc(n){for(;n===Ja;)Ja=Ds[--Ls],Ds[Ls]=null,el=Ds[--Ls],Ds[Ls]=null;for(;n===Gr;)Gr=jn[--$n],jn[$n]=null,Oi=jn[--$n],jn[$n]=null,Fi=jn[--$n],jn[$n]=null}var Hn=null,Vn=null,zt=!1,si=null;function bp(n,r){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Pp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=hr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Gr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bc(n){if(zt){var r=Vn;if(r){var a=r;if(!Pp(n,r)){if(Cc(n))throw Error(t(418));r=hr(a.nextSibling);var u=Hn;r&&Pp(n,r)?bp(u,a):(n.flags=n.flags&-4097|2,zt=!1,Hn=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Hn=n}}}function Dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function tl(n){if(n!==Hn)return!1;if(!zt)return Dp(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!yc(n.type,n.memoizedProps)),r&&(r=Vn)){if(Cc(n))throw Lp(),Error(t(418));for(;r;)bp(n,r),r=hr(r.nextSibling)}if(Dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Vn=hr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Vn=null}}else Vn=Hn?hr(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=Vn;n;)n=hr(n.nextSibling)}function Ns(){Vn=Hn=null,zt=!1}function Pc(n){si===null?si=[n]:si.push(n)}var Zv=b.ReactCurrentBatchConfig;function Go(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(w){var L=p.refs;w===null?delete L[g]:L[g]=w},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function nl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Np(n){var r=n._init;return r(n._payload)}function Ip(n){function r($,W){if(n){var J=$.deletions;J===null?($.deletions=[W],$.flags|=16):J.push(W)}}function a($,W){if(!n)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function u($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function p($,W){return $=Er($,W),$.index=0,$.sibling=null,$}function g($,W,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<W?($.flags|=2,W):J):($.flags|=2,W)):($.flags|=1048576,W)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function L($,W,J,Ee){return W===null||W.tag!==6?(W=Mf(J,$.mode,Ee),W.return=$,W):(W=p(W,J),W.return=$,W)}function H($,W,J,Ee){var Xe=J.type;return Xe===U?xe($,W,J.props.children,Ee,J.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Np(Xe)===W.type)?(Ee=p(W,J.props),Ee.ref=Go($,W,J),Ee.return=$,Ee):(Ee=Al(J.type,J.key,J.props,null,$.mode,Ee),Ee.ref=Go($,W,J),Ee.return=$,Ee)}function se($,W,J,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Ef(J,$.mode,Ee),W.return=$,W):(W=p(W,J.children||[]),W.return=$,W)}function xe($,W,J,Ee,Xe){return W===null||W.tag!==7?(W=Qr(J,$.mode,Ee,Xe),W.return=$,W):(W=p(W,J),W.return=$,W)}function ye($,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mf(""+W,$.mode,J),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return J=Al(W.type,W.key,W.props,null,$.mode,J),J.ref=Go($,null,W),J.return=$,J;case F:return W=Ef(W,$.mode,J),W.return=$,W;case ne:var Ee=W._init;return ye($,Ee(W._payload),J)}if(Ge(W)||ae(W))return W=Qr(W,$.mode,J,null),W.return=$,W;nl($,W)}return null}function ge($,W,J,Ee){var Xe=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Xe!==null?null:L($,W,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return J.key===Xe?H($,W,J,Ee):null;case F:return J.key===Xe?se($,W,J,Ee):null;case ne:return Xe=J._init,ge($,W,Xe(J._payload),Ee)}if(Ge(J)||ae(J))return Xe!==null?null:xe($,W,J,Ee,null);nl($,J)}return null}function Ne($,W,J,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(J)||null,L(W,$,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return $=$.get(Ee.key===null?J:Ee.key)||null,H(W,$,Ee,Xe);case F:return $=$.get(Ee.key===null?J:Ee.key)||null,se(W,$,Ee,Xe);case ne:var Ke=Ee._init;return Ne($,W,J,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return $=$.get(J)||null,xe(W,$,Ee,Xe,null);nl(W,Ee)}return null}function Be($,W,J,Ee){for(var Xe=null,Ke=null,Ze=W,tt=W=0,ln=null;Ze!==null&&tt<J.length;tt++){Ze.index>tt?(ln=Ze,Ze=null):ln=Ze.sibling;var Et=ge($,Ze,J[tt],Ee);if(Et===null){Ze===null&&(Ze=ln);break}n&&Ze&&Et.alternate===null&&r($,Ze),W=g(Et,W,tt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et,Ze=ln}if(tt===J.length)return a($,Ze),zt&&Wr($,tt),Xe;if(Ze===null){for(;tt<J.length;tt++)Ze=ye($,J[tt],Ee),Ze!==null&&(W=g(Ze,W,tt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return zt&&Wr($,tt),Xe}for(Ze=u($,Ze);tt<J.length;tt++)ln=Ne(Ze,$,tt,J[tt],Ee),ln!==null&&(n&&ln.alternate!==null&&Ze.delete(ln.key===null?tt:ln.key),W=g(ln,W,tt),Ke===null?Xe=ln:Ke.sibling=ln,Ke=ln);return n&&Ze.forEach(function(wr){return r($,wr)}),zt&&Wr($,tt),Xe}function Ve($,W,J,Ee){var Xe=ae(J);if(typeof Xe!="function")throw Error(t(150));if(J=Xe.call(J),J==null)throw Error(t(151));for(var Ke=Xe=null,Ze=W,tt=W=0,ln=null,Et=J.next();Ze!==null&&!Et.done;tt++,Et=J.next()){Ze.index>tt?(ln=Ze,Ze=null):ln=Ze.sibling;var wr=ge($,Ze,Et.value,Ee);if(wr===null){Ze===null&&(Ze=ln);break}n&&Ze&&wr.alternate===null&&r($,Ze),W=g(wr,W,tt),Ke===null?Xe=wr:Ke.sibling=wr,Ke=wr,Ze=ln}if(Et.done)return a($,Ze),zt&&Wr($,tt),Xe;if(Ze===null){for(;!Et.done;tt++,Et=J.next())Et=ye($,Et.value,Ee),Et!==null&&(W=g(Et,W,tt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et);return zt&&Wr($,tt),Xe}for(Ze=u($,Ze);!Et.done;tt++,Et=J.next())Et=Ne(Ze,$,tt,Et.value,Ee),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?tt:Et.key),W=g(Et,W,tt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et);return n&&Ze.forEach(function(Px){return r($,Px)}),zt&&Wr($,tt),Xe}function qt($,W,J,Ee){if(typeof J=="object"&&J!==null&&J.type===U&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case V:e:{for(var Xe=J.key,Ke=W;Ke!==null;){if(Ke.key===Xe){if(Xe=J.type,Xe===U){if(Ke.tag===7){a($,Ke.sibling),W=p(Ke,J.props.children),W.return=$,$=W;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Np(Xe)===Ke.type){a($,Ke.sibling),W=p(Ke,J.props),W.ref=Go($,Ke,J),W.return=$,$=W;break e}a($,Ke);break}else r($,Ke);Ke=Ke.sibling}J.type===U?(W=Qr(J.props.children,$.mode,Ee,J.key),W.return=$,$=W):(Ee=Al(J.type,J.key,J.props,null,$.mode,Ee),Ee.ref=Go($,W,J),Ee.return=$,$=Ee)}return w($);case F:e:{for(Ke=J.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a($,W.sibling),W=p(W,J.children||[]),W.return=$,$=W;break e}else{a($,W);break}else r($,W);W=W.sibling}W=Ef(J,$.mode,Ee),W.return=$,$=W}return w($);case ne:return Ke=J._init,qt($,W,Ke(J._payload),Ee)}if(Ge(J))return Be($,W,J,Ee);if(ae(J))return Ve($,W,J,Ee);nl($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a($,W.sibling),W=p(W,J),W.return=$,$=W):(a($,W),W=Mf(J,$.mode,Ee),W.return=$,$=W),w($)):a($,W)}return qt}var Is=Ip(!0),Up=Ip(!1),il=dr(null),rl=null,Us=null,Dc=null;function Lc(){Dc=Us=rl=null}function Nc(n){var r=il.current;Ot(il),n._currentValue=r}function Ic(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function Fs(n,r){rl=n,Dc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Pn=!0),n.firstContext=null)}function Kn(n){var r=n._currentValue;if(Dc!==n)if(n={context:n,memoizedValue:r,next:null},Us===null){if(rl===null)throw Error(t(308));Us=n,rl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return r}var Xr=null;function Uc(n){Xr===null?Xr=[n]:Xr.push(n)}function Fp(n,r,a,u){var p=r.interleaved;return p===null?(a.next=a,Uc(r)):(a.next=p.next,p.next=a),r.interleaved=a,ki(n,u)}function ki(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function Fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function _r(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,ki(n,a)}return p=u.interleaved,p===null?(r.next=r,Uc(u)):(r.next=p.next,p.next=r),u.interleaved=r,ki(n,a)}function sl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,sn(n,a)}}function kp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?p=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?p=g=r:g=g.next=r}else p=g=r;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ol(n,r,a,u){var p=n.updateQueue;gr=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,L=p.shared.pending;if(L!==null){p.shared.pending=null;var H=L,se=H.next;H.next=null,w===null?g=se:w.next=se,w=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,L=xe.lastBaseUpdate,L!==w&&(L===null?xe.firstBaseUpdate=se:L.next=se,xe.lastBaseUpdate=H))}if(g!==null){var ye=p.baseState;w=0,xe=se=H=null,L=g;do{var ge=L.lane,Ne=L.eventTime;if((u&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=n,Ve=L;switch(ge=r,Ne=a,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ye=Be.call(Ne,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Ne,ye,ge):Be,ge==null)break e;ye=Q({},ye,ge);break e;case 2:gr=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ge=p.effects,ge===null?p.effects=[L]:ge.push(L))}else Ne={eventTime:Ne,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},xe===null?(se=xe=Ne,H=ye):xe=xe.next=Ne,w|=ge;if(L=L.next,L===null){if(L=p.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(xe===null&&(H=ye),p.baseState=H,p.firstBaseUpdate=se,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do w|=p.lane,p=p.next;while(p!==r)}else g===null&&(p.shared.lanes=0);jr|=w,n.lanes=w,n.memoizedState=ye}}function zp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Wo={},Ei=dr(Wo),Xo=dr(Wo),Yo=dr(Wo);function Yr(n){if(n===Wo)throw Error(t(174));return n}function Oc(n,r){switch(It(Yo,r),It(Xo,n),It(Ei,Wo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=We(r,n)}Ot(Ei),It(Ei,r)}function Os(){Ot(Ei),Ot(Xo),Ot(Yo)}function Bp(n){Yr(Yo.current);var r=Yr(Ei.current),a=We(r,n.type);r!==a&&(It(Xo,n),It(Ei,a))}function kc(n){Xo.current===n&&(Ot(Ei),Ot(Xo))}var Vt=dr(0);function al(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zc=[];function Bc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var ll=b.ReactCurrentDispatcher,Hc=b.ReactCurrentBatchConfig,qr=0,Gt=null,Qt=null,on=null,ul=!1,qo=!1,jo=0,Qv=0;function gn(){throw Error(t(321))}function Vc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!ri(n[a],r[a]))return!1;return!0}function Gc(n,r,a,u,p,g){if(qr=g,Gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ll.current=n===null||n.memoizedState===null?nx:ix,n=a(u,p),qo){g=0;do{if(qo=!1,jo=0,25<=g)throw Error(t(301));g+=1,on=Qt=null,r.updateQueue=null,ll.current=rx,n=a(u,p)}while(qo)}if(ll.current=hl,r=Qt!==null&&Qt.next!==null,qr=0,on=Qt=Gt=null,ul=!1,r)throw Error(t(300));return n}function Wc(){var n=jo!==0;return jo=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=n:on=on.next=n,on}function Zn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var r=on===null?Gt.memoizedState:on.next;if(r!==null)on=r,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},on===null?Gt.memoizedState=on=n:on=on.next=n}return on}function $o(n,r){return typeof r=="function"?r(n):r}function Xc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Qt,p=u.baseQueue,g=a.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}u.baseQueue=p=g,a.pending=null}if(p!==null){g=p.next,u=u.baseState;var L=w=null,H=null,se=g;do{var xe=se.lane;if((qr&xe)===xe)H!==null&&(H=H.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var ye={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};H===null?(L=H=ye,w=u):H=H.next=ye,Gt.lanes|=xe,jr|=xe}se=se.next}while(se!==null&&se!==g);H===null?w=u:H.next=L,ri(u,r.memoizedState)||(Pn=!0),r.memoizedState=u,r.baseState=w,r.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do g=p.lane,Gt.lanes|=g,jr|=g,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Yc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,g=r.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do g=n(g,w.action),w=w.next;while(w!==p);ri(g,r.memoizedState)||(Pn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,u]}function Hp(){}function Vp(n,r){var a=Gt,u=Zn(),p=r(),g=!ri(u.memoizedState,p);if(g&&(u.memoizedState=p,Pn=!0),u=u.queue,qc(Xp.bind(null,a,u,n),[n]),u.getSnapshot!==r||g||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Ko(9,Wp.bind(null,a,u,p,r),void 0,null),an===null)throw Error(t(349));(qr&30)!==0||Gp(a,r,p)}return p}function Gp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Wp(n,r,a,u){r.value=a,r.getSnapshot=u,Yp(r)&&qp(n)}function Xp(n,r,a){return a(function(){Yp(r)&&qp(n)})}function Yp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!ri(n,a)}catch{return!0}}function qp(n){var r=ki(n,1);r!==null&&ui(r,n,1,-1)}function jp(n){var r=wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:n},r.queue=n,n=n.dispatch=tx.bind(null,Gt,n),[r.memoizedState,n]}function Ko(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function $p(){return Zn().memoizedState}function cl(n,r,a,u){var p=wi();Gt.flags|=n,p.memoizedState=Ko(1|r,a,void 0,u===void 0?null:u)}function fl(n,r,a,u){var p=Zn();u=u===void 0?null:u;var g=void 0;if(Qt!==null){var w=Qt.memoizedState;if(g=w.destroy,u!==null&&Vc(u,w.deps)){p.memoizedState=Ko(r,a,g,u);return}}Gt.flags|=n,p.memoizedState=Ko(1|r,a,g,u)}function Kp(n,r){return cl(8390656,8,n,r)}function qc(n,r){return fl(2048,8,n,r)}function Zp(n,r){return fl(4,2,n,r)}function Qp(n,r){return fl(4,4,n,r)}function Jp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function em(n,r,a){return a=a!=null?a.concat([n]):null,fl(4,4,Jp.bind(null,r,n),a)}function jc(){}function tm(n,r){var a=Zn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Vc(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function nm(n,r){var a=Zn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Vc(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function im(n,r,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(ri(a,r)||(a=Lt(),Gt.lanes|=a,jr|=a,n.baseState=!0),r)}function Jv(n,r){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=Hc.transition;Hc.transition={};try{n(!1),r()}finally{St=a,Hc.transition=u}}function rm(){return Zn().memoizedState}function ex(n,r,a){var u=Sr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},sm(n))om(r,a);else if(a=Fp(n,r,a,u),a!==null){var p=Tn();ui(a,n,u,p),am(a,r,u)}}function tx(n,r,a){var u=Sr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(n))om(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var w=r.lastRenderedState,L=g(w,a);if(p.hasEagerState=!0,p.eagerState=L,ri(L,w)){var H=r.interleaved;H===null?(p.next=p,Uc(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}a=Fp(n,r,p,u),a!==null&&(p=Tn(),ui(a,n,u,p),am(a,r,u))}}function sm(n){var r=n.alternate;return n===Gt||r!==null&&r===Gt}function om(n,r){qo=ul=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function am(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,sn(n,a)}}var hl={readContext:Kn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},nx={readContext:Kn,useCallback:function(n,r){return wi().memoizedState=[n,r===void 0?null:r],n},useContext:Kn,useEffect:Kp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,cl(4194308,4,Jp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return cl(4,2,n,r)},useMemo:function(n,r){var a=wi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=wi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=ex.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var r=wi();return n={current:n},r.memoizedState=n},useState:jp,useDebugValue:jc,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=jp(!1),r=n[0];return n=Jv.bind(null,n[1]),wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=Gt,p=wi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),an===null)throw Error(t(349));(qr&30)!==0||Gp(u,r,a)}p.memoizedState=a;var g={value:a,getSnapshot:r};return p.queue=g,Kp(Xp.bind(null,u,g,n),[n]),u.flags|=2048,Ko(9,Wp.bind(null,u,g,a,r),void 0,null),a},useId:function(){var n=wi(),r=an.identifierPrefix;if(zt){var a=Oi,u=Fi;a=(u&~(1<<32-st(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=jo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Qv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},ix={readContext:Kn,useCallback:tm,useContext:Kn,useEffect:qc,useImperativeHandle:em,useInsertionEffect:Zp,useLayoutEffect:Qp,useMemo:nm,useReducer:Xc,useRef:$p,useState:function(){return Xc($o)},useDebugValue:jc,useDeferredValue:function(n){var r=Zn();return im(r,Qt.memoizedState,n)},useTransition:function(){var n=Xc($o)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:rm,unstable_isNewReconciler:!1},rx={readContext:Kn,useCallback:tm,useContext:Kn,useEffect:qc,useImperativeHandle:em,useInsertionEffect:Zp,useLayoutEffect:Qp,useMemo:nm,useReducer:Yc,useRef:$p,useState:function(){return Yc($o)},useDebugValue:jc,useDeferredValue:function(n){var r=Zn();return Qt===null?r.memoizedState=n:im(r,Qt.memoizedState,n)},useTransition:function(){var n=Yc($o)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:rm,unstable_isNewReconciler:!1};function oi(n,r){if(n&&n.defaultProps){r=Q({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function $c(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:Q({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var dl={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Tn(),p=Sr(n),g=zi(u,p);g.payload=r,a!=null&&(g.callback=a),r=_r(n,g,p),r!==null&&(ui(r,n,p,u),sl(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Tn(),p=Sr(n),g=zi(u,p);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=_r(n,g,p),r!==null&&(ui(r,n,p,u),sl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Tn(),u=Sr(n),p=zi(a,u);p.tag=2,r!=null&&(p.callback=r),r=_r(n,p,u),r!==null&&(ui(r,n,u,a),sl(r,n,u))}};function lm(n,r,a,u,p,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):r.prototype&&r.prototype.isPureReactComponent?!Fo(a,u)||!Fo(p,g):!0}function um(n,r,a){var u=!1,p=pr,g=r.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(p=bn(r)?Vr:mn.current,u=r.contextTypes,g=(u=u!=null)?Ps(n,p):pr),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=g),r}function cm(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&dl.enqueueReplaceState(r,r.state,null)}function Kc(n,r,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Fc(n);var g=r.contextType;typeof g=="object"&&g!==null?p.context=Kn(g):(g=bn(r)?Vr:mn.current,p.context=Ps(n,g)),p.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&($c(n,r,g,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&dl.enqueueReplaceState(p,p.state,null),ol(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,r){try{var a="",u=r;do a+=ce(u),u=u.return;while(u);var p=a}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:p,digest:null}}function Zc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Qc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function fm(n,r,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){yl||(yl=!0,pf=u),Qc(n,r)},a}function hm(n,r,a){a=zi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;a.payload=function(){return u(p)},a.callback=function(){Qc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Qc(n,r),typeof u!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),a}function dm(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new sx;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(a)||(p.add(a),n=xx.bind(null,n,r,a),r.then(n,n))}function pm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function mm(n,r,a,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=zi(-1,1),r.tag=2,_r(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var ox=b.ReactCurrentOwner,Pn=!1;function wn(n,r,a,u){r.child=n===null?Up(r,null,a,u):Is(r,n.child,a,u)}function gm(n,r,a,u,p){a=a.render;var g=r.ref;return Fs(r,p),u=Gc(n,r,a,u,g,p),a=Wc(),n!==null&&!Pn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(zt&&a&&Ac(r),r.flags|=1,wn(n,r,u,p),r.child)}function _m(n,r,a,u,p){if(n===null){var g=a.type;return typeof g=="function"&&!Sf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,vm(n,r,g,u,p)):(n=Al(a.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&p)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(w,u)&&n.ref===r.ref)return Bi(n,r,p)}return r.flags|=1,n=Er(g,u),n.ref=r.ref,n.return=r,r.child=n}function vm(n,r,a,u,p){if(n!==null){var g=n.memoizedProps;if(Fo(g,u)&&n.ref===r.ref)if(Pn=!1,r.pendingProps=u=g,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Pn=!0);else return r.lanes=n.lanes,Bi(n,r,p)}return Jc(n,r,a,u,p)}function xm(n,r,a){var u=r.pendingProps,p=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Bs,Gn),Gn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,It(Bs,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,It(Bs,Gn),Gn|=u}else g!==null?(u=g.baseLanes|a,r.memoizedState=null):u=a,It(Bs,Gn),Gn|=u;return wn(n,r,p,a),r.child}function ym(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Jc(n,r,a,u,p){var g=bn(a)?Vr:mn.current;return g=Ps(r,g),Fs(r,p),a=Gc(n,r,a,u,g,p),u=Wc(),n!==null&&!Pn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(zt&&u&&Ac(r),r.flags|=1,wn(n,r,a,p),r.child)}function Sm(n,r,a,u,p){if(bn(a)){var g=!0;Za(r)}else g=!1;if(Fs(r,p),r.stateNode===null)ml(n,r),um(r,a,u),Kc(r,a,u,p),u=!0;else if(n===null){var w=r.stateNode,L=r.memoizedProps;w.props=L;var H=w.context,se=a.contextType;typeof se=="object"&&se!==null?se=Kn(se):(se=bn(a)?Vr:mn.current,se=Ps(r,se));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(L!==u||H!==se)&&cm(r,w,u,se),gr=!1;var ge=r.memoizedState;w.state=ge,ol(r,u,w,p),H=r.memoizedState,L!==u||ge!==H||Cn.current||gr?(typeof xe=="function"&&($c(r,a,xe,u),H=r.memoizedState),(L=gr||lm(r,a,L,u,ge,H,se))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),w.props=u,w.state=H,w.context=se,u=L):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{w=r.stateNode,Op(n,r),L=r.memoizedProps,se=r.type===r.elementType?L:oi(r.type,L),w.props=se,ye=r.pendingProps,ge=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=bn(a)?Vr:mn.current,H=Ps(r,H));var Ne=a.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(L!==ye||ge!==H)&&cm(r,w,u,H),gr=!1,ge=r.memoizedState,w.state=ge,ol(r,u,w,p);var Be=r.memoizedState;L!==ye||ge!==Be||Cn.current||gr?(typeof Ne=="function"&&($c(r,a,Ne,u),Be=r.memoizedState),(se=gr||lm(r,a,se,u,ge,Be,H)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Be,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Be,H)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Be),w.props=u,w.state=Be,w.context=H,u=se):(typeof w.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),u=!1)}return ef(n,r,a,u,g,p)}function ef(n,r,a,u,p,g){ym(n,r);var w=(r.flags&128)!==0;if(!u&&!w)return p&&Ap(r,a,!1),Bi(n,r,g);u=r.stateNode,ox.current=r;var L=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&w?(r.child=Is(r,n.child,null,g),r.child=Is(r,null,L,g)):wn(n,r,L,g),r.memoizedState=u.state,p&&Ap(r,a,!0),r.child}function Mm(n){var r=n.stateNode;r.pendingContext?wp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&wp(n,r.context,!1),Oc(n,r.containerInfo)}function Em(n,r,a,u,p){return Ns(),Pc(p),r.flags|=256,wn(n,r,a,u),r.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(n){return{baseLanes:n,cachePool:null,transitions:null}}function wm(n,r,a){var u=r.pendingProps,p=Vt.current,g=!1,w=(r.flags&128)!==0,L;if((L=w)||(L=n!==null&&n.memoizedState===null?!1:(p&2)!==0),L?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),It(Vt,p&1),n===null)return bc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=r.mode,g=r.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Rl(w,u,0,null),n=Qr(n,u,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=nf(a),r.memoizedState=tf,n):rf(r,w));if(p=n.memoizedState,p!==null&&(L=p.dehydrated,L!==null))return ax(n,r,w,u,L,p,a);if(g){g=u.fallback,w=r.mode,p=n.child,L=p.sibling;var H={mode:"hidden",children:u.children};return(w&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=Er(p,H),u.subtreeFlags=p.subtreeFlags&14680064),L!==null?g=Er(L,g):(g=Qr(g,w,a,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,w=n.child.memoizedState,w=w===null?nf(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,r.memoizedState=tf,u}return g=n.child,n=g.sibling,u=Er(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function rf(n,r){return r=Rl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function pl(n,r,a,u){return u!==null&&Pc(u),Is(r,n.child,null,a),n=rf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ax(n,r,a,u,p,g,w){if(a)return r.flags&256?(r.flags&=-257,u=Zc(Error(t(422))),pl(n,r,w,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,p=r.mode,u=Rl({mode:"visible",children:u.children},p,0,null),g=Qr(g,p,w,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&Is(r,n.child,null,w),r.child.memoizedState=nf(w),r.memoizedState=tf,g);if((r.mode&1)===0)return pl(n,r,w,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var L=u.dgst;return u=L,g=Error(t(419)),u=Zc(g,u,void 0),pl(n,r,w,u)}if(L=(w&n.childLanes)!==0,Pn||L){if(u=an,u!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|w))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,ki(n,p),ui(u,n,p,-1))}return yf(),u=Zc(Error(t(421))),pl(n,r,w,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=yx.bind(null,n),p._reactRetry=r,null):(n=g.treeContext,Vn=hr(p.nextSibling),Hn=r,zt=!0,si=null,n!==null&&(jn[$n++]=Fi,jn[$n++]=Oi,jn[$n++]=Gr,Fi=n.id,Oi=n.overflow,Gr=r),r=rf(r,u.children),r.flags|=4096,r)}function Tm(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Ic(n.return,r,a)}function sf(n,r,a,u,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=p)}function Am(n,r,a){var u=r.pendingProps,p=u.revealOrder,g=u.tail;if(wn(n,r,u.children,a),u=Vt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,a,r);else if(n.tag===19)Tm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Vt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&al(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),sf(r,!1,p,a,g);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&al(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}sf(r,!0,a,null,g);break;case"together":sf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ml(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Bi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),jr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Er(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Er(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function lx(n,r,a){switch(r.tag){case 3:Mm(r),Ns();break;case 5:Bp(r);break;case 1:bn(r.type)&&Za(r);break;case 4:Oc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;It(il,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(It(Vt,Vt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?wm(n,r,a):(It(Vt,Vt.current&1),n=Bi(n,r,a),n!==null?n.sibling:null);It(Vt,Vt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Am(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),It(Vt,Vt.current),u)break;return null;case 22:case 23:return r.lanes=0,xm(n,r,a)}return Bi(n,r,a)}var Rm,of,Cm,bm;Rm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},of=function(){},Cm=function(n,r,a,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Yr(Ei.current);var g=null;switch(a){case"input":p=z(n,p),u=z(n,u),g=[];break;case"select":p=Q({},p,{value:void 0}),u=Q({},u,{value:void 0}),g=[];break;case"textarea":p=T(n,p),u=T(n,u),g=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ja)}dt(a,u);var w;a=null;for(se in p)if(!u.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var L=p[se];for(w in L)L.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var H=u[se];if(L=p!=null?p[se]:void 0,u.hasOwnProperty(se)&&H!==L&&(H!=null||L!=null))if(se==="style")if(L){for(w in L)!L.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&L[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(g||(g=[]),g.push(se,a)),a=H;else se==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,L=L?L.__html:void 0,H!=null&&L!==H&&(g=g||[]).push(se,H)):se==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(se,""+H):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(H!=null&&se==="onScroll"&&Ft("scroll",n),g||L===H||(g=[])):(g=g||[]).push(se,H))}a&&(g=g||[]).push("style",a);var se=g;(r.updateQueue=se)&&(r.flags|=4)}},bm=function(n,r,a,u){a!==u&&(r.flags|=4)};function Zo(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function ux(n,r,a){var u=r.pendingProps;switch(Rc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return bn(r.type)&&Ka(),_n(r),null;case 3:return u=r.stateNode,Os(),Ot(Cn),Ot(mn),Bc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(tl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,si!==null&&(_f(si),si=null))),of(n,r),_n(r),null;case 5:kc(r);var p=Yr(Yo.current);if(a=r.type,n!==null&&r.stateNode!=null)Cm(n,r,a,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=Yr(Ei.current),tl(r)){u=r.stateNode,a=r.type;var g=r.memoizedProps;switch(u[Mi]=r,u[Ho]=g,n=(r.mode&1)!==0,a){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(p=0;p<ko.length;p++)Ft(ko[p],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Ht(u,g),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ft("invalid",u);break;case"textarea":te(u,g),Ft("invalid",u)}dt(a,g),p=null;for(var w in g)if(g.hasOwnProperty(w)){var L=g[w];w==="children"?typeof L=="string"?u.textContent!==L&&(g.suppressHydrationWarning!==!0&&qa(u.textContent,L,n),p=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(g.suppressHydrationWarning!==!0&&qa(u.textContent,L,n),p=["children",""+L]):o.hasOwnProperty(w)&&L!=null&&w==="onScroll"&&Ft("scroll",u)}switch(a){case"input":Tt(u),Ye(u,g,!0);break;case"textarea":Tt(u),ve(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ja)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Mi]=r,n[Ho]=u,Rm(n,r,!1,!1),r.stateNode=n;e:{switch(w=it(a,u),a){case"dialog":Ft("cancel",n),Ft("close",n),p=u;break;case"iframe":case"object":case"embed":Ft("load",n),p=u;break;case"video":case"audio":for(p=0;p<ko.length;p++)Ft(ko[p],n);p=u;break;case"source":Ft("error",n),p=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),p=u;break;case"details":Ft("toggle",n),p=u;break;case"input":Ht(n,u),p=z(n,u),Ft("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=Q({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":te(n,u),p=T(n,u),Ft("invalid",n);break;default:p=u}dt(a,p),L=p;for(g in L)if(L.hasOwnProperty(g)){var H=L[g];g==="style"?Je(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ue(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ht(n,H):typeof H=="number"&&ht(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Ft("scroll",n):H!=null&&D(n,g,H,w))}switch(a){case"input":Tt(n),Ye(n,u,!1);break;case"textarea":Tt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?P(n,!!u.multiple,g,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ja)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)bm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Yr(Yo.current),Yr(Ei.current),tl(r)){if(u=r.stateNode,a=r.memoizedProps,u[Mi]=r,(g=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:qa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qa(u.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Mi]=r,r.stateNode=u}return _n(r),null;case 13:if(Ot(Vt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Vn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Lp(),Ns(),r.flags|=98560,g=!1;else if(g=tl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=r}else Ns(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_n(r),g=!1}else si!==null&&(_f(si),si=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Jt===0&&(Jt=3):yf())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return Os(),of(n,r),n===null&&zo(r.stateNode.containerInfo),_n(r),null;case 10:return Nc(r.type._context),_n(r),null;case 17:return bn(r.type)&&Ka(),_n(r),null;case 19:if(Ot(Vt),g=r.memoizedState,g===null)return _n(r),null;if(u=(r.flags&128)!==0,w=g.rendering,w===null)if(u)Zo(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=al(n),w!==null){for(r.flags|=128,Zo(g,!1),u=w.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Vt,Vt.current&1|2),r.child}n=n.sibling}g.tail!==null&&Z()>Hs&&(r.flags|=128,u=!0,Zo(g,!1),r.lanes=4194304)}else{if(!u)if(n=al(w),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Zo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!zt)return _n(r),null}else 2*Z()-g.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,u=!0,Zo(g,!1),r.lanes=4194304);g.isBackwards?(w.sibling=r.child,r.child=w):(a=g.last,a!==null?a.sibling=w:r.child=w,g.last=w)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Z(),r.sibling=null,a=Vt.current,It(Vt,u?a&1|2:a&1),r):(_n(r),null);case 22:case 23:return xf(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Gn&1073741824)!==0&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function cx(n,r){switch(Rc(r),r.tag){case 1:return bn(r.type)&&Ka(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Os(),Ot(Cn),Ot(mn),Bc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return kc(r),null;case 13:if(Ot(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ns()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ot(Vt),null;case 4:return Os(),null;case 10:return Nc(r.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var gl=!1,vn=!1,fx=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function zs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Yt(n,r,u)}else a.current=null}function af(n,r,a){try{a()}catch(u){Yt(n,r,u)}}var Pm=!1;function hx(n,r){if(vc=Fa,n=lp(),cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,L=-1,H=-1,se=0,xe=0,ye=n,ge=null;t:for(;;){for(var Ne;ye!==a||p!==0&&ye.nodeType!==3||(L=w+p),ye!==g||u!==0&&ye.nodeType!==3||(H=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===n)break t;if(ge===a&&++se===p&&(L=w),ge===g&&++xe===u&&(H=w),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}a=L===-1||H===-1?null:{start:L,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},Fa=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var Be=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,qt=Be.memoizedState,$=r.stateNode,W=$.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:oi(r.type,Ve),qt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=r.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return Be=Pm,Pm=!1,Be}function Qo(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var g=p.destroy;p.destroy=void 0,g!==void 0&&af(r,a,g)}p=p.next}while(p!==u)}}function _l(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function lf(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Dm(n){var r=n.alternate;r!==null&&(n.alternate=null,Dm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Mi],delete r[Ho],delete r[Ec],delete r[jv],delete r[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uf(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ja));else if(u!==4&&(n=n.child,n!==null))for(uf(n,r,a),n=n.sibling;n!==null;)uf(n,r,a),n=n.sibling}function cf(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cf(n,r,a),n=n.sibling;n!==null;)cf(n,r,a),n=n.sibling}var fn=null,ai=!1;function vr(n,r,a){for(a=a.child;a!==null;)Im(n,r,a),a=a.sibling}function Im(n,r,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:vn||zs(a,r);case 6:var u=fn,p=ai;fn=null,vr(n,r,a),fn=u,ai=p,fn!==null&&(ai?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(ai?(n=fn,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Po(n)):Mc(fn,a.stateNode));break;case 4:u=fn,p=ai,fn=a.stateNode.containerInfo,ai=!0,vr(n,r,a),fn=u,ai=p;break;case 0:case 11:case 14:case 15:if(!vn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var g=p,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&af(a,r,w),p=p.next}while(p!==u)}vr(n,r,a);break;case 1:if(!vn&&(zs(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(L){Yt(a,r,L)}vr(n,r,a);break;case 21:vr(n,r,a);break;case 22:a.mode&1?(vn=(u=vn)||a.memoizedState!==null,vr(n,r,a),vn=u):vr(n,r,a);break;default:vr(n,r,a)}}function Um(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new fx),r.forEach(function(u){var p=Sx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function li(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var g=n,w=r,L=w;e:for(;L!==null;){switch(L.tag){case 5:fn=L.stateNode,ai=!1;break e;case 3:fn=L.stateNode.containerInfo,ai=!0;break e;case 4:fn=L.stateNode.containerInfo,ai=!0;break e}L=L.return}if(fn===null)throw Error(t(160));Im(g,w,p),fn=null,ai=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(se){Yt(p,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Fm(r,n),r=r.sibling}function Fm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(r,n),Ti(n),u&4){try{Qo(3,n,n.return),_l(3,n)}catch(Ve){Yt(n,n.return,Ve)}try{Qo(5,n,n.return)}catch(Ve){Yt(n,n.return,Ve)}}break;case 1:li(r,n),Ti(n),u&512&&a!==null&&zs(a,a.return);break;case 5:if(li(r,n),Ti(n),u&512&&a!==null&&zs(a,a.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(Ve){Yt(n,n.return,Ve)}}if(u&4&&(p=n.stateNode,p!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,L=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{L==="input"&&g.type==="radio"&&g.name!=null&&nt(p,g),it(L,w);var se=it(L,g);for(w=0;w<H.length;w+=2){var xe=H[w],ye=H[w+1];xe==="style"?Je(p,ye):xe==="dangerouslySetInnerHTML"?Ue(p,ye):xe==="children"?ht(p,ye):D(p,xe,ye,se)}switch(L){case"input":ot(p,g);break;case"textarea":me(p,g);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var Ne=g.value;Ne!=null?P(p,!!g.multiple,Ne,!1):ge!==!!g.multiple&&(g.defaultValue!=null?P(p,!!g.multiple,g.defaultValue,!0):P(p,!!g.multiple,g.multiple?[]:"",!1))}p[Ho]=g}catch(Ve){Yt(n,n.return,Ve)}}break;case 6:if(li(r,n),Ti(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,g=n.memoizedProps;try{p.nodeValue=g}catch(Ve){Yt(n,n.return,Ve)}}break;case 3:if(li(r,n),Ti(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(r.containerInfo)}catch(Ve){Yt(n,n.return,Ve)}break;case 4:li(r,n),Ti(n);break;case 13:li(r,n),Ti(n),p=n.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(df=Z())),u&4&&Um(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(se=vn)||xe,li(r,n),vn=se):li(r,n),Ti(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&(n.mode&1)!==0)for(Fe=n,xe=n.child;xe!==null;){for(ye=Fe=xe;Fe!==null;){switch(ge=Fe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:Qo(4,ge,ge.return);break;case 1:zs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){u=ge,a=ge.return;try{r=u,Be.props=r.memoizedProps,Be.state=r.memoizedState,Be.componentWillUnmount()}catch(Ve){Yt(u,a,Ve)}}break;case 5:zs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){zm(ye);continue}}Ne!==null?(Ne.return=ge,Fe=Ne):zm(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{p=ye.stateNode,se?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(L=ye.stateNode,H=ye.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,L.style.display=$e("display",w))}catch(Ve){Yt(n,n.return,Ve)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(Ve){Yt(n,n.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:li(r,n),Ti(n),u&4&&Um(n);break;case 21:break;default:li(r,n),Ti(n)}}function Ti(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Lm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ht(p,""),u.flags&=-33);var g=Nm(n);cf(n,g,p);break;case 3:case 4:var w=u.stateNode.containerInfo,L=Nm(n);uf(n,L,w);break;default:throw Error(t(161))}}catch(H){Yt(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function dx(n,r,a){Fe=n,Om(n)}function Om(n,r,a){for(var u=(n.mode&1)!==0;Fe!==null;){var p=Fe,g=p.child;if(p.tag===22&&u){var w=p.memoizedState!==null||gl;if(!w){var L=p.alternate,H=L!==null&&L.memoizedState!==null||vn;L=gl;var se=vn;if(gl=w,(vn=H)&&!se)for(Fe=p;Fe!==null;)w=Fe,H=w.child,w.tag===22&&w.memoizedState!==null?Bm(p):H!==null?(H.return=w,Fe=H):Bm(p);for(;g!==null;)Fe=g,Om(g),g=g.sibling;Fe=p,gl=L,vn=se}km(n)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,Fe=g):km(n)}}function km(n){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||_l(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!vn)if(a===null)u.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:oi(r.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&zp(r,g,u);break;case 3:var w=r.updateQueue;if(w!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}zp(r,w,a)}break;case 5:var L=r.stateNode;if(a===null&&r.flags&4){a=L;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Po(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&lf(r)}catch(ge){Yt(r,r.return,ge)}}if(r===n){Fe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function zm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function Bm(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{_l(4,r)}catch(H){Yt(r,a,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(H){Yt(r,p,H)}}var g=r.return;try{lf(r)}catch(H){Yt(r,g,H)}break;case 5:var w=r.return;try{lf(r)}catch(H){Yt(r,w,H)}}}catch(H){Yt(r,r.return,H)}if(r===n){Fe=null;break}var L=r.sibling;if(L!==null){L.return=r.return,Fe=L;break}Fe=r.return}}var px=Math.ceil,vl=b.ReactCurrentDispatcher,ff=b.ReactCurrentOwner,Qn=b.ReactCurrentBatchConfig,Mt=0,an=null,$t=null,hn=0,Gn=0,Bs=dr(0),Jt=0,Jo=null,jr=0,xl=0,hf=0,ea=null,Dn=null,df=0,Hs=1/0,Hi=null,yl=!1,pf=null,xr=null,Sl=!1,yr=null,Ml=0,ta=0,mf=null,El=-1,wl=0;function Tn(){return(Mt&6)!==0?Z():El!==-1?El:El=Z()}function Sr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&hn!==0?hn&-hn:Zv.transition!==null?(wl===0&&(wl=Lt()),wl):(n=St,n!==0||(n=window.event,n=n===void 0?16:Vd(n.type)),n)}function ui(n,r,a,u){if(50<ta)throw ta=0,mf=null,Error(t(185));rn(n,a,u),((Mt&2)===0||n!==an)&&(n===an&&((Mt&2)===0&&(xl|=a),Jt===4&&Mr(n,hn)),Ln(n,u),a===1&&Mt===0&&(r.mode&1)===0&&(Hs=Z()+500,Qa&&mr()))}function Ln(n,r){var a=n.callbackNode;En(n,r);var u=dn(n,n===an?hn:0);if(u===0)a!==null&&R(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&R(a),r===1)n.tag===0?Kv(Vm.bind(null,n)):Rp(Vm.bind(null,n)),Yv(function(){(Mt&6)===0&&mr()}),a=null;else{switch(Si(u)){case 1:a=Se;break;case 4:a=Re;break;case 16:a=Le;break;case 536870912:a=et;break;default:a=Le}a=Km(a,Hm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Hm(n,r){if(El=-1,wl=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Vs()&&n.callbackNode!==a)return null;var u=dn(n,n===an?hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Tl(n,u);else{r=u;var p=Mt;Mt|=2;var g=Wm();(an!==n||hn!==r)&&(Hi=null,Hs=Z()+500,Kr(n,r));do try{_x();break}catch(L){Gm(n,L)}while(!0);Lc(),vl.current=g,Mt=p,$t!==null?r=0:(an=null,hn=0,r=Jt)}if(r!==0){if(r===2&&(p=Ni(n),p!==0&&(u=p,r=gf(n,p))),r===1)throw a=Jo,Kr(n,0),Mr(n,u),Ln(n,Z()),a;if(r===6)Mr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!mx(p)&&(r=Tl(n,u),r===2&&(g=Ni(n),g!==0&&(u=g,r=gf(n,g))),r===1))throw a=Jo,Kr(n,0),Mr(n,u),Ln(n,Z()),a;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Zr(n,Dn,Hi);break;case 3:if(Mr(n,u),(u&130023424)===u&&(r=df+500-Z(),10<r)){if(dn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Sc(Zr.bind(null,n,Dn,Hi),r);break}Zr(n,Dn,Hi);break;case 4:if(Mr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var w=31-st(u);g=1<<w,w=r[w],w>p&&(p=w),u&=~g}if(u=p,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*px(u/1960))-u,10<u){n.timeoutHandle=Sc(Zr.bind(null,n,Dn,Hi),u);break}Zr(n,Dn,Hi);break;case 5:Zr(n,Dn,Hi);break;default:throw Error(t(329))}}}return Ln(n,Z()),n.callbackNode===a?Hm.bind(null,n):null}function gf(n,r){var a=ea;return n.current.memoizedState.isDehydrated&&(Kr(n,r).flags|=256),n=Tl(n,r),n!==2&&(r=Dn,Dn=a,r!==null&&_f(r)),n}function _f(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function mx(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],g=p.getSnapshot;p=p.value;try{if(!ri(g(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(n,r){for(r&=~hf,r&=~xl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-st(r),u=1<<a;n[a]=-1,r&=~u}}function Vm(n){if((Mt&6)!==0)throw Error(t(327));Vs();var r=dn(n,0);if((r&1)===0)return Ln(n,Z()),null;var a=Tl(n,r);if(n.tag!==0&&a===2){var u=Ni(n);u!==0&&(r=u,a=gf(n,u))}if(a===1)throw a=Jo,Kr(n,0),Mr(n,r),Ln(n,Z()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zr(n,Dn,Hi),Ln(n,Z()),null}function vf(n,r){var a=Mt;Mt|=1;try{return n(r)}finally{Mt=a,Mt===0&&(Hs=Z()+500,Qa&&mr())}}function $r(n){yr!==null&&yr.tag===0&&(Mt&6)===0&&Vs();var r=Mt;Mt|=1;var a=Qn.transition,u=St;try{if(Qn.transition=null,St=1,n)return n()}finally{St=u,Qn.transition=a,Mt=r,(Mt&6)===0&&mr()}}function xf(){Gn=Bs.current,Ot(Bs)}function Kr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Xv(a)),$t!==null)for(a=$t.return;a!==null;){var u=a;switch(Rc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:Os(),Ot(Cn),Ot(mn),Bc();break;case 5:kc(u);break;case 4:Os();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Nc(u.type._context);break;case 22:case 23:xf()}a=a.return}if(an=n,$t=n=Er(n.current,null),hn=Gn=r,Jt=0,Jo=null,hf=xl=jr=0,Dn=ea=null,Xr!==null){for(r=0;r<Xr.length;r++)if(a=Xr[r],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=p,u.next=w}a.pending=u}Xr=null}return n}function Gm(n,r){do{var a=$t;try{if(Lc(),ll.current=hl,ul){for(var u=Gt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}ul=!1}if(qr=0,on=Qt=Gt=null,qo=!1,jo=0,ff.current=null,a===null||a.return===null){Jt=1,Jo=r,$t=null;break}e:{var g=n,w=a.return,L=a,H=r;if(r=hn,L.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var se=H,xe=L,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=pm(w);if(Ne!==null){Ne.flags&=-257,mm(Ne,w,L,g,r),Ne.mode&1&&dm(g,se,r),r=Ne,H=se;var Be=r.updateQueue;if(Be===null){var Ve=new Set;Ve.add(H),r.updateQueue=Ve}else Be.add(H);break e}else{if((r&1)===0){dm(g,se,r),yf();break e}H=Error(t(426))}}else if(zt&&L.mode&1){var qt=pm(w);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),mm(qt,w,L,g,r),Pc(ks(H,L));break e}}g=H=ks(H,L),Jt!==4&&(Jt=2),ea===null?ea=[g]:ea.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var $=fm(g,H,r);kp(g,$);break e;case 1:L=H;var W=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(xr===null||!xr.has(J)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ee=hm(g,L,r);kp(g,Ee);break e}}g=g.return}while(g!==null)}Ym(a)}catch(Xe){r=Xe,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Wm(){var n=vl.current;return vl.current=hl,n===null?hl:n}function yf(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||(jr&268435455)===0&&(xl&268435455)===0||Mr(an,hn)}function Tl(n,r){var a=Mt;Mt|=2;var u=Wm();(an!==n||hn!==r)&&(Hi=null,Kr(n,r));do try{gx();break}catch(p){Gm(n,p)}while(!0);if(Lc(),Mt=a,vl.current=u,$t!==null)throw Error(t(261));return an=null,hn=0,Jt}function gx(){for(;$t!==null;)Xm($t)}function _x(){for(;$t!==null&&!q();)Xm($t)}function Xm(n){var r=$m(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?Ym(n):$t=r,ff.current=null}function Ym(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=ux(a,r,Gn),a!==null){$t=a;return}}else{if(a=cx(a,r),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,$t=null;return}}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);Jt===0&&(Jt=5)}function Zr(n,r,a){var u=St,p=Qn.transition;try{Qn.transition=null,St=1,vx(n,r,a,u)}finally{Qn.transition=p,St=u}return null}function vx(n,r,a,u){do Vs();while(yr!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(cn(n,g),n===an&&($t=an=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Sl||(Sl=!0,Km(Le,function(){return Vs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var w=St;St=1;var L=Mt;Mt|=4,ff.current=null,hx(n,a),Fm(a,n),kv(xc),Fa=!!vc,xc=vc=null,n.current=a,dx(a),re(),Mt=L,St=w,Qn.transition=g}else n.current=a;if(Sl&&(Sl=!1,yr=n,Ml=p),g=n.pendingLanes,g===0&&(xr=null),vt(a.stateNode),Ln(n,Z()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(yl)throw yl=!1,n=pf,pf=null,n;return(Ml&1)!==0&&n.tag!==0&&Vs(),g=n.pendingLanes,(g&1)!==0?n===mf?ta++:(ta=0,mf=n):ta=0,mr(),null}function Vs(){if(yr!==null){var n=Si(Ml),r=Qn.transition,a=St;try{if(Qn.transition=null,St=16>n?16:n,yr===null)var u=!1;else{if(n=yr,yr=null,Ml=0,(Mt&6)!==0)throw Error(t(331));var p=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var g=Fe,w=g.child;if((Fe.flags&16)!==0){var L=g.deletions;if(L!==null){for(var H=0;H<L.length;H++){var se=L[H];for(Fe=se;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Qo(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Fe=ye;else for(;Fe!==null;){xe=Fe;var ge=xe.sibling,Ne=xe.return;if(Dm(xe),xe===se){Fe=null;break}if(ge!==null){ge.return=Ne,Fe=ge;break}Fe=Ne}}}var Be=g.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var qt=Ve.sibling;Ve.sibling=null,Ve=qt}while(Ve!==null)}}Fe=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Fe=w;else e:for(;Fe!==null;){if(g=Fe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Qo(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,Fe=$;break e}Fe=g.return}}var W=n.current;for(Fe=W;Fe!==null;){w=Fe;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,Fe=J;else e:for(w=W;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:_l(9,L)}}catch(Xe){Yt(L,L.return,Xe)}if(L===w){Fe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Fe=Ee;break e}Fe=L.return}}if(Mt=p,mr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{St=a,Qn.transition=r}}return!1}function qm(n,r,a){r=ks(a,r),r=fm(n,r,1),n=_r(n,r,1),r=Tn(),n!==null&&(rn(n,1,r),Ln(n,r))}function Yt(n,r,a){if(n.tag===3)qm(n,n,a);else for(;r!==null;){if(r.tag===3){qm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xr===null||!xr.has(u))){n=ks(a,n),n=hm(r,n,1),r=_r(r,n,1),n=Tn(),r!==null&&(rn(r,1,n),Ln(r,n));break}}r=r.return}}function xx(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Tn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(hn&a)===a&&(Jt===4||Jt===3&&(hn&130023424)===hn&&500>Z()-df?Kr(n,0):hf|=a),Ln(n,r)}function jm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var a=Tn();n=ki(n,r),n!==null&&(rn(n,r,a),Ln(n,a))}function yx(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),jm(n,a)}function Sx(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),jm(n,a)}var $m;$m=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Pn=!1,lx(n,r,a);Pn=(n.flags&131072)!==0}else Pn=!1,zt&&(r.flags&1048576)!==0&&Cp(r,el,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;ml(n,r),n=r.pendingProps;var p=Ps(r,mn.current);Fs(r,a),p=Gc(null,r,u,n,p,a);var g=Wc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,bn(u)?(g=!0,Za(r)):g=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Fc(r),p.updater=dl,r.stateNode=p,p._reactInternals=r,Kc(r,u,n,a),r=ef(null,r,u,!0,g,a)):(r.tag=0,zt&&g&&Ac(r),wn(null,r,p,a),r=r.child),r;case 16:u=r.elementType;e:{switch(ml(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Ex(u),n=oi(u,n),p){case 0:r=Jc(null,r,u,n,a);break e;case 1:r=Sm(null,r,u,n,a);break e;case 11:r=gm(null,r,u,n,a);break e;case 14:r=_m(null,r,u,oi(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:oi(u,p),Jc(n,r,u,p,a);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:oi(u,p),Sm(n,r,u,p,a);case 3:e:{if(Mm(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,p=g.element,Op(n,r),ol(r,u,null,a);var w=r.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){p=ks(Error(t(423)),r),r=Em(n,r,u,a,p);break e}else if(u!==p){p=ks(Error(t(424)),r),r=Em(n,r,u,a,p);break e}else for(Vn=hr(r.stateNode.containerInfo.firstChild),Hn=r,zt=!0,si=null,a=Up(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ns(),u===p){r=Bi(n,r,a);break e}wn(n,r,u,a)}r=r.child}return r;case 5:return Bp(r),n===null&&bc(r),u=r.type,p=r.pendingProps,g=n!==null?n.memoizedProps:null,w=p.children,yc(u,p)?w=null:g!==null&&yc(u,g)&&(r.flags|=32),ym(n,r),wn(n,r,w,a),r.child;case 6:return n===null&&bc(r),null;case 13:return wm(n,r,a);case 4:return Oc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Is(r,null,u,a):wn(n,r,u,a),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:oi(u,p),gm(n,r,u,p,a);case 7:return wn(n,r,r.pendingProps,a),r.child;case 8:return wn(n,r,r.pendingProps.children,a),r.child;case 12:return wn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,g=r.memoizedProps,w=p.value,It(il,u._currentValue),u._currentValue=w,g!==null)if(ri(g.value,w)){if(g.children===p.children&&!Cn.current){r=Bi(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var L=g.dependencies;if(L!==null){w=g.child;for(var H=L.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=zi(-1,a&-a),H.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),se.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),Ic(g.return,a,r),L.lanes|=a;break}H=H.next}}else if(g.tag===10)w=g.type===r.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,L=w.alternate,L!==null&&(L.lanes|=a),Ic(w,a,r),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===r){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}wn(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Fs(r,a),p=Kn(p),u=u(p),r.flags|=1,wn(n,r,u,a),r.child;case 14:return u=r.type,p=oi(u,r.pendingProps),p=oi(u.type,p),_m(n,r,u,p,a);case 15:return vm(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:oi(u,p),ml(n,r),r.tag=1,bn(u)?(n=!0,Za(r)):n=!1,Fs(r,a),um(r,u,p),Kc(r,u,p,a),ef(null,r,u,!0,n,a);case 19:return Am(n,r,a);case 22:return xm(n,r,a)}throw Error(t(156,r.tag))};function Km(n,r){return Na(n,r)}function Mx(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,r,a,u){return new Mx(n,r,a,u)}function Sf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return Sf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===ue)return 14}return 2}function Er(n,r){var a=n.alternate;return a===null?(a=Jn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Al(n,r,a,u,p,g){var w=2;if(u=n,typeof n=="function")Sf(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return Qr(a.children,p,g,r);case G:w=8,p|=8;break;case C:return n=Jn(12,a,r,p|2),n.elementType=C,n.lanes=g,n;case B:return n=Jn(13,a,r,p),n.elementType=B,n.lanes=g,n;case ie:return n=Jn(19,a,r,p),n.elementType=ie,n.lanes=g,n;case oe:return Rl(a,p,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case k:w=9;break e;case X:w=11;break e;case ue:w=14;break e;case ne:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Jn(w,a,r,p),r.elementType=n,r.type=u,r.lanes=g,r}function Qr(n,r,a,u){return n=Jn(7,n,u,r),n.lanes=a,n}function Rl(n,r,a,u){return n=Jn(22,n,u,r),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function Mf(n,r,a){return n=Jn(6,n,null,r),n.lanes=a,n}function Ef(n,r,a){return r=Jn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function wx(n,r,a,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function wf(n,r,a,u,p,g,w,L,H){return n=new wx(n,r,a,L,H),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Jn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(g),n}function Tx(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Zm(n){if(!n)return pr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(bn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(bn(a))return Tp(n,a,r)}return r}function Qm(n,r,a,u,p,g,w,L,H){return n=wf(a,u,!0,n,p,g,w,L,H),n.context=Zm(null),a=n.current,u=Tn(),p=Sr(a),g=zi(u,p),g.callback=r??null,_r(a,g,p),n.current.lanes=p,rn(n,p,u),Ln(n,u),n}function Cl(n,r,a,u){var p=r.current,g=Tn(),w=Sr(p);return a=Zm(a),r.context===null?r.context=a:r.pendingContext=a,r=zi(g,w),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=_r(p,r,w),n!==null&&(ui(n,p,w,g),sl(n,p,w)),w}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Tf(n,r){Jm(n,r),(n=n.alternate)&&Jm(n,r)}function Ax(){return null}var eg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Af(n){this._internalRoot=n}Pl.prototype.render=Af.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Cl(n,r,null,null)},Pl.prototype.unmount=Af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;$r(function(){Cl(null,n,null,null)}),r[Ii]=null}};function Pl(n){this._internalRoot=n}Pl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Od();n={blockedOn:null,target:n,priority:r};for(var a=0;a<ur.length&&r!==0&&r<ur[a].priority;a++);ur.splice(a,0,n),a===0&&Bd(n)}};function Rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tg(){}function Rx(n,r,a,u,p){if(p){if(typeof u=="function"){var g=u;u=function(){var se=bl(w);g.call(se)}}var w=Qm(r,u,n,0,null,!1,!1,"",tg);return n._reactRootContainer=w,n[Ii]=w.current,zo(n.nodeType===8?n.parentNode:n),$r(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var L=u;u=function(){var se=bl(H);L.call(se)}}var H=wf(n,0,!1,null,null,!1,!1,"",tg);return n._reactRootContainer=H,n[Ii]=H.current,zo(n.nodeType===8?n.parentNode:n),$r(function(){Cl(r,H,a,u)}),H}function Ll(n,r,a,u,p){var g=a._reactRootContainer;if(g){var w=g;if(typeof p=="function"){var L=p;p=function(){var H=bl(w);L.call(H)}}Cl(r,w,n,p)}else w=Rx(a,r,n,p,u);return bl(w)}Ud=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=_t(r.pendingLanes);a!==0&&(sn(r,a|1),Ln(r,Z()),(Mt&6)===0&&(Hs=Z()+500,mr()))}break;case 13:$r(function(){var u=ki(n,1);if(u!==null){var p=Tn();ui(u,n,1,p)}}),Tf(n,1)}},Zu=function(n){if(n.tag===13){var r=ki(n,134217728);if(r!==null){var a=Tn();ui(r,n,134217728,a)}Tf(n,134217728)}},Fd=function(n){if(n.tag===13){var r=Sr(n),a=ki(n,r);if(a!==null){var u=Tn();ui(a,n,r,u)}Tf(n,r)}},Od=function(){return St},kd=function(n,r){var a=St;try{return St=n,r()}finally{St=a}},Ae=function(n,r,a){switch(r){case"input":if(ot(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var p=$a(u);if(!p)throw Error(t(90));ft(u),ot(u,p)}}}break;case"textarea":me(n,a);break;case"select":r=a.value,r!=null&&P(n,!!a.multiple,r,!1)}},Ut=vf,Zt=$r;var Cx={usingClientEntryPoint:!1,Events:[Vo,Cs,$a,be,rt,vf]},na={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Da(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Qe=Nl.inject(bx),He=Nl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx,Nn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(r))throw Error(t(200));return Tx(n,r,null,a)},Nn.createRoot=function(n,r){if(!Rf(n))throw Error(t(299));var a=!1,u="",p=eg;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=wf(n,1,!1,null,null,a,!1,u,p),n[Ii]=r.current,zo(n.nodeType===8?n.parentNode:n),new Af(r)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Da(r),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return $r(n)},Nn.hydrate=function(n,r,a){if(!Dl(r))throw Error(t(200));return Ll(null,n,r,!0,a)},Nn.hydrateRoot=function(n,r,a){if(!Rf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,g="",w=eg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),r=Qm(r,null,n,1,a??null,p,!1,g,w),n[Ii]=r.current,zo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new Pl(r)},Nn.render=function(n,r,a){if(!Dl(r))throw Error(t(200));return Ll(null,n,r,!1,a)},Nn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?($r(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},Nn.unstable_batchedUpdates=vf,Nn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,r,a,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var ug;function Ox(){if(ug)return Pf.exports;ug=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Pf.exports=Fx(),Pf.exports}var cg;function kx(){if(cg)return Il;cg=1;var i=Ox();return Il.createRoot=i.createRoot,Il.hydrateRoot=i.hydrateRoot,Il}var zx=kx();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="172",lo={ROTATE:0,DOLLY:1,PAN:2},so={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bx=0,fg=1,Hx=2,H_=1,Vx=2,ji=3,Or=0,On=1,$i=2,Ur=0,uo=1,hg=2,dg=3,pg=4,Gx=5,as=100,Wx=101,Xx=102,Yx=103,qx=104,jx=200,$x=201,Kx=202,Zx=203,ph=204,mh=205,Qx=206,Jx=207,ey=208,ty=209,ny=210,iy=211,ry=212,sy=213,oy=214,gh=0,_h=1,vh=2,po=3,xh=4,yh=5,Sh=6,Mh=7,V_=0,ay=1,ly=2,Fr=0,uy=1,cy=2,fy=3,hy=4,dy=5,py=6,my=7,G_=300,mo=301,go=302,Eh=303,wh=304,Gu=306,Th=1e3,us=1001,Ah=1002,vi=1003,gy=1004,Ul=1005,Ci=1006,Nf=1007,cs=1008,er=1009,W_=1010,X_=1011,ga=1012,md=1013,ds=1014,Zi=1015,ya=1016,gd=1017,_d=1018,_o=1020,Y_=35902,q_=1021,j_=1022,gi=1023,$_=1024,K_=1025,co=1026,vo=1027,Z_=1028,vd=1029,Q_=1030,xd=1031,yd=1033,mu=33776,gu=33777,_u=33778,vu=33779,Rh=35840,Ch=35841,bh=35842,Ph=35843,Dh=36196,Lh=37492,Nh=37496,Ih=37808,Uh=37809,Fh=37810,Oh=37811,kh=37812,zh=37813,Bh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,Xh=37819,Yh=37820,qh=37821,xu=36492,jh=36494,$h=36495,J_=36283,Kh=36284,Zh=36285,Qh=36286,_y=3200,vy=3201,xy=0,yy=1,Ir="",ti="srgb",xo="srgb-linear",Au="linear",Pt="srgb",Gs=7680,mg=519,Sy=512,My=513,Ey=514,e0=515,wy=516,Ty=517,Ay=518,Ry=519,gg=35044,_g="300 es",Qi=2e3,Ru=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Jh=180/Math.PI;function Sa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Cy(i,e){return(i%e+e)%e}function If(i,e,t){return(1-t)*i+t*e}function ra(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const by={DEG2RAD:yu};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,s,o,l,c,f,h,d){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,d)}set(e,t,s,o,l,c,f,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=s,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],d=s[1],m=s[4],_=s[7],v=s[2],y=s[5],M=s[8],E=o[0],S=o[3],x=o[6],N=o[1],D=o[4],b=o[7],V=o[2],F=o[5],U=o[8];return l[0]=c*E+f*N+h*V,l[3]=c*S+f*D+h*F,l[6]=c*x+f*b+h*U,l[1]=d*E+m*N+_*V,l[4]=d*S+m*D+_*F,l[7]=d*x+m*b+_*U,l[2]=v*E+y*N+M*V,l[5]=v*S+y*D+M*F,l[8]=v*x+y*b+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*f*d-s*l*m+s*f*h+o*l*d-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=m*c-f*d,v=f*h-m*l,y=d*l-c*h,M=t*_+s*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(o*d-m*s)*E,e[2]=(f*s-o*c)*E,e[3]=v*E,e[4]=(m*t-o*h)*E,e[5]=(o*l-f*t)*E,e[6]=y*E,e[7]=(s*h-d*t)*E,e[8]=(c*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(s*h,s*d,-s*(h*c+d*f)+c+e,-o*d,o*h,-o*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Uf.makeScale(e,t)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uf=new lt;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Py(){const i=Cu("canvas");return i.style.display="block",i}const vg={};function ro(i){i in vg||(vg[i]=!0,console.warn(i))}function Dy(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Ly(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ny(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xg=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iy(){const i={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(o.r=Ji(o.r),o.g=Ji(o.g),o.b=Ji(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?Au:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[xo]:{primaries:e,whitePoint:s,transfer:Au,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),i}const wt=Iy();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ws;class Uy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Cu("canvas")),Ws.width=e.width,Ws.height=e.height;const s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Ji(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ji(t[s]/255)*255):t[s]=Ji(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fy=0;class n0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Ff(o[c].image)):l.push(Ff(o[c]))}else l=Ff(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ff(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oy=0;class kn extends vs{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,s=us,o=us,l=Ci,c=cs,f=gi,h=er,d=kn.DEFAULT_ANISOTROPY,m=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Sa(),this.name="",this.source=new n0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=G_;kn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,d=h[0],m=h[4],_=h[8],v=h[1],y=h[5],M=h[9],E=h[2],S=h[6],x=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,b=(y+1)/2,V=(x+1)/2,F=(m+v)/4,U=(_+E)/4,G=(M+S)/4;return D>b&&D>V?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=F/s,l=U/s):b>V?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=F/o,l=G/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=U/l,o=G/l),this.set(s,o,l,t),this}let N=Math.sqrt((S-M)*(S-M)+(_-E)*(_-E)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(_-E)/N,this.z=(v-m)/N,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ky extends vs{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new kn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new n0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends ky{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class i0 extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];const v=l[c+0],y=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(_!==E||h!==v||d!==y||m!==M){let S=1-f;const x=h*v+d*y+m*M+_*E,N=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const V=Math.sqrt(D),F=Math.atan2(V,x*N);S=Math.sin(S*F)/V,f=Math.sin(f*F)/V}const b=f*N;if(h=h*S+v*b,d=d*S+y*b,m=m*S+M*b,_=_*S+E*b,S===1-f){const V=1/Math.sqrt(h*h+d*d+m*m+_*_);h*=V,d*=V,m*=V,_*=V}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],d=s[o+2],m=s[o+3],_=l[c],v=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+m*_+h*y-d*v,e[t+1]=h*M+m*v+d*_-f*y,e[t+2]=d*M+m*y+f*v-h*_,e[t+3]=m*M-f*_-h*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(s/2),m=f(o/2),_=f(l/2),v=h(s/2),y=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=v*m*_+d*y*M,this._y=d*y*_-v*m*M,this._z=d*m*M+v*y*_,this._w=d*m*_-v*y*M;break;case"YXZ":this._x=v*m*_+d*y*M,this._y=d*y*_-v*m*M,this._z=d*m*M-v*y*_,this._w=d*m*_+v*y*M;break;case"ZXY":this._x=v*m*_-d*y*M,this._y=d*y*_+v*m*M,this._z=d*m*M+v*y*_,this._w=d*m*_-v*y*M;break;case"ZYX":this._x=v*m*_-d*y*M,this._y=d*y*_+v*m*M,this._z=d*m*M-v*y*_,this._w=d*m*_+v*y*M;break;case"YZX":this._x=v*m*_+d*y*M,this._y=d*y*_+v*m*M,this._z=d*m*M-v*y*_,this._w=d*m*_-v*y*M;break;case"XZY":this._x=v*m*_-d*y*M,this._y=d*y*_-v*m*M,this._z=d*m*M+v*y*_,this._w=d*m*_+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],m=t[6],_=t[10],v=s+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-h)*y,this._y=(l-d)*y,this._z=(c-o)*y}else if(s>f&&s>_){const y=2*Math.sqrt(1+s-f-_);this._w=(m-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+d)/y}else if(f>_){const y=2*Math.sqrt(1+f-s-_);this._w=(l-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+_-s-f);this._w=(c-o)/y,this._x=(l+d)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,m=t._w;return this._x=s*m+c*f+o*d-l*h,this._y=o*m+c*h+l*f-s*d,this._z=l*m+c*d+s*h-o*f,this._w=c*m-s*f-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*s+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,f),_=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=c*_+this._w*v,this._x=s*_+this._x*v,this._y=o*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*o-f*s),m=2*(f*t-l*o),_=2*(l*s-c*t);return this.x=t+h*d+c*_-f*m,this.y=s+h*m+f*d-l*_,this.z=o+h*_+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new K,Sg=new ms;class Ma{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ci):ci.fromBufferAttribute(l,c),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fl.copy(s.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ol.subVectors(this.max,sa),Xs.subVectors(e.a,sa),Ys.subVectors(e.b,sa),qs.subVectors(e.c,sa),Tr.subVectors(Ys,Xs),Ar.subVectors(qs,Ys),Jr.subVectors(Xs,qs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Jr.z,Jr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Jr.z,0,-Jr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Jr.y,Jr.x,0];return!kf(t,Xs,Ys,qs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,Xs,Ys,qs,Ol))?!1:(kl.crossVectors(Tr,Ar),t=[kl.x,kl.y,kl.z],kf(t,Xs,Ys,qs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new K,new K,new K,new K,new K,new K,new K,new K],ci=new K,Fl=new Ma,Xs=new K,Ys=new K,qs=new K,Tr=new K,Ar=new K,Jr=new K,sa=new K,Ol=new K,kl=new K,es=new K;function kf(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){es.fromArray(i,l);const f=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),h=e.dot(es),d=t.dot(es),m=s.dot(es);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>f)return!1}return!0}const By=new Ma,oa=new K,zf=new K;class Ea{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):By.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(oa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(zf)),this.expandByPoint(oa.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new K,Bf=new K,zl=new K,Rr=new K,Hf=new K,Bl=new K,Vf=new K;class Wu{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Bf.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Bf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(zl),f=Rr.dot(this.direction),h=-Rr.dot(zl),d=Rr.lengthSq(),m=Math.abs(1-c*c);let _,v,y,M;if(m>0)if(_=c*h-f,v=c*f-h,M=l*m,_>=0)if(v>=-M)if(v<=M){const E=1/m;_*=E,v*=E,y=_*(_+c*v+2*f)+v*(c*_+v+2*h)+d}else v=l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*h)+d;else v=-l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*h)+d;else v<=-M?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+v*(v+2*h)+d):v<=M?(_=0,v=Math.min(Math.max(-l,-h),l),y=v*(v+2*h)+d):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+v*(v+2*h)+d);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*h)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Bf).addScaledVector(zl,v),y}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(s=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){Hf.subVectors(t,e),Bl.subVectors(s,e),Vf.crossVectors(Hf,Bl);let c=this.direction.dot(Vf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const h=f*this.direction.dot(Bl.crossVectors(Rr,Bl));if(h<0)return null;const d=f*this.direction.dot(Hf.cross(Rr));if(d<0||h+d>c)return null;const m=-f*Rr.dot(Vf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,s,o,l,c,f,h,d,m,_,v,y,M,E,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,d,m,_,v,y,M,E,S)}set(e,t,s,o,l,c,f,h,d,m,_,v,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=d,x[6]=m,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),d=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,y=c*_,M=f*m,E=f*_;t[0]=h*m,t[4]=-h*_,t[8]=d,t[1]=y+M*d,t[5]=v-E*d,t[9]=-f*h,t[2]=E-v*d,t[6]=M+y*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,y=h*_,M=d*m,E=d*_;t[0]=v+E*f,t[4]=M*f-y,t[8]=c*d,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=y*f-M,t[6]=E+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,y=h*_,M=d*m,E=d*_;t[0]=v-E*f,t[4]=-c*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*m,t[9]=E-v*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,y=c*_,M=f*m,E=f*_;t[0]=h*m,t[4]=M*d-y,t[8]=v*d+E,t[1]=h*_,t[5]=E*d+v,t[9]=y*d-M,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,y=c*d,M=f*h,E=f*d;t[0]=h*m,t[4]=E-v*_,t[8]=M*_+y,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-d*m,t[6]=y*_+M,t[10]=v-E*_}else if(e.order==="XZY"){const v=c*h,y=c*d,M=f*h,E=f*d;t[0]=h*m,t[4]=-_,t[8]=d*m,t[1]=v*_+E,t[5]=c*m,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*m,t[10]=E*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,t,s){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Cr.crossVectors(s,Wn),Cr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Cr.crossVectors(s,Wn)),Cr.normalize(),Hl.crossVectors(Wn,Cr),o[0]=Cr.x,o[4]=Hl.x,o[8]=Wn.x,o[1]=Cr.y,o[5]=Hl.y,o[9]=Wn.y,o[2]=Cr.z,o[6]=Hl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],d=s[12],m=s[1],_=s[5],v=s[9],y=s[13],M=s[2],E=s[6],S=s[10],x=s[14],N=s[3],D=s[7],b=s[11],V=s[15],F=o[0],U=o[4],G=o[8],C=o[12],A=o[1],k=o[5],X=o[9],B=o[13],ie=o[2],ue=o[6],ne=o[10],oe=o[14],O=o[3],ae=o[7],Q=o[11],I=o[15];return l[0]=c*F+f*A+h*ie+d*O,l[4]=c*U+f*k+h*ue+d*ae,l[8]=c*G+f*X+h*ne+d*Q,l[12]=c*C+f*B+h*oe+d*I,l[1]=m*F+_*A+v*ie+y*O,l[5]=m*U+_*k+v*ue+y*ae,l[9]=m*G+_*X+v*ne+y*Q,l[13]=m*C+_*B+v*oe+y*I,l[2]=M*F+E*A+S*ie+x*O,l[6]=M*U+E*k+S*ue+x*ae,l[10]=M*G+E*X+S*ne+x*Q,l[14]=M*C+E*B+S*oe+x*I,l[3]=N*F+D*A+b*ie+V*O,l[7]=N*U+D*k+b*ue+V*ae,l[11]=N*G+D*X+b*ne+V*Q,l[15]=N*C+D*B+b*oe+V*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],m=e[2],_=e[6],v=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+l*h*_-o*d*_-l*f*v+s*d*v+o*f*y-s*h*y)+E*(+t*h*y-t*d*v+l*c*v-o*c*y+o*d*m-l*h*m)+S*(+t*d*_-t*f*y-l*c*_+s*c*y+l*f*m-s*d*m)+x*(-o*f*m-t*h*_+t*f*v+o*c*_-s*c*v+s*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=e[9],v=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],N=_*S*d-E*v*d+E*h*y-f*S*y-_*h*x+f*v*x,D=M*v*d-m*S*d-M*h*y+c*S*y+m*h*x-c*v*x,b=m*E*d-M*_*d+M*f*y-c*E*y-m*f*x+c*_*x,V=M*_*h-m*E*h-M*f*v+c*E*v+m*f*S-c*_*S,F=t*N+s*D+o*b+l*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=N*U,e[1]=(E*v*l-_*S*l-E*o*y+s*S*y+_*o*x-s*v*x)*U,e[2]=(f*S*l-E*h*l+E*o*d-s*S*d-f*o*x+s*h*x)*U,e[3]=(_*h*l-f*v*l-_*o*d+s*v*d+f*o*y-s*h*y)*U,e[4]=D*U,e[5]=(m*S*l-M*v*l+M*o*y-t*S*y-m*o*x+t*v*x)*U,e[6]=(M*h*l-c*S*l-M*o*d+t*S*d+c*o*x-t*h*x)*U,e[7]=(c*v*l-m*h*l+m*o*d-t*v*d-c*o*y+t*h*y)*U,e[8]=b*U,e[9]=(M*_*l-m*E*l-M*s*y+t*E*y+m*s*x-t*_*x)*U,e[10]=(c*E*l-M*f*l+M*s*d-t*E*d-c*s*x+t*f*x)*U,e[11]=(m*f*l-c*_*l-m*s*d+t*_*d+c*s*y-t*f*y)*U,e[12]=V*U,e[13]=(m*E*o-M*_*o+M*s*v-t*E*v-m*s*S+t*_*S)*U,e[14]=(M*f*o-c*E*o-M*s*h+t*E*h+c*s*S-t*f*S)*U,e[15]=(c*_*o-m*f*o+m*s*h-t*_*h-c*s*v+t*f*v)*U,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,d=l*c,m=l*f;return this.set(d*c+s,d*f-o*h,d*h+o*f,0,d*f+o*h,m*f+s,m*h-o*c,0,d*h-o*f,m*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,m=c+c,_=f+f,v=l*d,y=l*m,M=l*_,E=c*m,S=c*_,x=f*_,N=h*d,D=h*m,b=h*_,V=s.x,F=s.y,U=s.z;return o[0]=(1-(E+x))*V,o[1]=(y+b)*V,o[2]=(M-D)*V,o[3]=0,o[4]=(y-b)*F,o[5]=(1-(v+x))*F,o[6]=(S+N)*F,o[7]=0,o[8]=(M+D)*U,o[9]=(S-N)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=js.set(o[0],o[1],o[2]).length();const c=js.set(o[4],o[5],o[6]).length(),f=js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const d=1/l,m=1/c,_=1/f;return fi.elements[0]*=d,fi.elements[1]*=d,fi.elements[2]*=d,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,t.setFromRotationMatrix(fi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Qi){const h=this.elements,d=2*l/(t-e),m=2*l/(s-o),_=(t+e)/(t-e),v=(s+o)/(s-o);let y,M;if(f===Qi)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Ru)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Qi){const h=this.elements,d=1/(t-e),m=1/(s-o),_=1/(c-l),v=(t+e)*d,y=(s+o)*m;let M,E;if(f===Qi)M=(c+l)*_,E=-2*_;else if(f===Ru)M=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new K,fi=new Bt,Hy=new K(0,0,0),Vy=new K(1,1,1),Cr=new K,Hl=new K,Wn=new K,Mg=new Bt,Eg=new ms;class tr{constructor(e=0,t=0,s=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],d=o[5],m=o[9],_=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const wg=new K,$s=new ms,Wi=new Bt,Vl=new K,aa=new K,Wy=new K,Xy=new ms,Tg=new K(1,0,0),Ag=new K(0,1,0),Rg=new K(0,0,1),Cg={type:"added"},Yy={type:"removed"},Ks={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Sn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new K,t=new tr,s=new ms,o=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new lt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Vl.copy(e):Vl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(aa,Vl,this.up):Wi.lookAt(Vl,aa,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),$s.setFromRotationMatrix(Wi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),d.length>0&&(s.textures=d),m.length>0&&(s.images=m),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=o,s;function c(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new K(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new K,Xi=new K,Wf=new K,Yi=new K,Zs=new K,Qs=new K,bg=new K,Xf=new K,Yf=new K,qf=new K,jf=new jt,$f=new jt,Kf=new jt;class pi{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){hi.subVectors(o,t),Xi.subVectors(s,t),Wf.subVectors(e,t);const c=hi.dot(hi),f=hi.dot(Xi),h=hi.dot(Wf),d=Xi.dot(Xi),m=Xi.dot(Wf),_=c*d-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(d*h-f*m)*v,M=(c*m-f*h)*v;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(c,Yi.y),h.addScaledVector(f,Yi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return jf.setScalar(0),$f.setScalar(0),Kf.setScalar(0),jf.fromBufferAttribute(e,t),$f.fromBufferAttribute(e,s),Kf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jf,l.x),c.addScaledVector($f,l.y),c.addScaledVector(Kf,l.z),c}static isFrontFacing(e,t,s,o){return hi.subVectors(s,t),Xi.subVectors(e,t),hi.cross(Xi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Zs.subVectors(o,s),Qs.subVectors(l,s),Xf.subVectors(e,s);const h=Zs.dot(Xf),d=Qs.dot(Xf);if(h<=0&&d<=0)return t.copy(s);Yf.subVectors(e,o);const m=Zs.dot(Yf),_=Qs.dot(Yf);if(m>=0&&_<=m)return t.copy(o);const v=h*_-m*d;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(s).addScaledVector(Zs,c);qf.subVectors(e,l);const y=Zs.dot(qf),M=Qs.dot(qf);if(M>=0&&y<=M)return t.copy(l);const E=y*d-h*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(s).addScaledVector(Qs,f);const S=m*M-y*_;if(S<=0&&_-m>=0&&y-M>=0)return bg.subVectors(l,o),f=(_-m)/(_-m+(y-M)),t.copy(o).addScaledVector(bg,f);const x=1/(S+E+v);return c=E*x,f=v*x,t.copy(s).addScaledVector(Zs,c).addScaledVector(Qs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Zf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Rt=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=wt.workingColorSpace){if(e=Cy(e,1),t=mt(t,0,1),s=mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Zf(c,l,e+1/3),this.g=Zf(c,l,e),this.b=Zf(c,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=s0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return wt.fromWorkingColorSpace(yn.copy(this),e),Math.round(mt(yn.r*255,0,255))*65536+Math.round(mt(yn.g*255,0,255))*256+Math.round(mt(yn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(yn.copy(this),t);const s=yn.r,o=yn.g,l=yn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,d;const m=(f+c)/2;if(f===c)h=0,d=0;else{const _=c-f;switch(d=m<=.5?_/(c+f):_/(2-c-f),c){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ti){wt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,s=yn.g,o=yn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Gl);const s=If(br.h,Gl.h,t),o=If(br.s,Gl.s,t),l=If(br.l,Gl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const yn=new Rt;Rt.NAMES=s0;let qy=0;class wo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=uo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ph&&(s.blendSrc=this.blendSrc),this.blendDst!==mh&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bu extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new K,Wl=new ct;class ii{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=gg,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ra(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),e}}class o0 extends ii{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class a0 extends ii{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class zn extends ii{constructor(e,t,s){super(new Float32Array(e),t,s)}}let jy=0;const ei=new Bt,Qf=new Sn,Js=new K,Xn=new Ma,la=new Ma,un=new K;class qn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?a0:o0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new lt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new zn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];la.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Xn.min,la.min),Xn.expandByPoint(un),un.addVectors(Xn.max,la.max),Xn.expandByPoint(un)):(Xn.expandByPoint(la.min),Xn.expandByPoint(la.max))}Xn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)un.fromBufferAttribute(f,d),h&&(Js.fromBufferAttribute(e,d),un.add(Js)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<s.count;G++)f[G]=new K,h[G]=new K;const d=new K,m=new K,_=new K,v=new ct,y=new ct,M=new ct,E=new K,S=new K;function x(G,C,A){d.fromBufferAttribute(s,G),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,A),v.fromBufferAttribute(l,G),y.fromBufferAttribute(l,C),M.fromBufferAttribute(l,A),m.sub(d),_.sub(d),y.sub(v),M.sub(v);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(k),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(k),f[G].add(E),f[C].add(E),f[A].add(E),h[G].add(S),h[C].add(S),h[A].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,C=N.length;G<C;++G){const A=N[G],k=A.start,X=A.count;for(let B=k,ie=k+X;B<ie;B+=3)x(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const D=new K,b=new K,V=new K,F=new K;function U(G){V.fromBufferAttribute(o,G),F.copy(V);const C=f[G];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),b.crossVectors(F,C);const k=b.dot(h[G])<0?-1:1;c.setXYZW(G,D.x,D.y,D.z,k)}for(let G=0,C=N.length;G<C;++G){const A=N[G],k=A.start,X=A.count;for(let B=k,ie=k+X;B<ie;B+=3)U(e.getX(B+0)),U(e.getX(B+1)),U(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const o=new K,l=new K,c=new K,f=new K,h=new K,d=new K,m=new K,_=new K;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,E),d.fromBufferAttribute(s,S),f.add(m),h.add(m),d.add(m),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(f,h){const d=f.array,m=f.itemSize,_=f.normalized,v=new d.constructor(h.length*m);let y=0,M=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?y=h[E]*f.data.stride+f.offset:y=h[E]*m;for(let x=0;x<m;x++)v[M++]=d[y++]}return new ii(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],d=e(h,s);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let m=0,_=d.length;m<_;m++){const v=d[m],y=e(v,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const d=s[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];m.push(y.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new Bt,ts=new Wu,Xl=new Ea,Dg=new K,Yl=new K,ql=new K,jl=new K,Jf=new K,$l=new K,Lg=new K,Kl=new K;class _i extends Sn{constructor(e=new qn,t=new bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){$l.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const m=f[h],_=l[h];m!==0&&(Jf.fromBufferAttribute(_,e),c?$l.addScaledVector(Jf,m):$l.addScaledVector(Jf.sub(t),m))}t.add($l)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Xl.copy(s.boundingSphere),Xl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Xl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Xl,Dg)===null||ts.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Pg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Pg),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=N,V=D;b<V;b+=3){const F=f.getX(b),U=f.getX(b+1),G=f.getX(b+2);o=Zl(this,x,e,s,d,m,_,F,U,G),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const N=f.getX(S),D=f.getX(S+1),b=f.getX(S+2);o=Zl(this,c,e,s,d,m,_,N,D,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let b=N,V=D;b<V;b+=3){const F=b,U=b+1,G=b+2;o=Zl(this,x,e,s,d,m,_,F,U,G),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const N=S,D=S+1,b=S+2;o=Zl(this,c,e,s,d,m,_,N,D,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function $y(i,e,t,s,o,l,c,f){let h;if(e.side===On?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Or,f),h===null)return null;Kl.copy(f),Kl.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Kl);return d<t.near||d>t.far?null:{distance:d,point:Kl.clone(),object:i}}function Zl(i,e,t,s,o,l,c,f,h,d){i.getVertexPosition(f,Yl),i.getVertexPosition(h,ql),i.getVertexPosition(d,jl);const m=$y(i,e,t,s,Yl,ql,jl,Lg);if(m){const _=new K;pi.getBarycoord(Lg,Yl,ql,jl,_),o&&(m.uv=pi.getInterpolatedAttribute(o,f,h,d,_,new ct)),l&&(m.uv1=pi.getInterpolatedAttribute(l,f,h,d,_,new ct)),c&&(m.normal=pi.getInterpolatedAttribute(c,f,h,d,_,new K),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:h,c:d,normal:new K,materialIndex:0};pi.getNormal(Yl,ql,jl,v.normal),m.face=v,m.barycoord=_}return m}class wa extends qn{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],m=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,o,c,2),M("x","z","y",1,-1,e,s,-t,o,c,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(_,2));function M(E,S,x,N,D,b,V,F,U,G,C){const A=b/U,k=V/G,X=b/2,B=V/2,ie=F/2,ue=U+1,ne=G+1;let oe=0,O=0;const ae=new K;for(let Q=0;Q<ne;Q++){const I=Q*k-B;for(let le=0;le<ue;le++){const Ie=le*A-X;ae[E]=Ie*N,ae[S]=I*D,ae[x]=ie,d.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[x]=F>0?1:-1,m.push(ae.x,ae.y,ae.z),_.push(le/U),_.push(1-Q/G),oe+=1}}for(let Q=0;Q<G;Q++)for(let I=0;I<U;I++){const le=v+I+ue*Q,Ie=v+I+ue*(Q+1),ee=v+(I+1)+ue*(Q+1),ce=v+(I+1)+ue*Q;h.push(le,Ie,ce),h.push(Ie,ee,ce),O+=6}f.addGroup(y,O,C),y+=O,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const s=yo(i[t]);for(const o in s)e[o]=s[o]}return e}function Ky(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function l0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Zy={clone:yo,merge:An};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class u0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new K,Ng=new ct,Ig=new ct;class ni extends u0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,Ng,Ig),t.subVectors(Ig,Ng)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/d,o*=c.width/h,s*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class eS extends Sn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(eo,to,e,t);o.layers=this.layers,this.add(o);const l=new ni(eo,to,e,t);l.layers=this.layers,this.add(l);const c=new ni(eo,to,e,t);c.layers=this.layers,this.add(c);const f=new ni(eo,to,e,t);f.layers=this.layers,this.add(f);const h=new ni(eo,to,e,t);h.layers=this.layers,this.add(h);const d=new ni(eo,to,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,d),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(_,v,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class c0 extends kn{constructor(e,t,s,o,l,c,f,h,d,m){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,s,o,l,c,f,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tS extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new c0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new wa(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Ur});l.uniforms.tEquirect.value=t;const c=new _i(o,l),f=t.minFilter;return t.minFilter===cs&&(t.minFilter=Ci),new eS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class nS extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const eh=new K,iS=new K,rS=new lt;class Nr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=eh.subVectors(s,t).cross(iS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(eh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||rS.getNormalMatrix(e),o=this.coplanarPoint(eh).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ea,Ql=new K;class f0{constructor(e=new Nr,t=new Nr,s=new Nr,o=new Nr,l=new Nr,c=new Nr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Qi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],d=o[4],m=o[5],_=o[6],v=o[7],y=o[8],M=o[9],E=o[10],S=o[11],x=o[12],N=o[13],D=o[14],b=o[15];if(s[0].setComponents(h-l,v-d,S-y,b-x).normalize(),s[1].setComponents(h+l,v+d,S+y,b+x).normalize(),s[2].setComponents(h+c,v+m,S+M,b+N).normalize(),s[3].setComponents(h-c,v-m,S-M,b-N).normalize(),s[4].setComponents(h-f,v-_,S-E,b-D).normalize(),t===Qi)s[5].setComponents(h+f,v+_,S+E,b+D).normalize();else if(t===Ru)s[5].setComponents(f,_,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class h0 extends wo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new K,Du=new K,Ug=new Bt,ua=new Wu,Jl=new Ea,th=new K,Fg=new K;class sS extends Sn{constructor(e=new qn,t=new h0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Pu.fromBufferAttribute(t,o-1),Du.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Pu.distanceTo(Du);e.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Jl.copy(s.boundingSphere),Jl.applyMatrix4(o),Jl.radius+=l,e.ray.intersectsSphere(Jl)===!1)return;Ug.copy(o).invert(),ua.copy(e.ray).applyMatrix4(Ug);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=d){const x=m.getX(E),N=m.getX(E+1),D=eu(this,e,ua,h,x,N);D&&t.push(D)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(y),x=eu(this,e,ua,h,E,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=d){const x=eu(this,e,ua,h,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=eu(this,e,ua,h,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function eu(i,e,t,s,o,l){const c=i.geometry.attributes.position;if(Pu.fromBufferAttribute(c,o),Du.fromBufferAttribute(c,l),t.distanceSqToSegment(Pu,Du,th,Fg)>s)return;th.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(th);if(!(h<e.near||h>e.far))return{distance:h,point:Fg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class d0 extends wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Og=new Bt,ed=new Wu,tu=new Ea,nu=new K;class oS extends Sn{constructor(e=new qn,t=new d0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(o),tu.radius+=l,e.ray.intersectsSphere(tu)===!1)return;Og.copy(o).invert(),ed.copy(e.ray).applyMatrix4(Og);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=s.index,_=s.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let M=v,E=y;M<E;M++){const S=d.getX(M);nu.fromBufferAttribute(_,S),kg(nu,S,h,o,e,t,this)}}else{const v=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let M=v,E=y;M<E;M++)nu.fromBufferAttribute(_,M),kg(nu,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function kg(i,e,t,s,o,l,c){const f=ed.distanceSqToPoint(i);if(f<t){const h=new K;ed.closestPointToPoint(i,h),h.applyMatrix4(s);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class iu extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class p0 extends kn{constructor(e,t,s,o,l,c,f,h,d,m=co){if(m!==co&&m!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===co&&(s=ds),s===void 0&&m===vo&&(s=_o),super(null,o,l,c,f,h,m,s,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:vi,this.minFilter=h!==void 0?h:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sd extends qn{constructor(e=1,t=1,s=1,o=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const d=this;o=Math.floor(o),l=Math.floor(l);const m=[],_=[],v=[],y=[];let M=0;const E=[],S=s/2;let x=0;N(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(m),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(y,2));function N(){const b=new K,V=new K;let F=0;const U=(t-e)/s;for(let G=0;G<=l;G++){const C=[],A=G/l,k=A*(t-e)+e;for(let X=0;X<=o;X++){const B=X/o,ie=B*h+f,ue=Math.sin(ie),ne=Math.cos(ie);V.x=k*ue,V.y=-A*s+S,V.z=k*ne,_.push(V.x,V.y,V.z),b.set(ue,U,ne).normalize(),v.push(b.x,b.y,b.z),y.push(B,1-A),C.push(M++)}E.push(C)}for(let G=0;G<o;G++)for(let C=0;C<l;C++){const A=E[C][G],k=E[C+1][G],X=E[C+1][G+1],B=E[C][G+1];(e>0||C!==0)&&(m.push(A,k,B),F+=3),(t>0||C!==l-1)&&(m.push(k,X,B),F+=3)}d.addGroup(x,F,0),x+=F}function D(b){const V=M,F=new ct,U=new K;let G=0;const C=b===!0?e:t,A=b===!0?1:-1;for(let X=1;X<=o;X++)_.push(0,S*A,0),v.push(0,A,0),y.push(.5,.5),M++;const k=M;for(let X=0;X<=o;X++){const ie=X/o*h+f,ue=Math.cos(ie),ne=Math.sin(ie);U.x=C*ne,U.y=S*A,U.z=C*ue,_.push(U.x,U.y,U.z),v.push(0,A,0),F.x=ue*.5+.5,F.y=ne*.5*A+.5,y.push(F.x,F.y),M++}for(let X=0;X<o;X++){const B=V+X,ie=k+X;b===!0?m.push(ie,ie+1,B):m.push(ie+1,ie,B),G+=3}d.addGroup(x,G,b===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xu extends qn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),d=f+1,m=h+1,_=e/f,v=t/h,y=[],M=[],E=[],S=[];for(let x=0;x<m;x++){const N=x*v-c;for(let D=0;D<d;D++){const b=D*_-l;M.push(b,-N,0),E.push(0,0,1),S.push(D/f),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let N=0;N<f;N++){const D=N+d*x,b=N+d*(x+1),V=N+1+d*(x+1),F=N+1+d*x;y.push(D,b,F),y.push(b,V,F)}this.setIndex(y),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(E,3)),this.setAttribute("uv",new zn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Md extends qn{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l},s=Math.floor(s),o=Math.floor(o);const c=[],f=[],h=[],d=[],m=new K,_=new K,v=new K;for(let y=0;y<=s;y++)for(let M=0;M<=o;M++){const E=M/o*l,S=y/s*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(E),_.y=(e+t*Math.cos(S))*Math.sin(E),_.z=t*Math.sin(S),f.push(_.x,_.y,_.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),v.subVectors(_,m).normalize(),h.push(v.x,v.y,v.z),d.push(M/o),d.push(y/s)}for(let y=1;y<=s;y++)for(let M=1;M<=o;M++){const E=(o+1)*y+M-1,S=(o+1)*(y-1)+M-1,x=(o+1)*(y-1)+M,N=(o+1)*y+M;c.push(E,S,N),c.push(S,x,N)}this.setIndex(c),this.setAttribute("position",new zn(f,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class aS extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uS extends u0{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cS extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zg{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fS extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Bg(i,e,t,s){const o=hS(s);switch(t){case q_:return i*e;case $_:return i*e;case K_:return i*e*2;case Z_:return i*e/o.components*o.byteLength;case vd:return i*e/o.components*o.byteLength;case Q_:return i*e*2/o.components*o.byteLength;case xd:return i*e*2/o.components*o.byteLength;case j_:return i*e*3/o.components*o.byteLength;case gi:return i*e*4/o.components*o.byteLength;case yd:return i*e*4/o.components*o.byteLength;case mu:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ph:return Math.max(i,16)*Math.max(e,8)/4;case Rh:case bh:return Math.max(i,8)*Math.max(e,8)/2;case Dh:case Lh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xu:case jh:case $h:return Math.ceil(i/4)*Math.ceil(e/4)*16;case J_:case Kh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zh:case Qh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hS(i){switch(i){case er:case W_:return{byteLength:1,components:1};case ga:case X_:case ya:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case ds:case md:case Zi:return{byteLength:4,components:1};case Y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m0(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function dS(i){const e=new WeakMap;function t(f,h){const d=f.array,m=f.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,m),f.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,d){const m=h.array,_=h.updateRanges;if(i.bindBuffer(d,f),_.length===0)i.bufferSubData(d,0,m);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],E=_[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,_[v]=E)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const E=_[y];i.bufferSubData(d,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(i.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,f,h),d.version=f.version}}return{get:o,remove:l,update:c}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ES=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:vS,alphatest_pars_fragment:xS,aomap_fragment:yS,aomap_pars_fragment:SS,batching_pars_vertex:MS,batching_vertex:ES,begin_vertex:wS,beginnormal_vertex:TS,bsdfs:AS,iridescence_fragment:RS,bumpmap_pars_fragment:CS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:DS,clipping_planes_vertex:LS,color_fragment:NS,color_pars_fragment:IS,color_pars_vertex:US,color_vertex:FS,common:OS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:zS,displacementmap_pars_vertex:BS,displacementmap_vertex:HS,emissivemap_fragment:VS,emissivemap_pars_fragment:GS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:YS,envmap_common_pars_fragment:qS,envmap_pars_fragment:jS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:oM,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:QS,fog_fragment:JS,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:aM,lights_toon_pars_fragment:lM,lights_phong_fragment:uM,lights_phong_pars_fragment:cM,lights_physical_fragment:fM,lights_physical_pars_fragment:hM,lights_fragment_begin:dM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:xM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:MM,map_particle_pars_fragment:EM,metalnessmap_fragment:wM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:RM,morphnormal_vertex:CM,morphtarget_pars_vertex:bM,morphtarget_vertex:PM,normal_fragment_begin:DM,normal_fragment_maps:LM,normal_pars_fragment:NM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:BM,opaque_fragment:HM,packing:VM,premultiplied_alpha_fragment:GM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:YM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:oE,transmission_fragment:aE,transmission_pars_fragment:lE,uv_pars_fragment:uE,uv_pars_vertex:cE,uv_vertex:fE,worldpos_vertex:hE,background_vert:dE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:vE,depth_vert:xE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:ME,equirect_vert:EE,equirect_frag:wE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:CE,meshlambert_vert:bE,meshlambert_frag:PE,meshmatcap_vert:DE,meshmatcap_frag:LE,meshnormal_vert:NE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:kE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:HE,points_frag:VE,shadow_vert:GE,shadow_frag:WE,sprite_vert:XE,sprite_frag:YE},Ce={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ri={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:An([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const ru={r:0,b:0,g:0},is=new tr,qE=new Bt;function jE(i,e,t,s,o,l,c){const f=new Rt(0);let h=l===!0?0:1,d,m,_=null,v=0,y=null;function M(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?t:e).get(b)),b}function E(D){let b=!1;const V=M(D);V===null?x(f,h):V&&V.isColor&&(x(V,1),b=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(D,b){const V=M(b);V&&(V.isCubeTexture||V.mapping===Gu)?(m===void 0&&(m=new _i(new wa(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:yo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qE.makeRotationFromEuler(is)),m.material.toneMapped=wt.getTransfer(V.colorSpace)!==Pt,(_!==V||v!==V.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,_=V,v=V.version,y=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(d===void 0&&(d=new _i(new Xu(2,2),new kr({name:"BackgroundMaterial",uniforms:yo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=V,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=wt.getTransfer(V.colorSpace)!==Pt,V.matrixAutoUpdate===!0&&V.updateMatrix(),d.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||v!==V.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,_=V,v=V.version,y=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function x(D,b){D.getRGB(ru,l0(i)),s.buffers.color.setClear(ru.r,ru.g,ru.b,b,c)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,b=1){f.set(D),h=b,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,x(f,h)},render:E,addToRenderList:S,dispose:N}}function $E(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,c=!1;function f(A,k,X,B,ie){let ue=!1;const ne=_(B,X,k);l!==ne&&(l=ne,d(l.object)),ue=y(A,B,X,ie),ue&&M(A,B,X,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,b(A,k,X,B),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return i.createVertexArray()}function d(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function _(A,k,X){const B=X.wireframe===!0;let ie=s[A.id];ie===void 0&&(ie={},s[A.id]=ie);let ue=ie[k.id];ue===void 0&&(ue={},ie[k.id]=ue);let ne=ue[B];return ne===void 0&&(ne=v(h()),ue[B]=ne),ne}function v(A){const k=[],X=[],B=[];for(let ie=0;ie<t;ie++)k[ie]=0,X[ie]=0,B[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:B,object:A,attributes:{},index:null}}function y(A,k,X,B){const ie=l.attributes,ue=k.attributes;let ne=0;const oe=X.getAttributes();for(const O in oe)if(oe[O].location>=0){const Q=ie[O];let I=ue[O];if(I===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),Q===void 0||Q.attribute!==I||I&&Q.data!==I.data)return!0;ne++}return l.attributesNum!==ne||l.index!==B}function M(A,k,X,B){const ie={},ue=k.attributes;let ne=0;const oe=X.getAttributes();for(const O in oe)if(oe[O].location>=0){let Q=ue[O];Q===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const I={};I.attribute=Q,Q&&Q.data&&(I.data=Q.data),ie[O]=I,ne++}l.attributes=ie,l.attributesNum=ne,l.index=B}function E(){const A=l.newAttributes;for(let k=0,X=A.length;k<X;k++)A[k]=0}function S(A){x(A,0)}function x(A,k){const X=l.newAttributes,B=l.enabledAttributes,ie=l.attributeDivisors;X[A]=1,B[A]===0&&(i.enableVertexAttribArray(A),B[A]=1),ie[A]!==k&&(i.vertexAttribDivisor(A,k),ie[A]=k)}function N(){const A=l.newAttributes,k=l.enabledAttributes;for(let X=0,B=k.length;X<B;X++)k[X]!==A[X]&&(i.disableVertexAttribArray(X),k[X]=0)}function D(A,k,X,B,ie,ue,ne){ne===!0?i.vertexAttribIPointer(A,k,X,ie,ue):i.vertexAttribPointer(A,k,X,B,ie,ue)}function b(A,k,X,B){E();const ie=B.attributes,ue=X.getAttributes(),ne=k.defaultAttributeValues;for(const oe in ue){const O=ue[oe];if(O.location>=0){let ae=ie[oe];if(ae===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const Q=ae.normalized,I=ae.itemSize,le=e.get(ae);if(le===void 0)continue;const Ie=le.buffer,ee=le.type,ce=le.bytesPerElement,he=ee===i.INT||ee===i.UNSIGNED_INT||ae.gpuType===md;if(ae.isInterleavedBufferAttribute){const _e=ae.data,we=_e.stride,Pe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let je=0;je<O.locationSize;je++)x(O.location+je,_e.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let je=0;je<O.locationSize;je++)S(O.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let je=0;je<O.locationSize;je++)D(O.location+je,I/O.locationSize,ee,Q,we*ce,(Pe+I/O.locationSize*je)*ce,he)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)x(O.location+_e,ae.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<O.locationSize;_e++)S(O.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let _e=0;_e<O.locationSize;_e++)D(O.location+_e,I/O.locationSize,ee,Q,I*ce,I/O.locationSize*_e*ce,he)}}else if(ne!==void 0){const Q=ne[oe];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}N()}function V(){G();for(const A in s){const k=s[A];for(const X in k){const B=k[X];for(const ie in B)m(B[ie].object),delete B[ie];delete k[X]}delete s[A]}}function F(A){if(s[A.id]===void 0)return;const k=s[A.id];for(const X in k){const B=k[X];for(const ie in B)m(B[ie].object),delete B[ie];delete k[X]}delete s[A.id]}function U(A){for(const k in s){const X=s[k];if(X[A.id]===void 0)continue;const B=X[A.id];for(const ie in B)m(B[ie].object),delete B[ie];delete X[A.id]}}function G(){C(),c=!0,l!==o&&(l=o,d(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:N}}function KE(i,e,t){let s;function o(d){s=d}function l(d,m){i.drawArrays(s,d,m),t.update(m,s,1)}function c(d,m,_){_!==0&&(i.drawArraysInstanced(s,d,m,_),t.update(m,s,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,m,0,_);let y=0;for(let M=0;M<_;M++)y+=m[M];t.update(y,s,1)}function h(d,m,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)c(d[M],m[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,m,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=m[E]*v[E];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ZE(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==gi&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const G=U===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==er&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Zi&&!G)}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:V,maxSamples:F}}function QE(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new Nr,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||o;return o=v,s=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,x=i.get(_);if(!o||M===null||M.length===0||l&&!S)l?m(null):d();else{const N=l?0:s,D=N*4;let b=x.clippingState||null;h.value=b,b=m(M,v,D,y);for(let V=0;V!==D;++V)b[V]=t[V];x.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(_,v,y,M){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const x=y+E*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,b=y;D!==E;++D,b+=4)c.copy(_[D]).applyMatrix4(N,f),c.normal.toArray(S,b),S[b+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function JE(i){let e=new WeakMap;function t(c,f){return f===Eh?c.mapping=mo:f===wh&&(c.mapping=go),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Eh||f===wh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new tS(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const oo=4,Hg=[.125,.215,.35,.446,.526,.582],ls=20,nh=new uS,Vg=new Rt;let ih=null,rh=0,sh=0,oh=!1;const ss=(1+Math.sqrt(5))/2,no=1/ss,Gg=[new K(-ss,no,0),new K(ss,no,0),new K(-no,0,ss),new K(no,0,ss),new K(0,ss,-no),new K(0,ss,no),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ya,format:gi,colorSpace:xo,depthBuffer:!1},o=Xg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(l)),this._blurMaterial=tw(l,e,t)}return o}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,s,o){const f=new ni(90,1,t,s),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Vg),m.toneMapping=Fr,m.autoClear=!1;const y=new bu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),M=new _i(new wa,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(Vg),E=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(f.up.set(0,h[x],0),f.lookAt(d[x],0,0)):N===1?(f.up.set(0,0,h[x]),f.lookAt(0,d[x],0)):(f.up.set(0,h[x],0),f.lookAt(0,0,d[x]));const D=this._cubeSize;su(o,N*D,x>2?D:0,D,D),m.setRenderTarget(o),E&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===mo||e.mapping===go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new _i(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;su(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,nh)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Gg[(o-l-1)%Gg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new _i(this._lodPlanes[o],d),v=d.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ls-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):ls;S>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ls}`);const x=[];let N=0;for(let U=0;U<ls;++U){const G=U/E,C=Math.exp(-G*G/2);x.push(C),U===0?N+=C:U<S&&(N+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-s;const b=this._sizeLods[o],V=3*b*(o>D-oo?o-D+oo:0),F=4*(this._cubeSize-b);su(t,V,F,3*b,2*b),h.setRenderTarget(t),h.render(_,nh)}}function ew(i){const e=[],t=[],s=[];let o=i;const l=i-oo+1+Hg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>i-oo?h=Hg[c-i+oo-1]:c===0&&(h=0),s.push(h);const d=1/(f-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,M=6,E=3,S=2,x=1,N=new Float32Array(E*M*y),D=new Float32Array(S*M*y),b=new Float32Array(x*M*y);for(let F=0;F<y;F++){const U=F%3*2/3-1,G=F>2?0:-1,C=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];N.set(C,E*M*F),D.set(v,S*M*F);const A=[F,F,F,F,F,F];b.set(A,x*M*F)}const V=new qn;V.setAttribute("position",new ii(N,E)),V.setAttribute("uv",new ii(D,S)),V.setAttribute("faceIndex",new ii(b,x)),e.push(V),o>oo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Xg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=Gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function su(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function tw(i,e,t){const s=new Float32Array(ls),o=new K(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Yg(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function qg(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nw(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,d=h===Eh||h===wh,m=h===mo||h===go;if(d||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Wg(i)),_=d?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return d&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new Wg(i)),_=d?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let h=0;const d=6;for(let m=0;m<d;m++)f[m]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function iw(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ro("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function rw(i,e,t,s){const o={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const y in v)e.update(v[y],i.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,M=_.attributes.position;let E=0;if(y!==null){const N=y.array;E=y.version;for(let D=0,b=N.length;D<b;D+=3){const V=N[D+0],F=N[D+1],U=N[D+2];v.push(V,F,F,U,U,V)}}else if(M!==void 0){const N=M.array;E=M.version;for(let D=0,b=N.length/3-1;D<b;D+=3){const V=D+0,F=D+1,U=D+2;v.push(V,F,F,U,U,V)}}else return;const S=new(t0(v)?a0:o0)(v,1);S.version=E;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:m}}function sw(i,e,t){let s;function o(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,y){i.drawElements(s,y,l,v*c),t.update(y,s,1)}function d(v,y,M){M!==0&&(i.drawElementsInstanced(s,y,l,v*c,M),t.update(y,s,M))}function m(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,s,1)}function _(v,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,v,0,E,0,M);let x=0;for(let N=0;N<M;N++)x+=y[N]*E[N];t.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function ow(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function aw(i,e,t){const s=new WeakMap,o=new jt;function l(c,f,h){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(f);if(v===void 0||v.count!==_){let A=function(){G.dispose(),s.delete(f),f.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),S===!0&&(b=3);let V=f.attributes.position.count*b,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*F*4*_),G=new i0(U,V,F,_);G.type=Zi,G.needsUpdate=!0;const C=b*4;for(let k=0;k<_;k++){const X=x[k],B=N[k],ie=D[k],ue=V*F*4*k;for(let ne=0;ne<X.count;ne++){const oe=ne*C;M===!0&&(o.fromBufferAttribute(X,ne),U[ue+oe+0]=o.x,U[ue+oe+1]=o.y,U[ue+oe+2]=o.z,U[ue+oe+3]=0),E===!0&&(o.fromBufferAttribute(B,ne),U[ue+oe+4]=o.x,U[ue+oe+5]=o.y,U[ue+oe+6]=o.z,U[ue+oe+7]=0),S===!0&&(o.fromBufferAttribute(ie,ne),U[ue+oe+8]=o.x,U[ue+oe+9]=o.y,U[ue+oe+10]=o.z,U[ue+oe+11]=ie.itemSize===4?o.w:1)}}v={count:_,texture:G,size:new ct(V,F)},s.set(f,v),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function lw(i,e,t,s){let o=new WeakMap;function l(h){const d=s.render.frame,m=h.geometry,_=e.get(h,m);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function c(){o=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const g0=new kn,jg=new p0(1,1),_0=new i0,v0=new zy,x0=new c0,$g=[],Kg=[],Zg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function To(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=$g[o];if(l===void 0&&(l=new Float32Array(o),$g[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Yu(i,e){let t=Kg[e];t===void 0&&(t=new Int32Array(e),Kg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function uw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function dw(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Jg.set(s),i.uniformMatrix2fv(this.addr,!1,Jg),nn(t,s)}}function pw(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Qg.set(s),i.uniformMatrix3fv(this.addr,!1,Qg),nn(t,s)}}function mw(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Zg.set(s),i.uniformMatrix4fv(this.addr,!1,Zg),nn(t,s)}}function gw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _w(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function xw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function yw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function ww(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(jg.compareFunction=e0,l=jg):l=g0,t.setTexture2D(e||l,o)}function Tw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||v0,o)}function Aw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||x0,o)}function Rw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||_0,o)}function Cw(i){switch(i){case 5126:return uw;case 35664:return cw;case 35665:return fw;case 35666:return hw;case 35674:return dw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Rw}}function bw(i,e){i.uniform1fv(this.addr,e)}function Pw(i,e){const t=To(e,this.size,2);i.uniform2fv(this.addr,t)}function Dw(i,e){const t=To(e,this.size,3);i.uniform3fv(this.addr,t)}function Lw(i,e){const t=To(e,this.size,4);i.uniform4fv(this.addr,t)}function Nw(i,e){const t=To(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Iw(i,e){const t=To(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uw(i,e){const t=To(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fw(i,e){i.uniform1iv(this.addr,e)}function Ow(i,e){i.uniform2iv(this.addr,e)}function kw(i,e){i.uniform3iv(this.addr,e)}function zw(i,e){i.uniform4iv(this.addr,e)}function Bw(i,e){i.uniform1uiv(this.addr,e)}function Hw(i,e){i.uniform2uiv(this.addr,e)}function Vw(i,e){i.uniform3uiv(this.addr,e)}function Gw(i,e){i.uniform4uiv(this.addr,e)}function Ww(i,e,t){const s=this.cache,o=e.length,l=Yu(t,o);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||g0,l[c])}function Xw(i,e,t){const s=this.cache,o=e.length,l=Yu(t,o);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||v0,l[c])}function Yw(i,e,t){const s=this.cache,o=e.length,l=Yu(t,o);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||x0,l[c])}function qw(i,e,t){const s=this.cache,o=e.length,l=Yu(t,o);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||_0,l[c])}function jw(i){switch(i){case 5126:return bw;case 35664:return Pw;case 35665:return Dw;case 35666:return Lw;case 35674:return Nw;case 35675:return Iw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return kw;case 35669:case 35673:return zw;case 5125:return Bw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return qw}}class $w{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Cw(t.type)}}class Kw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jw(t.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function e_(i,e){i.seq.push(e),i.map[e.id]=e}function Qw(i,e,t){const s=i.name,o=s.length;for(ah.lastIndex=0;;){const l=ah.exec(s),c=ah.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===o){e_(t,d===void 0?new $w(f,i,e):new Kw(f,i,e));break}else{let _=t.map[f];_===void 0&&(_=new Zw(f),e_(t,_)),t=_}}}class Su{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);Qw(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function t_(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const Jw=37297;let eT=0;function tT(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const n_=new lt;function nT(i){wt._getMatrix(n_,wt.workingColorSpace,i);const e=`mat3( ${n_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Au:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i_(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+tT(i.getShaderSource(e),c)}else return o}function iT(i,e){const t=nT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rT(i,e){let t;switch(e){case uy:t="Linear";break;case cy:t="Reinhard";break;case fy:t="Cineon";break;case hy:t="ACESFilmic";break;case py:t="AgX";break;case my:t="Neutral";break;case dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ou=new K;function sT(){wt.getLuminanceCoefficients(ou);const i=ou.x.toFixed(4),e=ou.y.toFixed(4),t=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function aT(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function lT(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function fa(i){return i!==""}function r_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(i){return i.replace(uT,fT)}const cT=new Map;function fT(i,e){let t=ut[e];if(t===void 0){const s=cT.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return td(t)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(i){return i.replace(hT,dT)}function dT(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function a_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function _T(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case V_:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function vT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function xT(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=pT(t),d=mT(t),m=gT(t),_=_T(t),v=vT(t),y=oT(t),M=aT(l),E=o.createProgram();let S,x,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fa).join(`
`),x.length>0&&(x+=`
`)):(S=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),x=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Fr?rT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),sT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),c=td(c),c=r_(c,t),c=s_(c,t),f=td(f),f=r_(f,t),f=s_(f,t),c=o_(c),f=o_(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+S+c,b=N+x+f,V=t_(o,o.VERTEX_SHADER,D),F=t_(o,o.FRAGMENT_SHADER,b);o.attachShader(E,V),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(k){if(i.debug.checkShaderErrors){const X=o.getProgramInfoLog(E).trim(),B=o.getShaderInfoLog(V).trim(),ie=o.getShaderInfoLog(F).trim();let ue=!0,ne=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,V,F);else{const oe=i_(o,V,"vertex"),O=i_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+oe+`
`+O)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||ie==="")&&(ne=!1);ne&&(k.diagnostics={runnable:ue,programLog:X,vertexShader:{log:B,prefix:S},fragmentShader:{log:ie,prefix:x}})}o.deleteShader(V),o.deleteShader(F),G=new Su(o,E),C=lT(o,E)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(E,Jw)),A},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=F,this}let yT=0;class ST{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new MT(e),t.set(e,s)),s}}class MT{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function ET(i,e,t,s,o,l,c){const f=new r0,h=new ST,d=new Set,m=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,A,k,X,B){const ie=X.fog,ue=B.geometry,ne=C.isMeshStandardMaterial?X.environment:null,oe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ne),O=oe&&oe.mapping===Gu?oe.image.height:null,ae=M[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Q=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,I=Q!==void 0?Q.length:0;let le=0;ue.morphAttributes.position!==void 0&&(le=1),ue.morphAttributes.normal!==void 0&&(le=2),ue.morphAttributes.color!==void 0&&(le=3);let Ie,ee,ce,he;if(ae){const yt=Ri[ae];Ie=yt.vertexShader,ee=yt.fragmentShader}else Ie=C.vertexShader,ee=C.fragmentShader,h.update(C),ce=h.getVertexShaderID(C),he=h.getFragmentShaderID(C);const _e=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,je=B.isBatchedMesh===!0,Tt=!!C.map,ft=!!C.matcap,gt=!!oe,z=!!C.aoMap,Ht=!!C.lightMap,nt=!!C.bumpMap,ot=!!C.normalMap,Ye=!!C.displacementMap,Ct=!!C.emissiveMap,Ge=!!C.metalnessMap,P=!!C.roughnessMap,T=C.anisotropy>0,te=C.clearcoat>0,me=C.dispersion>0,ve=C.iridescence>0,de=C.sheen>0,We=C.transmission>0,Te=T&&!!C.anisotropyMap,Ue=te&&!!C.clearcoatMap,ht=te&&!!C.clearcoatNormalMap,Me=te&&!!C.clearcoatRoughnessMap,Oe=ve&&!!C.iridescenceMap,$e=ve&&!!C.iridescenceThicknessMap,Je=de&&!!C.sheenColorMap,ke=de&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,At=!!C.specularIntensityMap,Y=We&&!!C.transmissionMap,Ae=We&&!!C.thicknessMap,fe=!!C.gradientMap,pe=!!C.alphaMap,De=C.alphaTest>0,be=!!C.alphaHash,rt=!!C.extensions;let Ut=Fr;C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const Zt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:ee,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:he,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:je,batchingColor:je&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:xo,alphaToCoverage:!!C.alphaToCoverage,map:Tt,matcap:ft,envMap:gt,envMapMode:gt&&oe.mapping,envMapCubeUVHeight:O,aoMap:z,lightMap:Ht,bumpMap:nt,normalMap:ot,displacementMap:v&&Ye,emissiveMap:Ct,normalMapObjectSpace:ot&&C.normalMapType===yy,normalMapTangentSpace:ot&&C.normalMapType===xy,metalnessMap:Ge,roughnessMap:P,anisotropy:T,anisotropyMap:Te,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:ht,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:it,specularIntensityMap:At,transmission:We,transmissionMap:Y,thicknessMap:Ae,gradientMap:fe,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:be,combine:C.combine,mapUv:Tt&&E(C.map.channel),aoMapUv:z&&E(C.aoMap.channel),lightMapUv:Ht&&E(C.lightMap.channel),bumpMapUv:nt&&E(C.bumpMap.channel),normalMapUv:ot&&E(C.normalMap.channel),displacementMapUv:Ye&&E(C.displacementMap.channel),emissiveMapUv:Ct&&E(C.emissiveMap.channel),metalnessMapUv:Ge&&E(C.metalnessMap.channel),roughnessMapUv:P&&E(C.roughnessMap.channel),anisotropyMapUv:Te&&E(C.anisotropyMap.channel),clearcoatMapUv:Ue&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(C.sheenRoughnessMap.channel),specularMapUv:dt&&E(C.specularMap.channel),specularColorMapUv:it&&E(C.specularColorMap.channel),specularIntensityMapUv:At&&E(C.specularIntensityMap.channel),transmissionMapUv:Y&&E(C.transmissionMap.channel),thicknessMapUv:Ae&&E(C.thicknessMap.channel),alphaMapUv:pe&&E(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ot||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ue.attributes.uv&&(Tt||pe),fog:!!ie,useFog:C.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ct&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===$i,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Zt.vertexUv1s=d.has(1),Zt.vertexUv2s=d.has(2),Zt.vertexUv3s=d.has(3),d.clear(),Zt}function x(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(N(A,C),D(A,C),A.push(i.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function N(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),C.push(f.mask)}function b(C){const A=M[C.type];let k;if(A){const X=Ri[A];k=Zy.clone(X.uniforms)}else k=C.uniforms;return k}function V(C,A){let k;for(let X=0,B=m.length;X<B;X++){const ie=m[X];if(ie.cacheKey===A){k=ie,++k.usedTimes;break}}return k===void 0&&(k=new xT(i,A,C,l),m.push(k)),k}function F(C){if(--C.usedTimes===0){const A=m.indexOf(C);m[A]=m[m.length-1],m.pop(),C.destroy()}}function U(C){h.remove(C)}function G(){h.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:V,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:G}}function wT(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function o(c,f,h){i.get(c)[f]=h}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function TT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function l_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function u_(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(_,v,y,M,E,S){let x=i[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:E,group:S},i[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=E,x.group=S),e++,x}function f(_,v,y,M,E,S){const x=c(_,v,y,M,E,S);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):t.push(x)}function h(_,v,y,M,E,S){const x=c(_,v,y,M,E,S);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function d(_,v){t.length>1&&t.sort(_||TT),s.length>1&&s.sort(v||l_),o.length>1&&o.sort(v||l_)}function m(){for(let _=e,v=i.length;_<v;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:m,sort:d}}function AT(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new u_,i.set(s,[c])):o>=l.length?(c=new u_,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function RT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Rt};break;case"SpotLight":t={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function CT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bT=0;function PT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DT(i){const e=new RT,t=CT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const o=new K,l=new Bt,c=new Bt;function f(d){let m=0,_=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,N=0,D=0,b=0,V=0,F=0,U=0;d.sort(PT);for(let C=0,A=d.length;C<A;C++){const k=d[C],X=k.color,B=k.intensity,ie=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=X.r*B,_+=X.g*B,v+=X.b*B;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(k.sh.coefficients[ne],B);U++}else if(k.isDirectionalLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const oe=k.shadow,O=t.get(k);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,s.directionalShadow[y]=O,s.directionalShadowMap[y]=ue,s.directionalShadowMatrix[y]=k.shadow.matrix,N++}s.directional[y]=ne,y++}else if(k.isSpotLight){const ne=e.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(X).multiplyScalar(B),ne.distance=ie,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,s.spot[E]=ne;const oe=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,oe.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[E]=oe.matrix,k.castShadow){const O=t.get(k);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,s.spotShadow[E]=O,s.spotShadowMap[E]=ue,b++}E++}else if(k.isRectAreaLight){const ne=e.get(k);ne.color.copy(X).multiplyScalar(B),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=ne,S++}else if(k.isPointLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){const oe=k.shadow,O=t.get(k);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,O.shadowCameraNear=oe.camera.near,O.shadowCameraFar=oe.camera.far,s.pointShadow[M]=O,s.pointShadowMap[M]=ue,s.pointShadowMatrix[M]=k.shadow.matrix,D++}s.point[M]=ne,M++}else if(k.isHemisphereLight){const ne=e.get(k);ne.skyColor.copy(k.color).multiplyScalar(B),ne.groundColor.copy(k.groundColor).multiplyScalar(B),s.hemi[x]=ne,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=v;const G=s.hash;(G.directionalLength!==y||G.pointLength!==M||G.spotLength!==E||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==N||G.numPointShadows!==D||G.numSpotShadows!==b||G.numSpotMaps!==V||G.numLightProbes!==U)&&(s.directional.length=y,s.spot.length=E,s.rectArea.length=S,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+V-F,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=U,G.directionalLength=y,G.pointLength=M,G.spotLength=E,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=N,G.numPointShadows=D,G.numSpotShadows=b,G.numSpotMaps=V,G.numLightProbes=U,s.version=bT++)}function h(d,m){let _=0,v=0,y=0,M=0,E=0;const S=m.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const D=d[x];if(D.isDirectionalLight){const b=s.directional[_];b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),_++}else if(D.isSpotLight){const b=s.spot[y];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const b=s.rectArea[M];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(D.isPointLight){const b=s.point[v];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const b=s.hemi[E];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:s}}function c_(i){const e=new DT(i),t=[],s=[];function o(m){d.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function LT(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new c_(i),e.set(o,[f])):l>=c.length?(f=new c_(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UT(i,e,t){let s=new f0;const o=new ct,l=new ct,c=new jt,f=new aS({depthPacking:vy}),h=new lS,d={},m=t.maxTextureSize,_={[Or]:On,[On]:Or,[$i]:$i},v=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:NT,fragmentShader:IT}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new qn;M.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _i(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let x=this.type;this.render=function(F,U,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const C=i.getRenderTarget(),A=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ur),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=x!==ji&&this.type===ji,ie=x===ji&&this.type!==ji;for(let ue=0,ne=F.length;ue<ne;ue++){const oe=F[ue],O=oe.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const ae=O.getFrameExtents();if(o.multiply(ae),l.copy(O.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ae.x),o.x=l.x*ae.x,O.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ae.y),o.y=l.y*ae.y,O.mapSize.y=l.y)),O.map===null||B===!0||ie===!0){const I=this.type!==ji?{minFilter:vi,magFilter:vi}:{};O.map!==null&&O.map.dispose(),O.map=new ps(o.x,o.y,I),O.map.texture.name=oe.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Q=O.getViewportCount();for(let I=0;I<Q;I++){const le=O.getViewport(I);c.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),X.viewport(c),O.updateMatrices(oe,I),s=O.getFrustum(),b(U,G,O.camera,oe,this.type)}O.isPointLightShadow!==!0&&this.type===ji&&N(O,G),O.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(C,A,k)};function N(F,U){const G=e.update(E);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ps(o.x,o.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(U,null,G,v,E,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(U,null,G,y,E,null)}function D(F,U,G,C){let A=null;const k=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=G.isPointLight===!0?h:f,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const X=A.uuid,B=U.uuid;let ie=d[X];ie===void 0&&(ie={},d[X]=ie);let ue=ie[B];ue===void 0&&(ue=A.clone(),ie[B]=ue,U.addEventListener("dispose",V)),A=ue}if(A.visible=U.visible,A.wireframe=U.wireframe,C===ji?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const X=i.properties.get(A);X.light=G}return A}function b(F,U,G,C,A){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===ji)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const B=e.update(F),ie=F.material;if(Array.isArray(ie)){const ue=B.groups;for(let ne=0,oe=ue.length;ne<oe;ne++){const O=ue[ne],ae=ie[O.materialIndex];if(ae&&ae.visible){const Q=D(F,ae,C,A);F.onBeforeShadow(i,F,U,G,B,Q,O),i.renderBufferDirect(G,null,B,Q,F,O),F.onAfterShadow(i,F,U,G,B,Q,O)}}}else if(ie.visible){const ue=D(F,ie,C,A);F.onBeforeShadow(i,F,U,G,B,ue,null),i.renderBufferDirect(G,null,B,ue,F,null),F.onAfterShadow(i,F,U,G,B,ue,null)}}const X=F.children;for(let B=0,ie=X.length;B<ie;B++)b(X[B],U,G,C,A)}function V(F){F.target.removeEventListener("dispose",V);for(const G in d){const C=d[G],A=F.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const FT={[gh]:_h,[vh]:Sh,[xh]:Mh,[po]:yh,[_h]:gh,[Sh]:vh,[Mh]:xh,[yh]:po};function OT(i,e){function t(){let Y=!1;const Ae=new jt;let fe=null;const pe=new jt(0,0,0,0);return{setMask:function(De){fe!==De&&!Y&&(i.colorMask(De,De,De,De),fe=De)},setLocked:function(De){Y=De},setClear:function(De,be,rt,Ut,Zt){Zt===!0&&(De*=Ut,be*=Ut,rt*=Ut),Ae.set(De,be,rt,Ut),pe.equals(Ae)===!1&&(i.clearColor(De,be,rt,Ut),pe.copy(Ae))},reset:function(){Y=!1,fe=null,pe.set(-1,0,0,0)}}}function s(){let Y=!1,Ae=!1,fe=null,pe=null,De=null;return{setReversed:function(be){if(Ae!==be){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Ae=be},getReversed:function(){return Ae},setTest:function(be){be?_e(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(be){fe!==be&&!Y&&(i.depthMask(be),fe=be)},setFunc:function(be){if(Ae&&(be=FT[be]),pe!==be){switch(be){case gh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case vh:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case xh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case Mh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=be}},setLocked:function(be){Y=be},setClear:function(be){De!==be&&(Ae&&(be=1-be),i.clearDepth(be),De=be)},reset:function(){Y=!1,fe=null,pe=null,De=null,Ae=!1}}}function o(){let Y=!1,Ae=null,fe=null,pe=null,De=null,be=null,rt=null,Ut=null,Zt=null;return{setTest:function(yt){Y||(yt?_e(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!Y&&(i.stencilMask(yt),Ae=yt)},setFunc:function(yt,Rn,Mn){(fe!==yt||pe!==Rn||De!==Mn)&&(i.stencilFunc(yt,Rn,Mn),fe=yt,pe=Rn,De=Mn)},setOp:function(yt,Rn,Mn){(be!==yt||rt!==Rn||Ut!==Mn)&&(i.stencilOp(yt,Rn,Mn),be=yt,rt=Rn,Ut=Mn)},setLocked:function(yt){Y=yt},setClear:function(yt){Zt!==yt&&(i.clearStencil(yt),Zt=yt)},reset:function(){Y=!1,Ae=null,fe=null,pe=null,De=null,be=null,rt=null,Ut=null,Zt=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,d=new WeakMap;let m={},_={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,N=null,D=null,b=null,V=null,F=null,U=new Rt(0,0,0),G=0,C=!1,A=null,k=null,X=null,B=null,ie=null;const ue=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,oe=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(O)[1]),ne=oe>=1):O.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ne=oe>=2);let ae=null,Q={};const I=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ie=new jt().fromArray(I),ee=new jt().fromArray(le);function ce(Y,Ae,fe,pe){const De=new Uint8Array(4),be=i.createTexture();i.bindTexture(Y,be),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<fe;rt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ae+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return be}const he={};he[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(i.DEPTH_TEST),c.setFunc(po),nt(!1),ot(fg),_e(i.CULL_FACE),z(Ur);function _e(Y){m[Y]!==!0&&(i.enable(Y),m[Y]=!0)}function we(Y){m[Y]!==!1&&(i.disable(Y),m[Y]=!1)}function Pe(Y,Ae){return _[Y]!==Ae?(i.bindFramebuffer(Y,Ae),_[Y]=Ae,Y===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ae),Y===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(Y,Ae){let fe=y,pe=!1;if(Y){fe=v.get(Ae),fe===void 0&&(fe=[],v.set(Ae,fe));const De=Y.textures;if(fe.length!==De.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let be=0,rt=De.length;be<rt;be++)fe[be]=i.COLOR_ATTACHMENT0+be;fe.length=De.length,pe=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,pe=!0);pe&&i.drawBuffers(fe)}function Tt(Y){return M!==Y?(i.useProgram(Y),M=Y,!0):!1}const ft={[as]:i.FUNC_ADD,[Wx]:i.FUNC_SUBTRACT,[Xx]:i.FUNC_REVERSE_SUBTRACT};ft[Yx]=i.MIN,ft[qx]=i.MAX;const gt={[jx]:i.ZERO,[$x]:i.ONE,[Kx]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[ny]:i.SRC_ALPHA_SATURATE,[ey]:i.DST_COLOR,[Qx]:i.DST_ALPHA,[Zx]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[ty]:i.ONE_MINUS_DST_COLOR,[Jx]:i.ONE_MINUS_DST_ALPHA,[iy]:i.CONSTANT_COLOR,[ry]:i.ONE_MINUS_CONSTANT_COLOR,[sy]:i.CONSTANT_ALPHA,[oy]:i.ONE_MINUS_CONSTANT_ALPHA};function z(Y,Ae,fe,pe,De,be,rt,Ut,Zt,yt){if(Y===Ur){E===!0&&(we(i.BLEND),E=!1);return}if(E===!1&&(_e(i.BLEND),E=!0),Y!==Gx){if(Y!==S||yt!==C){if((x!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),x=as,b=as),yt)switch(Y){case uo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hg:i.blendFunc(i.ONE,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,D=null,V=null,F=null,U.set(0,0,0),G=0,S=Y,C=yt}return}De=De||Ae,be=be||fe,rt=rt||pe,(Ae!==x||De!==b)&&(i.blendEquationSeparate(ft[Ae],ft[De]),x=Ae,b=De),(fe!==N||pe!==D||be!==V||rt!==F)&&(i.blendFuncSeparate(gt[fe],gt[pe],gt[be],gt[rt]),N=fe,D=pe,V=be,F=rt),(Ut.equals(U)===!1||Zt!==G)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Zt),U.copy(Ut),G=Zt),S=Y,C=!1}function Ht(Y,Ae){Y.side===$i?we(i.CULL_FACE):_e(i.CULL_FACE);let fe=Y.side===On;Ae&&(fe=!fe),nt(fe),Y.blending===uo&&Y.transparent===!1?z(Ur):z(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const pe=Y.stencilWrite;f.setTest(pe),pe&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ct(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(Y){A!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),A=Y)}function ot(Y){Y!==Bx?(_e(i.CULL_FACE),Y!==k&&(Y===fg?i.cullFace(i.BACK):Y===Hx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),k=Y}function Ye(Y){Y!==X&&(ne&&i.lineWidth(Y),X=Y)}function Ct(Y,Ae,fe){Y?(_e(i.POLYGON_OFFSET_FILL),(B!==Ae||ie!==fe)&&(i.polygonOffset(Ae,fe),B=Ae,ie=fe)):we(i.POLYGON_OFFSET_FILL)}function Ge(Y){Y?_e(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=i.TEXTURE0+ue-1),ae!==Y&&(i.activeTexture(Y),ae=Y)}function T(Y,Ae,fe){fe===void 0&&(ae===null?fe=i.TEXTURE0+ue-1:fe=ae);let pe=Q[fe];pe===void 0&&(pe={type:void 0,texture:void 0},Q[fe]=pe),(pe.type!==Y||pe.texture!==Ae)&&(ae!==fe&&(i.activeTexture(fe),ae=fe),i.bindTexture(Y,Ae||he[Y]),pe.type=Y,pe.texture=Ae)}function te(){const Y=Q[ae];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Je(Y){Ie.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ie.copy(Y))}function ke(Y){ee.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),ee.copy(Y))}function dt(Y,Ae){let fe=d.get(Ae);fe===void 0&&(fe=new WeakMap,d.set(Ae,fe));let pe=fe.get(Y);pe===void 0&&(pe=i.getUniformBlockIndex(Ae,Y.name),fe.set(Y,pe))}function it(Y,Ae){const pe=d.get(Ae).get(Y);h.get(Ae)!==pe&&(i.uniformBlockBinding(Ae,pe,Y.__bindingPointIndex),h.set(Ae,pe))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ae=null,Q={},_={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,N=null,D=null,b=null,V=null,F=null,U=new Rt(0,0,0),G=0,C=!1,A=null,k=null,X=null,B=null,ie=null,Ie.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:we,bindFramebuffer:Pe,drawBuffers:je,useProgram:Tt,setBlending:z,setMaterial:Ht,setFlipSided:nt,setCullFace:ot,setLineWidth:Ye,setPolygonOffset:Ct,setScissorTest:Ge,activeTexture:P,bindTexture:T,unbindTexture:te,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:$e,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ht,texStorage3D:Me,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:At}}function kT(i,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return y?new OffscreenCanvas(P,T):Cu("canvas")}function E(P,T,te){let me=1;const ve=Ge(P);if((ve.width>te||ve.height>te)&&(me=te/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(me*ve.width),We=Math.floor(me*ve.height);_===void 0&&(_=M(de,We));const Te=T?M(de,We):_;return Te.width=de,Te.height=We,Te.getContext("2d").drawImage(P,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+We+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){i.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(P,T,te,me,ve=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=T;if(T===i.RED&&(te===i.FLOAT&&(de=i.R32F),te===i.HALF_FLOAT&&(de=i.R16F),te===i.UNSIGNED_BYTE&&(de=i.R8)),T===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.R8UI),te===i.UNSIGNED_SHORT&&(de=i.R16UI),te===i.UNSIGNED_INT&&(de=i.R32UI),te===i.BYTE&&(de=i.R8I),te===i.SHORT&&(de=i.R16I),te===i.INT&&(de=i.R32I)),T===i.RG&&(te===i.FLOAT&&(de=i.RG32F),te===i.HALF_FLOAT&&(de=i.RG16F),te===i.UNSIGNED_BYTE&&(de=i.RG8)),T===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RG8UI),te===i.UNSIGNED_SHORT&&(de=i.RG16UI),te===i.UNSIGNED_INT&&(de=i.RG32UI),te===i.BYTE&&(de=i.RG8I),te===i.SHORT&&(de=i.RG16I),te===i.INT&&(de=i.RG32I)),T===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RGB8UI),te===i.UNSIGNED_SHORT&&(de=i.RGB16UI),te===i.UNSIGNED_INT&&(de=i.RGB32UI),te===i.BYTE&&(de=i.RGB8I),te===i.SHORT&&(de=i.RGB16I),te===i.INT&&(de=i.RGB32I)),T===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),te===i.UNSIGNED_INT&&(de=i.RGBA32UI),te===i.BYTE&&(de=i.RGBA8I),te===i.SHORT&&(de=i.RGBA16I),te===i.INT&&(de=i.RGBA32I)),T===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),T===i.RGBA){const We=ve?Au:wt.getTransfer(me);te===i.FLOAT&&(de=i.RGBA32F),te===i.HALF_FLOAT&&(de=i.RGBA16F),te===i.UNSIGNED_BYTE&&(de=We===Pt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(P,T){let te;return P?T===null||T===ds||T===_o?te=i.DEPTH24_STENCIL8:T===Zi?te=i.DEPTH32F_STENCIL8:T===ga&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ds||T===_o?te=i.DEPTH_COMPONENT24:T===Zi?te=i.DEPTH_COMPONENT32F:T===ga&&(te=i.DEPTH_COMPONENT16),te}function V(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==vi&&P.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){const T=P.target;T.removeEventListener("dispose",F),G(T),T.isVideoTexture&&m.delete(T)}function U(P){const T=P.target;T.removeEventListener("dispose",U),A(T)}function G(P){const T=s.get(P);if(T.__webglInit===void 0)return;const te=P.source,me=v.get(te);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(P),Object.keys(me).length===0&&v.delete(te)}s.remove(P)}function C(P){const T=s.get(P);i.deleteTexture(T.__webglTexture);const te=P.source,me=v.get(te);delete me[T.__cacheKey],c.memory.textures--}function A(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else i.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)i.deleteFramebuffer(T.__webglFramebuffer[me]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=P.textures;for(let me=0,ve=te.length;me<ve;me++){const de=s.get(te[me]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(te[me])}s.remove(P)}let k=0;function X(){k=0}function B(){const P=k;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),k+=1,P}function ie(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ue(P,T){const te=s.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,P,T);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+T)}function ne(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){ee(te,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+T)}function oe(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){ee(te,P,T);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+T)}function O(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){ce(te,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+T)}const ae={[Th]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Ah]:i.MIRRORED_REPEAT},Q={[vi]:i.NEAREST,[gy]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Ci]:i.LINEAR,[Nf]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},I={[Sy]:i.NEVER,[Ry]:i.ALWAYS,[My]:i.LESS,[e0]:i.LEQUAL,[Ey]:i.EQUAL,[Ay]:i.GEQUAL,[wy]:i.GREATER,[Ty]:i.NOTEQUAL};function le(P,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Nf||T.magFilter===Ul||T.magFilter===cs||T.minFilter===Ci||T.minFilter===Nf||T.minFilter===Ul||T.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ae[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ae[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ae[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vi||T.minFilter!==Ul&&T.minFilter!==cs||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(P,T){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));const me=T.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const de=ie(T);if(de!==P.__cacheKey){ve[de]===void 0&&(ve[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,te=!0),ve[de].usedTimes++;const We=ve[P.__cacheKey];We!==void 0&&(ve[P.__cacheKey].usedTimes--,We.usedTimes===0&&C(T)),P.__cacheKey=de,P.__webglTexture=ve[de].texture}return te}function ee(P,T,te){let me=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=i.TEXTURE_3D);const ve=Ie(P,T),de=T.source;t.bindTexture(me,P.__webglTexture,i.TEXTURE0+te);const We=s.get(de);if(de.version!==We.__version||ve===!0){t.activeTexture(i.TEXTURE0+te);const Te=wt.getPrimaries(wt.workingColorSpace),Ue=T.colorSpace===Ir?null:wt.getPrimaries(T.colorSpace),ht=T.colorSpace===Ir||Te===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Me=E(T.image,!1,o.maxTextureSize);Me=Ct(T,Me);const Oe=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let Je=D(T.internalFormat,Oe,$e,T.colorSpace,T.isVideoTexture);le(me,T);let ke;const dt=T.mipmaps,it=T.isVideoTexture!==!0,At=We.__version===void 0||ve===!0,Y=de.dataReady,Ae=V(T,Me);if(T.isDepthTexture)Je=b(T.format===vo,T.type),At&&(it?t.texStorage2D(i.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,$e,null));else if(T.isDataTexture)if(dt.length>0){it&&At&&t.texStorage2D(i.TEXTURE_2D,Ae,Je,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)ke=dt[fe],it?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,$e,ke.data):t.texImage2D(i.TEXTURE_2D,fe,Je,ke.width,ke.height,0,Oe,$e,ke.data);T.generateMipmaps=!1}else it?(At&&t.texStorage2D(i.TEXTURE_2D,Ae,Je,Me.width,Me.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,$e,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,$e,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Je,dt[0].width,dt[0].height,Me.depth);for(let fe=0,pe=dt.length;fe<pe;fe++)if(ke=dt[fe],T.format!==gi)if(Oe!==null)if(it){if(Y)if(T.layerUpdates.size>0){const De=Bg(ke.width,ke.height,T.format,T.type);for(const be of T.layerUpdates){const rt=ke.data.subarray(be*De/ke.data.BYTES_PER_ELEMENT,(be+1)*De/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,be,ke.width,ke.height,1,Oe,rt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Me.depth,Oe,$e,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Je,ke.width,ke.height,Me.depth,0,Oe,$e,ke.data)}else{it&&At&&t.texStorage2D(i.TEXTURE_2D,Ae,Je,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)ke=dt[fe],T.format!==gi?Oe!==null?it?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,$e,ke.data):t.texImage2D(i.TEXTURE_2D,fe,Je,ke.width,ke.height,0,Oe,$e,ke.data)}else if(T.isDataArrayTexture)if(it){if(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),Y)if(T.layerUpdates.size>0){const fe=Bg(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const De=Me.data.subarray(pe*fe/Me.data.BYTES_PER_ELEMENT,(pe+1)*fe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,$e,De)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,$e,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,$e,Me.data);else if(T.isData3DTexture)it?(At&&t.texStorage3D(i.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,$e,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,$e,Me.data);else if(T.isFramebufferTexture){if(At)if(it)t.texStorage2D(i.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let fe=Me.width,pe=Me.height;for(let De=0;De<Ae;De++)t.texImage2D(i.TEXTURE_2D,De,Je,fe,pe,0,Oe,$e,null),fe>>=1,pe>>=1}}else if(dt.length>0){if(it&&At){const fe=Ge(dt[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Je,fe.width,fe.height)}for(let fe=0,pe=dt.length;fe<pe;fe++)ke=dt[fe],it?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Oe,$e,ke):t.texImage2D(i.TEXTURE_2D,fe,Je,Oe,$e,ke);T.generateMipmaps=!1}else if(it){if(At){const fe=Ge(Me);t.texStorage2D(i.TEXTURE_2D,Ae,Je,fe.width,fe.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,$e,Me)}else t.texImage2D(i.TEXTURE_2D,0,Je,Oe,$e,Me);S(T)&&x(me),We.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,te){if(T.image.length!==6)return;const me=Ie(P,T),ve=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+te);const de=s.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(i.TEXTURE0+te);const We=wt.getPrimaries(wt.workingColorSpace),Te=T.colorSpace===Ir?null:wt.getPrimaries(T.colorSpace),Ue=T.colorSpace===Ir||We===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!ht&&!Me?Oe[pe]=E(T.image[pe],!0,o.maxCubemapSize):Oe[pe]=Me?T.image[pe].image:T.image[pe],Oe[pe]=Ct(T,Oe[pe]);const $e=Oe[0],Je=l.convert(T.format,T.colorSpace),ke=l.convert(T.type),dt=D(T.internalFormat,Je,ke,T.colorSpace),it=T.isVideoTexture!==!0,At=de.__version===void 0||me===!0,Y=ve.dataReady;let Ae=V(T,$e);le(i.TEXTURE_CUBE_MAP,T);let fe;if(ht){it&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,dt,$e.width,$e.height);for(let pe=0;pe<6;pe++){fe=Oe[pe].mipmaps;for(let De=0;De<fe.length;De++){const be=fe[De];T.format!==gi?Je!==null?it?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,Je,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,Je,ke,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,be.width,be.height,0,Je,ke,be.data)}}}else{if(fe=T.mipmaps,it&&At){fe.length>0&&Ae++;const pe=Ge(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Je,ke,Oe[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Oe[pe].width,Oe[pe].height,0,Je,ke,Oe[pe].data);for(let De=0;De<fe.length;De++){const rt=fe[De].image[pe].image;it?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,Je,ke,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ke,Oe[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Je,ke,Oe[pe]);for(let De=0;De<fe.length;De++){const be=fe[De];it?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,Je,ke,be.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,Je,ke,be.image[pe])}}}S(T)&&x(i.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function he(P,T,te,me,ve,de){const We=l.convert(te.format,te.colorSpace),Te=l.convert(te.type),Ue=D(te.internalFormat,We,Te,te.colorSpace),ht=s.get(T),Me=s.get(te);if(Me.__renderTarget=T,!ht.__hasExternalTextures){const Oe=Math.max(1,T.width>>de),$e=Math.max(1,T.height>>de);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Ue,Oe,$e,T.depth,0,We,Te,null):t.texImage2D(ve,de,Ue,Oe,$e,0,We,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ot(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ve,Me.__webglTexture,0,nt(T)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,ve,Me.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(P,T,te){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=b(T.stencilBuffer,ve),We=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=nt(T);ot(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,de,T.width,T.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,P)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],We=l.convert(de.format,de.colorSpace),Te=l.convert(de.type),Ue=D(de.internalFormat,We,Te,de.colorSpace),ht=nt(T);te&&ot(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Ue,T.width,T.height):ot(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Ue,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const ve=me.__webglTexture,de=nt(T);if(T.depthTexture.format===co)ot(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(T.depthTexture.format===vo)ot(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const T=s.get(P),te=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,P)}else if(te){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=i.createRenderbuffer(),_e(T.__webglDepthbuffer[me],P,!1);else{const ve=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,de)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),_e(T.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,T,te){const me=s.get(P);T!==void 0&&he(me.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Pe(P)}function Tt(P){const T=P.texture,te=s.get(P),me=s.get(T);P.addEventListener("dispose",U);const ve=P.textures,de=P.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=T.version,c.memory.textures++),de){te.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Te]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)te.__webglFramebuffer[Te][Ue]=i.createFramebuffer()}else te.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Te=0;Te<T.mipmaps.length;Te++)te.__webglFramebuffer[Te]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(We)for(let Te=0,Ue=ve.length;Te<Ue;Te++){const ht=s.get(ve[Te]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),c.memory.textures++)}if(P.samples>0&&ot(P)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Ue=ve[Te];te.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);const ht=l.convert(Ue.format,Ue.colorSpace),Me=l.convert(Ue.type),Oe=D(Ue.internalFormat,ht,Me,Ue.colorSpace,P.isXRRenderTarget===!0),$e=nt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Oe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,te.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(te.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),le(i.TEXTURE_CUBE_MAP,T);for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)he(te.__webglFramebuffer[Te][Ue],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ue);else he(te.__webglFramebuffer[Te],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Te=0,Ue=ve.length;Te<Ue;Te++){const ht=ve[Te],Me=s.get(ht);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),le(i.TEXTURE_2D,ht),he(te.__webglFramebuffer,P,ht,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),S(ht)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,me.__webglTexture),le(Te,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)he(te.__webglFramebuffer[Ue],P,T,i.COLOR_ATTACHMENT0,Te,Ue);else he(te.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Te,0);S(T)&&x(Te),t.unbindTexture()}P.depthBuffer&&Pe(P)}function ft(P){const T=P.textures;for(let te=0,me=T.length;te<me;te++){const ve=T[te];if(S(ve)){const de=N(P),We=s.get(ve).__webglTexture;t.bindTexture(de,We),x(de),t.unbindTexture()}}}const gt=[],z=[];function Ht(P){if(P.samples>0){if(ot(P)===!1){const T=P.textures,te=P.width,me=P.height;let ve=i.COLOR_BUFFER_BIT;const de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=s.get(P),Te=T.length>1;if(Te)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ht=s.get(T[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,te,me,0,0,te,me,ve,i.NEAREST),h===!0&&(gt.length=0,z.length=0,gt.push(i.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(de),z.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ht=s.get(T[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function nt(P){return Math.min(o.maxSamples,P.samples)}function ot(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(P){const T=c.render.frame;m.get(P)!==T&&(m.set(P,T),P.update())}function Ct(P,T){const te=P.colorSpace,me=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==xo&&te!==Ir&&(wt.getTransfer(te)===Pt?(me!==gi||ve!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=ue,this.setTexture2DArray=ne,this.setTexture3D=oe,this.setTextureCube=O,this.rebindTextures=je,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ot}function zT(i,e){function t(s,o=Ir){let l;const c=wt.getTransfer(o);if(s===er)return i.UNSIGNED_BYTE;if(s===gd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Y_)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===W_)return i.BYTE;if(s===X_)return i.SHORT;if(s===ga)return i.UNSIGNED_SHORT;if(s===md)return i.INT;if(s===ds)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===ya)return i.HALF_FLOAT;if(s===q_)return i.ALPHA;if(s===j_)return i.RGB;if(s===gi)return i.RGBA;if(s===$_)return i.LUMINANCE;if(s===K_)return i.LUMINANCE_ALPHA;if(s===co)return i.DEPTH_COMPONENT;if(s===vo)return i.DEPTH_STENCIL;if(s===Z_)return i.RED;if(s===vd)return i.RED_INTEGER;if(s===Q_)return i.RG;if(s===xd)return i.RG_INTEGER;if(s===yd)return i.RGBA_INTEGER;if(s===mu||s===gu||s===_u||s===vu)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===mu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===mu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===Ch||s===bh||s===Ph)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dh||s===Lh||s===Nh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Dh||s===Lh)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Nh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ih||s===Uh||s===Fh||s===Oh||s===kh||s===zh||s===Bh||s===Hh||s===Vh||s===Gh||s===Wh||s===Xh||s===Yh||s===qh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ih)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xu||s===jh||s===$h)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===xu)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$h)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===J_||s===Kh||s===Zh||s===Qh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===xu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const BT={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,s),x=this._getHandJoint(d,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new iu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const HT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new kr({vertexShader:HT,fragmentShader:VT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new Xu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WT extends vs{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,d=null,m=null,_=null,v=null,y=null,M=null;const E=new GT,S=t.getContextAttributes();let x=null,N=null;const D=[],b=[],V=new ct;let F=null;const U=new ni;U.viewport=new jt;const G=new ni;G.viewport=new jt;const C=[U,G],A=new cS;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=D[ee];return ce===void 0&&(ce=new lh,D[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=D[ee];return ce===void 0&&(ce=new lh,D[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=D[ee];return ce===void 0&&(ce=new lh,D[ee]=ce),ce.getHandSpace()};function B(ee){const ce=b.indexOf(ee.inputSource);if(ce===-1)return;const he=D[ce];he!==void 0&&(he.update(ee.inputSource,ee.frame,d||c),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){o.removeEventListener("select",B),o.removeEventListener("selectstart",B),o.removeEventListener("selectend",B),o.removeEventListener("squeeze",B),o.removeEventListener("squeezestart",B),o.removeEventListener("squeezeend",B),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",ue);for(let ee=0;ee<D.length;ee++){const ce=b[ee];ce!==null&&(b[ee]=null,D[ee].disconnect(ce))}k=null,X=null,E.reset(),e.setRenderTarget(x),y=null,v=null,_=null,o=null,N=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",B),o.addEventListener("selectstart",B),o.addEventListener("selectend",B),o.addEventListener("squeeze",B),o.addEventListener("squeezestart",B),o.addEventListener("squeezeend",B),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",ue),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let he=null,_e=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?vo:co,_e=S.stencil?_o:ds);const Pe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Pe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ps(v.textureWidth,v.textureHeight,{format:gi,type:er,depthTexture:new p0(v.textureWidth,v.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ps(y.framebufferWidth,y.framebufferHeight,{format:gi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}N.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ue(ee){for(let ce=0;ce<ee.removed.length;ce++){const he=ee.removed[ce],_e=b.indexOf(he);_e>=0&&(b[_e]=null,D[_e].disconnect(he))}for(let ce=0;ce<ee.added.length;ce++){const he=ee.added[ce];let _e=b.indexOf(he);if(_e===-1){for(let Pe=0;Pe<D.length;Pe++)if(Pe>=b.length){b.push(he),_e=Pe;break}else if(b[Pe]===null){b[Pe]=he,_e=Pe;break}if(_e===-1)break}const we=D[_e];we&&we.connect(he)}}const ne=new K,oe=new K;function O(ee,ce,he){ne.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(he.matrixWorld);const _e=ne.distanceTo(oe),we=ce.projectionMatrix.elements,Pe=he.projectionMatrix.elements,je=we[14]/(we[10]-1),Tt=we[14]/(we[10]+1),ft=(we[9]+1)/we[5],gt=(we[9]-1)/we[5],z=(we[8]-1)/we[0],Ht=(Pe[8]+1)/Pe[0],nt=je*z,ot=je*Ht,Ye=_e/(-z+Ht),Ct=Ye*-z;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ(Ye),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ge=je+Ye,P=Tt+Ye,T=nt-Ct,te=ot+(_e-Ct),me=ft*Tt/P*Ge,ve=gt*Tt/P*Ge;ee.projectionMatrix.makePerspective(T,te,me,ve,Ge,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let ce=ee.near,he=ee.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(he=E.depthFar)),A.near=G.near=U.near=ce,A.far=G.far=U.far=he,(k!==A.near||X!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,X=A.far),U.layers.mask=ee.layers.mask|2,G.layers.mask=ee.layers.mask|4,A.layers.mask=U.layers.mask|G.layers.mask;const _e=ee.parent,we=A.cameras;ae(A,_e);for(let Pe=0;Pe<we.length;Pe++)ae(we[Pe],_e);we.length===2?O(A,U,G):A.projectionMatrix.copy(U.projectionMatrix),Q(ee,A,_e)};function Q(ee,ce,he){he===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return h},this.setFoveation=function(ee){h=ee,v!==null&&(v.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let I=null;function le(ee,ce){if(m=ce.getViewerPose(d||c),M=ce,m!==null){const he=m.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let _e=!1;he.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let Pe=0;Pe<he.length;Pe++){const je=he[Pe];let Tt=null;if(y!==null)Tt=y.getViewport(je);else{const gt=_.getViewSubImage(v,je);Tt=gt.viewport,Pe===0&&(e.setRenderTargetTextures(N,gt.colorTexture,v.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(N))}let ft=C[Pe];ft===void 0&&(ft=new ni,ft.layers.enable(Pe),ft.viewport=new jt,C[Pe]=ft),ft.matrix.fromArray(je.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(je.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Pe===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(ft)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=_.getDepthInformation(he[0]);Pe&&Pe.isValid&&Pe.texture&&E.init(e,Pe,o.renderState)}}for(let he=0;he<D.length;he++){const _e=b[he],we=D[he];_e!==null&&we!==void 0&&we.update(_e,ce,d||c)}I&&I(ee,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ie=new m0;Ie.setAnimationLoop(le),this.setAnimationLoop=function(ee){I=ee},this.dispose=function(){}}}const rs=new tr,XT=new Bt;function YT(i,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,l0(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,N,D,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),E(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?h(S,x,N,D):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===On&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===On&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,b=N.envMapRotation;D&&(S.envMap.value=D,rs.copy(b),rs.x*=-1,rs.y*=-1,rs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),S.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(rs)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,N,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function qT(i,e,t,s){let o={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const b=D.program;s.uniformBlockBinding(N,b)}function d(N,D){let b=o[N.id];b===void 0&&(M(N),b=m(N),o[N.id]=b,N.addEventListener("dispose",S));const V=D.program;s.updateUBOMapping(N,V);const F=e.render.frame;l[N.id]!==F&&(v(N),l[N.id]=F)}function m(N){const D=_();N.__bindingPointIndex=D;const b=i.createBuffer(),V=N.__size,F=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,V,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,b),b}function _(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=o[N.id],b=N.uniforms,V=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,U=b.length;F<U;F++){const G=Array.isArray(b[F])?b[F]:[b[F]];for(let C=0,A=G.length;C<A;C++){const k=G[C];if(y(k,F,C,V)===!0){const X=k.__offset,B=Array.isArray(k.value)?k.value:[k.value];let ie=0;for(let ue=0;ue<B.length;ue++){const ne=B[ue],oe=E(ne);typeof ne=="number"||typeof ne=="boolean"?(k.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,X+ie,k.__data)):ne.isMatrix3?(k.__data[0]=ne.elements[0],k.__data[1]=ne.elements[1],k.__data[2]=ne.elements[2],k.__data[3]=0,k.__data[4]=ne.elements[3],k.__data[5]=ne.elements[4],k.__data[6]=ne.elements[5],k.__data[7]=0,k.__data[8]=ne.elements[6],k.__data[9]=ne.elements[7],k.__data[10]=ne.elements[8],k.__data[11]=0):(ne.toArray(k.__data,ie),ie+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,D,b,V){const F=N.value,U=D+"_"+b;if(V[U]===void 0)return typeof F=="number"||typeof F=="boolean"?V[U]=F:V[U]=F.clone(),!0;{const G=V[U];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return V[U]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function M(N){const D=N.uniforms;let b=0;const V=16;for(let U=0,G=D.length;U<G;U++){const C=Array.isArray(D[U])?D[U]:[D[U]];for(let A=0,k=C.length;A<k;A++){const X=C[A],B=Array.isArray(X.value)?X.value:[X.value];for(let ie=0,ue=B.length;ie<ue;ie++){const ne=B[ie],oe=E(ne),O=b%V,ae=O%oe.boundary,Q=O+ae;b+=ae,Q!==0&&V-Q<oe.storage&&(b+=V-Q),X.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=oe.storage}}}const F=b%V;return F>0&&(b+=V-F),N.__size=b,N.__cache={},this}function E(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const b=c.indexOf(D.__bindingPointIndex);c.splice(b,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function x(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},l={}}return{bind:h,update:d,dispose:x}}class jT{constructor(e={}){const{canvas:t=Py(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const N=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Fr,this.toneMappingExposure=1;const b=this;let V=!1,F=0,U=0,G=null,C=-1,A=null;const k=new jt,X=new jt;let B=null;const ie=new Rt(0);let ue=0,ne=t.width,oe=t.height,O=1,ae=null,Q=null;const I=new jt(0,0,ne,oe),le=new jt(0,0,ne,oe);let Ie=!1;const ee=new f0;let ce=!1,he=!1;this.transmissionResolutionScale=1;const _e=new Bt,we=new Bt,Pe=new K,je=new jt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function gt(){return G===null?O:1}let z=s;function Ht(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const q="webgl2";if(z=Ht(q,R),z===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let nt,ot,Ye,Ct,Ge,P,T,te,me,ve,de,We,Te,Ue,ht,Me,Oe,$e,Je,ke,dt,it,At,Y;function Ae(){nt=new iw(z),nt.init(),it=new zT(z,nt),ot=new ZE(z,nt,e,it),Ye=new OT(z,nt),ot.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Ct=new ow(z),Ge=new wT,P=new kT(z,nt,Ye,Ge,ot,it,Ct),T=new JE(b),te=new nw(b),me=new dS(z),At=new $E(z,me),ve=new rw(z,me,Ct,At),de=new lw(z,ve,me,Ct),Je=new aw(z,ot,P),Me=new QE(Ge),We=new ET(b,T,te,nt,ot,At,Me),Te=new YT(b,Ge),Ue=new AT,ht=new LT(nt),$e=new jE(b,T,te,Ye,de,y,h),Oe=new UT(b,de,ot),Y=new qT(z,Ct,ot,Ye),ke=new KE(z,nt,Ct),dt=new sw(z,nt,Ct),Ct.programs=We.programs,b.capabilities=ot,b.extensions=nt,b.properties=Ge,b.renderLists=Ue,b.shadowMap=Oe,b.state=Ye,b.info=Ct}Ae();const fe=new WT(b,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(ne,oe,!1))},this.getSize=function(R){return R.set(ne,oe)},this.setSize=function(R,q,re=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,oe=q,t.width=Math.floor(R*O),t.height=Math.floor(q*O),re===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ne*O,oe*O).floor()},this.setDrawingBufferSize=function(R,q,re){ne=R,oe=q,O=re,t.width=Math.floor(R*re),t.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,q,re,Z){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,q,re,Z),Ye.viewport(k.copy(I).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,q,re,Z){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,q,re,Z),Ye.scissor(X.copy(le).multiplyScalar(O).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){Ye.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,q=!0,re=!0){let Z=0;if(R){let j=!1;if(G!==null){const Se=G.texture.format;j=Se===yd||Se===xd||Se===vd}if(j){const Se=G.texture.type,Re=Se===er||Se===ds||Se===ga||Se===_o||Se===gd||Se===_d,Le=$e.getClearColor(),ze=$e.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(M[0]=et,M[1]=Qe,M[2]=He,M[3]=ze,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=et,E[1]=Qe,E[2]=He,E[3]=ze,z.clearBufferiv(z.COLOR,0,E))}else Z|=z.COLOR_BUFFER_BIT}q&&(Z|=z.DEPTH_BUFFER_BIT),re&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),$e.dispose(),Ue.dispose(),ht.dispose(),Ge.dispose(),T.dispose(),te.dispose(),de.dispose(),At.dispose(),Y.dispose(),We.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xs),fe.removeEventListener("sessionend",ir),Di.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=Ct.autoReset,q=Oe.enabled,re=Oe.autoUpdate,Z=Oe.needsUpdate,j=Oe.type;Ae(),Ct.autoReset=R,Oe.enabled=q,Oe.autoUpdate=re,Oe.needsUpdate=Z,Oe.type=j}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const q=R.target;q.removeEventListener("dispose",rt),Ut(q)}function Ut(R){Zt(R),Ge.remove(R)}function Zt(R){const q=Ge.get(R).programs;q!==void 0&&(q.forEach(function(re){We.releaseProgram(re)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,Z,j,Se){q===null&&(q=Tt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=ba(R,q,re,Z,j);Ye.setMaterial(Z,Re);let ze=re.index,et=1;if(Z.wireframe===!0){if(ze=ve.getWireframeAttribute(re),ze===void 0)return;et=2}const Qe=re.drawRange,He=re.attributes.position;let vt=Qe.start*et,st=(Qe.start+Qe.count)*et;Se!==null&&(vt=Math.max(vt,Se.start*et),st=Math.min(st,(Se.start+Se.count)*et)),ze!==null?(vt=Math.max(vt,0),st=Math.min(st,ze.count)):He!=null&&(vt=Math.max(vt,0),st=Math.min(st,He.count));const Wt=st-vt;if(Wt<0||Wt===1/0)return;At.setup(j,Z,Le,re,ze);let kt,xt=ke;if(ze!==null&&(kt=me.get(ze),xt=dt,xt.setIndex(kt)),j.isMesh)Z.wireframe===!0?(Ye.setLineWidth(Z.wireframeLinewidth*gt()),xt.setMode(z.LINES)):xt.setMode(z.TRIANGLES);else if(j.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*gt()),j.isLineSegments?xt.setMode(z.LINES):j.isLineLoop?xt.setMode(z.LINE_LOOP):xt.setMode(z.LINE_STRIP)}else j.isPoints?xt.setMode(z.POINTS):j.isSprite&&xt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Xt=j._multiDrawCounts,_t=j._multiDrawCount,dn=ze?me.get(ze).bytesPerElement:1,sr=Ge.get(Z).currentProgram.getUniforms();for(let En=0;En<_t;En++)sr.setValue(z,"_gl_DrawID",En),xt.render(qe[En]/dn,Xt[En])}else if(j.isInstancedMesh)xt.renderInstances(vt,Wt,j.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,qe);xt.renderInstances(vt,Wt,Xt)}else xt.render(vt,Wt)};function yt(R,q,re){R.transparent===!0&&R.side===$i&&R.forceSinglePass===!1?(R.side=On,R.needsUpdate=!0,ys(R,q,re),R.side=Or,R.needsUpdate=!0,ys(R,q,re),R.side=$i):ys(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),x=ht.get(re),x.init(q),D.push(x),re.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),R!==re&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const Z=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];yt(Le,re,j),Z.add(Le)}else yt(Se,re,j),Z.add(Se)}),D.pop(),x=null,Z},this.compileAsync=function(R,q,re=null){const Z=this.compile(R,q,re);return new Promise(j=>{function Se(){if(Z.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){j(R);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Rn=null;function Mn(R){Rn&&Rn(R)}function xs(){Di.stop()}function ir(){Di.start()}const Di=new m0;Di.setAnimationLoop(Mn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Rn=R,fe.setAnimationLoop(R),R===null?Di.stop():Di.start()},fe.addEventListener("sessionstart",xs),fe.addEventListener("sessionend",ir),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(q),q=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,q,G),x=ht.get(R,D.length),x.init(q),D.push(x),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(we),he=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,he),S=Ue.get(R,N.length),S.init(),N.push(S),fe.enabled===!0&&fe.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Li(Se,q,-1/0,b.sortObjects)}Li(R,q,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ae,Q),ft=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ft&&$e.addToRenderList(S,R),this.info.render.frame++,ce===!0&&Me.beginShadows();const re=x.state.shadowsArray;Oe.render(re,R,q),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=S.opaque,j=S.transmissive;if(x.setupLights(),q.isArrayCamera){const Se=q.cameras;if(j.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const ze=Se[Re];Br(Z,j,R,ze)}ft&&$e.render(R);for(let Re=0,Le=Se.length;Re<Le;Re++){const ze=Se[Re];zr(S,R,ze,ze.viewport)}}else j.length>0&&Br(Z,j,R,q),ft&&$e.render(R),zr(S,R,q);G!==null&&U===0&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(b,R,q),At.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(x=D[D.length-1],ce===!0&&Me.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Li(R,q,re,Z){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){Z&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Re=de.update(R),Le=R.material;Le.visible&&S.push(R,Re,Le,re,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const Re=de.update(R),Le=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),je.copy(Re.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const ze=Re.groups;for(let et=0,Qe=ze.length;et<Qe;et++){const He=ze[et],vt=Le[He.materialIndex];vt&&vt.visible&&S.push(R,Re,vt,re,je.z,He)}}else Le.visible&&S.push(R,Re,Le,re,je.z,null)}}const Se=R.children;for(let Re=0,Le=Se.length;Re<Le;Re++)Li(Se[Re],q,re,Z)}function zr(R,q,re,Z){const j=R.opaque,Se=R.transmissive,Re=R.transparent;x.setupLightsView(re),ce===!0&&Me.setGlobalState(b.clippingPlanes,re),Z&&Ye.viewport(k.copy(Z)),j.length>0&&rr(j,q,re),Se.length>0&&rr(Se,q,re),Re.length>0&&rr(Re,q,re),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Br(R,q,re,Z){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Z.id]===void 0&&(x.state.transmissionRenderTarget[Z.id]=new ps(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ya:er,minFilter:cs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[Z.id],Re=Z.viewport||k;Se.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Le=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(ie),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),ft&&$e.render(re);const ze=b.toneMapping;b.toneMapping=Fr;const et=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),x.setupLightsView(Z),ce===!0&&Me.setGlobalState(b.clippingPlanes,Z),rr(R,re,Z),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,vt=q.length;He<vt;He++){const st=q[He],Wt=st.object,kt=st.geometry,xt=st.material,qe=st.group;if(xt.side===$i&&Wt.layers.test(Z.layers)){const Xt=xt.side;xt.side=On,xt.needsUpdate=!0,Ra(Wt,re,Z,kt,xt,qe),xt.side=Xt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}b.setRenderTarget(Le),b.setClearColor(ie,ue),et!==void 0&&(Z.viewport=et),b.toneMapping=ze}function rr(R,q,re){const Z=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Se=R.length;j<Se;j++){const Re=R[j],Le=Re.object,ze=Re.geometry,et=Z===null?Re.material:Z,Qe=Re.group;Le.layers.test(re.layers)&&Ra(Le,q,re,ze,et,Qe)}}function Ra(R,q,re,Z,j,Se){R.onBeforeRender(b,q,re,Z,j,Se),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(b,q,re,Z,R,Se),j.transparent===!0&&j.side===$i&&j.forceSinglePass===!1?(j.side=On,j.needsUpdate=!0,b.renderBufferDirect(re,q,Z,j,R,Se),j.side=Or,j.needsUpdate=!0,b.renderBufferDirect(re,q,Z,j,R,Se),j.side=$i):b.renderBufferDirect(re,q,Z,j,R,Se),R.onAfterRender(b,q,re,Z,j,Se)}function ys(R,q,re){q.isScene!==!0&&(q=Tt);const Z=Ge.get(R),j=x.state.lights,Se=x.state.shadowsArray,Re=j.state.version,Le=We.getParameters(R,j.state,Se,q,re),ze=We.getProgramCacheKey(Le);let et=Z.programs;Z.environment=R.isMeshStandardMaterial?q.environment:null,Z.fog=q.fog,Z.envMap=(R.isMeshStandardMaterial?te:T).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,Z.programs=et);let Qe=et.get(ze);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===Re)return yi(R,Le),Qe}else Le.uniforms=We.getUniforms(R),R.onBeforeCompile(Le,b),Qe=We.acquireProgram(Le,ze),et.set(ze,Qe),Z.uniforms=Le.uniforms;const He=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Me.uniform),yi(R,Le),Z.needsLights=Ku(R),Z.lightsStateVersion=Re,Z.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=Qe,Z.uniformsList=null,Qe}function Ca(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Su.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function yi(R,q){const re=Ge.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function ba(R,q,re,Z,j){q.isScene!==!0&&(q=Tt),P.resetTextureUnits();const Se=q.fog,Re=Z.isMeshStandardMaterial?q.environment:null,Le=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xo,ze=(Z.isMeshStandardMaterial?te:T).get(Z.envMap||Re),et=Z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Qe=!!re.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,st=!!re.morphAttributes.color;let Wt=Fr;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Wt=b.toneMapping);const kt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=kt!==void 0?kt.length:0,qe=Ge.get(Z),Xt=x.state.lights;if(ce===!0&&(he===!0||R!==A)){const cn=R===A&&Z.id===C;Me.setState(Z,R,cn)}let _t=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xt.state.version||qe.outputColorSpace!==Le||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==ze||Z.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==Qe||qe.morphTargets!==He||qe.morphNormals!==vt||qe.morphColors!==st||qe.toneMapping!==Wt||qe.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,qe.__version=Z.version);let dn=qe.currentProgram;_t===!0&&(dn=ys(Z,q,j));let sr=!1,En=!1,Ni=!1;const Lt=dn.getUniforms(),pn=qe.uniforms;if(Ye.useProgram(dn.program)&&(sr=!0,En=!0,Ni=!0),Z.id!==C&&(C=Z.id,En=!0),sr||A!==R){Ye.buffers.depth.getReversed()?(_e.copy(R.projectionMatrix),Ly(_e),Ny(_e),Lt.setValue(z,"projectionMatrix",_e)):Lt.setValue(z,"projectionMatrix",R.projectionMatrix),Lt.setValue(z,"viewMatrix",R.matrixWorldInverse);const sn=Lt.map.cameraPosition;sn!==void 0&&sn.setValue(z,Pe.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,En=!0,Ni=!0)}if(j.isSkinnedMesh){Lt.setOptional(z,j,"bindMatrix"),Lt.setOptional(z,j,"bindMatrixInverse");const cn=j.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Lt.setValue(z,"boneTexture",cn.boneTexture,P))}j.isBatchedMesh&&(Lt.setOptional(z,j,"batchingTexture"),Lt.setValue(z,"batchingTexture",j._matricesTexture,P),Lt.setOptional(z,j,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",j._indirectTexture,P),Lt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",j._colorsTexture,P));const rn=re.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Je.update(j,re,dn),(En||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Lt.setValue(z,"receiveShadow",j.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=ze,pn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&q.environment!==null&&(pn.envMapIntensity.value=q.environmentIntensity),En&&(Lt.setValue(z,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&Pa(pn,Ni),Se&&Z.fog===!0&&Te.refreshFogUniforms(pn,Se),Te.refreshMaterialUniforms(pn,Z,O,oe,x.state.transmissionRenderTarget[R.id]),Su.upload(z,Ca(qe),pn,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Su.upload(z,Ca(qe),pn,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(z,"center",j.center),Lt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(z,"normalMatrix",j.normalMatrix),Lt.setValue(z,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const cn=Z.uniformsGroups;for(let sn=0,St=cn.length;sn<St;sn++){const Si=cn[sn];Y.update(Si,dn),Y.bind(Si,dn)}}return dn}function Pa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ku(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,q,re){Ge.get(R.texture).__webglTexture=q,Ge.get(R.depthTexture).__webglTexture=re;const Z=Ge.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=re===void 0,Z.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const re=Ge.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Da=z.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){G=R,F=q,U=re;let Z=!0,j=null,Se=!1,Re=!1;if(R){const ze=Ge.get(R);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ze.__hasExternalTextures)P.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?j=Qe[q][re]:j=Qe[q],Se=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?j=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[re]:j=Qe,k.copy(R.viewport),X.copy(R.scissor),B=R.scissorTest}else k.copy(I).multiplyScalar(O).floor(),X.copy(le).multiplyScalar(O).floor(),B=Ie;if(re!==0&&(j=Da),Ye.bindFramebuffer(z.FRAMEBUFFER,j)&&Z&&Ye.drawBuffers(R,j),Ye.viewport(k),Ye.scissor(X),Ye.setScissorTest(B),Se){const ze=Ge.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,re)}else if(Re){const ze=Ge.get(R.texture),et=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.__webglTexture,re,et)}else if(R!==null&&re!==0){const ze=Ge.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ze.__webglTexture,re)}C=-1},this.readRenderTargetPixels=function(R,q,re,Z,j,Se,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ye.bindFramebuffer(z.FRAMEBUFFER,Le);try{const ze=R.texture,et=ze.format,Qe=ze.type;if(!ot.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Z&&re>=0&&re<=R.height-j&&z.readPixels(q,re,Z,j,it.convert(et),it.convert(Qe),Se)}finally{const ze=G!==null?Ge.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,Z,j,Se,Re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ze=R.texture,et=ze.format,Qe=ze.type;if(!ot.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-Z&&re>=0&&re<=R.height-j){Ye.bindFramebuffer(z.FRAMEBUFFER,Le);const He=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(q,re,Z,j,it.convert(et),it.convert(Qe),0);const vt=G!==null?Ge.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,vt);const st=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Dy(z,st,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(He),z.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,re=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const Z=Math.pow(2,-re),j=Math.floor(R.image.width*Z),Se=Math.floor(R.image.height*Z),Re=q!==null?q.x:0,Le=q!==null?q.y:0;P.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,Re,Le,j,Se),Ye.unbindTexture()};const La=z.createFramebuffer(),Na=z.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,Z=null,j=0,Se=null){R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],q=arguments[2],Se=arguments[3]||0,re=null),Se===null&&(j!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Re,Le,ze,et,Qe,He,vt,st,Wt;const kt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(re!==null)Re=re.max.x-re.min.x,Le=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,Qe=re.min.y,He=re.isBox3?re.min.z:0;else{const rn=Math.pow(2,-j);Re=Math.floor(kt.width*rn),Le=Math.floor(kt.height*rn),R.isDataArrayTexture?ze=kt.depth:R.isData3DTexture?ze=Math.floor(kt.depth*rn):ze=1,et=0,Qe=0,He=0}Z!==null?(vt=Z.x,st=Z.y,Wt=Z.z):(vt=0,st=0,Wt=0);const xt=it.convert(q.format),qe=it.convert(q.type);let Xt;q.isData3DTexture?(P.setTexture3D(q,0),Xt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),Xt=z.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),Xt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=z.getParameter(z.UNPACK_ROW_LENGTH),dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),sr=z.getParameter(z.UNPACK_SKIP_PIXELS),En=z.getParameter(z.UNPACK_SKIP_ROWS),Ni=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,kt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,et),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,He);const Lt=R.isDataArrayTexture||R.isData3DTexture,pn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const rn=Ge.get(R),cn=Ge.get(q),sn=Ge.get(rn.__renderTarget),St=Ge.get(cn.__renderTarget);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Si=0;Si<ze;Si++)Lt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,j,He+Si),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(q).__webglTexture,Se,Wt+Si)),z.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,z.DEPTH_BUFFER_BIT,z.NEAREST);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ge.has(R)){const rn=Ge.get(R),cn=Ge.get(q);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,La),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Na);for(let sn=0;sn<ze;sn++)Lt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,j,He+sn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,j),pn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,Se,Wt+sn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,Se),j!==0?z.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,z.COLOR_BUFFER_BIT,z.NEAREST):pn?z.copyTexSubImage3D(Xt,Se,vt,st,Wt+sn,et,Qe,Re,Le):z.copyTexSubImage2D(Xt,Se,vt,st,et,Qe,Re,Le);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Xt,Se,vt,st,Wt,Re,Le,ze,xt,qe,kt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Xt,Se,vt,st,Wt,Re,Le,ze,xt,kt.data):z.texSubImage3D(Xt,Se,vt,st,Wt,Re,Le,ze,xt,qe,kt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,vt,st,Re,Le,xt,qe,kt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,vt,st,kt.width,kt.height,xt,kt.data):z.texSubImage2D(z.TEXTURE_2D,Se,vt,st,Re,Le,xt,qe,kt);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,sr),z.pixelStorei(z.UNPACK_SKIP_ROWS,En),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ni),Se===0&&q.generateMipmaps&&z.generateMipmap(Xt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,q,re=null,Z=null,j=0){return R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],q=arguments[3],j=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,re,Z,j)},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){F=0,U=0,G=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const f_={type:"change"},wd={type:"start"},y0={type:"end"},au=new Wu,h_=new Nr,$T=Math.cos(70*by.DEG2RAD),en=new K,Un=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6;class KT extends fS{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lo.ROTATE,MIDDLE:lo.DOLLY,RIGHT:lo.PAN},this.touches={ONE:so.ROTATE,TWO:so.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ms,this._lastTargetPosition=new K,this._quat=new ms().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zg,this._sphericalDelta=new zg,this._scale=1,this._panOffset=new K,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new K,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QT.bind(this),this._onPointerDown=ZT.bind(this),this._onPointerUp=JT.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=n1.bind(this),this._onKeyDown=i1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=l1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f_),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;en.copy(t).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(s)&&isFinite(o)&&(s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),o<-Math.PI?o+=Un:o>Math.PI&&(o-=Un),s<=o?this._spherical.theta=Math.max(s,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+o)/2?Math.max(s,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),t.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=en.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(f),this.object.updateMatrixWorld(),c=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(au.origin.copy(this.object.position),au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(au.direction))<$T?this.object.lookAt(this.target):(h_.setFromNormalAndCoplanarPoint(this.object.up,this.target),au.intersectPlane(h_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(f_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){en.setFromMatrixColumn(t,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,t){this.screenSpacePanning===!0?en.setFromMatrixColumn(t,1):(en.setFromMatrixColumn(t,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;en.copy(o).sub(this.target);let l=en.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),o=e-s.left,l=t-s.top,c=s.width,f=s.height;this._mouse.x=o/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(s,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(s,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),o=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(s,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ZT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function QT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function JT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(y0),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Dt.DOLLY;break;case lo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}break;case lo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(wd)}function t1(i){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function n1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(i.preventDefault(),this.dispatchEvent(wd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(y0))}function i1(i){this.enabled!==!1&&this._handleKeyDown(i)}function r1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case so.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Dt.TOUCH_ROTATE;break;case so.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case so.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Dt.TOUCH_DOLLY_PAN;break;case so.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(wd)}function s1(i){switch(this._trackPointer(i),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Dt.NONE}}function o1(i){this.enabled!==!1&&i.preventDefault()}function a1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class d_ extends Sn{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ct(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const io=new K,p_=new Bt,m_=new Bt,g_=new K,__=new K;class u1{constructor(e={}){const t=this;let s,o,l,c;const f={objects:new WeakMap},h=e.element!==void 0?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h,this.getSize=function(){return{width:s,height:o}},this.render=function(M,E){M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),p_.copy(E.matrixWorldInverse),m_.multiplyMatrices(E.projectionMatrix,p_),m(M,M,E),y(M)},this.setSize=function(M,E){s=M,o=E,l=s/2,c=o/2,h.style.width=M+"px",h.style.height=E+"px"};function d(M){M.isCSS2DObject&&(M.element.style.display="none");for(let E=0,S=M.children.length;E<S;E++)d(M.children[E])}function m(M,E,S){if(M.visible===!1){d(M);return}if(M.isCSS2DObject){io.setFromMatrixPosition(M.matrixWorld),io.applyMatrix4(m_);const x=io.z>=-1&&io.z<=1&&M.layers.test(S.layers)===!0,N=M.element;N.style.display=x===!0?"":"none",x===!0&&(M.onBeforeRender(t,E,S),N.style.transform="translate("+-100*M.center.x+"%,"+-100*M.center.y+"%)translate("+(io.x*l+l)+"px,"+(-io.y*c+c)+"px)",N.parentNode!==h&&h.appendChild(N),M.onAfterRender(t,E,S));const D={distanceToCameraSquared:_(S,M)};f.objects.set(M,D)}for(let x=0,N=M.children.length;x<N;x++)m(M.children[x],E,S)}function _(M,E){return g_.setFromMatrixPosition(M.matrixWorld),__.setFromMatrixPosition(E.matrixWorld),g_.distanceToSquared(__)}function v(M){const E=[];return M.traverseVisible(function(S){S.isCSS2DObject&&E.push(S)}),E}function y(M){const E=v(M).sort(function(x,N){if(x.renderOrder!==N.renderOrder)return N.renderOrder-x.renderOrder;const D=f.objects.get(x).distanceToCameraSquared,b=f.objects.get(N).distanceToCameraSquared;return D-b}),S=E.length;for(let x=0,N=E.length;x<N;x++)E[x].element.style.zIndex=S-x}}}function Mu(i,e){return i==null||e==null?NaN:i<e?-1:i>e?1:i>=e?0:NaN}function c1(i,e){return i==null||e==null?NaN:e<i?-1:e>i?1:e>=i?0:NaN}function S0(i){let e,t,s;i.length!==2?(e=Mu,t=(f,h)=>Mu(i(f),h),s=(f,h)=>i(f)-h):(e=i===Mu||i===c1?i:f1,t=i,s=i);function o(f,h,d=0,m=f.length){if(d<m){if(e(h,h)!==0)return m;do{const _=d+m>>>1;t(f[_],h)<0?d=_+1:m=_}while(d<m)}return d}function l(f,h,d=0,m=f.length){if(d<m){if(e(h,h)!==0)return m;do{const _=d+m>>>1;t(f[_],h)<=0?d=_+1:m=_}while(d<m)}return d}function c(f,h,d=0,m=f.length){const _=o(f,h,d,m-1);return _>d&&s(f[_-1],h)>-s(f[_],h)?_-1:_}return{left:o,center:c,right:l}}function f1(){return 0}function h1(i){return i===null?NaN:+i}const d1=S0(Mu),p1=d1.right;S0(h1).center;const m1=Math.sqrt(50),g1=Math.sqrt(10),_1=Math.sqrt(2);function Lu(i,e,t){const s=(e-i)/Math.max(0,t),o=Math.floor(Math.log10(s)),l=s/Math.pow(10,o),c=l>=m1?10:l>=g1?5:l>=_1?2:1;let f,h,d;return o<0?(d=Math.pow(10,-o)/c,f=Math.round(i*d),h=Math.round(e*d),f/d<i&&++f,h/d>e&&--h,d=-d):(d=Math.pow(10,o)*c,f=Math.round(i/d),h=Math.round(e/d),f*d<i&&++f,h*d>e&&--h),h<f&&.5<=t&&t<2?Lu(i,e,t*2):[f,h,d]}function v1(i,e,t){if(e=+e,i=+i,t=+t,!(t>0))return[];if(i===e)return[i];const s=e<i,[o,l,c]=s?Lu(e,i,t):Lu(i,e,t);if(!(l>=o))return[];const f=l-o+1,h=new Array(f);if(s)if(c<0)for(let d=0;d<f;++d)h[d]=(l-d)/-c;else for(let d=0;d<f;++d)h[d]=(l-d)*c;else if(c<0)for(let d=0;d<f;++d)h[d]=(o+d)/-c;else for(let d=0;d<f;++d)h[d]=(o+d)*c;return h}function nd(i,e,t){return e=+e,i=+i,t=+t,Lu(i,e,t)[2]}function x1(i,e,t){e=+e,i=+i,t=+t;const s=e<i,o=s?nd(e,i,t):nd(i,e,t);return(s?-1:1)*(o<0?1/-o:o)}function y1(i,e,t){i=+i,e=+e,t=(o=arguments.length)<2?(e=i,i=0,1):o<3?1:+t;for(var s=-1,o=Math.max(0,Math.ceil((e-i)/t))|0,l=new Array(o);++s<o;)l[s]=i+s*t;return l}function S1(i){return i}var ch=1,fh=2,id=3,ha=4,v_=1e-6;function M1(i){return"translate("+i+",0)"}function E1(i){return"translate(0,"+i+")"}function w1(i){return e=>+i(e)}function T1(i,e){return e=Math.max(0,i.bandwidth()-e*2)/2,i.round()&&(e=Math.round(e)),t=>+i(t)+e}function A1(){return!this.__axis}function M0(i,e){var t=[],s=null,o=null,l=6,c=6,f=3,h=typeof window<"u"&&window.devicePixelRatio>1?0:.5,d=i===ch||i===ha?-1:1,m=i===ha||i===fh?"x":"y",_=i===ch||i===id?M1:E1;function v(y){var M=s??(e.ticks?e.ticks.apply(e,t):e.domain()),E=o??(e.tickFormat?e.tickFormat.apply(e,t):S1),S=Math.max(l,0)+f,x=e.range(),N=+x[0]+h,D=+x[x.length-1]+h,b=(e.bandwidth?T1:w1)(e.copy(),h),V=y.selection?y.selection():y,F=V.selectAll(".domain").data([null]),U=V.selectAll(".tick").data(M,e).order(),G=U.exit(),C=U.enter().append("g").attr("class","tick"),A=U.select("line"),k=U.select("text");F=F.merge(F.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),U=U.merge(C),A=A.merge(C.append("line").attr("stroke","currentColor").attr(m+"2",d*l)),k=k.merge(C.append("text").attr("fill","currentColor").attr(m,d*S).attr("dy",i===ch?"0em":i===id?"0.71em":"0.32em")),y!==V&&(F=F.transition(y),U=U.transition(y),A=A.transition(y),k=k.transition(y),G=G.transition(y).attr("opacity",v_).attr("transform",function(X){return isFinite(X=b(X))?_(X+h):this.getAttribute("transform")}),C.attr("opacity",v_).attr("transform",function(X){var B=this.parentNode.__axis;return _((B&&isFinite(B=B(X))?B:b(X))+h)})),G.remove(),F.attr("d",i===ha||i===fh?c?"M"+d*c+","+N+"H"+h+"V"+D+"H"+d*c:"M"+h+","+N+"V"+D:c?"M"+N+","+d*c+"V"+h+"H"+D+"V"+d*c:"M"+N+","+h+"H"+D),U.attr("opacity",1).attr("transform",function(X){return _(b(X)+h)}),A.attr(m+"2",d*l),k.attr(m,d*S).text(E),V.filter(A1).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===fh?"start":i===ha?"end":"middle"),V.each(function(){this.__axis=b})}return v.scale=function(y){return arguments.length?(e=y,v):e},v.ticks=function(){return t=Array.from(arguments),v},v.tickArguments=function(y){return arguments.length?(t=y==null?[]:Array.from(y),v):t.slice()},v.tickValues=function(y){return arguments.length?(s=y==null?null:Array.from(y),v):s&&s.slice()},v.tickFormat=function(y){return arguments.length?(o=y,v):o},v.tickSize=function(y){return arguments.length?(l=c=+y,v):l},v.tickSizeInner=function(y){return arguments.length?(l=+y,v):l},v.tickSizeOuter=function(y){return arguments.length?(c=+y,v):c},v.tickPadding=function(y){return arguments.length?(f=+y,v):f},v.offset=function(y){return arguments.length?(h=+y,v):h},v}function R1(i){return M0(id,i)}function C1(i){return M0(ha,i)}var b1={value:()=>{}};function E0(){for(var i=0,e=arguments.length,t={},s;i<e;++i){if(!(s=arguments[i]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Eu(t)}function Eu(i){this._=i}function P1(i,e){return i.trim().split(/^|\s+/).map(function(t){var s="",o=t.indexOf(".");if(o>=0&&(s=t.slice(o+1),t=t.slice(0,o)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Eu.prototype=E0.prototype={constructor:Eu,on:function(i,e){var t=this._,s=P1(i+"",t),o,l=-1,c=s.length;if(arguments.length<2){for(;++l<c;)if((o=(i=s[l]).type)&&(o=D1(t[o],i.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++l<c;)if(o=(i=s[l]).type)t[o]=x_(t[o],i.name,e);else if(e==null)for(o in t)t[o]=x_(t[o],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new Eu(i)},call:function(i,e){if((o=arguments.length-2)>0)for(var t=new Array(o),s=0,o,l;s<o;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(l=this._[i],s=0,o=l.length;s<o;++s)l[s].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var s=this._[i],o=0,l=s.length;o<l;++o)s[o].value.apply(e,t)}};function D1(i,e){for(var t=0,s=i.length,o;t<s;++t)if((o=i[t]).name===e)return o.value}function x_(i,e,t){for(var s=0,o=i.length;s<o;++s)if(i[s].name===e){i[s]=b1,i=i.slice(0,s).concat(i.slice(s+1));break}return t!=null&&i.push({name:e,value:t}),i}var rd="http://www.w3.org/1999/xhtml";const y_={svg:"http://www.w3.org/2000/svg",xhtml:rd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qu(i){var e=i+="",t=e.indexOf(":");return t>=0&&(e=i.slice(0,t))!=="xmlns"&&(i=i.slice(t+1)),y_.hasOwnProperty(e)?{space:y_[e],local:i}:i}function L1(i){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===rd&&e.documentElement.namespaceURI===rd?e.createElement(i):e.createElementNS(t,i)}}function N1(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function w0(i){var e=qu(i);return(e.local?N1:L1)(e)}function I1(){}function Td(i){return i==null?I1:function(){return this.querySelector(i)}}function U1(i){typeof i!="function"&&(i=Td(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=new Array(c),h,d,m=0;m<c;++m)(h=l[m])&&(d=i.call(h,h.__data__,m,l))&&("__data__"in h&&(d.__data__=h.__data__),f[m]=d);return new Yn(s,this._parents)}function F1(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function O1(){return[]}function T0(i){return i==null?O1:function(){return this.querySelectorAll(i)}}function k1(i){return function(){return F1(i.apply(this,arguments))}}function z1(i){typeof i=="function"?i=k1(i):i=T0(i);for(var e=this._groups,t=e.length,s=[],o=[],l=0;l<t;++l)for(var c=e[l],f=c.length,h,d=0;d<f;++d)(h=c[d])&&(s.push(i.call(h,h.__data__,d,c)),o.push(h));return new Yn(s,o)}function A0(i){return function(){return this.matches(i)}}function R0(i){return function(e){return e.matches(i)}}var B1=Array.prototype.find;function H1(i){return function(){return B1.call(this.children,i)}}function V1(){return this.firstElementChild}function G1(i){return this.select(i==null?V1:H1(typeof i=="function"?i:R0(i)))}var W1=Array.prototype.filter;function X1(){return Array.from(this.children)}function Y1(i){return function(){return W1.call(this.children,i)}}function q1(i){return this.selectAll(i==null?X1:Y1(typeof i=="function"?i:R0(i)))}function j1(i){typeof i!="function"&&(i=A0(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=[],h,d=0;d<c;++d)(h=l[d])&&i.call(h,h.__data__,d,l)&&f.push(h);return new Yn(s,this._parents)}function C0(i){return new Array(i.length)}function $1(){return new Yn(this._enter||this._groups.map(C0),this._parents)}function Nu(i,e){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=e}Nu.prototype={constructor:Nu,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,e){return this._parent.insertBefore(i,e)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function K1(i){return function(){return i}}function Z1(i,e,t,s,o,l){for(var c=0,f,h=e.length,d=l.length;c<d;++c)(f=e[c])?(f.__data__=l[c],s[c]=f):t[c]=new Nu(i,l[c]);for(;c<h;++c)(f=e[c])&&(o[c]=f)}function Q1(i,e,t,s,o,l,c){var f,h,d=new Map,m=e.length,_=l.length,v=new Array(m),y;for(f=0;f<m;++f)(h=e[f])&&(v[f]=y=c.call(h,h.__data__,f,e)+"",d.has(y)?o[f]=h:d.set(y,h));for(f=0;f<_;++f)y=c.call(i,l[f],f,l)+"",(h=d.get(y))?(s[f]=h,h.__data__=l[f],d.delete(y)):t[f]=new Nu(i,l[f]);for(f=0;f<m;++f)(h=e[f])&&d.get(v[f])===h&&(o[f]=h)}function J1(i){return i.__data__}function eA(i,e){if(!arguments.length)return Array.from(this,J1);var t=e?Q1:Z1,s=this._parents,o=this._groups;typeof i!="function"&&(i=K1(i));for(var l=o.length,c=new Array(l),f=new Array(l),h=new Array(l),d=0;d<l;++d){var m=s[d],_=o[d],v=_.length,y=tA(i.call(m,m&&m.__data__,d,s)),M=y.length,E=f[d]=new Array(M),S=c[d]=new Array(M),x=h[d]=new Array(v);t(m,_,E,S,x,y,e);for(var N=0,D=0,b,V;N<M;++N)if(b=E[N]){for(N>=D&&(D=N+1);!(V=S[D])&&++D<M;);b._next=V||null}}return c=new Yn(c,s),c._enter=f,c._exit=h,c}function tA(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function nA(){return new Yn(this._exit||this._groups.map(C0),this._parents)}function iA(i,e,t){var s=this.enter(),o=this,l=this.exit();return typeof i=="function"?(s=i(s),s&&(s=s.selection())):s=s.append(i+""),e!=null&&(o=e(o),o&&(o=o.selection())),t==null?l.remove():t(l),s&&o?s.merge(o).order():o}function rA(i){for(var e=i.selection?i.selection():i,t=this._groups,s=e._groups,o=t.length,l=s.length,c=Math.min(o,l),f=new Array(o),h=0;h<c;++h)for(var d=t[h],m=s[h],_=d.length,v=f[h]=new Array(_),y,M=0;M<_;++M)(y=d[M]||m[M])&&(v[M]=y);for(;h<o;++h)f[h]=t[h];return new Yn(f,this._parents)}function sA(){for(var i=this._groups,e=-1,t=i.length;++e<t;)for(var s=i[e],o=s.length-1,l=s[o],c;--o>=0;)(c=s[o])&&(l&&c.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(c,l),l=c);return this}function oA(i){i||(i=aA);function e(_,v){return _&&v?i(_.__data__,v.__data__):!_-!v}for(var t=this._groups,s=t.length,o=new Array(s),l=0;l<s;++l){for(var c=t[l],f=c.length,h=o[l]=new Array(f),d,m=0;m<f;++m)(d=c[m])&&(h[m]=d);h.sort(e)}return new Yn(o,this._parents).order()}function aA(i,e){return i<e?-1:i>e?1:i>=e?0:NaN}function lA(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function uA(){return Array.from(this)}function cA(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var s=i[e],o=0,l=s.length;o<l;++o){var c=s[o];if(c)return c}return null}function fA(){let i=0;for(const e of this)++i;return i}function hA(){return!this.node()}function dA(i){for(var e=this._groups,t=0,s=e.length;t<s;++t)for(var o=e[t],l=0,c=o.length,f;l<c;++l)(f=o[l])&&i.call(f,f.__data__,l,o);return this}function pA(i){return function(){this.removeAttribute(i)}}function mA(i){return function(){this.removeAttributeNS(i.space,i.local)}}function gA(i,e){return function(){this.setAttribute(i,e)}}function _A(i,e){return function(){this.setAttributeNS(i.space,i.local,e)}}function vA(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(i):this.setAttribute(i,t)}}function xA(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,t)}}function yA(i,e){var t=qu(i);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((e==null?t.local?mA:pA:typeof e=="function"?t.local?xA:vA:t.local?_A:gA)(t,e))}function b0(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function SA(i){return function(){this.style.removeProperty(i)}}function MA(i,e,t){return function(){this.style.setProperty(i,e,t)}}function EA(i,e,t){return function(){var s=e.apply(this,arguments);s==null?this.style.removeProperty(i):this.style.setProperty(i,s,t)}}function wA(i,e,t){return arguments.length>1?this.each((e==null?SA:typeof e=="function"?EA:MA)(i,e,t??"")):So(this.node(),i)}function So(i,e){return i.style.getPropertyValue(e)||b0(i).getComputedStyle(i,null).getPropertyValue(e)}function TA(i){return function(){delete this[i]}}function AA(i,e){return function(){this[i]=e}}function RA(i,e){return function(){var t=e.apply(this,arguments);t==null?delete this[i]:this[i]=t}}function CA(i,e){return arguments.length>1?this.each((e==null?TA:typeof e=="function"?RA:AA)(i,e)):this.node()[i]}function P0(i){return i.trim().split(/^|\s+/)}function Ad(i){return i.classList||new D0(i)}function D0(i){this._node=i,this._names=P0(i.getAttribute("class")||"")}D0.prototype={add:function(i){var e=this._names.indexOf(i);e<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var e=this._names.indexOf(i);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function L0(i,e){for(var t=Ad(i),s=-1,o=e.length;++s<o;)t.add(e[s])}function N0(i,e){for(var t=Ad(i),s=-1,o=e.length;++s<o;)t.remove(e[s])}function bA(i){return function(){L0(this,i)}}function PA(i){return function(){N0(this,i)}}function DA(i,e){return function(){(e.apply(this,arguments)?L0:N0)(this,i)}}function LA(i,e){var t=P0(i+"");if(arguments.length<2){for(var s=Ad(this.node()),o=-1,l=t.length;++o<l;)if(!s.contains(t[o]))return!1;return!0}return this.each((typeof e=="function"?DA:e?bA:PA)(t,e))}function NA(){this.textContent=""}function IA(i){return function(){this.textContent=i}}function UA(i){return function(){var e=i.apply(this,arguments);this.textContent=e??""}}function FA(i){return arguments.length?this.each(i==null?NA:(typeof i=="function"?UA:IA)(i)):this.node().textContent}function OA(){this.innerHTML=""}function kA(i){return function(){this.innerHTML=i}}function zA(i){return function(){var e=i.apply(this,arguments);this.innerHTML=e??""}}function BA(i){return arguments.length?this.each(i==null?OA:(typeof i=="function"?zA:kA)(i)):this.node().innerHTML}function HA(){this.nextSibling&&this.parentNode.appendChild(this)}function VA(){return this.each(HA)}function GA(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function WA(){return this.each(GA)}function XA(i){var e=typeof i=="function"?i:w0(i);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function YA(){return null}function qA(i,e){var t=typeof i=="function"?i:w0(i),s=e==null?YA:typeof e=="function"?e:Td(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function jA(){var i=this.parentNode;i&&i.removeChild(this)}function $A(){return this.each(jA)}function KA(){var i=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function ZA(){var i=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function QA(i){return this.select(i?ZA:KA)}function JA(i){return arguments.length?this.property("__data__",i):this.node().__data__}function eR(i){return function(e){i.call(this,e,this.__data__)}}function tR(i){return i.trim().split(/^|\s+/).map(function(e){var t="",s=e.indexOf(".");return s>=0&&(t=e.slice(s+1),e=e.slice(0,s)),{type:e,name:t}})}function nR(i){return function(){var e=this.__on;if(e){for(var t=0,s=-1,o=e.length,l;t<o;++t)l=e[t],(!i.type||l.type===i.type)&&l.name===i.name?this.removeEventListener(l.type,l.listener,l.options):e[++s]=l;++s?e.length=s:delete this.__on}}}function iR(i,e,t){return function(){var s=this.__on,o,l=eR(e);if(s){for(var c=0,f=s.length;c<f;++c)if((o=s[c]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=l,o.options=t),o.value=e;return}}this.addEventListener(i.type,l,t),o={type:i.type,name:i.name,value:e,listener:l,options:t},s?s.push(o):this.__on=[o]}}function rR(i,e,t){var s=tR(i+""),o,l=s.length,c;if(arguments.length<2){var f=this.node().__on;if(f){for(var h=0,d=f.length,m;h<d;++h)for(o=0,m=f[h];o<l;++o)if((c=s[o]).type===m.type&&c.name===m.name)return m.value}return}for(f=e?iR:nR,o=0;o<l;++o)this.each(f(s[o],e,t));return this}function I0(i,e,t){var s=b0(i),o=s.CustomEvent;typeof o=="function"?o=new o(e,t):(o=s.document.createEvent("Event"),t?(o.initEvent(e,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(e,!1,!1)),i.dispatchEvent(o)}function sR(i,e){return function(){return I0(this,i,e)}}function oR(i,e){return function(){return I0(this,i,e.apply(this,arguments))}}function aR(i,e){return this.each((typeof e=="function"?oR:sR)(i,e))}function*lR(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var s=i[e],o=0,l=s.length,c;o<l;++o)(c=s[o])&&(yield c)}var U0=[null];function Yn(i,e){this._groups=i,this._parents=e}function Ta(){return new Yn([[document.documentElement]],U0)}function uR(){return this}Yn.prototype=Ta.prototype={constructor:Yn,select:U1,selectAll:z1,selectChild:G1,selectChildren:q1,filter:j1,data:eA,enter:$1,exit:nA,join:iA,merge:rA,selection:uR,order:sA,sort:oA,call:lA,nodes:uA,node:cA,size:fA,empty:hA,each:dA,attr:yA,style:wA,property:CA,classed:LA,text:FA,html:BA,raise:VA,lower:WA,append:XA,insert:qA,remove:$A,clone:QA,datum:JA,on:rR,dispatch:aR,[Symbol.iterator]:lR};function cR(i){return typeof i=="string"?new Yn([[document.querySelector(i)]],[document.documentElement]):new Yn([[i]],U0)}function Rd(i,e,t){i.prototype=e.prototype=t,t.constructor=i}function F0(i,e){var t=Object.create(i.prototype);for(var s in e)t[s]=e[s];return t}function Aa(){}var _a=.7,Iu=1/_a,ho="\\s*([+-]?\\d+)\\s*",va="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",fR=/^#([0-9a-f]{3,8})$/,hR=new RegExp(`^rgb\\(${ho},${ho},${ho}\\)$`),dR=new RegExp(`^rgb\\(${bi},${bi},${bi}\\)$`),pR=new RegExp(`^rgba\\(${ho},${ho},${ho},${va}\\)$`),mR=new RegExp(`^rgba\\(${bi},${bi},${bi},${va}\\)$`),gR=new RegExp(`^hsl\\(${va},${bi},${bi}\\)$`),_R=new RegExp(`^hsla\\(${va},${bi},${bi},${va}\\)$`),S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Rd(Aa,gs,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:M_,formatHex:M_,formatHex8:vR,formatHsl:xR,formatRgb:E_,toString:E_});function M_(){return this.rgb().formatHex()}function vR(){return this.rgb().formatHex8()}function xR(){return O0(this).formatHsl()}function E_(){return this.rgb().formatRgb()}function gs(i){var e,t;return i=(i+"").trim().toLowerCase(),(e=fR.exec(i))?(t=e[1].length,e=parseInt(e[1],16),t===6?w_(e):t===3?new Fn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?lu(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?lu(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=hR.exec(i))?new Fn(e[1],e[2],e[3],1):(e=dR.exec(i))?new Fn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=pR.exec(i))?lu(e[1],e[2],e[3],e[4]):(e=mR.exec(i))?lu(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=gR.exec(i))?R_(e[1],e[2]/100,e[3]/100,1):(e=_R.exec(i))?R_(e[1],e[2]/100,e[3]/100,e[4]):S_.hasOwnProperty(i)?w_(S_[i]):i==="transparent"?new Fn(NaN,NaN,NaN,0):null}function w_(i){return new Fn(i>>16&255,i>>8&255,i&255,1)}function lu(i,e,t,s){return s<=0&&(i=e=t=NaN),new Fn(i,e,t,s)}function yR(i){return i instanceof Aa||(i=gs(i)),i?(i=i.rgb(),new Fn(i.r,i.g,i.b,i.opacity)):new Fn}function sd(i,e,t,s){return arguments.length===1?yR(i):new Fn(i,e,t,s??1)}function Fn(i,e,t,s){this.r=+i,this.g=+e,this.b=+t,this.opacity=+s}Rd(Fn,sd,F0(Aa,{brighter(i){return i=i==null?Iu:Math.pow(Iu,i),new Fn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?_a:Math.pow(_a,i),new Fn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Fn(hs(this.r),hs(this.g),hs(this.b),Uu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:T_,formatHex:T_,formatHex8:SR,formatRgb:A_,toString:A_}));function T_(){return`#${fs(this.r)}${fs(this.g)}${fs(this.b)}`}function SR(){return`#${fs(this.r)}${fs(this.g)}${fs(this.b)}${fs((isNaN(this.opacity)?1:this.opacity)*255)}`}function A_(){const i=Uu(this.opacity);return`${i===1?"rgb(":"rgba("}${hs(this.r)}, ${hs(this.g)}, ${hs(this.b)}${i===1?")":`, ${i})`}`}function Uu(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function hs(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function fs(i){return i=hs(i),(i<16?"0":"")+i.toString(16)}function R_(i,e,t,s){return s<=0?i=e=t=NaN:t<=0||t>=1?i=e=NaN:e<=0&&(i=NaN),new mi(i,e,t,s)}function O0(i){if(i instanceof mi)return new mi(i.h,i.s,i.l,i.opacity);if(i instanceof Aa||(i=gs(i)),!i)return new mi;if(i instanceof mi)return i;i=i.rgb();var e=i.r/255,t=i.g/255,s=i.b/255,o=Math.min(e,t,s),l=Math.max(e,t,s),c=NaN,f=l-o,h=(l+o)/2;return f?(e===l?c=(t-s)/f+(t<s)*6:t===l?c=(s-e)/f+2:c=(e-t)/f+4,f/=h<.5?l+o:2-l-o,c*=60):f=h>0&&h<1?0:c,new mi(c,f,h,i.opacity)}function MR(i,e,t,s){return arguments.length===1?O0(i):new mi(i,e,t,s??1)}function mi(i,e,t,s){this.h=+i,this.s=+e,this.l=+t,this.opacity=+s}Rd(mi,MR,F0(Aa,{brighter(i){return i=i==null?Iu:Math.pow(Iu,i),new mi(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?_a:Math.pow(_a,i),new mi(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,e=isNaN(i)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*e,o=2*t-s;return new Fn(hh(i>=240?i-240:i+120,o,s),hh(i,o,s),hh(i<120?i+240:i-120,o,s),this.opacity)},clamp(){return new mi(C_(this.h),uu(this.s),uu(this.l),Uu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Uu(this.opacity);return`${i===1?"hsl(":"hsla("}${C_(this.h)}, ${uu(this.s)*100}%, ${uu(this.l)*100}%${i===1?")":`, ${i})`}`}}));function C_(i){return i=(i||0)%360,i<0?i+360:i}function uu(i){return Math.max(0,Math.min(1,i||0))}function hh(i,e,t){return(i<60?e+(t-e)*i/60:i<180?t:i<240?e+(t-e)*(240-i)/60:e)*255}const Cd=i=>()=>i;function ER(i,e){return function(t){return i+t*e}}function wR(i,e,t){return i=Math.pow(i,t),e=Math.pow(e,t)-i,t=1/t,function(s){return Math.pow(i+s*e,t)}}function TR(i){return(i=+i)==1?k0:function(e,t){return t-e?wR(e,t,i):Cd(isNaN(e)?t:e)}}function k0(i,e){var t=e-i;return t?ER(i,t):Cd(isNaN(i)?e:i)}const Fu=(function i(e){var t=TR(e);function s(o,l){var c=t((o=sd(o)).r,(l=sd(l)).r),f=t(o.g,l.g),h=t(o.b,l.b),d=k0(o.opacity,l.opacity);return function(m){return o.r=c(m),o.g=f(m),o.b=h(m),o.opacity=d(m),o+""}}return s.gamma=i,s})(1);function AR(i,e){e||(e=[]);var t=i?Math.min(e.length,i.length):0,s=e.slice(),o;return function(l){for(o=0;o<t;++o)s[o]=i[o]*(1-l)+e[o]*l;return s}}function RR(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function CR(i,e){var t=e?e.length:0,s=i?Math.min(t,i.length):0,o=new Array(s),l=new Array(t),c;for(c=0;c<s;++c)o[c]=bd(i[c],e[c]);for(;c<t;++c)l[c]=e[c];return function(f){for(c=0;c<s;++c)l[c]=o[c](f);return l}}function bR(i,e){var t=new Date;return i=+i,e=+e,function(s){return t.setTime(i*(1-s)+e*s),t}}function di(i,e){return i=+i,e=+e,function(t){return i*(1-t)+e*t}}function PR(i,e){var t={},s={},o;(i===null||typeof i!="object")&&(i={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in i?t[o]=bd(i[o],e[o]):s[o]=e[o];return function(l){for(o in t)s[o]=t[o](l);return s}}var od=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dh=new RegExp(od.source,"g");function DR(i){return function(){return i}}function LR(i){return function(e){return i(e)+""}}function z0(i,e){var t=od.lastIndex=dh.lastIndex=0,s,o,l,c=-1,f=[],h=[];for(i=i+"",e=e+"";(s=od.exec(i))&&(o=dh.exec(e));)(l=o.index)>t&&(l=e.slice(t,l),f[c]?f[c]+=l:f[++c]=l),(s=s[0])===(o=o[0])?f[c]?f[c]+=o:f[++c]=o:(f[++c]=null,h.push({i:c,x:di(s,o)})),t=dh.lastIndex;return t<e.length&&(l=e.slice(t),f[c]?f[c]+=l:f[++c]=l),f.length<2?h[0]?LR(h[0].x):DR(e):(e=h.length,function(d){for(var m=0,_;m<e;++m)f[(_=h[m]).i]=_.x(d);return f.join("")})}function bd(i,e){var t=typeof e,s;return e==null||t==="boolean"?Cd(e):(t==="number"?di:t==="string"?(s=gs(e))?(e=s,Fu):z0:e instanceof gs?Fu:e instanceof Date?bR:RR(e)?AR:Array.isArray(e)?CR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?PR:di)(i,e)}function NR(i,e){return i=+i,e=+e,function(t){return Math.round(i*(1-t)+e*t)}}var b_=180/Math.PI,ad={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function B0(i,e,t,s,o,l){var c,f,h;return(c=Math.sqrt(i*i+e*e))&&(i/=c,e/=c),(h=i*t+e*s)&&(t-=i*h,s-=e*h),(f=Math.sqrt(t*t+s*s))&&(t/=f,s/=f,h/=f),i*s<e*t&&(i=-i,e=-e,h=-h,c=-c),{translateX:o,translateY:l,rotate:Math.atan2(e,i)*b_,skewX:Math.atan(h)*b_,scaleX:c,scaleY:f}}var cu;function IR(i){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return e.isIdentity?ad:B0(e.a,e.b,e.c,e.d,e.e,e.f)}function UR(i){return i==null||(cu||(cu=document.createElementNS("http://www.w3.org/2000/svg","g")),cu.setAttribute("transform",i),!(i=cu.transform.baseVal.consolidate()))?ad:(i=i.matrix,B0(i.a,i.b,i.c,i.d,i.e,i.f))}function H0(i,e,t,s){function o(d){return d.length?d.pop()+" ":""}function l(d,m,_,v,y,M){if(d!==_||m!==v){var E=y.push("translate(",null,e,null,t);M.push({i:E-4,x:di(d,_)},{i:E-2,x:di(m,v)})}else(_||v)&&y.push("translate("+_+e+v+t)}function c(d,m,_,v){d!==m?(d-m>180?m+=360:m-d>180&&(d+=360),v.push({i:_.push(o(_)+"rotate(",null,s)-2,x:di(d,m)})):m&&_.push(o(_)+"rotate("+m+s)}function f(d,m,_,v){d!==m?v.push({i:_.push(o(_)+"skewX(",null,s)-2,x:di(d,m)}):m&&_.push(o(_)+"skewX("+m+s)}function h(d,m,_,v,y,M){if(d!==_||m!==v){var E=y.push(o(y)+"scale(",null,",",null,")");M.push({i:E-4,x:di(d,_)},{i:E-2,x:di(m,v)})}else(_!==1||v!==1)&&y.push(o(y)+"scale("+_+","+v+")")}return function(d,m){var _=[],v=[];return d=i(d),m=i(m),l(d.translateX,d.translateY,m.translateX,m.translateY,_,v),c(d.rotate,m.rotate,_,v),f(d.skewX,m.skewX,_,v),h(d.scaleX,d.scaleY,m.scaleX,m.scaleY,_,v),d=m=null,function(y){for(var M=-1,E=v.length,S;++M<E;)_[(S=v[M]).i]=S.x(y);return _.join("")}}}var FR=H0(IR,"px, ","px)","deg)"),OR=H0(UR,", ",")",")"),Mo=0,da=0,ca=0,V0=1e3,Ou,pa,ku=0,_s=0,ju=0,xa=typeof performance=="object"&&performance.now?performance:Date,G0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Pd(){return _s||(G0(kR),_s=xa.now()+ju)}function kR(){_s=0}function zu(){this._call=this._time=this._next=null}zu.prototype=W0.prototype={constructor:zu,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?Pd():+t)+(e==null?0:+e),!this._next&&pa!==this&&(pa?pa._next=this:Ou=this,pa=this),this._call=i,this._time=t,ld()},stop:function(){this._call&&(this._call=null,this._time=1/0,ld())}};function W0(i,e,t){var s=new zu;return s.restart(i,e,t),s}function zR(){Pd(),++Mo;for(var i=Ou,e;i;)(e=_s-i._time)>=0&&i._call.call(void 0,e),i=i._next;--Mo}function P_(){_s=(ku=xa.now())+ju,Mo=da=0;try{zR()}finally{Mo=0,HR(),_s=0}}function BR(){var i=xa.now(),e=i-ku;e>V0&&(ju-=e,ku=i)}function HR(){for(var i,e=Ou,t,s=1/0;e;)e._call?(s>e._time&&(s=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:Ou=t);pa=i,ld(s)}function ld(i){if(!Mo){da&&(da=clearTimeout(da));var e=i-_s;e>24?(i<1/0&&(da=setTimeout(P_,i-xa.now()-ju)),ca&&(ca=clearInterval(ca))):(ca||(ku=xa.now(),ca=setInterval(BR,V0)),Mo=1,G0(P_))}}function D_(i,e,t){var s=new zu;return e=e==null?0:+e,s.restart(o=>{s.stop(),i(o+e)},e,t),s}var VR=E0("start","end","cancel","interrupt"),GR=[],X0=0,L_=1,ud=2,wu=3,N_=4,cd=5,Tu=6;function $u(i,e,t,s,o,l){var c=i.__transition;if(!c)i.__transition={};else if(t in c)return;WR(i,t,{name:e,index:s,group:o,on:VR,tween:GR,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:X0})}function Dd(i,e){var t=xi(i,e);if(t.state>X0)throw new Error("too late; already scheduled");return t}function Pi(i,e){var t=xi(i,e);if(t.state>wu)throw new Error("too late; already running");return t}function xi(i,e){var t=i.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function WR(i,e,t){var s=i.__transition,o;s[e]=t,t.timer=W0(l,0,t.time);function l(d){t.state=L_,t.timer.restart(c,t.delay,t.time),t.delay<=d&&c(d-t.delay)}function c(d){var m,_,v,y;if(t.state!==L_)return h();for(m in s)if(y=s[m],y.name===t.name){if(y.state===wu)return D_(c);y.state===N_?(y.state=Tu,y.timer.stop(),y.on.call("interrupt",i,i.__data__,y.index,y.group),delete s[m]):+m<e&&(y.state=Tu,y.timer.stop(),y.on.call("cancel",i,i.__data__,y.index,y.group),delete s[m])}if(D_(function(){t.state===wu&&(t.state=N_,t.timer.restart(f,t.delay,t.time),f(d))}),t.state=ud,t.on.call("start",i,i.__data__,t.index,t.group),t.state===ud){for(t.state=wu,o=new Array(v=t.tween.length),m=0,_=-1;m<v;++m)(y=t.tween[m].value.call(i,i.__data__,t.index,t.group))&&(o[++_]=y);o.length=_+1}}function f(d){for(var m=d<t.duration?t.ease.call(null,d/t.duration):(t.timer.restart(h),t.state=cd,1),_=-1,v=o.length;++_<v;)o[_].call(i,m);t.state===cd&&(t.on.call("end",i,i.__data__,t.index,t.group),h())}function h(){t.state=Tu,t.timer.stop(),delete s[e];for(var d in s)return;delete i.__transition}}function XR(i,e){var t=i.__transition,s,o,l=!0,c;if(t){e=e==null?null:e+"";for(c in t){if((s=t[c]).name!==e){l=!1;continue}o=s.state>ud&&s.state<cd,s.state=Tu,s.timer.stop(),s.on.call(o?"interrupt":"cancel",i,i.__data__,s.index,s.group),delete t[c]}l&&delete i.__transition}}function YR(i){return this.each(function(){XR(this,i)})}function qR(i,e){var t,s;return function(){var o=Pi(this,i),l=o.tween;if(l!==t){s=t=l;for(var c=0,f=s.length;c<f;++c)if(s[c].name===e){s=s.slice(),s.splice(c,1);break}}o.tween=s}}function jR(i,e,t){var s,o;if(typeof t!="function")throw new Error;return function(){var l=Pi(this,i),c=l.tween;if(c!==s){o=(s=c).slice();for(var f={name:e,value:t},h=0,d=o.length;h<d;++h)if(o[h].name===e){o[h]=f;break}h===d&&o.push(f)}l.tween=o}}function $R(i,e){var t=this._id;if(i+="",arguments.length<2){for(var s=xi(this.node(),t).tween,o=0,l=s.length,c;o<l;++o)if((c=s[o]).name===i)return c.value;return null}return this.each((e==null?qR:jR)(t,i,e))}function Ld(i,e,t){var s=i._id;return i.each(function(){var o=Pi(this,s);(o.value||(o.value={}))[e]=t.apply(this,arguments)}),function(o){return xi(o,s).value[e]}}function Y0(i,e){var t;return(typeof e=="number"?di:e instanceof gs?Fu:(t=gs(e))?(e=t,Fu):z0)(i,e)}function KR(i){return function(){this.removeAttribute(i)}}function ZR(i){return function(){this.removeAttributeNS(i.space,i.local)}}function QR(i,e,t){var s,o=t+"",l;return function(){var c=this.getAttribute(i);return c===o?null:c===s?l:l=e(s=c,t)}}function JR(i,e,t){var s,o=t+"",l;return function(){var c=this.getAttributeNS(i.space,i.local);return c===o?null:c===s?l:l=e(s=c,t)}}function eC(i,e,t){var s,o,l;return function(){var c,f=t(this),h;return f==null?void this.removeAttribute(i):(c=this.getAttribute(i),h=f+"",c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f)))}}function tC(i,e,t){var s,o,l;return function(){var c,f=t(this),h;return f==null?void this.removeAttributeNS(i.space,i.local):(c=this.getAttributeNS(i.space,i.local),h=f+"",c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f)))}}function nC(i,e){var t=qu(i),s=t==="transform"?OR:Y0;return this.attrTween(i,typeof e=="function"?(t.local?tC:eC)(t,s,Ld(this,"attr."+i,e)):e==null?(t.local?ZR:KR)(t):(t.local?JR:QR)(t,s,e))}function iC(i,e){return function(t){this.setAttribute(i,e.call(this,t))}}function rC(i,e){return function(t){this.setAttributeNS(i.space,i.local,e.call(this,t))}}function sC(i,e){var t,s;function o(){var l=e.apply(this,arguments);return l!==s&&(t=(s=l)&&rC(i,l)),t}return o._value=e,o}function oC(i,e){var t,s;function o(){var l=e.apply(this,arguments);return l!==s&&(t=(s=l)&&iC(i,l)),t}return o._value=e,o}function aC(i,e){var t="attr."+i;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var s=qu(i);return this.tween(t,(s.local?sC:oC)(s,e))}function lC(i,e){return function(){Dd(this,i).delay=+e.apply(this,arguments)}}function uC(i,e){return e=+e,function(){Dd(this,i).delay=e}}function cC(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?lC:uC)(e,i)):xi(this.node(),e).delay}function fC(i,e){return function(){Pi(this,i).duration=+e.apply(this,arguments)}}function hC(i,e){return e=+e,function(){Pi(this,i).duration=e}}function dC(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?fC:hC)(e,i)):xi(this.node(),e).duration}function pC(i,e){if(typeof e!="function")throw new Error;return function(){Pi(this,i).ease=e}}function mC(i){var e=this._id;return arguments.length?this.each(pC(e,i)):xi(this.node(),e).ease}function gC(i,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;Pi(this,i).ease=t}}function _C(i){if(typeof i!="function")throw new Error;return this.each(gC(this._id,i))}function vC(i){typeof i!="function"&&(i=A0(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=[],h,d=0;d<c;++d)(h=l[d])&&i.call(h,h.__data__,d,l)&&f.push(h);return new nr(s,this._parents,this._name,this._id)}function xC(i){if(i._id!==this._id)throw new Error;for(var e=this._groups,t=i._groups,s=e.length,o=t.length,l=Math.min(s,o),c=new Array(s),f=0;f<l;++f)for(var h=e[f],d=t[f],m=h.length,_=c[f]=new Array(m),v,y=0;y<m;++y)(v=h[y]||d[y])&&(_[y]=v);for(;f<s;++f)c[f]=e[f];return new nr(c,this._parents,this._name,this._id)}function yC(i){return(i+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function SC(i,e,t){var s,o,l=yC(e)?Dd:Pi;return function(){var c=l(this,i),f=c.on;f!==s&&(o=(s=f).copy()).on(e,t),c.on=o}}function MC(i,e){var t=this._id;return arguments.length<2?xi(this.node(),t).on.on(i):this.each(SC(t,i,e))}function EC(i){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==i)return;e&&e.removeChild(this)}}function wC(){return this.on("end.remove",EC(this._id))}function TC(i){var e=this._name,t=this._id;typeof i!="function"&&(i=Td(i));for(var s=this._groups,o=s.length,l=new Array(o),c=0;c<o;++c)for(var f=s[c],h=f.length,d=l[c]=new Array(h),m,_,v=0;v<h;++v)(m=f[v])&&(_=i.call(m,m.__data__,v,f))&&("__data__"in m&&(_.__data__=m.__data__),d[v]=_,$u(d[v],e,t,v,d,xi(m,t)));return new nr(l,this._parents,e,t)}function AC(i){var e=this._name,t=this._id;typeof i!="function"&&(i=T0(i));for(var s=this._groups,o=s.length,l=[],c=[],f=0;f<o;++f)for(var h=s[f],d=h.length,m,_=0;_<d;++_)if(m=h[_]){for(var v=i.call(m,m.__data__,_,h),y,M=xi(m,t),E=0,S=v.length;E<S;++E)(y=v[E])&&$u(y,e,t,E,v,M);l.push(v),c.push(m)}return new nr(l,c,e,t)}var RC=Ta.prototype.constructor;function CC(){return new RC(this._groups,this._parents)}function bC(i,e){var t,s,o;return function(){var l=So(this,i),c=(this.style.removeProperty(i),So(this,i));return l===c?null:l===t&&c===s?o:o=e(t=l,s=c)}}function q0(i){return function(){this.style.removeProperty(i)}}function PC(i,e,t){var s,o=t+"",l;return function(){var c=So(this,i);return c===o?null:c===s?l:l=e(s=c,t)}}function DC(i,e,t){var s,o,l;return function(){var c=So(this,i),f=t(this),h=f+"";return f==null&&(h=f=(this.style.removeProperty(i),So(this,i))),c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f))}}function LC(i,e){var t,s,o,l="style."+e,c="end."+l,f;return function(){var h=Pi(this,i),d=h.on,m=h.value[l]==null?f||(f=q0(e)):void 0;(d!==t||o!==m)&&(s=(t=d).copy()).on(c,o=m),h.on=s}}function NC(i,e,t){var s=(i+="")=="transform"?FR:Y0;return e==null?this.styleTween(i,bC(i,s)).on("end.style."+i,q0(i)):typeof e=="function"?this.styleTween(i,DC(i,s,Ld(this,"style."+i,e))).each(LC(this._id,i)):this.styleTween(i,PC(i,s,e),t).on("end.style."+i,null)}function IC(i,e,t){return function(s){this.style.setProperty(i,e.call(this,s),t)}}function UC(i,e,t){var s,o;function l(){var c=e.apply(this,arguments);return c!==o&&(s=(o=c)&&IC(i,c,t)),s}return l._value=e,l}function FC(i,e,t){var s="style."+(i+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(e==null)return this.tween(s,null);if(typeof e!="function")throw new Error;return this.tween(s,UC(i,e,t??""))}function OC(i){return function(){this.textContent=i}}function kC(i){return function(){var e=i(this);this.textContent=e??""}}function zC(i){return this.tween("text",typeof i=="function"?kC(Ld(this,"text",i)):OC(i==null?"":i+""))}function BC(i){return function(e){this.textContent=i.call(this,e)}}function HC(i){var e,t;function s(){var o=i.apply(this,arguments);return o!==t&&(e=(t=o)&&BC(o)),e}return s._value=i,s}function VC(i){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(i==null)return this.tween(e,null);if(typeof i!="function")throw new Error;return this.tween(e,HC(i))}function GC(){for(var i=this._name,e=this._id,t=j0(),s=this._groups,o=s.length,l=0;l<o;++l)for(var c=s[l],f=c.length,h,d=0;d<f;++d)if(h=c[d]){var m=xi(h,e);$u(h,i,t,d,c,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new nr(s,this._parents,i,t)}function WC(){var i,e,t=this,s=t._id,o=t.size();return new Promise(function(l,c){var f={value:c},h={value:function(){--o===0&&l()}};t.each(function(){var d=Pi(this,s),m=d.on;m!==i&&(e=(i=m).copy(),e._.cancel.push(f),e._.interrupt.push(f),e._.end.push(h)),d.on=e}),o===0&&l()})}var XC=0;function nr(i,e,t,s){this._groups=i,this._parents=e,this._name=t,this._id=s}function j0(){return++XC}var qi=Ta.prototype;nr.prototype={constructor:nr,select:TC,selectAll:AC,selectChild:qi.selectChild,selectChildren:qi.selectChildren,filter:vC,merge:xC,selection:CC,transition:GC,call:qi.call,nodes:qi.nodes,node:qi.node,size:qi.size,empty:qi.empty,each:qi.each,on:MC,attr:nC,attrTween:aC,style:NC,styleTween:FC,text:zC,textTween:VC,remove:wC,tween:$R,delay:cC,duration:dC,ease:mC,easeVarying:_C,end:WC,[Symbol.iterator]:qi[Symbol.iterator]};function YC(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var qC={time:null,delay:0,duration:250,ease:YC};function jC(i,e){for(var t;!(t=i.__transition)||!(t=t[e]);)if(!(i=i.parentNode))throw new Error(`transition ${e} not found`);return t}function $C(i){var e,t;i instanceof nr?(e=i._id,i=i._name):(e=j0(),(t=qC).time=Pd(),i=i==null?null:i+"");for(var s=this._groups,o=s.length,l=0;l<o;++l)for(var c=s[l],f=c.length,h,d=0;d<f;++d)(h=c[d])&&$u(h,i,e,d,c,t||jC(h,e));return new nr(s,this._parents,i,e)}Ta.prototype.interrupt=YR;Ta.prototype.transition=$C;function KC(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function Bu(i,e){if(!isFinite(i)||i===0)return null;var t=(i=e?i.toExponential(e-1):i.toExponential()).indexOf("e"),s=i.slice(0,t);return[s.length>1?s[0]+s.slice(2):s,+i.slice(t+1)]}function Eo(i){return i=Bu(Math.abs(i)),i?i[1]:NaN}function ZC(i,e){return function(t,s){for(var o=t.length,l=[],c=0,f=i[0],h=0;o>0&&f>0&&(h+f+1>s&&(f=Math.max(1,s-h)),l.push(t.substring(o-=f,o+f)),!((h+=f+1)>s));)f=i[c=(c+1)%i.length];return l.reverse().join(e)}}function QC(i){return function(e){return e.replace(/[0-9]/g,function(t){return i[+t]})}}var JC=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Hu(i){if(!(e=JC.exec(i)))throw new Error("invalid format: "+i);var e;return new Nd({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Hu.prototype=Nd.prototype;function Nd(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Nd.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function eb(i){e:for(var e=i.length,t=1,s=-1,o;t<e;++t)switch(i[t]){case".":s=o=t;break;case"0":s===0&&(s=t),o=t;break;default:if(!+i[t])break e;s>0&&(s=0);break}return s>0?i.slice(0,s)+i.slice(o+1):i}var Vu;function tb(i,e){var t=Bu(i,e);if(!t)return Vu=void 0,i.toPrecision(e);var s=t[0],o=t[1],l=o-(Vu=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,c=s.length;return l===c?s:l>c?s+new Array(l-c+1).join("0"):l>0?s.slice(0,l)+"."+s.slice(l):"0."+new Array(1-l).join("0")+Bu(i,Math.max(0,e+l-1))[0]}function I_(i,e){var t=Bu(i,e);if(!t)return i+"";var s=t[0],o=t[1];return o<0?"0."+new Array(-o).join("0")+s:s.length>o+1?s.slice(0,o+1)+"."+s.slice(o+1):s+new Array(o-s.length+2).join("0")}const U_={"%":(i,e)=>(i*100).toFixed(e),b:i=>Math.round(i).toString(2),c:i=>i+"",d:KC,e:(i,e)=>i.toExponential(e),f:(i,e)=>i.toFixed(e),g:(i,e)=>i.toPrecision(e),o:i=>Math.round(i).toString(8),p:(i,e)=>I_(i*100,e),r:I_,s:tb,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function F_(i){return i}var O_=Array.prototype.map,k_=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function nb(i){var e=i.grouping===void 0||i.thousands===void 0?F_:ZC(O_.call(i.grouping,Number),i.thousands+""),t=i.currency===void 0?"":i.currency[0]+"",s=i.currency===void 0?"":i.currency[1]+"",o=i.decimal===void 0?".":i.decimal+"",l=i.numerals===void 0?F_:QC(O_.call(i.numerals,String)),c=i.percent===void 0?"%":i.percent+"",f=i.minus===void 0?"−":i.minus+"",h=i.nan===void 0?"NaN":i.nan+"";function d(_,v){_=Hu(_);var y=_.fill,M=_.align,E=_.sign,S=_.symbol,x=_.zero,N=_.width,D=_.comma,b=_.precision,V=_.trim,F=_.type;F==="n"?(D=!0,F="g"):U_[F]||(b===void 0&&(b=12),V=!0,F="g"),(x||y==="0"&&M==="=")&&(x=!0,y="0",M="=");var U=(v&&v.prefix!==void 0?v.prefix:"")+(S==="$"?t:S==="#"&&/[boxX]/.test(F)?"0"+F.toLowerCase():""),G=(S==="$"?s:/[%p]/.test(F)?c:"")+(v&&v.suffix!==void 0?v.suffix:""),C=U_[F],A=/[defgprs%]/.test(F);b=b===void 0?6:/[gprs]/.test(F)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function k(X){var B=U,ie=G,ue,ne,oe;if(F==="c")ie=C(X)+ie,X="";else{X=+X;var O=X<0||1/X<0;if(X=isNaN(X)?h:C(Math.abs(X),b),V&&(X=eb(X)),O&&+X==0&&E!=="+"&&(O=!1),B=(O?E==="("?E:f:E==="-"||E==="("?"":E)+B,ie=(F==="s"&&!isNaN(X)&&Vu!==void 0?k_[8+Vu/3]:"")+ie+(O&&E==="("?")":""),A){for(ue=-1,ne=X.length;++ue<ne;)if(oe=X.charCodeAt(ue),48>oe||oe>57){ie=(oe===46?o+X.slice(ue+1):X.slice(ue))+ie,X=X.slice(0,ue);break}}}D&&!x&&(X=e(X,1/0));var ae=B.length+X.length+ie.length,Q=ae<N?new Array(N-ae+1).join(y):"";switch(D&&x&&(X=e(Q+X,Q.length?N-ie.length:1/0),Q=""),M){case"<":X=B+X+ie+Q;break;case"=":X=B+Q+X+ie;break;case"^":X=Q.slice(0,ae=Q.length>>1)+B+X+ie+Q.slice(ae);break;default:X=Q+B+X+ie;break}return l(X)}return k.toString=function(){return _+""},k}function m(_,v){var y=Math.max(-8,Math.min(8,Math.floor(Eo(v)/3)))*3,M=Math.pow(10,-y),E=d((_=Hu(_),_.type="f",_),{suffix:k_[8+y/3]});return function(S){return E(M*S)}}return{format:d,formatPrefix:m}}var fu,$0,K0;ib({thousands:",",grouping:[3],currency:["$",""]});function ib(i){return fu=nb(i),$0=fu.format,K0=fu.formatPrefix,fu}function rb(i){return Math.max(0,-Eo(Math.abs(i)))}function sb(i,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Eo(e)/3)))*3-Eo(Math.abs(i)))}function ob(i,e){return i=Math.abs(i),e=Math.abs(e)-i,Math.max(0,Eo(e)-Eo(i))+1}function ab(i,e){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(e).domain(i);break}return this}function lb(i){return function(){return i}}function ub(i){return+i}var z_=[0,1];function ao(i){return i}function fd(i,e){return(e-=i=+i)?function(t){return(t-i)/e}:lb(isNaN(e)?NaN:.5)}function cb(i,e){var t;return i>e&&(t=i,i=e,e=t),function(s){return Math.max(i,Math.min(e,s))}}function fb(i,e,t){var s=i[0],o=i[1],l=e[0],c=e[1];return o<s?(s=fd(o,s),l=t(c,l)):(s=fd(s,o),l=t(l,c)),function(f){return l(s(f))}}function hb(i,e,t){var s=Math.min(i.length,e.length)-1,o=new Array(s),l=new Array(s),c=-1;for(i[s]<i[0]&&(i=i.slice().reverse(),e=e.slice().reverse());++c<s;)o[c]=fd(i[c],i[c+1]),l[c]=t(e[c],e[c+1]);return function(f){var h=p1(i,f,1,s)-1;return l[h](o[h](f))}}function db(i,e){return e.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function pb(){var i=z_,e=z_,t=bd,s,o,l,c=ao,f,h,d;function m(){var v=Math.min(i.length,e.length);return c!==ao&&(c=cb(i[0],i[v-1])),f=v>2?hb:fb,h=d=null,_}function _(v){return v==null||isNaN(v=+v)?l:(h||(h=f(i.map(s),e,t)))(s(c(v)))}return _.invert=function(v){return c(o((d||(d=f(e,i.map(s),di)))(v)))},_.domain=function(v){return arguments.length?(i=Array.from(v,ub),m()):i.slice()},_.range=function(v){return arguments.length?(e=Array.from(v),m()):e.slice()},_.rangeRound=function(v){return e=Array.from(v),t=NR,m()},_.clamp=function(v){return arguments.length?(c=v?!0:ao,m()):c!==ao},_.interpolate=function(v){return arguments.length?(t=v,m()):t},_.unknown=function(v){return arguments.length?(l=v,_):l},function(v,y){return s=v,o=y,m()}}function mb(){return pb()(ao,ao)}function gb(i,e,t,s){var o=x1(i,e,t),l;switch(s=Hu(s??",f"),s.type){case"s":{var c=Math.max(Math.abs(i),Math.abs(e));return s.precision==null&&!isNaN(l=sb(o,c))&&(s.precision=l),K0(s,c)}case"":case"e":case"g":case"p":case"r":{s.precision==null&&!isNaN(l=ob(o,Math.max(Math.abs(i),Math.abs(e))))&&(s.precision=l-(s.type==="e"));break}case"f":case"%":{s.precision==null&&!isNaN(l=rb(o))&&(s.precision=l-(s.type==="%")*2);break}}return $0(s)}function _b(i){var e=i.domain;return i.ticks=function(t){var s=e();return v1(s[0],s[s.length-1],t??10)},i.tickFormat=function(t,s){var o=e();return gb(o[0],o[o.length-1],t??10,s)},i.nice=function(t){t==null&&(t=10);var s=e(),o=0,l=s.length-1,c=s[o],f=s[l],h,d,m=10;for(f<c&&(d=c,c=f,f=d,d=o,o=l,l=d);m-- >0;){if(d=nd(c,f,t),d===h)return s[o]=c,s[l]=f,e(s);if(d>0)c=Math.floor(c/d)*d,f=Math.ceil(f/d)*d;else if(d<0)c=Math.ceil(c*d)/d,f=Math.floor(f*d)/d;else break;h=d}return i},i}function hd(){var i=mb();return i.copy=function(){return db(i,hd())},ab.apply(i,arguments),_b(i)}function ma(i,e,t){this.k=i,this.x=e,this.y=t}ma.prototype={constructor:ma,scale:function(i){return i===1?this:new ma(this.k*i,this.x,this.y)},translate:function(i,e){return i===0&e===0?this:new ma(this.k,this.x+this.k*i,this.y+this.k*e)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ma.prototype;const vb=10,hu=.5,xb=3,B_=.25,Z0=108,Dr=Z0*10,os=Z0*1,Ki={top:38,right:20,bottom:54,left:62},yb=Dr+Ki.left+Ki.right,Sb=os+Ki.top+Ki.bottom;function Mb({sliceData:i,colorMode:e,colorFn:t,vmin:s,vmax:o,loading:l}){const c=bt.useRef(null),f=bt.useRef(e);f.current=e;const h=bt.useRef(s);h.current=s;const d=bt.useRef(o);return d.current=o,bt.useEffect(()=>{var k,X;if(!c.current||!((k=i==null?void 0:i.x)!=null&&k.length))return;const m=f.current,_=h.current,v=d.current,y=cR(c.current);y.selectAll("*").remove();const M=hd().domain([0,vb]).range([0,Dr]),E=hd().domain([-hu,hu]).range([os,0]),S="hm-clip";y.append("defs").append("clipPath").attr("id",S).append("rect").attr("width",Dr).attr("height",os);const x=y.append("g").attr("transform",`translate(${Ki.left},${Ki.top})`).attr("clip-path",`url(#${S})`);x.append("rect").attr("width",Dr).attr("height",os).attr("fill","#0b0e18").attr("rx",2);const{Nx:N,Nz:D}=i,b=Dr/N+.6,V=os/D+.6,F=m==="pressure"?i.p:i.vmag,U=v-_||1;x.selectAll("rect.cell").data(y1(i.x.length)).join("rect").attr("class","cell").attr("x",B=>M(i.x[B])-b/2).attr("y",B=>E(i.z[B])-V/2).attr("width",b).attr("height",V).attr("fill",B=>{const ie=(F[B]-_)/U,[ue,ne,oe]=t(Math.max(0,Math.min(1,ie)));return`rgb(${ue*255|0},${ne*255|0},${oe*255|0})`});for(const B of[hu,-hu])x.append("line").attr("x1",0).attr("x2",Dr).attr("y1",E(B)).attr("y2",E(B)).attr("stroke","rgba(255,255,255,0.25)").attr("stroke-width",1);x.append("ellipse").attr("cx",M(xb)).attr("cy",E(0)).attr("rx",M(B_)-M(0)).attr("ry",Math.abs(E(0)-E(B_))).attr("fill","none").attr("stroke","rgba(255,255,255,0.7)").attr("stroke-width",1.5).attr("stroke-dasharray","5,3");const G=y.append("g").attr("transform",`translate(${Ki.left},${Ki.top})`),C=B=>{B.selectAll("text").attr("fill","#94a3b8").attr("font-size",11).attr("font-family","system-ui, sans-serif"),B.selectAll("line, path").attr("stroke","#334155")};G.append("g").attr("transform",`translate(0,${os})`).call(R1(M).ticks(10).tickSize(4).tickPadding(5)).call(C).append("text").attr("x",Dr/2).attr("y",40).attr("fill","#cbd5e1").attr("font-size",13).attr("font-weight",600).attr("font-family","system-ui, sans-serif").attr("text-anchor","middle").text("x"),G.append("g").call(C1(E).ticks(5).tickSize(4).tickPadding(5)).call(C).append("text").attr("x",-48).attr("y",os/2).attr("dy","0.35em").attr("fill","#cbd5e1").attr("font-size",13).attr("font-weight",600).attr("font-family","system-ui, sans-serif").attr("text-anchor","middle").text("z");const A=m==="pressure"?"Pressure":"Velocity magnitude";y.append("text").attr("x",Ki.left+Dr/2).attr("y",20).attr("fill","#e2e8f0").attr("font-size",13).attr("font-weight",600).attr("font-family","system-ui, sans-serif").attr("text-anchor","middle").text(`Top-down slice  y ≈ ${(X=i.y_val)==null?void 0:X.toFixed(3)} m  —  ${A}`)},[i]),at.jsx("div",{style:Eb,children:at.jsx("svg",{ref:c,width:yb,height:Sb,style:{display:"block",transition:l?"none":"filter 0.4s ease",filter:l?"grayscale(1) blur(4px)":"none"}})})}const Eb={position:"absolute",bottom:14,right:14,maxWidth:"calc(100% - 28px)",overflowX:"auto",background:"rgba(8,10,18,0.88)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,backdropFilter:"blur(8px)",padding:"6px 6px 4px",zIndex:10,boxShadow:"0 4px 24px rgba(0,0,0,0.5)"},du=[[0,.23,.299,.754],[.25,.553,.69,.896],[.5,.865,.865,.865],[.75,.797,.424,.367],[1,.706,.016,.15]];function Id(i){i=Math.max(0,Math.min(1,i));let e=0;for(;e<du.length-2&&i>=du[e+1][0];)e++;const[t,s,o,l]=du[e],[c,f,h,d]=du[e+1],m=(i-t)/(c-t);return[s+m*(f-s),o+m*(h-o),l+m*(d-l)]}const Lr=10,Ai=.5,wb=3,Tb=.25;function Ab(i,e,t=1){const s=Ai*t,o=e==="pressure"?i.p:i.vmag,l=[];for(let y=0;y<i.x.length;y++)Math.sqrt(i.y[y]**2+i.z[y]**2)<=s+1e-6&&l.push(y);const c=l.length,f=new Float32Array(c*3),h=new Float32Array(c*3);let d=1/0,m=-1/0;for(const y of l)o[y]<d&&(d=o[y]),o[y]>m&&(m=o[y]);const _=m-d||1;for(let y=0;y<c;y++){const M=l[y];f[y*3]=i.x[M]-Lr/2,f[y*3+1]=i.y[M],f[y*3+2]=i.z[M];const E=(o[M]-d)/_,[S,x,N]=Id(E);h[y*3]=S,h[y*3+1]=x,h[y*3+2]=N}const v=new qn;return v.setAttribute("position",new ii(f,3)),v.setAttribute("color",new ii(h,3)),v.computeBoundingSphere(),{geom:v,vmin:d,vmax:m}}function pu({label:i,value:e,min:t,max:s,step:o,onChange:l,format:c}){return at.jsxs("div",{style:Nt.sliderRow,children:[at.jsxs("div",{style:Nt.sliderLabel,children:[at.jsx("span",{children:i}),at.jsx("span",{style:Nt.sliderValue,children:c?c(e):e})]}),at.jsx("input",{type:"range",min:t,max:s,step:o,value:e,onChange:f=>l(Number(f.target.value)),style:Nt.range})]})}function Rb({vmin:i,vmax:e,label:t}){const s=Array.from({length:101},(o,l)=>{const c=l/100,[f,h,d]=Id(c);return`rgb(${f*255|0},${h*255|0},${d*255|0})`}).join(", ");return at.jsxs("div",{style:Nt.colorbar,children:[at.jsx("div",{style:Nt.colorbarLabel,children:t}),at.jsxs("div",{style:Nt.colorbarTrack,children:[at.jsx("div",{style:{...Nt.colorbarGradient,background:`linear-gradient(to right, ${s})`}}),at.jsxs("div",{style:Nt.colorbarTicks,children:[at.jsx("span",{children:i.toFixed(3)}),at.jsx("span",{children:((i+e)/2).toFixed(3)}),at.jsx("span",{children:e.toFixed(3)})]})]})]})}function Cb(){const i=bt.useRef(null),e=bt.useRef(null),t=bt.useRef(null),[s,o]=bt.useState(500),[l,c]=bt.useState(.5),[f,h]=bt.useState(19),[d,m]=bt.useState("vmag"),[_,v]=bt.useState(1),[y,M]=bt.useState(!1),[E,S]=bt.useState(null),[x,N]=bt.useState(null),[D,b]=bt.useState({vmin:0,vmax:1}),[V,F]=bt.useState(null),U=bt.useRef(null),G=bt.useRef(1);G.current=_;const C=bt.useRef(d);C.current=d,bt.useEffect(()=>{const B=i.current,ie=B.clientWidth,ue=B.clientHeight,ne=new jT({antialias:!0});ne.setPixelRatio(window.devicePixelRatio),ne.setSize(ie,ue),ne.setClearColor(657935),B.appendChild(ne.domElement);const oe=new u1;oe.setSize(ie,ue),oe.domElement.style.position="absolute",oe.domElement.style.top="0",oe.domElement.style.pointerEvents="none",B.appendChild(oe.domElement);const O=new nS,ae=new ni(45,ie/ue,.01,200);ae.position.set(0,3,6),ae.lookAt(0,0,0);const Q=new KT(ae,ne.domElement);Q.enableDamping=!0,Q.dampingFactor=.08,Q.minDistance=.5,Q.maxDistance=50;const I=new _i(new Sd(Ai,Ai,Lr,48,1,!0),new bu({color:3359829,wireframe:!0,transparent:!0,opacity:.15}));I.rotation.z=Math.PI/2,O.add(I);const le=new Md(Tb,.008,8,32),Ie=new bu({color:16777215,transparent:!0,opacity:.3}),ee=new _i(le,Ie);ee.position.set(wb-Lr/2,0,0),ee.rotation.y=Math.PI/2,O.add(ee);const ce=[-Lr/2,-Ai,-Ai],he=.18;function _e(gt,z,Ht){const nt=new qn().setFromPoints([new K(...gt),new K(...z)]);return new sS(nt,new h0({color:Ht,transparent:!0,opacity:.55}))}function we(gt,z,Ht){const nt=document.createElement("div");nt.textContent=gt,nt.style.cssText=[`color:${Ht}`,"font-size:12px","font-weight:700","font-family:system-ui,sans-serif","pointer-events:none","text-shadow:0 1px 4px rgba(0,0,0,0.9)","white-space:nowrap"].join(";");const ot=new d_(nt);return ot.position.set(...z),ot}O.add(_e([ce[0]-he,ce[1]-he,ce[2]-he],[Lr/2+he,ce[1]-he,ce[2]-he],16739179)),O.add(we("x",[Lr/2+he+.2,ce[1]-he,ce[2]-he],"#ff6b6b")),O.add(_e([ce[0]-he,ce[1]-he,ce[2]-he],[ce[0]-he,Ai+he,ce[2]-he],6937468)),O.add(we("y",[ce[0]-he,Ai+he+.15,ce[2]-he],"#69db7c")),O.add(_e([ce[0]-he,ce[1]-he,ce[2]-he],[ce[0]-he,ce[1]-he,Ai+he],7651580)),O.add(we("z",[ce[0]-he,ce[1]-he,Ai+he+.15],"#74c0fc"));function Pe(gt,z){const Ht=document.createElement("div");Ht.textContent=gt,Ht.style.cssText=["color:#94a3b8","font-size:11px","font-weight:600","font-family:system-ui,sans-serif","letter-spacing:0.08em","text-transform:uppercase","pointer-events:none","text-shadow:0 1px 4px rgba(0,0,0,0.9)"].join(";");const nt=new d_(Ht);return nt.position.set(z,0,Ai+.22),nt}O.add(Pe("Inlet",-Lr/2)),O.add(Pe("Outlet",Lr/2));let je;const Tt=()=>{je=requestAnimationFrame(Tt),Q.update(),ne.render(O,ae),oe.render(O,ae)};Tt();const ft=()=>{const gt=B.clientWidth,z=B.clientHeight;ae.aspect=gt/z,ae.updateProjectionMatrix(),ne.setSize(gt,z),oe.setSize(gt,z)};return window.addEventListener("resize",ft),e.current={renderer:ne,scene:O,camera:ae,controls:Q,points:null},()=>{cancelAnimationFrame(je),window.removeEventListener("resize",ft),Q.dispose(),ne.dispose(),B.contains(ne.domElement)&&B.removeChild(ne.domElement),B.contains(oe.domElement)&&B.removeChild(oe.domElement)}},[]);const A=bt.useCallback((B,ie,ue)=>{const{geom:ne,vmin:oe,vmax:O}=Ab(B,ie,ue),ae=new d0({size:.035,vertexColors:!0,sizeAttenuation:!0,transparent:!0,opacity:.85}),Q=new oS(ne,ae),I=e.current;I&&(I.points&&(I.scene.remove(I.points),I.points.geometry.dispose(),I.points.material.dispose()),I.scene.add(Q),I.points=Q,b({vmin:oe,vmax:O}))},[]);bt.useEffect(()=>{M(!0)},[s,l,f,d]),bt.useEffect(()=>{U.current&&A(U.current,C.current,_)},[_,A]);const k=bt.useCallback(async(B,ie,ue,ne)=>{t.current&&t.current.abort();const oe=new AbortController;t.current=oe,M(!0),S(null);try{const O=`/api/predict?Re=${B}&U_in=${ie}&Ny=${ue}&Nz=${ue}`,ae=await fetch(O,{signal:oe.signal});if(!ae.ok)throw new Error(`HTTP ${ae.status}`);const Q=await ae.json();if(Q.error)throw new Error(Q.error);U.current=Q,A(Q,ne,G.current),N(Q.meta),F(Q.slice),M(!1)}catch(O){O.name!=="AbortError"&&(S(O.message),M(!1))}},[A]);bt.useEffect(()=>{const B=setTimeout(()=>k(s,l,f,d),350);return()=>clearTimeout(B)},[s,l,f,d,k]);const X=d==="vmag"?"Velocity magnitude (m/s)":"Pressure / U_in² (m²/s²)";return at.jsxs("div",{style:Nt.root,children:[at.jsxs("div",{style:Nt.panel,children:[at.jsx("div",{style:Nt.title,children:"FNO CFD Explorer"}),at.jsx("div",{style:Nt.subtitle,children:"Fourier Neural Operator · 3D Steady-State Flow"}),at.jsx("div",{style:Nt.section,children:"Physics"}),at.jsx(pu,{label:"Reynolds number  Re",value:s,min:100,max:1e3,step:10,onChange:o,format:B=>B.toFixed(0)}),at.jsx(pu,{label:"Inlet velocity  U_in",value:l,min:.1,max:1,step:.01,onChange:c,format:B=>`${B.toFixed(2)} m/s`}),at.jsx("div",{style:Nt.section,children:"Grid"}),at.jsx(pu,{label:"Resolution  Ny = Nz",value:f,min:9,max:29,step:2,onChange:h,format:B=>`${B} pts`}),x&&at.jsxs("div",{style:Nt.gridInfo,children:["Grid ",x.Nx," × ",x.Ny," × ",x.Nz,"  |  ",x.n_points.toLocaleString()," fluid pts"]}),at.jsx("div",{style:Nt.section,children:"View"}),at.jsx(pu,{label:"Wall clip  r/R",value:_,min:.2,max:1,step:.05,onChange:v,format:B=>B===1?"full pipe":`${(B*100).toFixed(0)}% R`}),at.jsx("div",{style:Nt.section,children:"Encode by"}),at.jsx("div",{style:Nt.toggleRow,children:["vmag","pressure"].map(B=>at.jsx("button",{onClick:()=>m(B),style:{...Nt.toggleBtn,...d===B?Nt.toggleBtnActive:{}},children:B==="vmag"?"Velocity":"Pressure"},B))}),x&&at.jsx(Rb,{vmin:D.vmin,vmax:D.vmax,label:X}),at.jsx("div",{style:Nt.hint,children:"Drag to orbit · Scroll to zoom · Ctrl+drag to pan"})]}),at.jsxs("div",{style:Nt.canvasArea,children:[at.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),V&&at.jsx(Mb,{sliceData:V,colorMode:d,colorFn:Id,vmin:D.vmin,vmax:D.vmax,loading:y}),y&&at.jsxs("div",{style:Nt.overlay,children:[at.jsx("div",{style:Nt.spinner}),at.jsx("div",{style:Nt.overlayText,children:"Running inference…"})]}),E&&at.jsxs("div",{style:Nt.errorBanner,children:["Error: ",E]})]})]})}const Nt={root:{display:"flex",width:"100%",height:"100%",fontFamily:"'Inter', 'Segoe UI', system-ui, sans-serif",color:"#e2e8f0"},panel:{width:280,minWidth:280,background:"rgba(10,12,20,0.92)",backdropFilter:"blur(8px)",borderRight:"1px solid rgba(255,255,255,0.08)",padding:"20px 16px",overflowY:"auto",display:"flex",flexDirection:"column",gap:4,zIndex:10},canvasArea:{flex:1,position:"relative",overflow:"hidden"},title:{fontSize:17,fontWeight:700,letterSpacing:"0.02em",color:"#7dd3fc",marginBottom:2},subtitle:{fontSize:11,color:"#64748b",marginBottom:14},section:{fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#475569",marginTop:14,marginBottom:4},sliderRow:{display:"flex",flexDirection:"column",gap:4,marginBottom:8},sliderLabel:{display:"flex",justifyContent:"space-between",fontSize:12,color:"#94a3b8"},sliderValue:{color:"#e2e8f0",fontVariantNumeric:"tabular-nums",fontWeight:600},range:{width:"100%",accentColor:"#38bdf8",cursor:"pointer"},gridInfo:{fontSize:11,color:"#475569",marginTop:-4,marginBottom:4},toggleRow:{display:"flex",gap:6,marginBottom:8},toggleBtn:{flex:1,padding:"5px 0",borderRadius:6,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#64748b",fontSize:12,cursor:"pointer",transition:"all 0.15s"},toggleBtnActive:{background:"rgba(56,189,248,0.15)",borderColor:"#38bdf8",color:"#38bdf8",fontWeight:600},colorbar:{marginTop:6,marginBottom:6},colorbarLabel:{fontSize:11,color:"#64748b",marginBottom:4},colorbarTrack:{display:"flex",flexDirection:"column",gap:2},colorbarGradient:{height:12,borderRadius:4},colorbarTicks:{display:"flex",justifyContent:"space-between",fontSize:10,color:"#475569",fontVariantNumeric:"tabular-nums"},hint:{marginTop:"auto",paddingTop:16,fontSize:11,color:"#334155",lineHeight:1.6},overlay:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(10,10,15,0.6)",backdropFilter:"blur(2px)",zIndex:5,gap:12,pointerEvents:"none"},overlayText:{fontSize:14,color:"#94a3b8",letterSpacing:"0.05em"},spinner:{width:36,height:36,border:"3px solid rgba(56,189,248,0.2)",borderTop:"3px solid #38bdf8",borderRadius:"50%",animation:"spin 0.9s linear infinite"},errorBanner:{position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",background:"rgba(220,38,38,0.9)",color:"#fff",padding:"8px 20px",borderRadius:8,fontSize:13,zIndex:20}},Q0=document.createElement("style");Q0.textContent="@keyframes spin { to { transform: rotate(360deg); } }";document.head.appendChild(Q0);zx.createRoot(document.getElementById("root")).render(at.jsx(bt.StrictMode,{children:at.jsx(Cb,{})}));
