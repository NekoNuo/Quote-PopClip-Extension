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
  
  // Single action for the extension
  action: {
    title: "Quote & Comma",
    code: (input) => {
      // Get the selected text
      const text = input.text;
      
      // Split text into lines, preserving empty lines
      const lines = text.split('\n');
      
      // Process each line: wrap with quotes and add comma (except last line)
      const processedLines = lines.map((line, index) => {
        // Wrap line with double quotes
        const quotedLine = `"${line}"`;
        
        // Add comma to all lines except the last one
        if (index < lines.length - 1) {
          return quotedLine + ',';
        } else {
          return quotedLine;
        }
      });
      
      // Join lines back together
      const result = processedLines.join('\n');
      
      // Copy to clipboard
      popclip.copyText(result);
      
      // Show success message
      popclip.showText("Text formatted with quotes and commas!");
      
      return result;
    }
  }
};
