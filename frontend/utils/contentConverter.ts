/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Converts Strapi rich text content to markdown format
 */

export function convertStrapiContentToMarkdown(content: any): string {
  if (!Array.isArray(content)) {
    return typeof content === 'string' ? content : '';
  }

  return content
    .map((node: any) => {
      if (!node || typeof node !== 'object') return '';

      switch (node.type) {
        case 'paragraph':
          if (!node.children || !Array.isArray(node.children)) return '';
          const paragraphText = node.children
            .map((child: any) => formatTextNode(child))
            .join('');
          // Skip empty paragraphs (just whitespace or empty)
          return paragraphText.trim() ? paragraphText : '';

        case 'heading':
          if (!node.children || !Array.isArray(node.children)) return '';
          const headingText = node.children
            .map((child: any) => formatTextNode(child))
            .join('');
          const level = node.level || 1;
          const hashes = '#'.repeat(level);
          return `${hashes} ${headingText}`;

        case 'list':
          if (!node.children || !Array.isArray(node.children)) return '';
          return node.children
            .map((item: any, index: number) => {
              if (!item || !item.children || !Array.isArray(item.children))
                return '';
              const itemText = item.children
                .map((child: any) => formatTextNode(child))
                .join('');
              return node.format === 'ordered'
                ? `${index + 1}. ${itemText}`
                : `- ${itemText}`;
            })
            .filter(Boolean)
            .join('\n');

        case 'quote':
          if (!node.children || !Array.isArray(node.children)) return '';
          const quoteText = node.children
            .map((child: any) => formatTextNode(child))
            .join('');
          return `> ${quoteText}`;

        case 'code':
          if (!node.children || !Array.isArray(node.children)) return '';
          const codeText = node.children
            .map((child: any) => child.text || '')
            .join('');
          return `\`\`\`\n${codeText}\n\`\`\``;

        default:
          // Handle unknown types as paragraphs
          if (node.children && Array.isArray(node.children)) {
            const text = node.children
              .map((child: any) => formatTextNode(child))
              .join('');
            return text.trim() ? text : '';
          }
          return '';
      }
    })
    .filter(Boolean) // Remove empty strings and empty paragraphs
    .join('\n\n'); // Join with double newlines for proper markdown spacing
}

function formatTextNode(node: any): string {
  let text = node.text || '';

  if (node.bold) {
    text = `**${text}**`;
  }
  if (node.italic) {
    text = `*${text}*`;
  }
  if (node.underline) {
    text = `<u>${text}</u>`;
  }
  if (node.strikethrough) {
    text = `~~${text}~~`;
  }
  if (node.code) {
    text = `\`${text}\``;
  }

  return text;
}

/**
 * Helper function to safely convert any content to markdown
 */
export function safeConvertToMarkdown(content: any): string {
  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return convertStrapiContentToMarkdown(content);
  }

  // Fallback for other formats
  try {
    return JSON.stringify(content, null, 2);
  } catch {
    return String(content);
  }
}
