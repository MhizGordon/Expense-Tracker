
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
    'expense-tracker/index.html': {size: 23982, hash: '2327072d55856882b04e2190e2dfe0fdb043a43bf52757886c907e8844f6450f', text: () => import('./assets-chunks/expense-tracker_index_html.mjs').then(m => m.default)},
    'expense-tracker/sidebar/index.html': {size: 28364, hash: '0f2d52e095fdcc242c5076dd30e9b0840d2aac687a708be039cc60992b5327fc', text: () => import('./assets-chunks/expense-tracker_sidebar_index_html.mjs').then(m => m.default)},
    'expense-tracker/login/index.html': {size: 27711, hash: 'cc607613d23cdbf0dc25d9c1625153606e165c6ed4e7fd06e738977a8dd660c2', text: () => import('./assets-chunks/expense-tracker_login_index_html.mjs').then(m => m.default)},
    'expense-tracker/dashboard/index.html': {size: 36586, hash: 'c18639dfcd65750691d6d541939ced5cd47c86d9d44ef7a628908cbfb1f54ce1', text: () => import('./assets-chunks/expense-tracker_dashboard_index_html.mjs').then(m => m.default)},
    'expense-tracker/expense/index.html': {size: 33500, hash: '0b539018061f02d6443587c9730c8172afe55f9956dbb6b49928d859864591ee', text: () => import('./assets-chunks/expense-tracker_expense_index_html.mjs').then(m => m.default)},
    'expense-tracker/income/index.html': {size: 33407, hash: '9bdb92135565b50cf24b5635d80aa23b87203036d92de74756d43e48c299f5ec', text: () => import('./assets-chunks/expense-tracker_income_index_html.mjs').then(m => m.default)},
    'expense-tracker/history/index.html': {size: 45486, hash: '15dbe65a451003e7289d319d8ec51f9839f276ba5750613bbf58854d24a66cc1', text: () => import('./assets-chunks/expense-tracker_history_index_html.mjs').then(m => m.default)},
    'expense-tracker/savings/index.html': {size: 34072, hash: '1c7cd8f15c2bff78ba3614130526cbfe8dfd9af9b07572246ed8db6578b486a2', text: () => import('./assets-chunks/expense-tracker_savings_index_html.mjs').then(m => m.default)},
    'styles-BI5W75MF.css': {size: 7004, hash: '8xay0mGHBiQ', text: () => import('./assets-chunks/styles-BI5W75MF_css.mjs').then(m => m.default)}
  },
};
