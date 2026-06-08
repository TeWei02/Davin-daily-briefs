```markdown
# 📰 Davin Daily Briefs

**每日全自動作品產出** — 由 Davin Portfolio Engine 自動生成並發布的每日簡報集合。

![GitHub last commit](https://img.shields.io/github/last-commit/Davin/davin-daily-briefs)
![GitHub license](https://img.shields.io/github/license/Davin/davin-daily-briefs)
![GitHub repo size](https://img.shields.io/github/repo-size/Davin/davin-daily-briefs)
![GitHub issues](https://img.shields.io/github/issues/Davin/davin-daily-briefs)
![GitHub stars](https://img.shields.io/github/stars/Davin/davin-daily-briefs?style=social)

---

## 📖 關於

**Davin Daily Briefs** 是一個完全自動化的內容生產倉庫。每天，Davin Portfolio Engine 會根據預設的數據源、分析模型與生成規則，自動產出一份結構化的「每日簡報」。這些簡報可能涵蓋市場趨勢、技術摘要、創意靈感或個人作品記錄，旨在提供一個持續更新、無需人工干預的知識沉澱空間。

本倉庫中的所有內容均由自動化流程生成，並以 Markdown 格式存儲，方便您直接閱讀、檢索或二次開發。

---

## ✨ 特色

- **全自動化產出** — 無需手動編輯，每日定時執行生成腳本。
- **結構化內容** — 每份簡報遵循統一的模板，包含摘要、重點、數據圖表（如有）及參考鏈接。
- **版本控制** — 每日本地提交，歷史記錄可追溯，便於比較不同日期的內容變化。
- **開放許可** — 採用 MIT 許可證，歡迎自由使用、修改與分發。
- **輕量無依賴** — 產出僅為純文本 Markdown，無需額外運行環境即可閱讀。

---

## ⚙️ 安裝

本倉庫本身為內容存儲庫，**無需安裝任何軟體**即可瀏覽。若您希望在本機端獲取每日簡報，只需執行：

```bash
git clone https://github.com/Davin/davin-daily-briefs.git
cd davin-daily-briefs
```

之後您可以直接使用任何 Markdown 檢視器（如 VS Code、Typora、GitHub 內建預覽）開啟 `briefs/` 目錄下的檔案。

若您希望自行擴充或修改生成流程，請參考 `engine/` 目錄（如有）中的腳本與設定檔。

---

## 🚀 使用方式

### 瀏覽每日簡報

所有簡報按日期存放於 `briefs/` 目錄下，檔名格式為 `YYYY-MM-DD.md`。例如：

```
briefs/
├── 2025-03-21.md
├── 2025-03-22.md
└── 2025-03-23.md
```

直接點擊檔案即可在 GitHub 上閱讀，或 clone 後使用本地工具開啟。

### 自動化觸發（進階）

若您希望在自己的環境中重現自動生成流程，可參考以下步驟（需具備 Python 或 Node.js 環境）：

1. 安裝相依套件（請參考 `engine/requirements.txt` 或 `package.json`）。
2. 設定環境變數（如 API 金鑰、數據源路徑）。
3. 執行排程腳本：
   ```bash
   python engine/generate_daily.py
   ```
   或使用 cron / GitHub Actions 實現每日自動執行。

---

## 📄 授權條款

本倉庫採用 **MIT License** 授權。您可以自由使用、複製、修改、合併、出版、分發、再授權及/或銷售本軟體的副本，惟需保留原始版權聲明與免責條款。詳細內容請參閱 [LICENSE](./LICENSE) 檔案。

---

<p align="center">
  <i>Automated by Davin Portfolio Engine</i>
</p>
```