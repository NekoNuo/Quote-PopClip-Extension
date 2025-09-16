# Quote Comma PopClip Extension

A PopClip extension that wraps each line of selected text with double quotes and adds commas, except for the last line.

## Features

- **Multi-line text processing**: Handles any number of lines
- **Quote wrapping**: Each line is wrapped with double quotes
- **Comma separation**: Adds commas after each line except the last
- **Empty line filtering**: Automatically removes empty lines
- **Clipboard integration**: Automatically copies the result to clipboard
- **Silent operation**: No popup messages, clean user experience
- **Icon-only display**: Shows only icon in PopClip bar for clean interface

## Usage

1. Select multi-line text in any application
2. Click the quote-comma icon in the PopClip bar
3. The formatted text is automatically copied to your clipboard (empty lines are filtered out)

## Example

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

Note: Empty lines are automatically filtered out.

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
