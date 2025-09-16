# PopClip Quote Extension

[![Release](https://img.shields.io/github/v/release/NekoNuo/Quote-PopClip-Extension?style=flat-square)](https://github.com/NekoNuo/Quote-PopClip-Extension/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![PopClip](https://img.shields.io/badge/PopClip-2021.5+-orange.svg?style=flat-square)](https://pilotmoon.com/popclip/)

一个智能的 PopClip 扩展，用于将文本格式化为带引号和逗号的列表格式。支持多种分割方式和输出格式，完美适用于代码开发、数据处理等场景。

![Extension Demo](https://via.placeholder.com/600x300/007AFF/FFFFFF?text=PopClip+Quote+Extension)

## ✨ 功能特性

- 🔄 **灵活分割**: 支持换行符、空格、混合分割模式
- 🎯 **智能引号处理**: 自动处理已有引号，支持多层嵌套清理
- 📝 **多种输出格式**: 多行或单行格式可选
- 💬 **简洁界面**: SF Symbols 引号气泡图标，纯图标显示
- 🔇 **静默操作**: 无弹窗提示，自动复制到剪贴板
- ⚙️ **高度可配置**: 三个独立配置选项，灵活组合

## 🚀 快速开始

### 安装

1. 从 [Releases](https://github.com/NekoNuo/Quote-PopClip-Extension/releases) 下载最新的 `.popclipextz` 文件
2. 双击文件，PopClip 会自动安装扩展
3. 在 PopClip 工具栏中会出现引号气泡图标

### 基本使用

1. 选择任意文本（多行或空格分隔）
2. 点击 PopClip 工具栏中的引号图标
3. 格式化后的文本自动复制到剪贴板

## 📖 使用示例

### 换行符分割（默认）

**输入：**
```
ip：192.168.1.100
子网：255.255.255.0
网关：192.168.1.1
dns：8.8.8.8,8.8.4.4
```

**输出：**
```
"ip：192.168.1.100",
"子网：255.255.255.0",
"网关：192.168.1.1",
"dns：8.8.8.8,8.8.4.4"
```

### 空格分割

**输入：** `apple banana cherry`

**输出：**
```
"apple",
"banana",
"cherry"
```

### 混合分割（换行+空格）

**输入：**
```
apple banana
cherry orange
grape
```

**输出：**
```
"apple",
"banana",
"cherry",
"orange",
"grape"
```

## ⚙️ 配置选项

右键 PopClip 菜单栏图标 → 扩展 → Quote → 选项

### 分割方式
- **换行符分割**（默认）- 按行处理文本
- **空格分割** - 按空格分隔处理
- **换行+空格分割** - 同时按换行和空格分割

### 引号处理
- **移除已有引号**（默认）- 清理后重新格式化
- **保留已有引号** - 在现有引号外再加引号

### 输出格式
- **多行格式**（默认）- 每项占一行
- **单行格式** - 所有项在一行，空格分隔

## 🛠️ 开发

### 项目结构

```
Quote-PopClip-Extension/
├── QuoteComma.popclipext/     # 扩展包
│   ├── Config.js              # 主配置文件
│   ├── README.md              # 扩展说明
│   └── icon-source.svg        # 图标源文件
├── .github/workflows/         # GitHub Actions
│   └── release.yml            # 自动发布工作流
├── test-package.sh            # 打包测试脚本
├── INSTALLATION.md            # 安装指南
├── RELEASE.md                 # 发布指南
└── README.md                  # 项目说明
```

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/NekoNuo/Quote-PopClip-Extension.git
   cd Quote-PopClip-Extension
   ```

2. **启用开发模式**
   ```bash
   # 允许未签名扩展
   defaults write com.pilotmoon.popclip LoadUnsignedExtensions -bool YES
   
   # 启用调试输出（可选）
   defaults write com.pilotmoon.popclip EnableExtensionDebug -bool YES
   ```

3. **安装扩展**
   ```bash
   # 双击安装
   open QuoteComma.popclipext
   
   # 或手动复制到扩展目录
   cp -r QuoteComma.popclipext ~/Library/Application\ Support/PopClip/Extensions/
   ```

4. **测试打包**
   ```bash
   chmod +x test-package.sh
   ./test-package.sh
   ```

### 发布新版本

```bash
# 提交更改
git add .
git commit -m "Add new features"
git push origin main

# 创建并推送标签
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions 会自动构建和发布
```

## 📋 系统要求

- macOS with PopClip installed
- PopClip version 2021.5 or later (支持 module-based JavaScript)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [PopClip](https://pilotmoon.com/popclip/) - 优秀的 macOS 文本工具
- [SF Symbols](https://developer.apple.com/sf-symbols/) - 提供图标支持

## 📞 支持

如果您遇到问题或有功能建议：

- 📝 [提交 Issue](https://github.com/NekoNuo/Quote-PopClip-Extension/issues)
- 💬 [讨论区](https://github.com/NekoNuo/Quote-PopClip-Extension/discussions)

---

<div align="center">
  <sub>Built with ❤️ for PopClip users</sub>
</div>
