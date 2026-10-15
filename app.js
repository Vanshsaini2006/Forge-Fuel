(() => {
  'use strict';
  const products = [
    {id:'whey-core',name:'Core Whey Blend',short:'Rich cocoa · 1 kg',category:'Protein',price:2499,mrp:3299,rating:4.8,reviews:124,tag:'BESTSELLER',tagType:'',art:'tub',main:'#687b3e',shadow:'#293222',dark:'#20261a',bg:'#dfe6d0',spot:'#c4d39c',serving:'25g protein*',flavours:['Rich cocoa','Vanilla oat'],description:'A fictional everyday whey concept designed for a clean, easy-to-browse product page. Product details and nutrition figures are placeholders for this project.',pills:['1 kg pack','Protein range','Rich cocoa']},
    {id:'whey-isolate',name:'Pure Isolate',short:'Vanilla oat · 1 kg',category:'Protein',price:3499,mrp:4299,rating:4.7,reviews:86,tag:'LEAN PICK',tagType:'badge-dark',art:'tub',main:'#4f6d83',shadow:'#263b4b',dark:'#1f2d39',bg:'#dce7ed',spot:'#b8d0dc',serving:'27g protein*',flavours:['Vanilla oat','Double cocoa'],description:'A fictional isolate-style product concept with a clear product overview, transparent pricing display and quick-view interaction.',pills:['1 kg pack','Isolate concept','Vanilla oat']},
    {id:'creatine-pure',name:'Pure Creatine',short:'Unflavoured · 250 g',category:'Creatine',price:799,mrp:999,rating:4.8,reviews:97,tag:'EVERYDAY ESSENTIAL',tagType:'',art:'jar',main:'#9cab48',shadow:'#35431f',dark:'#263018',bg:'#e7ebd0',spot:'#d3df91',serving:'5g per serving*',flavours:['Unflavoured'],description:'A fictional creatine product tile used to demonstrate category navigation, discounted pricing and adding products to a demo cart.',pills:['250 g jar','Unflavoured','Creatine range']},
    {id:'ignite-pre',name:'Ignite Pre-Workout',short:'Citrus charge · 200 g',category:'Pre-workout',price:899,mrp:1199,rating:4.6,reviews:74,tag:'TRAINING DAY',tagType:'badge-orange',art:'pouch',main:'#a64f32',shadow:'#54291f',dark:'#3d211b',bg:'#f2d9ca',spot:'#eab49a',serving:'Citrus flavour concept',flavours:['Citrus charge','Berry rush'],description:'A fictional pre-workout range item for the storefront prototype. The displayed name, price and product copy are illustrative, not verified product information.',pills:['200 g pouch','Pre-workout','Citrus charge']},
    {id:'plant-protein',name:'Plant Protein Blend',short:'Mocha almond · 750 g',category:'Protein',price:1999,mrp:2499,rating:4.5,reviews:63,tag:'PLANT-BASED',tagType:'badge-dark',art:'pouch',main:'#917b54',shadow:'#55452e',dark:'#3d3021',bg:'#e7dfd0',spot:'#cbb690',serving:'Plant protein concept',flavours:['Mocha almond','Vanilla cinnamon'],description:'A plant-based protein concept with a fictional flavour range. Use this card to demonstrate filtering and product-detail modals.',pills:['750 g pouch','Plant-based concept','Mocha almond']},
    {id:'daily-essentials',name:'Daily Essentials',short:'30 tablets · 1 month',category:'Wellness',price:499,mrp:699,rating:4.5,reviews:112,tag:'DAILY ROUTINE',tagType:'',art:'bottle',main:'#789f9f',shadow:'#2e5554',dark:'#233c3d',bg:'#d8e8e3',spot:'#a9cec2',serving:'Everyday wellness concept',flavours:['Standard pack'],description:'A fictional wellness category product created for layout demonstration. No medical benefit is claimed or implied by this prototype.',pills:['30 tablets','Wellness range','Daily essentials']},
    {id:'hydra-mix',name:'Hydra Electrolytes',short:'Lime mint · 20 serves',category:'Wellness',price:399,mrp:499,rating:4.6,reviews:51,tag:'HYDRATION',tagType:'',art:'pouch',main:'#59968a',shadow:'#284c45',dark:'#1d3934',bg:'#d6e9e3',spot:'#a8d5c9',serving:'Hydration mix concept',flavours:['Lime mint','Orange splash'],description:'A fictional hydration mix concept for a sports nutrition storefront. Product facts and ratings are placeholders.',pills:['20 serves concept','Lime mint','Hydration range']},
    {id:'protein-crunch',name:'Protein Crunch Bar',short:'Choco crisp · 60 g',category:'Fit foods',price:99,mrp:129,rating:4.7,reviews:138,tag:'GRAB & GO',tagType:'badge-orange',art:'bar',main:'#ab7b50',shadow:'#573b26',dark:'#38271e',bg:'#eee0d1',spot:'#d9b48a',serving:'20g protein*',flavours:['Choco crisp','Peanut cocoa'],description:'A fictional snack product created to show a different package shape within the product catalogue. Nutritional copy is illustrative only.',pills:['60 g bar','Fit foods','Choco crisp']},
    {id:'protein-oats',name:'High Protein Oats',short:'Cocoa crunch · 500 g',category:'Fit foods',price:349,mrp:449,rating:4.6,reviews:92,tag:'BREAKFAST FIX',tagType:'',art:'pouch',main:'#b49a53',shadow:'#625027',dark:'#493d21',bg:'#ede5d0',spot:'#dfca91',serving:'Breakfast food concept',flavours:['Cocoa crunch','Apple cinnamon'],description:'A fictional high-protein oats concept for the Fit Foods collection. It demonstrates category-specific merchandising and product details.',pills:['500 g pouch','Fit foods','Cocoa crunch']},
    {id:'nut-butter',name:'Peanut Butter',short:'Dark cocoa · 340 g',category:'Fit foods',price:299,mrp:399,rating:4.7,reviews:79,tag:'PANTRY STAPLE',tagType:'',art:'jar',main:'#b18050',shadow:'#644125',dark:'#48301d',bg:'#efe1cf',spot:'#ddbd98',serving:'Spread concept',flavours:['Dark cocoa','Creamy classic'],description:'A fictional pantry staple concept for the Fit Foods category. All product details and prices are examples for the website project.',pills:['340 g jar','Fit foods','Dark cocoa']},
    {id:'mass-builder',name:'Mass Builder',short:'Chocolate malt · 2 kg',category:'Protein',price:1799,mrp:2299,rating:4.4,reviews:47,tag:'BIGGER SERVINGS',tagType:'badge-dark',art:'tub',main:'#98764e',shadow:'#54402a',dark:'#3b2d20',bg:'#e9ded0',spot:'#d1b28c',serving:'High-calorie mix concept',flavours:['Chocolate malt','Cookies & cream'],description:'A fictional mass-gainer style product tile. The copy is for visual and interaction testing only, not a real formulation or usage recommendation.',pills:['2 kg tub','Protein range','Chocolate malt']},
    {id:'forge-shaker',name:'Daily Shaker',short:'Olive · 700 ml',category:'Accessories',price:349,mrp:499,rating:4.8,reviews:155,tag:'GYM BAG PICK',tagType:'',art:'shaker',main:'#afc36b',shadow:'#425124',dark:'#2a341b',bg:'#e5ebd5',spot:'#c9da96',serving:'700 ml capacity concept',flavours:['Olive','Smoke grey'],description:'A fictional shaker accessory included to make the sample store feel like a complete fitness retail experience.',pills:['700 ml concept','Accessories','Olive']}
  ];

  const els = {
    productGrid: document.getElementById('productGrid'), filterChips: document.getElementById('filterChips'), sortProducts: document.getElementById('sortProducts'),
    siteSearch: document.getElementById('siteSearch'), resultCount: document.getElementById('resultCount'), noResults: document.getElementById('noResults'),
    cartCount: document.getElementById('cartCount'), overlay: document.getElementById('overlay'), cartDrawer: document.getElementById('cartDrawer'), cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'), cartSummary: document.getElementById('cartSummary'), toast: document.getElementById('toast'), toastMessage: document.getElementById('toastMessage')
  };
  let activeCategory = 'all';
  let cart = readStore('forgeFuelCart', []);
  let wishlist = readStore('forgeFuelWishlist', []);
  let couponApplied = false;
  let currentModalProduct = null;
  let toastTimeout;
  let previousFocus = null;
  const money = value => new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(value).replace('₹','₹');
  function readStore(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(fallback) && Array.isArray(value) ? value : (value ?? fallback); } catch { return fallback; } }
  function saveStore(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* local storage may be disabled; the current session still works */ } }
  function productById(id) { return products.find(product => product.id === id); }
  function packMarkup(product, compact=false) {
    const title = product.id === 'whey-core' ? 'WHEY' : product.id === 'whey-isolate' ? 'ISOLATE' : product.id === 'creatine-pure' ? 'PURE<br>CREATINE' : product.id === 'ignite-pre' ? 'IGNITE' : product.id === 'plant-protein' ? 'PLANT<br>PROTEIN' : product.id === 'daily-essentials' ? 'DAILY' : product.id === 'hydra-mix' ? 'HYDRA' : product.id === 'protein-crunch' ? 'CRUNCH' : product.id === 'protein-oats' ? 'OATS' : product.id === 'nut-butter' ? 'NUT<br>BUTTER' : product.id === 'mass-builder' ? 'MASS<br>BUILDER' : product.id === 'forge-shaker' ? 'FF' : 'FUEL';
    const sub = product.id === 'whey-core' ? 'PROTEIN BLEND' : product.category.toUpperCase();
    return `<div class="pack ${product.art}" style="--pack-main:${product.main};--pack-shadow:${product.shadow};--pack-dark:${product.dark}"><div class="pack-lid"></div><div class="pack-label"><span class="pack-brand">FORGE<span>FUEL</span></span><span class="pack-rule"></span><strong class="pack-title">${title}</strong><span class="pack-subtitle">${sub}</span><span class="pack-protein">${product.id==='whey-core'?'25g':product.id==='whey-isolate'?'27g':product.id==='creatine-pure'?'PURE':product.id==='protein-crunch'?'20g':'FF'}<small>${product.id==='forge-shaker'?'DAILY CARRY':product.id==='creatine-pure'?'MONOHYDRATE':'PERFORMANCE SERIES'}</small></span></div></div>`;
  }
  function productArt(product, extraClass='') {
    return `<div class="product-visual ${extraClass}" style="--art-bg:${product.bg};--art-spot:${product.spot}"><div class="product-art-grid"></div>${packMarkup(product)}<button class="product-quick-view" data-quick-view="${product.id}">QUICK VIEW ↗</button><span class="sr-only">Illustrated ${product.name} packaging</span></div>`;
  }
  function filteredProducts() {
    const query = els.siteSearch.value.trim().toLowerCase();
    let found = products.filter(p => (activeCategory==='all' || p.category===activeCategory) && (!query || [p.name,p.category,p.short,p.description].join(' ').toLowerCase().includes(query)) && (!wishlistOnly || wishlist.includes(p.id)));
    const sort = els.sortProducts.value;
    if (sort === 'price-low') found.sort((a,b)=>a.price-b.price);
    if (sort === 'price-high') found.sort((a,b)=>b.price-a.price);
    if (sort === 'rating') found.sort((a,b)=>b.rating-a.rating);
    return found;
  }
  let wishlistOnly = false;
  function renderProducts() {
    const found = filteredProducts();
    els.productGrid.innerHTML = found.map(p => `
      <article class="product-card" data-product-card="${p.id}">
        <div class="product-badges">${p.tag?`<span class="product-badge ${p.tagType}">${p.tag}</span>`:''}</div>
        <button class="save-product ${wishlist.includes(p.id)?'saved':''}" data-save="${p.id}" aria-label="${wishlist.includes(p.id)?'Remove':'Save'} ${p.name}" aria-pressed="${wishlist.includes(p.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/></svg></button>
        ${productArt(p)}
        <div class="product-info"><div class="product-meta-top"><span class="product-category-label">${p.category}</span><span class="product-rating">★ ${p.rating.toFixed(1)} <span>(${p.reviews})</span></span></div>
          <h3 class="product-title" data-quick-view="${p.id}">${p.name}</h3><p class="product-subtitle">${p.short}</p>
          <div class="product-price-row"><strong class="product-price">${money(p.price)}</strong><del class="product-mrp">${money(p.mrp)}</del><span class="product-discount">${Math.round((1-p.price/p.mrp)*100)}% OFF</span></div><div class="product-unit">${p.serving}</div><button class="product-add" data-add="${p.id}">Add to bag <span>＋</span></button></div>
      </article>`).join('');
    els.resultCount.textContent = `${found.length} ${found.length===1?'product':'products'}${wishlistOnly?' · saved':''}`;
    els.productGrid.classList.toggle('hidden', found.length===0);
    els.noResults.classList.toggle('hidden', found.length!==0);
    document.querySelectorAll('[data-category]').forEach(button => {
      if (button.classList.contains('filter-chip')) button.classList.toggle('active', button.dataset.category===activeCategory && !wishlistOnly);
    });
    if (wishlistOnly) els.resultCount.textContent = `${found.length} saved ${found.length===1?'product':'products'}`;
  }
  function setCategory(category, scroll=true) {
    document.getElementById('shopTitle').innerHTML='SHOP <em>BESTSELLERS.</em>';
    activeCategory = category;
    wishlistOnly = false;
    renderProducts();
    if (scroll) document.getElementById('shop').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function addToCart(id, qty=1) {
    const product = productById(id); if (!product) return;
    const existing = cart.find(row=>row.id===id);
    if (existing) existing.qty += qty; else cart.push({id,qty});
    cart = cart.filter(row=>row.qty>0);
    saveStore('forgeFuelCart',cart); renderCart(); showToast(`${product.name} added to your bag.`);
  }
  function addStack() {
    const stackId = 'starter-stack';
    const stackProduct = {id:stackId,name:'The Starter Stack',short:'Whey + creatine + shaker',category:'Bundles',price:2999,mrp:3797,rating:4.9,reviews:41,art:'tub',main:'#687b3e',shadow:'#293222',dark:'#20261a',bg:'#e1e8d0',spot:'#c8d89b',serving:'Three-piece demo bundle'};
    window.__forgeStackProduct = stackProduct;
    const existing=cart.find(row=>row.id===stackId); if(existing)existing.qty++;else cart.push({id:stackId,qty:1});
    saveStore('forgeFuelCart',cart); renderCart(); showToast('The Starter Stack added to your bag.');
  }
  function getProduct(id) { return id==='starter-stack' ? window.__forgeStackProduct || {id:'starter-stack',name:'The Starter Stack',short:'Whey + creatine + shaker',category:'Bundles',price:2999,mrp:3797,rating:4.9,reviews:41,art:'tub',main:'#687b3e',shadow:'#293222',dark:'#20261a',bg:'#e1e8d0',spot:'#c8d89b',serving:'Three-piece demo bundle'} : productById(id); }
  function cartSubtotal() { return cart.reduce((sum,row)=>sum+(getProduct(row.id)?.price||0)*row.qty,0); }
  function renderCart() {
    const count=cart.reduce((sum,row)=>sum+row.qty,0), subtotal=cartSubtotal(), discount=couponApplied?Math.round(subtotal*.1):0, ship=subtotal===0?0:(subtotal>=1499?0:99), total=Math.max(0,subtotal-discount+ship);
    els.cartCount.textContent=count; els.cartCount.setAttribute('aria-label',`${count} items in cart`);
    els.cartEmpty.classList.toggle('hidden',count>0); els.cartSummary.classList.toggle('hidden',count===0);
    els.cartItems.innerHTML=cart.map(row=>{const p=getProduct(row.id);if(!p)return '';return `<article class="cart-item"><div class="cart-item-art" style="--art-bg:${p.bg||'#e4e8dc'};--art-spot:${p.spot||'#c9d89b'}">${packMarkup(p)}</div><div class="cart-item-info"><h3>${p.name}</h3><p>${p.short}</p><strong class="cart-item-price">${money(p.price)}</strong><div class="quantity-controls"><button data-qty="${row.id}" data-delta="-1" aria-label="Reduce quantity">−</button><span>${row.qty}</span><button data-qty="${row.id}" data-delta="1" aria-label="Increase quantity">＋</button></div></div><button class="remove-item" data-remove="${row.id}" aria-label="Remove ${p.name}">×</button></article>`;}).join('');
    const remaining=Math.max(1499-subtotal,0); document.getElementById('shippingMessage').textContent=subtotal>=1499?'Free shipping unlocked. Nice work.':subtotal===0?"You're on your way to free shipping.":'Add a little more to unlock free shipping.';
    document.getElementById('shippingRemaining').textContent=subtotal>=1499?'Unlocked':`${money(remaining)} away`; document.getElementById('shippingProgressBar').style.width=`${Math.min(100,subtotal/1499*100)}%`;
    document.getElementById('cartSubtotal').textContent=money(subtotal); document.getElementById('cartShipping').textContent=subtotal===0?'—':ship===0?'FREE':money(ship);
    document.getElementById('discountLine').classList.toggle('hidden',!couponApplied||subtotal===0);document.getElementById('cartDiscount').textContent=`−${money(discount)}`;document.getElementById('cartTotal').textContent=money(total);document.getElementById('checkoutTotal').textContent=money(total);
    document.getElementById('applyCoupon').textContent=couponApplied?'Applied ✓':'Apply'; document.getElementById('couponNote').innerHTML=couponApplied?'FORGE10 applied — 10% demo savings.':'Try the demo code <b>FORGE10</b> for 10% off.';
  }
  function openCart() { previousFocus=document.activeElement; els.overlay.classList.add('visible');els.cartDrawer.classList.add('open');els.cartDrawer.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');document.querySelector('#cartDrawer .close-overlay').focus(); }
  function closeOverlay() { els.overlay.classList.remove('visible');els.cartDrawer.classList.remove('open');els.cartDrawer.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');closeModals(); if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus(); }
  function openModal(modal) { previousFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');els.overlay.classList.add('visible');document.body.classList.add('no-scroll');const focusTarget=modal.querySelector('button,input');if(focusTarget)focusTarget.focus(); }
  function closeModals() { document.querySelectorAll('.modal.open').forEach(modal=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}); }
  function showProduct(id) {
    const p=getProduct(id);if(!p)return;currentModalProduct=id;
    const art=document.getElementById('modalProductArt');art.style.setProperty('--art-bg',p.bg);art.style.setProperty('--art-spot',p.spot);art.innerHTML=packMarkup(p);
    document.getElementById('modalProductCategory').innerHTML=`<span class="eyebrow-line"></span> ${p.category.toUpperCase()} / PRODUCT DETAIL`;
    document.getElementById('modalProductTitle').textContent=p.name;document.getElementById('modalProductRating').innerHTML=`★★★★★ <span>${p.rating.toFixed(1)} (${p.reviews} demo ratings)</span>`;document.getElementById('modalProductDescription').textContent=p.description||'A fictional bundle created for this storefront prototype.';document.getElementById('modalProductPrice').textContent=money(p.price);document.getElementById('modalProductMrp').textContent=money(p.mrp);document.getElementById('modalProductDiscount').textContent=`${Math.round((1-p.price/p.mrp)*100)}% OFF`;document.getElementById('modalProductPills').innerHTML=(p.pills||['Demo bundle','Illustrative price']).map(t=>`<span>${t}</span>`).join('');openModal(document.getElementById('productModal'));
  }
  function showToast(message) { clearTimeout(toastTimeout);els.toastMessage.textContent=message;els.toast.classList.add('show');toastTimeout=setTimeout(()=>els.toast.classList.remove('show'),3200); }
  function toggleWishlist(id) { if(wishlist.includes(id)){wishlist=wishlist.filter(value=>value!==id);showToast('Removed from saved products.')}else{wishlist.push(id);showToast('Saved for later.')}saveStore('forgeFuelWishlist',wishlist);renderProducts(); }

  // Product catalog interaction delegation.
  document.addEventListener('click', event => {
    const add=event.target.closest('[data-add]');if(add){addToCart(add.dataset.add);return;}
    const quick=event.target.closest('[data-quick-view]');if(quick){showProduct(quick.dataset.quickView);return;}
    const save=event.target.closest('[data-save]');if(save){toggleWishlist(save.dataset.save);return;}
    const category=event.target.closest('[data-category]');if(category){setCategory(category.dataset.category, !category.classList.contains('filter-chip'));return;}
    const nav=event.target.closest('[data-nav-category]');if(nav){setCategory(nav.dataset.navCategory);document.getElementById('mainNav').classList.remove('open');document.getElementById('mobileMenuButton').setAttribute('aria-expanded','false');return;}
    const footerCategory=event.target.closest('[data-footer-category]');if(footerCategory){setCategory(footerCategory.dataset.footerCategory);return;}
    const qty=event.target.closest('[data-qty]');if(qty){const row=cart.find(row=>row.id===qty.dataset.qty);if(row){row.qty+=Number(qty.dataset.delta);if(row.qty<=0)cart=cart.filter(item=>item.id!==qty.dataset.qty);saveStore('forgeFuelCart',cart);renderCart()}return;}
    const remove=event.target.closest('[data-remove]');if(remove){cart=cart.filter(row=>row.id!==remove.dataset.remove);saveStore('forgeFuelCart',cart);renderCart();return;}
    if(event.target.closest('[data-scroll-shop]')){closeOverlay();document.getElementById('shop').scrollIntoView({behavior:'smooth'});return;}
    if(event.target.closest('[data-close-modal]')){closeOverlay();return;}
  });
  els.filterChips.addEventListener('click', event=>{const chip=event.target.closest('.filter-chip');if(chip)setCategory(chip.dataset.category,false)});
  els.siteSearch.addEventListener('input',()=>{wishlistOnly=false;document.getElementById('shopTitle').innerHTML='SHOP <em>BESTSELLERS.</em>';renderProducts()});
  els.sortProducts.addEventListener('change',renderProducts);
  document.getElementById('openCartButton').addEventListener('click',openCart);
  document.querySelectorAll('.close-overlay').forEach(button=>button.addEventListener('click',()=>{if(button.hasAttribute('data-scroll-shop')){closeOverlay();document.getElementById('shop').scrollIntoView({behavior:'smooth'})}else closeOverlay()}));
  els.overlay.addEventListener('click',closeOverlay);
  document.getElementById('addStackButton').addEventListener('click',addStack);
  document.getElementById('wishlistShortcut').addEventListener('click',()=>{wishlistOnly=true;activeCategory='all';els.siteSearch.value='';renderProducts();document.getElementById('shopTitle').innerHTML='SAVED <em>FOR LATER.</em>';document.getElementById('shop').scrollIntoView({behavior:'smooth'})});
  document.getElementById('clearFilters').addEventListener('click',()=>{activeCategory='all';wishlistOnly=false;els.siteSearch.value='';els.sortProducts.value='featured';document.getElementById('shopTitle').innerHTML='SHOP <em>BESTSELLERS.</em>';renderProducts()});
  document.getElementById('applyCoupon').addEventListener('click',()=>{const code=document.getElementById('couponInput').value.trim().toUpperCase();if(code==='FORGE10'){couponApplied=true;renderCart();showToast('FORGE10 applied — 10% off your demo basket.')}else{couponApplied=false;renderCart();document.getElementById('couponNote').textContent='That code did not match. Try FORGE10 for the demo.';showToast('Promo code not recognised.')}});
  document.getElementById('checkoutButton').addEventListener('click',()=>{if(cart.length===0){showToast('Your bag is empty.');return;}closeModals();openModal(document.getElementById('checkoutModal'));document.getElementById('checkoutSuccess').classList.add('hidden');document.getElementById('checkoutForm').classList.remove('hidden')});
  document.getElementById('checkoutForm').addEventListener('submit',event=>{event.preventDefault();document.getElementById('checkoutForm').classList.add('hidden');document.getElementById('checkoutSuccess').classList.remove('hidden');cart=[];couponApplied=false;saveStore('forgeFuelCart',cart);renderCart();});
  document.getElementById('finishCheckout').addEventListener('click',closeOverlay);
  document.getElementById('newsletterForm').addEventListener('submit',event=>{event.preventDefault();const email=document.getElementById('newsletterEmail').value.trim();document.getElementById('newsletterMessage').textContent=`Thanks — ${email} is added to this demo's local confirmation state. No email was sent.`;event.target.reset();});
  document.querySelectorAll('[data-goal]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-goal]').forEach(other=>other.classList.toggle('active',other===button));const goal=button.dataset.goal;const map={muscle:{category:'Protein',note:'Showing protein-focused products. This is a catalogue filter, not personal nutrition advice.'},performance:{category:'Creatine',note:'Showing creatine products; use the category chips to explore pre-workout too. This is not a personalised recommendation.'},everyday:{category:'Fit foods',note:'Showing fit foods. Explore wellness separately and check real labels before making nutrition decisions.'}};const chosen=map[goal];document.getElementById('goalNote').textContent=chosen.note;setCategory(chosen.category,true)}));
  document.getElementById('mobileMenuButton').addEventListener('click',()=>{const nav=document.getElementById('mainNav');const isOpen=nav.classList.toggle('open');document.getElementById('mobileMenuButton').setAttribute('aria-expanded',String(isOpen))});
  document.querySelectorAll('#mainNav a').forEach(link=>link.addEventListener('click',()=>{document.getElementById('mainNav').classList.remove('open');document.getElementById('mobileMenuButton').setAttribute('aria-expanded','false')}));
  // On small screens, tap the search icon to expand the search field.
  const searchBox=document.querySelector('.search-box');searchBox.querySelector('svg').addEventListener('click',()=>{if(window.matchMedia('(max-width: 820px)').matches){searchBox.classList.toggle('expanded');if(searchBox.classList.contains('expanded'))els.siteSearch.focus()}});
  document.getElementById('toastClose').addEventListener('click',()=>{clearTimeout(toastTimeout);els.toast.classList.remove('show')});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeOverlay();document.getElementById('mainNav').classList.remove('open');document.getElementById('mobileMenuButton').setAttribute('aria-expanded','false')}});
  // Keep pack illustrations readable in cart / modal and restore the title after wishlist view is reset.
  renderProducts();renderCart();
  const originalTitle=document.getElementById('shopTitle');
  document.querySelectorAll('[data-nav-category], [data-footer-category]').forEach(link=>link.addEventListener('click',()=>{originalTitle.innerHTML='SHOP <em>BESTSELLERS.</em>'}));
})();
