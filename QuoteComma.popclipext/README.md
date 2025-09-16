# Quote Comma PopClip Extension

A PopClip extension that wraps each line of selected text with double quotes and adds commas, except for the last line.

## Features

- **Flexible text processing**: Handles multi-line text or space-separated text
- **Configurable splitting**: Choose between newline or space splitting
- **Quote wrapping**: Each item is wrapped with double quotes
- **Comma separation**: Adds commas after each item except the last
- **Empty item filtering**: Automatically removes empty items
- **Clipboard integration**: Automatically copies the result to clipboard
- **Silent operation**: No popup messages, clean user experience
- **Icon-only display**: Shows only icon in PopClip bar for clean interface

## Usage

1. **配置分割方式**（可选）：
   - 右键点击 PopClip 菜单栏图标
   - 选择"扩展" → "Quote Comma" → "选项"
   - 选择分割方式：换行符分割（默认）或空格分割

2. **使用扩展**：
   - 选择文本（多行文本或空格分隔的文本）
   - 点击 PopClip 工具栏中的引号图标
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
111 22  333
```

**Output:**
```
"111",
"22",
"333"
```

Note: 空项目会被自动过滤掉。

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
