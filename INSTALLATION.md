# PopClip Quote Comma Extension - 安装指南

## 📋 扩展功能

这个 PopClip 扩展可以将选中的多行文本进行格式化：
- 每行用双引号包裹
- 每行末尾添加逗号
- 最后一行不加逗号
- 自动复制到剪贴板

## 🛠️ 安装步骤

### 1. 启用 PopClip 开发模式

在终端中运行以下命令：

```bash
# 允许加载未签名的扩展
defaults write com.pilotmoon.popclip LoadUnsignedExtensions -bool YES

# 启用调试输出（可选，用于开发调试）
defaults write com.pilotmoon.popclip EnableExtensionDebug -bool YES
```

### 2. 安装扩展

1. 退出 PopClip（如果正在运行）
2. 双击 `QuoteComma.popclipext` 文件夹
3. PopClip 会自动启动并安装扩展
4. 或者手动将扩展文件夹复制到：
   ```
   ~/Library/Application Support/PopClip/Extensions/
   ```

### 3. 重启 PopClip

```bash
# 退出 PopClip
osascript -e 'tell app "PopClip" to quit'

# 重新启动 PopClip
open -a PopClip
```

## 🚀 使用方法

1. 在任意应用中选择多行文本
2. PopClip 工具栏会出现
3. 点击 "Quote & Comma" 按钮
4. 格式化后的文本会自动复制到剪贴板
5. 在需要的地方粘贴使用

## 📝 使用示例

**选中文本：**
```
apple
banana
cherry
orange
```

**处理结果：**
```
"apple",
"banana",
"cherry",
"orange"
```

## 🔧 故障排除

### 扩展不显示
1. 确认已启用未签名扩展加载
2. 检查扩展文件夹权限
3. 查看控制台应用中的 PopClip 日志

### 功能异常
1. 确认选中的是多行文本
2. 检查 PopClip 版本是否支持 JavaScript 模块
3. 重新安装扩展

### 调试信息
如果启用了调试模式，可以在控制台应用中查看详细日志：
1. 打开"控制台"应用
2. 搜索进程"PopClip"
3. 查看扩展相关的日志信息

## 📁 文件结构

```
QuoteComma.popclipext/
├── Config.js              # 主配置和逻辑文件
├── README.md              # 扩展说明文档
└── icon-source.svg        # 图标源文件（仅供参考）
```

## ⚙️ 技术细节

- **扩展类型**: Module-based JavaScript
- **PopClip 版本要求**: 2021.5+
- **JavaScript 引擎**: JavaScriptCore
- **模块格式**: CommonJS

## 📄 许可证

此扩展仅供个人使用，按原样提供。
