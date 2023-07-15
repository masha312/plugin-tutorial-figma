"use strict";
const collection = figma.variables.createVariableCollection("Example Collection");
const spacing = {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
};
const convertedSpacing = {};
for (const key in spacing) {
    const remValue = spacing[key];
    const pxValue = remToPx(remValue);
    convertedSpacing[key] = pxValue;
}
function remToPx(remValue) {
    const pxValue = parseFloat(remValue) * 16;
    return pxValue;
}
for (const key in convertedSpacing) {
    const spacerVariable = figma.variables.createVariable(`space/${key}`, collection.id, "FLOAT");
    spacerVariable.setValueForMode(collection.modes[0].modeId, convertedSpacing[key]);
    spacerVariable.scopes = ["GAP"];
}
figma.notify("Added spacers ✅");
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
