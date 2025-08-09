# 旅人集所 TravelersDepot｜旅人裝備電商平台<br>
旅人集所 (Travelers Depot) 是一個專為旅人打造的旅行裝備電商平台，包含前台購物流程與後台管理系統。 支援商品瀏覽、打包清單、購物車、結帳流程、與後台商品管理、訂單管理、優惠券管理功能，並於前台和後台登入頁實作響應式設計。<br>

👉 [🔗 前台線上Demo](https://dre1211-pixel.github.io/TravelersDepot/#/)<br>
👉 [🔗 後台線上Demo](https://dre1211-pixel.github.io/TravelersDepot/#/login)<br>

✨ 歡迎自由操作前台下單、後台登入管理資料，只要不動到原有資料即可！
<hr>

## 🔐 測試帳號<br>
後台登入可使用以下帳號：<br>
```
測試帳號：test23@gmail.com
測試密碼：123456
```
<hr>

## 🙋‍♀️ 開發與參與人員<br>
* 前端：本人，負責前端開發，包含前台後台切版、API串接、功能資料渲染<br>
* 設計：本人，通過 Figma 設計 User Flow & Wireframes<br>
* 後端：使用六角學院製作 API 與 pathURL 申請串接並製作管理者後台編輯添加 API 資料項目<br>

## ✨ 功能介紹<br>
### 🔸 功能簡介<br>
* 使用 React + Redux Toolkit 建構前台購物流程與後台管理系統<br>
* 串接 RESTful API，支援商品、訂單、優惠券 操作<br>
* 使用 Sass 7-1 Pattern 管理樣式、整合 Bootstrap5、Material Icons<br>
* 完成購物車功能、商品篩選搜尋、RWD 響應式設計<br>
* 前後台登入系統，登入憑證以 Cookie 管理<br>
* 使用 Vite 開發、Prettier、ESLint 統一團隊程式碼風格<br>
### 🔸 前台功能<br>
* 首頁<br>
* 商品列表、商品詳細頁<br>
* 商品分類篩選 (Redux/ RTK:Redux Toolkit)<br>
* 主分類：全部產品、質感背包、巧收防水、旅人配件、舒眠保健、輕便分裝<br>
* 主題篩選：新品上架(最新產品）、鎮店之寶(熱門產品)、限時搶購(折扣商品)<br>
* 商品關鍵字搜尋 (含快速帶入關鍵字功能)<br>
* 加入購物車、修改數量、刪除商品<br>
* 購物車填寫表單結帳流程 (react-hook-form)<br>
* 品牌介紹頁<br>
* 加入、取消收藏商品(使用localStorage)<br>
* 使用者登入(使用cookie儲存token)<br>
* 響應式設計（RWD）<br>
* 打包清單 (To Do List) <br>
### 🔸 後台功能（Admin）<br>
* 管理者登入<br>
* 商品管理：新增、編輯、刪除、查看單一商品<br>
* 訂單管理：查看單一訂單、編輯、刪除<br>
* 優惠券管理：新增、編輯、刪除、查看單一優惠券<br>
## 🛠 技術架構與使用套件<br>
* 框架：React + Vite<br>
* 樣式：Bootstrap5、Material Icons、SCSS、Sass 7-1 Pattern<br>
* 套件：SweetAlert2、react-loading<br>
* 路由管理：React Router<br>
* 狀態管理：useState + useEffect + Redux Toolkit<br>
* 表單管理：react-hook-form<br>
* API 串接：Axios（串接課程提供 API）<br>
* 畫面邏輯：前後台功能與頁面功能皆由本人自行實作（含資料渲染、錯誤處理等）<br>
## 📁 專案資料夾結構簡介<br>
* 本專案採用模組化設計，資料夾說明如下：<br>
```
src/<br>
├─ assets/      # 靜態資源（圖檔、Sass 7-1 Pattern管理樣式等）
├─ component/   # 可重複使用的元件
├─ data/        # 靜態資料
├─ hooks/       # 自定義 React Hooks
├─ layout/      # 主要頁面架構（Header、Footer 等）
├─ redux/       # Redux Toolkit 狀態管理設定
├─ routes/      # React Router 路由設定
├─ utils/       # 工具函式（轉換時間格式等）
└─ views/       # 頁面元件（所有前後台頁面）
```
## 🚀 快速啟動<br>
```
# 安裝套件
npm install

# 啟動專案
npm run dev
```
