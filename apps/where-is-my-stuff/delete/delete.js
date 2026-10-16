'use strict';
// Browser credentials live only in this closure. No analytics, storage, URL tokens or enrollment.
(() => {
  const text = {
    ko: {title:'가족 프로필 삭제',intro:'앱을 설치하지 않고도, 본인 Google 계정으로 연결된 가족 서비스의 프로필을 삭제할 수 있습니다.',support:'지원 및 데이터 삭제 안내',connectTitle:'1. 가족 서비스 확인',connectionLabel:'가족 연결 코드 또는 기존 초대 코드',connectionHelp:'연결 정보를 모르면 가족 소유자에게 요청하세요. 만료된 초대 코드도 서비스 주소 확인에 사용할 수 있으며, 새 가족 가입은 하지 않습니다.',connect:'서비스 확인',destination:'아래 로그인 정보는 Google과 위 가족 서비스에만 전달됩니다. 개발자에게 삭제 권한을 주는 작업이 아닙니다.',loginHelp:'기존에 참여했던 Google 계정을 선택하세요. Google 화면에는 계정 정보가 표시될 수 있습니다.',scopeTitle:'2. 삭제 범위 확인',ownerWarning:'소유자라면 본인 소유의 모든 가족 공간과 공유 자료가 다른 가족에게도 영구 삭제됩니다.',modeLabel:'다른 소유자의 공간에 내가 작성한 물건',keep:'물건·사진 유지, 내 프로필과 연결 해제',remove:'내가 작성한 물건·사진도 삭제',preview:'삭제 범위 확인',exclusions:'Google 계정, 개인 Drive 백업, 기기 안의 로컬 자료, 다른 가족 서비스와 타인이 받은 사본은 삭제하지 않습니다. 작성자 기록이 없는 과거 자료는 추측하여 지우지 않습니다.',backupLink:'먼저 필요한 자료를 별도 백업하세요. 백업·로컬 자료 안내',backupAck:'백업 안내와 삭제 범위를 확인했습니다.',confirmationLabel:'영구 삭제하려면 DELETE를 입력하세요.',delete:'확인한 범위 영구 삭제',reset:'로그인 정보 지우고 처음으로',storage:'로그인 토큰과 삭제 확인 정보는 이 페이지의 메모리에서만 사용하며, 페이지를 새로 열면 다시 로그인해야 합니다. 연결할 수 없거나 삭제 중 중단되면 완료로 간주하지 않습니다.',invalid:'연결 코드를 확인해 주세요. 비밀번호나 인증 토큰을 입력하지 마세요.',unsupported:'이 가족 서비스는 외부 프로필 삭제를 아직 지원하지 않습니다. 소유자에게 서버 업데이트를 요청하세요.',connecting:'서비스를 확인하고 있어요.',login:'본인 Google 계정으로 로그인해 주세요.',signedIn:'로그인됐어요. 삭제 범위를 먼저 확인해 주세요.',checking:'본인의 삭제 범위를 확인하고 있어요.',noProfile:'이 서비스에는 해당 계정의 활성 가족 프로필이 없습니다. 새 프로필을 만들거나 삭제를 실행하지 않았습니다.',expired:'인증 또는 삭제 확인이 만료됐어요. 다시 로그인하거나 삭제 범위를 새로 확인해 주세요.',conflict:'자료가 변경됐어요. 삭제 범위를 새로 확인해 주세요.',unavailable:'서비스 응답을 확인하지 못했습니다. 삭제 완료로 간주하지 마세요. 연결을 확인한 뒤 삭제 범위를 다시 조회하세요.',gisError:'Google 로그인 화면을 불러오지 못했습니다. 네트워크와 이 사이트의 Google 로그인 설정을 확인하세요.',review:'아래 범위와 백업 안내를 확인한 뒤 직접 삭제를 확인해 주세요.',deleting:'삭제를 요청하고 있어요. 창을 닫지 마세요.',incomplete:'삭제가 진행 중입니다. 같은 계정과 같은 공유 자료 옵션으로 범위를 다시 확인한 뒤 이어서 처리하세요.',done:'이 가족 서비스의 프로필 삭제가 완료됐습니다. 다른 서비스·개인 백업·로컬 자료와 외부 사본은 별도입니다.',ready:'연결 정보를 입력해 주세요.',counts:(a,b,c,d)=>`내 소유 공간 ${a}개 · 그 안의 물건 ${b}개\n다른 공간 참여 ${c}건 · 내가 작성한 물건 ${d}개`},
    en: {title:'Delete family profile',intro:'Delete your profile from your connected family service using your own Google account, without installing the app.',support:'Support and data deletion',connectTitle:'1. Check your family service',connectionLabel:'Family setup code or an existing invitation code',connectionHelp:'Ask your family owner if you do not have the connection details. An expired invitation can still identify the service. This does not join a family.',connect:'Check service',destination:'Your sign-in is sent only to Google and the family service above. This does not give the app developer deletion access.',loginHelp:'Choose the Google account you previously used. Google may display your account information.',scopeTitle:'2. Review deletion scope',ownerWarning:'If you own family spaces, all your owned spaces and shared records are permanently deleted for other members too.',modeLabel:'Items you authored in spaces owned by others',keep:'Keep items/photos and remove my profile attribution',remove:'Delete my authored items/photos too',preview:'Review deletion scope',exclusions:'This does not delete your Google account, personal Drive backups, local device records, other family services or copies others downloaded. Legacy unattributed records are not guessed.',backupLink:'Make an independent backup first. Backup/local-data instructions',backupAck:'I reviewed backup guidance and the deletion scope.',confirmationLabel:'Type DELETE to confirm permanent deletion.',delete:'Permanently delete the reviewed scope',reset:'Clear sign-in and start over',storage:'Sign-in tokens and deletion confirmation stay only in this page’s memory. Reopening requires sign-in again. Connection failures or interrupted deletion are not completion.',invalid:'Check the connection code. Do not enter passwords or authentication tokens.',unsupported:'This family service does not support external profile deletion yet. Ask its owner to update the server.',connecting:'Checking service.',login:'Sign in with your own Google account.',signedIn:'Signed in. Review your deletion scope first.',checking:'Checking your deletion scope.',noProfile:'This account has no active family profile on this service. No new profile was created and no deletion was performed.',expired:'Authentication or confirmation expired. Sign in again or refresh the deletion scope.',conflict:'Data changed. Review the deletion scope again.',unavailable:'The service response could not be verified. Do not assume deletion completed. Check connectivity and review the scope again.',gisError:'Google sign-in could not load. Check connectivity and this site’s Google sign-in configuration.',review:'Review the scope and backup guidance, then explicitly confirm deletion.',deleting:'Requesting deletion. Keep this page open.',incomplete:'Deletion is in progress. Use the same account and shared-data option, review the scope again, then continue.',done:'Your profile was deleted from this family service. Other services, personal backups, local records and external copies are separate.',ready:'Enter your connection details.',counts:(a,b,c,d)=>`Owned spaces: ${a} · Items in them: ${b}\nOther memberships: ${c} · Authored items: ${d}`}
  };
  const el=id=>document.getElementById(id);
  let lang='ko', connection=null, credential=null, nonce=null, preview=null, busy=false, message='ready', googleLoading=null;
  const show=key=>{message=key;el('status').textContent=text[lang][key];};
  const random=()=>btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  function invalidate(){preview=null;el('summary').hidden=true;el('backup').checked=false;el('confirmation').value='';el('delete').disabled=true;}
  function enabled(){el('delete').disabled=busy||!preview||preview.expires<=Date.now()||!el('backup').checked||el('confirmation').value!=='DELETE';}
  function renderCounts(){if(preview)el('counts').textContent=text[lang].counts(preview.ownedSpaces,preview.ownedItems,preview.memberships,preview.authoredItems);}
  function language(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(n=>{n.textContent=text[lang][n.dataset.i18n];});el('language').textContent=lang==='ko'?'English':'한국어';show(message);renderCounts();}
  function reset(){connection=null;credential=null;nonce=null;busy=false;invalidate();el('connection').value='';el('connection').disabled=false;el('connect').disabled=false;el('mode').disabled=false;el('options').hidden=true;el('authority').textContent='';el('destination').hidden=true;el('loginHelp').hidden=true;el('sign-in').replaceChildren();el('reset').hidden=true;show('ready');}
  function parseCode(value){
    if(typeof value!=='string'||value.length>4000||!/^THOR006(?:SETUP)?:[A-Za-z0-9_-]+={0,2}$/.test(value))throw Error('invalid');
    const encoded=value.split(':')[1].replace(/-/g,'+').replace(/_/g,'/');
    const c=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(atob(encoded+'='.repeat((4-encoded.length%4)%4)),x=>x.charCodeAt(0))));
    if(typeof c.endpoint!=='string'||!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(c.endpoint)||typeof c.clientId!=='string'||!/^\d+-[A-Za-z0-9_-]+\.apps\.googleusercontent\.com$/.test(c.clientId))throw Error('invalid');
    // Deliberately discard invitation secrets, space IDs and all other fields.
    return {endpoint:c.endpoint,clientId:c.clientId};
  }
  async function readResponse(url, options){
    const controller=new AbortController(), timer=setTimeout(()=>controller.abort(),45000);
    try {
      const response=await fetch(url,{...options,credentials:'omit',referrerPolicy:'no-referrer',cache:'no-store',redirect:'follow',signal:controller.signal});
      const target=new URL(response.url);
      if(!(target.href===url||(target.origin==='https://script.googleusercontent.com'&&target.pathname==='/macros/echo'))||!response.ok)throw Error('unavailable');
      const raw=await response.text();if(raw.length>32768)throw Error('unavailable');return JSON.parse(raw);
    } finally{clearTimeout(timer);}
  }
  async function request(action,data){
    if(!connection||!credential||!nonce)throw Error('expired');
    const r=await readResponse(connection.endpoint,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({protocol:1,action,idToken:credential,nonce,data})});
    if(!r||r.ok!==true){const code=r&&r.code;throw Error(['AUTH','CONFIRM'].includes(code)?'expired':code==='CONFLICT'?'conflict':code==='DELETE_INCOMPLETE'?'incomplete':'unavailable');}
    if(!r.data||typeof r.data.profileExists!=='boolean')throw Error('unavailable');return r.data;
  }
  function googleLibrary(){
    if(googleLoading)return googleLoading;
    googleLoading=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://accounts.google.com/gsi/client';script.async=true;script.onload=()=>resolve();script.onerror=()=>{googleLoading=null;script.remove();reject(Error('gisError'));};document.head.append(script);});return googleLoading;
  }
  el('connect').addEventListener('click',async()=>{
    if(busy)return;let next;try{next=parseCode(el('connection').value.trim());}catch(_){show('invalid');return;}
    busy=true;el('connect').disabled=true;show('connecting');
    try {
      const health=await readResponse(next.endpoint,{method:'GET'});
      if(!health||health.protocol!==1||health.app!=='Thor006'||!Array.isArray(health.features)||!health.features.includes('web-profile-delete-v1'))throw Error('unsupported');
      connection=next;el('connection').value='';el('connection').disabled=true;el('authority').textContent=next.endpoint;el('destination').hidden=false;el('reset').hidden=false;
      await googleLibrary();nonce=random();
      google.accounts.id.initialize({client_id:next.clientId,nonce,auto_select:false,callback:response=>{
        if(busy||!connection||!response||typeof response.credential!=='string')return;
        credential=response.credential;invalidate();el('sign-in').replaceChildren();el('options').hidden=false;show('signedIn');
      }});
      google.accounts.id.renderButton(el('sign-in'),{type:'standard',theme:'outline',size:'large',text:'signin_with',width:Math.max(200,Math.min(280,el('sign-in').clientWidth||280))});el('loginHelp').hidden=false;show('login');
    } catch(error){show(Object.prototype.hasOwnProperty.call(text[lang],error.message)?error.message:'unavailable');el('connect').disabled=false;}
    finally{busy=false;}
  });
  el('preview').addEventListener('click',async()=>{
    if(busy)return;invalidate();busy=true;el('preview').disabled=true;el('mode').disabled=true;show('checking');
    try {
      const r=await request('webProfilePreview',{sharedItems:el('mode').value});
      if(!r.profileExists){credential=null;el('options').hidden=true;show('noProfile');return;}
      if(!['ownedSpaces','ownedItems','memberships','authoredItems'].every(k=>Number.isSafeInteger(r[k])&&r[k]>=0)||typeof r.token!=='string'||!/^[a-f0-9]{64}$/.test(r.token)||!Number.isSafeInteger(r.expires)||r.expires<=Date.now())throw Error('unavailable');
      preview=r;renderCounts();el('summary').hidden=false;show(r.inProgress?'incomplete':'review');
    }catch(error){show(Object.prototype.hasOwnProperty.call(text[lang],error.message)?error.message:'unavailable');}
    finally{busy=false;el('preview').disabled=false;el('mode').disabled=false;enabled();}
  });
  el('delete').addEventListener('click',async()=>{
    enabled();if(el('delete').disabled)return;
    const confirmation=preview;invalidate();busy=true;el('preview').disabled=true;el('mode').disabled=true;show('deleting');
    try {
      const r=await request('webProfileDelete',{sharedItems:el('mode').value,token:confirmation.token,backupAcknowledged:true,confirmation:'DELETE'});
      if(!r.profileExists){credential=null;el('options').hidden=true;show('noProfile');}
      else if(r.deleted===true){credential=null;el('options').hidden=true;show('done');}
      else if(r.inProgress===true)show('incomplete');else throw Error('unavailable');
    }catch(error){show(Object.prototype.hasOwnProperty.call(text[lang],error.message)?error.message:'unavailable');}
    finally{busy=false;el('preview').disabled=false;el('mode').disabled=false;enabled();}
  });
  el('mode').addEventListener('change',invalidate);el('backup').addEventListener('change',enabled);el('confirmation').addEventListener('input',enabled);
  el('reset').addEventListener('click',()=>{if(!busy)reset();});el('language').addEventListener('click',()=>{lang=lang==='ko'?'en':'ko';language();});
  window.addEventListener('pagehide',()=>{credential=null;nonce=null;preview=null;connection=null;el('connection').value='';el('confirmation').value='';});
  reset();
})();
