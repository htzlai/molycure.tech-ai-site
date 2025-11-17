# ⚡ 快速参考卡片

> 最关键的配置，一目了然！

---

## 🎯 浏览器标签栏图标（Favicon）

```
❓ 问题：浏览器标签栏显示的小图标是哪个文件？

✅ 答案：public/uumi-logo.png

📍 配置位置：src/app/layout.tsx

icons: {
  icon: "/uumi-logo.png",      // 👈 改这里
  shortcut: "/uumi-logo.png",  // 👈 改这里
  apple: "/uumi-logo.png",     // 👈 改这里
}
```

---

## 🎨 页面 Logo

```
📍 导航栏 Logo：src/app/page.tsx（第 87 行）
📍 页脚 Logo：  src/app/page.tsx（第 678 行）

搜索并替换：
grep -r "uumi-logo.png" src/
```

---

## 📝 网站标题和描述

```
📍 文件：src/app/layout.tsx

metadata = {
  title: "您的网站标题",           // 👈 改这里
  description: "您的网站描述",     // 👈 改这里
  keywords: ["关键词1", "关键词2"], // 👈 改这里
}
```

---

## 📦 网站内容

```
📍 文件：src/data/companyData.json

💡 所有文字内容都在这个 JSON 文件中
   直接编辑，无需改代码！
```

---

## 🎨 颜色主题

```
📍 文件：src/app/globals.css

:root {
  --primary: #8B5CF6;    /* 主色 */
  --secondary: #EC4899;  /* 次色 */
  --accent: #F59E0B;     /* 点缀色 */
}
```

---

## 🔄 新项目必改清单

```
✅ 1. Logo 文件          → public/uumi-logo.png
✅ 2. Favicon 配置       → src/app/layout.tsx (icons)
✅ 3. 网站标题/描述      → src/app/layout.tsx (metadata)
✅ 4. 网站内容          → src/data/companyData.json
✅ 5. package.json      → name, description
✅ 6. 颜色主题（可选）   → src/app/globals.css
```

---

## 🚀 常用命令

```bash
npm run dev         # 本地开发
npm run build       # 生产构建
npm run lint        # 代码检查

# 搜索 Logo
grep -r "uumi-logo" src/

# Git 操作
git add .
git commit -m "消息"
git push origin main
```

---

## 💡 一句话记忆

> **浏览器标签栏的图标 = `public/uumi-logo.png`，配置在 `src/app/layout.tsx` 的 `metadata.icons` 中。**

---

📖 详细说明请查看：[CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)

