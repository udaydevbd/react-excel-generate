export const getfontStyle = cell => {
  return {
    // name: row[cellIndex]?.fontFamily,
    size: cell?.fontSize || 10,
    bold: cell?.bold || false,
    underline: cell?.underline || false,
    italic: cell?.italic || false,
    color: { argb: cell?.textColor } || 'black'
  };
};

export const getTextFormat = formatName => {
  const format = { number: 0, text: '@' };
  return formatName ? format[formatName] : '@';
};
export const getFill = cell => {
  return {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: cell?.bgColor || '#ffffff' }
  };
};