// #popclip
// name: Quote
// identifier: com.user.quote-comma
// description: Wrap each line with quotes and add commas, except the last line
// icon: symbol:quote.bubble
// regex: (?s)^.+$

/**
 * PopClip Extension: Quote
 *
 * This extension processes text by:
 * 1. Splitting text by newlines or spaces (configurable)
 * 2. Removing existing quotes if present
 * 3. Wrapping each item with quotes (single or double, configurable)
 * 4. Adding a comma at the end of each item
 * 5. Excluding the comma from the last item
 *
 * Example (newline mode):
 * Input:  line1
 *         "line2"
 *         line3
 *
 * Output: "line1",
 *         "line2",
 *         "line3"
 *
 * Example (space mode):
 * Input:  111 "22" 333
 * Output: "111",
 *         "22",
 *         "333"
 */

module.exports = {
  // Extension metadata - use SF Symbol for icon
  icon: "symbol:quote.bubble",

  // Extension options
  options: [
    {
      identifier: "quoteType",
      type: "multiple",
      label: "引号类型",
      description: "选择使用单引号还是双引号",
      defaultValue: "double",
      values: ["double", "single"],
      valueLabels: ["双引号 (\")", "单引号 (')"]
    },
    {
      identifier: "splitMode",
      type: "multiple",
      label: "分割方式",
      description: "选择文本的分割方式",
      defaultValue: "newline",
      values: ["newline", "space", "both"],
      valueLabels: ["换行符分割", "空格分割", "换行+空格分割"]
    },
    {
      identifier: "quoteHandling",
      type: "multiple",
      label: "引号处理",
      description: "如何处理已有的引号",
      defaultValue: "remove",
      values: ["remove", "keep"],
      valueLabels: ["移除已有引号", "保留已有引号"]
    },
    {
      identifier: "outputFormat",
      type: "multiple",
      label: "输出格式",
      description: "选择输出的换行格式",
      defaultValue: "multiline",
      values: ["multiline", "inline"],
      valueLabels: ["多行格式", "单行格式"]
    }
  ],

  // Single action for the extension
  action: {
    // No title - show icon only
    code: (input, options) => {
      // Get the selected text
      const text = input.text;

      // Get options with defaults
      const quoteType = options.quoteType || "double";
      const splitMode = options.splitMode || "newline";
      const quoteHandling = options.quoteHandling || "remove";
      const outputFormat = options.outputFormat || "multiline";

      // Determine which quote character to use
      const quoteChar = quoteType === "single" ? "'" : "\"";

      // Split text based on selected mode
      let items;
      if (splitMode === "space") {
        // Split by spaces and filter out empty items
        items = text.split(/\s+/).filter(item => item.trim() !== '');
      } else if (splitMode === "both") {
        // Split by both newlines and spaces
        items = text.split(/[\n\s]+/).filter(item => item.trim() !== '');
      } else {
        // Default: split by newlines and filter out empty lines
        items = text.split('\n').filter(line => line.trim() !== '');
      }

      // Process each item: handle existing quotes and add comma (except last item)
      const processedItems = items.map((item, index) => {
        let cleanItem = item.trim();

        // Handle existing quotes based on user preference
        if (quoteHandling === "remove") {
          // Remove multiple layers of quotes
          while ((cleanItem.startsWith('"') && cleanItem.endsWith('"')) ||
                 (cleanItem.startsWith("'") && cleanItem.endsWith("'"))) {
            cleanItem = cleanItem.slice(1, -1);
          }
          // Also remove quotes that appear at the beginning or end with commas
          cleanItem = cleanItem.replace(/^["']+|["']+,*$/g, '');
          cleanItem = cleanItem.replace(/,+$/g, ''); // Remove trailing commas
        }

        // Wrap item with selected quote type
        const quotedItem = `${quoteChar}${cleanItem}${quoteChar}`;

        // Add comma to all items except the last one
        if (index < items.length - 1) {
          return quotedItem + ',';
        } else {
          return quotedItem;
        }
      });

      // Join items based on output format
      let result;
      if (outputFormat === "inline") {
        result = processedItems.join(' ');
      } else {
        result = processedItems.join('\n');
      }

      // Copy to clipboard
      popclip.copyText(result);

      // No success message - silent operation

      return result;
    }
  }
};
