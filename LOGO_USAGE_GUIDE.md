# Molycure Logo 使用指南

## Logo 文件结构

```
public/
├── logo-full.png         # 完整 Logo（2.4MB PNG，透明背景）
└── ...

src/app/
├── icon.png              # Favicon/网站图标（Next.js 自动识别）
└── ...
```

## 文件说明

### 1. `public/logo-full.png`
- **用途**: 网站主要 Logo，用于导航栏和页脚
- **格式**: PNG，透明背景
- **尺寸**: 原图分辨率
- **特点**: 已抠图，适合深色背景使用

### 2. `src/app/icon.png`
- **用途**: 浏览器标签页图标（favicon）
- **格式**: PNG
- **自动处理**: Next.js 自动将其转换为多尺寸 favicon
- **位置**: 放在 `src/app/` 目录，Next.js 会自动识别

## Logo 使用位置

### 导航栏（NavBar）
- **位置**: 左上角
- **尺寸**: 40x40px
- **实现**: 使用 Next.js `<Image>` 组件优化加载

### 页脚（Footer）
- **位置**: 底部版权信息左侧
- **尺寸**: 32x32px
- **实现**: 使用 Next.js `<Image>` 组件优化加载

### Favicon
- **位置**: 浏览器标签页
- **自动处理**: Next.js 从 `src/app/icon.png` 生成多尺寸图标

## 技术实现

### 1. 使用 Next.js Image 组件
```tsx
import Image from 'next/image';

<Image 
  src="/logo-full.png" 
  alt="Molycure Logo" 
  width={40}
  height={40}
  className="h-full w-full object-contain"
  priority  // 导航栏 Logo 优先加载
/>
```

### 2. Favicon 自动生成
Next.js 13+ 的 App Router 会自动识别 `src/app/icon.png`，并生成：
- favicon.ico
- apple-touch-icon.png
- 各种尺寸的网站图标

## Logo 设计特点

- **配色**: 蓝紫渐变（与网站主题一致）
- **风格**: 科技感、现代化、简洁
- **适配**: 透明背景，适合深色主题
- **可识别性**: 抽象流动形态，象征智能体和数据流动

## 维护建议

1. **更换 Logo**: 替换 `public/logo-full.png` 和 `src/app/icon.png`
2. **保持一致性**: 确保两个文件使用相同的 Logo 设计
3. **格式建议**: PNG（透明背景）或 SVG（可缩放）
4. **尺寸建议**: 
   - 完整 Logo: 建议 512x512px 或更高
   - Favicon: 至少 512x512px（Next.js 会自动缩放）

## 性能优化

- 使用 Next.js `<Image>` 组件自动优化
- 导航栏 Logo 设置 `priority` 属性优先加载
- 页脚 Logo 延迟加载（默认行为）
- 自动生成 WebP 格式（支持的浏览器）

---

**最后更新**: 2026-01-27  
**维护者**: Molycure Team
