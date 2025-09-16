# GitHub Actions 自动发布指南

## 🚀 自动发布流程

这个 GitHub Actions 工作流会在您推送 tag 时自动：

1. **打包扩展** - 将 `QuoteComma.popclipext` 打包为 `.popclipextz` 文件
2. **创建 Release** - 在 GitHub 上创建新的 Release
3. **上传文件** - 将打包好的扩展文件附加到 Release
4. **生成说明** - 自动生成包含功能介绍的 Release Notes

## 📋 使用步骤

### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "Update extension features"
git push origin main
```

### 2. 创建并推送 tag
```bash
# 创建 tag（版本号格式：v1.0.0）
git tag v1.0.0

# 推送 tag 到远程仓库
git push origin v1.0.0
```

### 3. 自动触发构建
- GitHub Actions 会自动检测到 tag 推送
- 开始执行打包和发布流程
- 可在 GitHub 仓库的 "Actions" 标签页查看进度

### 4. 查看 Release
- 构建完成后，在 GitHub 仓库的 "Releases" 页面查看
- 下载 `QuoteComma-v1.0.0.popclipextz` 文件
- 双击安装到 PopClip

## 🏷️ Tag 命名规范

推荐使用语义化版本号：

- `v1.0.0` - 主要版本发布
- `v1.1.0` - 新功能添加
- `v1.0.1` - Bug 修复
- `v2.0.0-beta.1` - 预发布版本

## 📁 文件结构

工作流会创建以下文件：

```
QuoteComma-v1.0.0.popclipextz  # 打包后的扩展文件
├── Config.js                 # 主配置文件
├── README.md                 # 说明文档
└── icon-source.svg           # 图标源文件
```

## 🔧 自定义配置

如需修改工作流，编辑 `.github/workflows/release.yml`：

- **触发条件**: 修改 `tags` 部分
- **文件名格式**: 修改 `zip` 命令中的文件名
- **Release 内容**: 修改 `release_notes.md` 生成部分

## 📝 Release Notes 内容

自动生成的 Release Notes 包含：

- ✅ 功能特性列表
- ✅ 安装方法说明
- ✅ 系统要求
- ✅ 使用示例
- ✅ 下载链接

## 🛠️ 故障排除

### 工作流失败
1. 检查 GitHub Actions 日志
2. 确认文件路径正确
3. 验证 tag 格式符合要求

### 权限问题
- 确保仓库启用了 GitHub Actions
- 检查 `GITHUB_TOKEN` 权限设置

### 文件打包问题
- 确认 `QuoteComma.popclipext` 目录存在
- 检查目录中包含必要的文件

## 📦 手动打包（备用方案）

### 正确的打包方法：

```bash
# 包含整个 .popclipext 文件夹
zip -r QuoteComma-manual.popclipextz QuoteComma.popclipext/
```

### 测试打包格式：

```bash
# 运行测试脚本
chmod +x test-package.sh
./test-package.sh
```

### ❌ 错误的打包方法：
```bash
# 这样会导致 "Failed to unzip extension" 错误
cd QuoteComma.popclipext
zip -r ../QuoteComma-wrong.popclipextz .
```

## 🎯 最佳实践

1. **测试后发布** - 在本地充分测试后再推送 tag
2. **版本号递增** - 确保新版本号大于之前的版本
3. **更新文档** - 发布前更新 README 和功能说明
4. **检查兼容性** - 确认 PopClip 版本兼容性
