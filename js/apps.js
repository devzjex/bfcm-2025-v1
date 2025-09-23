const appsData = [
  //Marketing
  {
    id: 1,
    title: 'Omega Facebook Pixel',
    category: 'Marketing',
    nameApp: 'Facebook Pixel Meta Feed',
    icon: 'FBPX.webp',
    description:
      'Achieve expert-level tracking with Facebook Pixel and Conversion API to capture every signal, understand buyer behavior, and retarget ads with advanced data.',
    review: '4.8 (845 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'BFCM_2025p1ds2',
    href: '1',
    type: 'Marketing',
  },
  {
    id: 2,
    title: 'TagFly',
    category: 'Marketing',
    nameApp: 'Google Ads, Tag Manager',
    icon: 'tagfly.webp',
    description:
      'Full conversion tracking for Google Ads, GA4 (Google Analytics) and Facebook Ads in minutes with simple Google Tag Manager (GTM) set up.',
    review: '4.8 (115 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: '50% OFF all plans for 1 month',
    price: null,
    promoCode: 'TF_BFCM2025',
    href: '1',
    type: 'Marketing',
  },
  {
    id: 3,
    title: 'Trakpilot',
    category: 'Marketing',
    nameApp: 'Google Ads Tracking & Ga4',
    icon: 'Trakpilot.webp',
    description:
      'Easy Google Ads, GA4 tracking, Ads Remarketing via Google Tag Manager (GTM) and Server-side tracking in a few clicks - no coding.',
    review: '4.6 (76 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: null,
    price: 'Free plan',
    promoCode: null,
    href: '1',
    type: 'Marketing',
  },
  {
    id: 4,
    title: 'Tikshop',
    category: 'Marketing',
    nameApp: 'TikShop: Omega Pixel & Catalog',
    icon: 'tiktok.webp',
    description:
      'Omega gives you advanced tracking with multi pixel support and Events API for unmatched accuracy, helping you overcome iOS 14.5 limits and wasted ad spend.',
    review: '4.9 (152 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'TTBFCM_2025_20',
    href: '1',
    type: 'Marketing',
  },
  {
    id: 5,
    title: 'Consentik',
    category: 'Marketing',
    nameApp: 'GDPR & CCPA Cookie Banner',
    icon: 'consentik.webp',
    description:
      'Consentik GDPR Cookie Banner helps you manage cookies and cookie consent to comply with GDPR, CCPA/CPA, LGPD, and more.',
    review: '4.9 (259 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'CSTBFCM20',
    href: '1',
    type: 'Marketing',
  },
  {
    id: 6,
    title: 'Consentik',
    category: 'Marketing',
    nameApp: 'GDPR & CCPA Cookie Banner',
    icon: 'consentik.webp',
    description:
      'Wix platform: easily manage cookies and cookie consent to comply with GDPR, CCPA/CPA, LGPD, and more.',
    review: '5.0 (49 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: '40% OFF all plans in 3 months',
    price: null,
    promoCode: '04A6BFCM40',
    href: '1',
    type: 'Marketing',
  },
  {
    id: 7,
    title: 'Feednexa',
    category: 'Marketing',
    nameApp: 'Google Shopping Feed',
    icon: 'feednexa.webp',
    description:
      'FeedNexa helps sync accurate product data to Google Merchant Center, including GTIN, MPN, and other required attributes. Quickly correct shopping feed errors with bulk edit.',
    review: '4.9 (99 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan',
    promoCode: null,
    href: '1',
    type: 'Marketing',
  },
  {
    id: 8,
    title: 'Omega Pinterest Pixel',
    category: 'Marketing',
    nameApp: 'Multi Pinterest Pixels',
    icon: 'multi-pixels.webp',
    description:
      'Install multiple Pinterest pixels/tags on your store with a few clicks. Conversion data is passed back to Pinterest immediately once you are all set.',
    review: '5.0 (29 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: null,
    price: 'Free plan. Paid plan starts at $9.95/month',
    promoCode: null,
    href: '1',
    type: 'Marketing',
  },
  {
    id: 9,
    title: 'Omega Snapchat',
    category: 'Marketing',
    nameApp: 'Multi Snapchat Pixels',
    icon: 'multi-snap-chat.webp',
    description:
      'Our server-side tracking solution protects your store from data loss due to browser limitations, thus bringing about a more thorough data collection.',
    review: '5.0 (7 reviews)',
    installs: '369 stores',
    includes: null,
    topStoreApps: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    discount: null,
    price: 'Free plan. Paid plan starts at $9.95/month',
    promoCode: null,
    href: '1',
    type: 'Marketing',
  },
  //Sale & Conversion Optimization
  {
    id: 10,
    title: 'Pareto Quantity Breaks & Discounts',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'parento.webp',
    description:
      'Turn one-time shoppers into high-value buyers with Pareto - the all-in-one tool for smart bundles, and flexible discount campaigns.',
    review: '4.9 (193 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: ['15% OFF all plans in 3 months: PQB_BFCM_MCD', '25% OFF lifetime on yearly upgrade: PQB_BFCM_YCD'],
    price: null,
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 11,
    title: 'Pareto ‑ Order Limits Quantity',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'parento.webp',
    description: 'Easily secure your store and manage inventory with smart order limits',
    review: '4.8 (87 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: ['15% OFF all plans in 3 months: POL_BFCM_MCD', '25% OFF lifetime on yearly upgrade: POL_BFCM_YCD'],
    price: null,
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 12,
    title: 'Request A Quote & Hide Price',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'quote.webp',
    description:
      'Simply adds a “Request a Quote” button to your product and collection pages, allowing both B2B & DTC customers to suggest prices through a customizable form.',
    review: '4.6 (76 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'QS_BCFM_2025',
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 13,
    title: 'Omega Instafeed',
    category: 'Sale & Conversion Optimization',
    nameApp: 'Instagram Feed',
    icon: 'feed-insta.webp',
    description:
      'Showcase photos, videos, and reels that auto-sync to keep your store fresh. Make your feed shoppable by tagging products directly on media.',
    review: '5.0 (49 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan',
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 14,
    title: 'Trustify Testimonial Reviews',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'trus-rv.webp',
    description:
      'Easy clicks to import reviews from Amazon, AliExpress, Google, Etsy, Facebook, and CSV. Optimize sales for global dropship stores with reviews translated into multiple languages.',
    review: '4.9 (374 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan. Paid plans start from $8.99/month',
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 15,
    title: 'Trustify Google Reviews',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'trus-rv.webp',
    description:
      'Instantly import reviews from Google Shopping and Google Maps with exclusive import settings. Multiple languages, Import photo reviews',
    review: '4.9 (38 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan. Paid plans start from $6.9/month',
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  {
    id: 15,
    title: 'Trustify Shoppable Video UGC',
    category: 'Sale & Conversion Optimization',
    nameApp: null,
    icon: 'trus-video.webp',
    description: 'With the app, you can easily embed videos in your product pages with just a click.',
    review: '4.9 (9 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan',
    promoCode: null,
    href: '1',
    type: 'Sale & Conversion Optimization',
  },
  //Inventory & Order Management
  {
    id: 16,
    title: 'Synctrack Order Tracking',
    category: 'Inventory & Order Management',
    nameApp: null,
    icon: 'sync-tracking.webp',
    description: 'Branded order tracking page to track orders easily. Reduce WISMO tickets. Ask & display reviews.',
    review: '4.6 (58 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '40% OFF for 2 months',
    price: null,
    promoCode: 'STPP_BFCM_40',
    href: '1',
    type: 'Inventory & Order Management',
  },
  {
    id: 17,
    title: 'Synctrack Returns & Exchanges',
    category: 'Inventory & Order Management',
    nameApp: null,
    icon: 'sync-returns.webp',
    description:
      'Boost customer return journey & recover sales with stunning custom return portal and dynamic exchange resolution instead of refund.',
    review: '4.8 (87 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: null,
    price: 'Free plan. Paid plans start at $11.99/month',
    promoCode: null,
    href: '1',
    type: 'Inventory & Order Management',
  },
  {
    id: 18,
    title: 'Dingdoong',
    category: 'Inventory & Order Management',
    nameApp: 'Pickup Delivery Date Picker',
    icon: 'dingdong.webp',
    description:
      'DingDoong offers flexible scheduling for local delivery slots, pickup, and shipping, tailored to your business hours.',
    review: '4.5 (76 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'BFCM_2025',
    href: '1',
    type: 'Inventory & Order Management',
  },
  {
    id: 19,
    title: 'Synctrack Estimated Delivery Date ETA',
    category: 'Inventory & Order Management',
    nameApp: null,
    icon: 'sync-est.webp',
    description:
      'Simply display timeline graphics and estimated delivery date information (EDD/ETA) such as dispatch date, shipping date, delivery time & order delivery date.',
    review: '4.9 (370 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'BFCM_2025',
    href: '1',
    type: 'Inventory & Order Management',
  },
  //Payment & Fraud Protection
  {
    id: 20,
    title: 'Synctrack PayPal Tracking Sync',
    category: 'Payment & Fraud Protection',
    nameApp: null,
    icon: 'sync-pay.webp',
    description: 'Auto-sync PayPal tracking info & Stripe tracking info to get funds faster & build trust with PayPal.',
    review: '5.0 (58 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF for 3 months',
    price: null,
    promoCode: 'ST_BFCM_MCD',
    href: '1',
    type: 'Payment & Fraud Protection',
  },
  {
    id: 21,
    title: 'Synctrack PayPal Tracking Sync',
    category: 'Payment & Fraud Protection',
    nameApp: null,
    icon: 'sync-pay.webp',
    description:
      'Wix platform: Auto-sync PayPal tracking info & Stripe tracking info to get funds faster & build trust with PayPal.',
    review: '5.0 (58 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '50% OFF for 1st month',
    price: null,
    promoCode: 'ST_WIX_BFCM_MCD',
    href: '1',
    type: 'Payment & Fraud Protection',
  },
  {
    id: 22,
    title: 'Blockify Fraud Filter, Blocker',
    category: 'Payment & Fraud Protection',
    nameApp: null,
    icon: 'blocktify-blocker.webp',
    description:
      'Blockify allows you to block IPs, countries, bots, and spy extensions, while also preventing fraudulent orders using proxy, Tor, VPN detection, and AI fraud filters',
    review: '4.9 (702 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'BLOCKIFY_BFCM_20',
    href: '1',
    type: 'Payment & Fraud Protection',
  },
  {
    id: 23,
    title: 'Blockify Checkout Rules Plus',
    category: 'Payment & Fraud Protection',
    nameApp: null,
    icon: 'blocktify-rules.webp',
    description:
      'Use Blockify Checkout rules to validate carts and addresses, set order limits, and streamline payment and shipping.',
    review: '4.9 (148 reviews)',
    installs: '369 stores',
    includes: 'Engel Coolers, PC Express, Aanya Linen, The Vintage Teacup, Moman PhotoGears',
    topStoreApps: null,
    discount: '20% OFF all plans in 3 months',
    price: null,
    promoCode: 'BLOCKIFY_BFCM_20',
    href: '1',
    type: 'Payment & Fraud Protection',
  },
];

class AppsController {
  constructor() {
    this.init();
  }

  init() {
    this.initElements();
    this.bindEvents();
    this.showApps('Marketing');
  }

  initElements() {
    this.tabButtons = document.querySelectorAll('.tab-button');
    this.appCardsGrid = document.querySelector('.app-cards-grid');
  }

  bindEvents() {
    this.tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.tabButtons.forEach((tab) => tab.classList.remove('active'));
        button.classList.add('active');
        this.showApps(button.textContent.trim());
      });
    });
  }

  showApps(category) {
    const filteredApps = appsData.filter((app) => app.type === category);

    this.appCardsGrid.innerHTML = '';

    filteredApps.forEach((app, index) => {
      const card = this.createAppCard(app);
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      this.appCardsGrid.appendChild(card);

      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';

    card.innerHTML = `
    <div class="app-icon-container">
      <div class="app-icon-bg">
        <img src="assets/app_icon/${app.icon}" alt="${app.title}" />
      </div>
    </div>

    <div class="app-info">
      <h3 class="app-title">${app.title}</h3>
      ${app.nameApp !== null ? `<p class="app-category">${app.nameApp}</p>` : ''}
      <p class="app-description">${app.description}</p>

      <div class="app-details">
        <p>Review: ${app.review}</p>
        <p>Currently Installed: ${app.installs}</p>
        ${
          app.topStoreApps === null
            ? `<p>Include: ${app.includes}</p>`
            : `<p>Top Stores Used The App: ${app.topStoreApps}</p>`
        }
        ${
          Array.isArray(app.discount)
            ? app.discount.length === 2
              ? `
                <p class="discount">Discount: </p>
                <ul class="discount-list">
                  ${app.discount.map((item) => `<li>${item}</li>`).join('')}
                </ul>`
              : app.discount.length === 1
              ? `<p class="discount">Discount: <span>${app.discount[0]}</span></p>`
              : ''
            : app.discount
            ? `<p class="discount">Discount: <span>${app.discount}</span></p>`
            : app.price
            ? `<p class="discount">Price: <span>${app.price}</span></p>`
            : ''
        }
      </div>

      <div class="app-code">
        ${
          app.promoCode !== null
            ? `
          <span>Code: <strong>${app.promoCode}</strong></span>
          <button class="copy-button">
            <img src="assets/copy.webp" alt="Copy" />
          </button>
        `
            : ''
        }
      </div>

      <a href=${app.href} target="_blank"><button class="app-button">Get started</button></a>
    </div>
  `;

    if (app.promoCode !== null) {
      this.addCopyFunctionality(card, app.promoCode);
    }

    return card;
  }

  addCopyFunctionality(card, promoCode) {
    const copyButton = card.querySelector('.copy-button');
    copyButton.addEventListener('click', () => {
      navigator.clipboard
        .writeText(promoCode)
        .then(() => {
          this.showCopySuccess(copyButton);
        })
        .catch(() => {
          this.showCopyError(copyButton);
        });
    });
  }

  showCopySuccess(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '✓';
    button.style.background = '#4CAF50';
    button.style.color = 'white';
    button.style.borderRadius = '50%';
    button.style.transform = 'scale(1.2)';

    setTimeout(() => {
      button.innerHTML = originalContent;
      button.style.background = 'transparent';
      button.style.transform = 'scale(1)';
    }, 2000);
  }

  showCopyError(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '×';
    button.style.background = '#f44336';
    button.style.color = 'white';

    setTimeout(() => {
      button.innerHTML = originalContent;
      button.style.background = 'transparent';
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AppsController();
});
