# Quote PopClip Extension

A PopClip extension that intelligently processes text by wrapping items with quotes and adding commas.

## Features

- **Flexible text processing**: Handles multi-line text or space-separated text
- **Configurable splitting**: Choose between newline or space splitting
- **Configurable quote handling**: Choose to remove or keep existing quotes
- **Configurable output format**: Choose between multi-line or single-line output
- **Quote wrapping**: Each item is wrapped with double quotes
- **Comma separation**: Adds commas after each item except the last
- **Empty item filtering**: Automatically removes empty items
- **Clipboard integration**: Automatically copies the result to clipboard
- **Silent operation**: No popup messages, clean user experience
- **Icon-only display**: Pure icon display without text for clean interface

## Usage

1. **配置扩展选项**（可选）：
   - 右键点击 PopClip 菜单栏图标
   - 选择"扩展" → "Quote" → "选项"
   - 配置以下选项：
     - **分割方式**: 换行符分割（默认）、空格分割或换行+空格分割
     - **引号处理**: 移除已有引号（默认）或保留已有引号
     - **输出格式**: 多行格式（默认）或单行格式

2. **使用扩展**：
   - 选择文本（多行文本或空格分隔的文本，可包含已有引号）
   - 点击 PopClip 工具栏中的引号气泡图标
   - 格式化后的文本自动复制到剪贴板

## Examples

### 换行符分割模式（默认）

**Input:**
```
ip：10.192.16.1-192.168.31.254
子网：255.255.240.0
网关：10.192.31.254
dns：10.138.92.77,10.138.92.76


```

**Output:**
```
"ip：10.192.16.1-192.168.31.254",
"子网：255.255.240.0",
"网关：10.192.31.254",
"dns：10.138.92.77,10.138.92.76"
```

### 空格分割模式

**Input:**
```
111 "22"  333
```

**Output:**
```
"111",
"22",
"333"
```

### 混合分割模式（换行+空格）

**Input:**
```
apple banana
cherry orange
grape
```

**Output:**
```
"apple",
"banana",
"cherry",
"orange",
"grape"
```

### 引号处理配置

**移除已有引号模式 (默认):**
- Input: `"""ip：10.192.16.1-192.168.31.254",",", 'banana', cherry`
- Output: `"ip：10.192.16.1-192.168.31.254",\n"banana",\n"cherry"`

**处理复杂嵌套引号:**
- 自动移除多层引号嵌套
- 清理引号后的逗号
- 智能处理各种引号组合

**保留已有引号模式:**
- Input: `"apple", 'banana', cherry`
- Output: `""apple"",\n"'banana'",\n"cherry"`

### 输出格式配置

**多行格式 (默认):**
```
"apple",
"banana",
"cherry"
```

**单行格式:**
```
"apple", "banana", "cherry"
```

Note: 空项目会被自动过滤。所有配置选项可在扩展选项中自由组合。

## Installation

1. Double-click the `QuoteComma.popclipext` package to install
2. PopClip will automatically load the extension
3. The extension will appear in your PopClip bar when you select text

## Requirements

- macOS with PopClip installed
- PopClip version 2021.5 or later (for module-based JavaScript support)

## Technical Details

- **Type**: Module-based JavaScript extension
- **Format**: CommonJS module with YAML header
- **Regex**: Matches any text content
- **Action**: Single action that processes and copies text

## License

This extension is provided as-is for personal use.
