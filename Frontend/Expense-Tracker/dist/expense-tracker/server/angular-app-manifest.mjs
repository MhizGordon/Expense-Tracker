
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/expense-tracker"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/sidebar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/income"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/expense"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAKHQ32C.js"
    ],
    "route": "/expense-tracker/savings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23644, hash: 'b3ab2ef6b3df013f944aa90c1865edeb36a9f55874449e2806b4826adc67fbd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17193, hash: '69903baf6a702419b737a06c2097838a320a3fc79a4986a33825be43c660c3b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'expense-tracker/login/index.html': {size: 27711, hash: 'cc607613d23cdbf0dc25d9c1625153606e165c6ed4e7fd06e738977a8dd660c2', text: () => import('./assets-chunks/expense-tracker_login_index_html.mjs').then(m => m.default)},
    'expense-tracker/sidebar/index.html': {size: 28364, hash: '0f2d52e095fdcc242c5076dd30e9b0840d2aac687a708be039cc60992b5327fc', text: () => import('./assets-chunks/expense-tracker_sidebar_index_html.mjs').then(m => m.default)},
    'expense-tracker/index.html': {size: 23982, hash: '2327072d55856882b04e2190e2dfe0fdb043a43bf52757886c907e8844f6450f', text: () => import('./assets-chunks/expense-tracker_index_html.mjs').then(m => m.default)},
    'expense-tracker/expense/index.html': {size: 32498, hash: 'f5c6c441f3f8e2567cc6564411acdeb0cbfc0086d01da7bbac3a718668e27405', text: () => import('./assets-chunks/expense-tracker_expense_index_html.mjs').then(m => m.default)},
    'expense-tracker/income/index.html': {size: 32496, hash: '5226633068398f716f3961b6c9dc4c7cfc6bb3607291ea4829ab6c9d15fabf84', text: () => import('./assets-chunks/expense-tracker_income_index_html.mjs').then(m => m.default)},
    'expense-tracker/savings/index.html': {size: 33742, hash: '3ea65705a94583bd68d22bff49fa969804bace97d5b6dfb6cefcd694f11c9b78', text: () => import('./assets-chunks/expense-tracker_savings_index_html.mjs').then(m => m.default)},
    'expense-tracker/dashboard/index.html': {size: 33790, hash: '562100f342b41e475ad0c2bab1b36637a2063c90a907689760e8b753f4efc420', text: () => import('./assets-chunks/expense-tracker_dashboard_index_html.mjs').then(m => m.default)},
    'expense-tracker/history/index.html': {size: 34959, hash: '481351b8d59d1303d7b349814bc01cb6643b49de348ffc46a733ac720c83ea49', text: () => import('./assets-chunks/expense-tracker_history_index_html.mjs').then(m => m.default)},
    'styles-BI5W75MF.css': {size: 7004, hash: '8xay0mGHBiQ', text: () => import('./assets-chunks/styles-BI5W75MF_css.mjs').then(m => m.default)}
  },
};
