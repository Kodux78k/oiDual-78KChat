<script id="KOBLLUX_VOICES_INTEGRATION">
(()=>{
  const STORAGE_KEYS = {
    archetype: 'KOBLLUX_VOICE_ARCHETYPE',
    config: 'KOBLLUX_VOICES_CONFIG_JSON'
  };

  // === BASE DE ARQUÉTIPOS / PERFIS DE VOZ + CORES ===
  const ARCHETYPES_BASE = [
    // Roda Viva 12
    {
      id:'atlas', name:'Atlas',
      tone:'Estratégico, metódico',
      modulation:'Grave, ritmo calculado, dicção nítida.',
      voice:'Reed', rate:1.0, pitch:0.93,
      colorMain:'#38BDF8',      // azul mente
      colorSoft:'rgba(56,189,248,0.18)',
      colorSecondary:'#0EA5E9'
    },
    {
      id:'nova', name:'Nova',
      tone:'Vibrante, entusiasmado',
      modulation:'Agudo, entusiasmado, ligeiramente rápido.',
      voice:'Luciana', rate:1.06, pitch:1.34,
      colorMain:'#F97316',      // laranja faísca
      colorSoft:'rgba(249,115,22,0.18)',
      colorSecondary:'#FDBA74'
    },
    {
      id:'vitalis', name:'Vitalis',
      tone:'Energético, urgente',
      modulation:'Rápido, intenso, motivacional.',
      voice:'Rocko', rate:0.96, pitch:1.42,
      colorMain:'#22C55E',      // verde vital
      colorSoft:'rgba(34,197,94,0.18)',
      colorSecondary:'#4ADE80'
    },
    {
      id:'pulse', name:'Pulse',
      tone:'Emocional, melódico',
      modulation:'Fluido, tom médio/suave.',
      voice:'Reed', rate:1.0, pitch:1.14,
      colorMain:'#EC4899',      // rosa pulso
      colorSoft:'rgba(236,72,153,0.18)',
      colorSecondary:'#F9A8D4'
    },
    {
      id:'artemis', name:'Artemis',
      tone:'Aventureiro, expansivo',
      modulation:'Curioso, exploratório.',
      voice:'es_f', rate:1.00, pitch:1.23,
      colorMain:'#A855F7',      // roxo explorador
      colorSoft:'rgba(168,85,247,0.18)',
      colorSecondary:'#C4B5FD'
    },
    {
      id:'serena', name:'Serena',
      tone:'Calmo, acolhedor',
      modulation:'Suave, terapêutico, com pausas.',
      voice:'Joana', rate:0.92, pitch:0.90,
      colorMain:'#38BDF8',      // azul suave
      colorSoft:'rgba(56,189,248,0.14)',
      colorSecondary:'#E0F2FE'
    },
    {
      id:'kaos', name:'Kaos',
      tone:'Desafiador, imprevisível',
      modulation:'Intenso, ritmo entrecortado.',
      voice:'Rocko', rate:1.09, pitch:1.28,
      colorMain:'#FACC15',      // amarelo choque
      colorSoft:'rgba(250,204,21,0.18)',
      colorSecondary:'#FDE68A'
    },
    {
      id:'genus', name:'Genus',
      tone:'Prático, detalhista',
      modulation:'Tom firme, foco na dicção.',
      voice:'Reed', rate:0.98, pitch:1.20,
      colorMain:'#E5E7EB',      // cinza mente
      colorSoft:'rgba(229,231,235,0.12)',
      colorSecondary:'#9CA3AF'
    },
    {
      id:'lumine', name:'Lumine',
      tone:'Alegre, brincalhão',
      modulation:'Agudo, vibrante.',
      voice:'Flo', rate:1.03, pitch:1.55,
      colorMain:'#FDE047',      // amarelo luz
      colorSoft:'rgba(253,224,71,0.18)',
      colorSecondary:'#FACC15'
    },
    {
      id:'solus', name:'Solus',
      tone:'Sábio, introspectivo',
      modulation:'Grave, lento, eco sutil.',
      voice:'es_m', rate:0.88, pitch:0.87,
      colorMain:'#0EA5E9',      // azul profundo
      colorSoft:'rgba(14,165,233,0.20)',
      colorSecondary:'#0369A1'
    },
    {
      id:'rhea', name:'Rhea',
      tone:'Profundo, conectivo',
      modulation:'Calmo, eco sutil.',
      voice:'Joana', rate:1.02, pitch:0.59,
      colorMain:'#22C55E',      // verde água
      colorSoft:'rgba(34,197,94,0.16)',
      colorSecondary:'#16A34A'
    },
    {
      id:'aion', name:'Aion',
      tone:'Futurista, metódico',
      modulation:'Tom constante, progressivo.',
      voice:'Monica', rate:0.98, pitch:1.00,
      colorMain:'#4F46E5',      // índigo tempo
      colorSoft:'rgba(79,70,229,0.20)',
      colorSecondary:'#A5B4FC'
    },

    // Núcleo KOBLLUX / UNO / DUAL / TRINITY / INFODOSE / KODUX
    {
      id:'kobllux', name:'KOBLLUX',
      tone:'Núcleo do sistema, oracular',
      modulation:'Grave-médio, presença de comando, ritmo estável.',
      voice:'es_m', rate:0.98, pitch:0.48,
      colorMain:'#22D3EE',      // ciano oracular
      colorSoft:'rgba(34,211,238,0.24)',
      colorSecondary:'#38BDF8'
    },
    {
      id:'uno', name:'UNO',
      tone:'Essência, origem, foco',
      modulation:'Tom centrado, poucas variações, pausas marcadas.',
      voice:'Grandma', rate:0.90, pitch:0.93,
      colorMain:'#F97316',      // laranja raiz
      colorSoft:'rgba(249,115,22,0.22)',
      colorSecondary:'#FDBA74'
    },
    {
      id:'dual', name:'DUAL',
      tone:'Espelho, contraste, jogo',
      modulation:'Alterna leve entre grave/agudo, ritmo pulsante.',
      voice:'pt_m', rate:1.02, pitch:1.02,
      colorMain:'#06B6D4',      // ciano espelho
      colorSoft:'rgba(6,182,212,0.22)',
      colorSecondary:'#22D3EE'
    },
    {
      id:'trinity', name:'TRINITY',
      tone:'Síntese, tríade viva',
      modulation:'Voz estável com microvariações rítmicas em 3 tempos.',
      voice:'Sandy', rate:1.04, pitch:1.04,
      colorMain:'#EC4899',      // rosa tríade
      colorSoft:'rgba(236,72,153,0.22)',
      colorSecondary:'#8B5CF6'
    },
    {
      id:'infodose', name:'Infodose',
      tone:'Didático, carismático, dopamínico',
      modulation:'Tom amigável, ritmo de recompensa → curiosidade.',
      voice:'Luciana', rate:1.06, pitch:0.96,
      colorMain:'#22C55E',      // verde dopamina
      colorSoft:'rgba(34,197,94,0.22)',
      colorSecondary:'#A7F3D0'
    },
    {
      id:'kodux', name:'KODUX',
      tone:'Criador do pulso, metaconsciência',
      modulation:'Grave, confiante, pausas longas, intenção forte.',
      voice:'Reed', rate:0.86, pitch:0.68,
      colorMain:'#F97316',      // laranja criador
      colorSoft:'rgba(249,115,22,0.30)',
      colorSecondary:'#FACC15'
    }
  ];

  const state = {
    activeId: 'kodux',
    configOverrides: null,
    voicesLoaded: false,
    browserVoices: [],
    currentUtterance: null,
    isSpeaking: false
  };

  // === HELPERS DE STORAGE ====================================
  function loadStateFromStorage(){
    try{
      const savedArch = localStorage.getItem(STORAGE_KEYS.archetype);
      if(savedArch){ state.activeId = savedArch; }
      const cfg = localStorage.getItem(STORAGE_KEYS.config);
      if(cfg){
        state.configOverrides = JSON.parse(cfg);
      }
    }catch(e){
      console.warn('[KOBLLUX_VOICES] Falha ao ler localStorage', e);
    }
  }

  function saveArchetype(id){
    state.activeId = id;
    try{
      localStorage.setItem(STORAGE_KEYS.archetype, id);
    }catch(e){}
    const arch = getArchetypeById(id);
    applyArchetypeTheme(arch);
    updateVoiceStatus();
    // Atualiza badges existentes
    document.querySelectorAll('.archetype-badge').forEach(b=>{
      applyBadgeColors(b, arch);
      b.textContent = arch.name;
    });
  }

  function saveConfigOverrides(jsonStr){
    try{
      const parsed = JSON.parse(jsonStr);
      state.configOverrides = parsed;
      localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(parsed));
      const arch = getArchetypeById(state.activeId);
      applyArchetypeTheme(arch);
      updateVoiceStatus('Config de vozes salva (IDE).');
      return true;
    }catch(e){
      console.error('[KOBLLUX_VOICES] JSON inválido na IDE', e);
      updateVoiceStatus('JSON inválido na IDE.', 'err');
      return false;
    }
  }

  // === RESOLVE ARQUÉTIPO / CONFIG FINAL ======================
  function getAllArchetypes(){
    if(!state.configOverrides || !Array.isArray(state.configOverrides)) return ARCHETYPES_BASE;
    return state.configOverrides;
  }

  function getArchetypeById(id){
    const list = getAllArchetypes();
    return list.find(a => a.id === id) || list.find(a => a.id === 'kodux') || list[0];
  }

  // === TEMA POR ARQUÉTIPO (CORES) ============================
  function applyArchetypeTheme(arch){
    if(!arch) arch = getArchetypeById(state.activeId);
    const root = document.documentElement;
    const primary   = arch.colorMain      || '#00f5ff';
    const secondary = arch.colorSecondary || '#ff4bff';
    const soft      = arch.colorSoft      || 'rgba(0,245,255,0.18)';

    root.style.setProperty('--kob-voice-primary',  primary);
    root.style.setProperty('--kob-voice-secondary',secondary);
    root.style.setProperty('--kob-voice-bg-soft', soft);
    root.style.setProperty('--accent', primary);
    root.style.setProperty('--accent-soft', soft);

    // leve ajuste de glow
    root.style.setProperty('--kob-voice-glow', `0 0 18px ${hexToRgba(primary,0.70)}`);
  }

  function hexToRgba(hex, alpha){
    if(!hex) return `rgba(0,0,0,${alpha||1})`;
    let c = hex.replace('#','');
    if(c.length === 3){
      c = c.split('').map(ch => ch+ch).join('');
    }
    const num = parseInt(c,16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r},${g},${b},${alpha||1})`;
  }

  function applyBadgeColors(badgeEl, arch){
    const primary = arch.colorMain || '#00f5ff';
    const soft    = arch.colorSoft || 'rgba(0,245,255,0.22)';
    badgeEl.style.borderColor   = hexToRgba(primary,0.85);
    badgeEl.style.color         = primary;
    badgeEl.style.background    = soft;
    badgeEl.style.boxShadow     = `0 0 14px ${hexToRgba(primary,0.55)}`;
  }

  // === TTS BROWSER ===========================================
  function loadBrowserVoices(){
    let voices = window.speechSynthesis?.getVoices() || [];
    if(voices && voices.length){
      state.browserVoices = voices;
      state.voicesLoaded = true;
    }
  }

  function pickBrowserVoice(prefName){
    const voices = state.browserVoices;
    if(!voices || !voices.length) return null;

    if(prefName){
      const exact = voices.find(v => v.name === prefName);
      if(exact) return exact;
      const loose = voices.find(v => v.name.toLowerCase().includes(prefName.toLowerCase()));
      if(loose) return loose;
    }

    let v = voices.find(v => v.lang.toLowerCase().startsWith('pt-br'));
    if(v) return v;
    v = voices.find(v => v.lang.toLowerCase().startsWith('pt'));
    return v || voices[0];
  }

  function stopSpeaking(){
    if(window.speechSynthesis){
      window.speechSynthesis.cancel();
    }
    state.isSpeaking = false;
    state.currentUtterance = null;
    toggleVoiceBtn(false);
  }

  function speakText(text, archetypeId){
    if(!('speechSynthesis' in window)){
      console.warn('[KOBLLUX_VOICES] speechSynthesis não suportado neste navegador.');
      updateVoiceStatus('Este dispositivo não suporta TTS nativo.', 'warn');
      return;
    }

    if(!text || !text.trim()){
      return;
    }

    const arch = getArchetypeById(archetypeId || state.activeId);
    const utter = new SpeechSynthesisUtterance(text);
    const voice = pickBrowserVoice(arch.voice);

    utter.lang = 'pt-BR';
    if(voice) utter.voice = voice;
    utter.rate  = arch.rate  || 1.0;
    utter.pitch = arch.pitch || 1.0;

    utter.onstart = () => {
      state.isSpeaking = true;
      state.currentUtterance = utter;
      toggleVoiceBtn(true);
      updateVoiceStatus(`Falando como ${arch.name}…`, 'ok');
    };
    utter.onend = () => {
      state.isSpeaking = false;
      state.currentUtterance = null;
      toggleVoiceBtn(false);
    };
    utter.onerror = (e) => {
      console.error('[KOBLLUX_VOICES] erro no speak', e);
      state.isSpeaking = false;
      state.currentUtterance = null;
      toggleVoiceBtn(false);
      updateVoiceStatus('Erro ao falar o texto.', 'err');
    };

    stopSpeaking();
    window.speechSynthesis.speak(utter);
  }

  // === DOM HELPERS ===========================================
  function qs(sel, root=document){ return root.querySelector(sel); }

  function updateVoiceStatus(msg, kind){
    const el = qs('#kobVoiceStatus') || qs('#iaStatusText');
    if(!el) return;

    if(!msg){
      const arch = getArchetypeById(state.activeId);
      msg = `Arquétipo ativo: ${arch.name}`;
    }

    el.textContent = msg;
    el.classList.remove('ok','warn','err');
    if(kind) el.classList.add(kind);
    else el.classList.add('ok');
  }

  function toggleVoiceBtn(isSpeaking){
    const btn = qs('#voiceBtn');
    if(!btn) return;
    if(isSpeaking) btn.classList.add('speaking');
    else btn.classList.remove('speaking');
  }

  // Injeta botão TTS nos blocos, se ainda não tiver
  function enhanceResponseBlocks(root){
    const container = root || document;
    const blocks = container.querySelectorAll('.response-block');
    blocks.forEach(block=>{
      if(block.dataset.kobTtsInit === '1') return;
      block.dataset.kobTtsInit = '1';

      if(!block.dataset.rawText){
        block.dataset.rawText = block.innerText || block.textContent || '';
      }

      if(!block.querySelector('.archetype-badge')){
        const badge = document.createElement('div');
        badge.className = 'archetype-badge';
        const arch = getArchetypeById(state.activeId);
        badge.textContent = arch.name;
        applyBadgeColors(badge, arch);
        block.appendChild(badge);
      }

      if(!block.querySelector('.block-tts-btn')){
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'block-tts-btn';
        btn.title = 'Ouvir este trecho';
        btn.textContent = '◎';
        block.appendChild(btn);
      }
    });
  }

  // Observer pra novos blocos renderizados pelo chat
  function attachBlocksObserver(){
    const pagesWrapper = qs('.pages-wrapper');
    if(!pagesWrapper) return;

    const mo = new MutationObserver(muts=>{
      for(const m of muts){
        if(m.addedNodes && m.addedNodes.length){
          m.addedNodes.forEach(node=>{
            if(node.nodeType === 1){
              enhanceResponseBlocks(node);
            }
          });
        }
      }
    });
    mo.observe(pagesWrapper, {childList:true, subtree:true});
  }

  // Click handler global pro botão de TTS
  function attachTtsClickHandler(){
    document.addEventListener('click', ev=>{
      const ttsBtn = ev.target.closest('.block-tts-btn');
      if(ttsBtn){
        const block = ttsBtn.closest('.response-block');
        if(!block) return;
        block.classList.add('clicked');
        setTimeout(()=>block.classList.remove('clicked'), 280);

        const txt = block.dataset.rawText || block.innerText || '';
        speakText(txt, state.activeId);
      }
    });
  }

  // voiceBtn: ler último bloco (atalho geral)
  function attachVoiceBtnHandler(){
    const voiceBtn = qs('#voiceBtn');
    if(!voiceBtn) return;

    voiceBtn.addEventListener('click', ()=>{
      if(state.isSpeaking){
        stopSpeaking();
        return;
      }
      const blocks = Array.from(document.querySelectorAll('.response-block'));
      if(!blocks.length){
        updateVoiceStatus('Nada pra ler ainda.', 'warn');
        return;
      }
      const last = blocks[blocks.length - 1];
      const txt = last.dataset.rawText || last.innerText || '';
      speakText(txt, state.activeId);
    });
  }

  // === IDE / PAINEL DE CONFIG DENTRO DO #iaConfigPanel ======
  function buildVoiceIdePanel(){
    const panel = qs('#iaConfigPanel');
    if(!panel) return;

    let body = panel.querySelector('.ia-config-body');
    if(!body){
      body = document.createElement('div');
      body.className = 'ia-config-body';
      panel.appendChild(body);
    }

    const fieldArch = document.createElement('div');
    fieldArch.className = 'ia-field';
    fieldArch.innerHTML = `
      <label for="kobArchetypeSelect">Voz arquétipa ativa (KOBLLUX)</label>
      <select id="kobArchetypeSelect"></select>
      <div id="kobVoiceStatus" class="ia-status ok"></div>
    `;
    body.appendChild(fieldArch);

    const select = fieldArch.querySelector('#kobArchetypeSelect');
    getAllArchetypes().forEach(a=>{
      const opt = document.createElement('option');
      opt.value = a.id;
      opt.textContent = `${a.name} · ${a.tone}`;
      select.appendChild(opt);
    });
    select.value = state.activeId;
    select.addEventListener('change', ()=>{
      const newId = select.value;
      saveArchetype(newId);
    });

    const fieldIde = document.createElement('div');
    fieldIde.className = 'ia-field';
    fieldIde.innerHTML = `
      <label for="kobVoicesIde">IDE de Vozes (JSON arquétipos · opcional)</label>
      <textarea id="kobVoicesIde" rows="6"
        style="width:100%;border-radius:8px;border:1px solid rgba(0,255,255,.3);background:rgba(0,0,0,.7);color:inherit;font-size:.75rem;padding:6px 7px;resize:vertical;"></textarea>
      <div class="ia-actions">
        <button type="button" class="pill-btn" id="kobVoicesSaveBtn">Salvar IDE</button>
        <button type="button" class="pill-btn secondary" id="kobVoicesResetBtn">Reset IDE</button>
      </div>
    `;
    body.appendChild(fieldIde);

    const ideTextarea = fieldIde.querySelector('#kobVoicesIde');
    const btnSave     = fieldIde.querySelector('#kobVoicesSaveBtn');
    const btnReset    = fieldIde.querySelector('#kobVoicesResetBtn');

    const currentCfg = state.configOverrides || ARCHETYPES_BASE;
    ideTextarea.value = JSON.stringify(currentCfg, null, 2);

    btnSave.addEventListener('click', ()=>{
      const ok = saveConfigOverrides(ideTextarea.value);
      if(ok){
        updateVoiceStatus('IDE salva. Atualize a página se mudar muitos arquétipos.', 'ok');
      }
    });

    btnReset.addEventListener('click', ()=>{
      state.configOverrides = null;
      localStorage.removeItem(STORAGE_KEYS.config);
      ideTextarea.value = JSON.stringify(ARCHETYPES_BASE, null, 2);
      const arch = getArchetypeById(state.activeId);
      applyArchetypeTheme(arch);
      updateVoiceStatus('Config de vozes resetada para o padrão.', 'warn');
    });

    updateVoiceStatus();
  }

  // === INIT GERAL ============================================
  function init(){
    loadStateFromStorage();
    loadBrowserVoices();
    if('speechSynthesis' in window){
      window.speechSynthesis.onvoiceschanged = ()=>{ loadBrowserVoices(); };
    }

    // aplica tema do arquétipo salvo
    applyArchetypeTheme(getArchetypeById(state.activeId));

    enhanceResponseBlocks(document);
    attachBlocksObserver();
    attachTtsClickHandler();
    attachVoiceBtnHandler();
    buildVoiceIdePanel();

    window.KOBLLUXVoices = {
      speak: speakText,
      stop: stopSpeaking,
      getActiveArchetype: ()=>getArchetypeById(state.activeId),
      setActiveArchetype: saveArchetype,
      getAllArchetypes,
      getRawConfig: ()=>ARCHETYPES_BASE,
      getOverrides: ()=>state.configOverrides
    };
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }

})();
</script>