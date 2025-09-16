// #popclip
// name: Quote Comma
// identifier: com.user.quote-comma
// description: Wrap each line with quotes and add commas, except the last line
// icon: quote-comma.png
// regex: (?s)^.+$

/**
 * PopClip Extension: Quote Comma
 * 
 * This extension processes multi-line text by:
 * 1. Wrapping each line with double quotes
 * 2. Adding a comma at the end of each line
 * 3. Excluding the comma from the last line
 * 
 * Example:
 * Input:  line1
 *         line2
 *         line3
 * 
 * Output: "line1",
 *         "line2",
 *         "line3"
 */

module.exports = {
  // Extension metadata
  icon: "quote-comma.png",

  // Extension options
  options: [
    {
      identifier: "splitMode",
      type: "multiple",
      label: "分割方式",
      description: "选择文本的分割方式",
      defaultValue: "newline",
      values: ["newline", "space"],
      valueLabels: ["换行符分割", "空格分割"]
    }
  ],

  // Single action for the extension
  action: {
    // Remove title to show icon only
    code: (input, options) => {
      // Get the selected text
      const text = input.text;

      // Get split mode from options
      const splitMode = options.splitMode || "newline";

      // Split text based on selected mode
      let items;
      if (splitMode === "space") {
        // Split by spaces and filter out empty items
        items = text.split(/\s+/).filter(item => item.trim() !== '');
      } else {
        // Default: split by newlines and filter out empty lines
        items = text.split('\n').filter(line => line.trim() !== '');
      }

      // Process each item: wrap with quotes and add comma (except last item)
      const processedItems = items.map((item, index) => {
        // Wrap item with double quotes
        const quotedItem = `"${item}"`;

        // Add comma to all items except the last one
        if (index < items.length - 1) {
          return quotedItem + ',';
        } else {
          return quotedItem;
        }
      });

      // Join items back together
      const result = processedItems.join('\n');

      // Copy to clipboard
      popclip.copyText(result);

      // No success message - silent operation

      return result;
    }
  }
};
