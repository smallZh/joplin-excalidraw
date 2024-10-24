import { escapeHtml } from './htmlUtil';

// Reference: https://github.com/personalizedrefrigerator/joplin-plugin-freehand-drawing/blob/main/src/dialog/webview/svgElementToString.ts
const svgElementToString = (element: SVGElement) => {
	// diagrams.io has special requirements for arguments encoding.
	// Generate the container element with custom code:
	const svgText = ['<svg'];
	for (const attr of element.getAttributeNames()) {
		svgText.push(` ${attr}="${escapeHtml(element.getAttribute(attr)!)}"`);
	}
	svgText.push('>');
	svgText.push(element.innerHTML);
	svgText.push('</svg>');

	return svgText.join('');
};

export default svgElementToString;
