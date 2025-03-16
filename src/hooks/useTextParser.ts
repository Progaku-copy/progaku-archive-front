import { useState, useEffect, useMemo } from 'react';

import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { visit } from 'unist-util-visit';

function rehypeBlueLinks() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element) => {
			if (node.tagName === 'a') {
				const newStyle = 'color: blue;';
				if (node.properties?.style) {
					if (typeof node.properties.style === 'string') {
						node.properties.style = `${node.properties.style} ${newStyle}`;
					} else if (Array.isArray(node.properties.style)) {
						node.properties.style = [...node.properties.style, newStyle];
					}
				} else {
					node.properties = {
						...node.properties,
						style: newStyle,
					};
				}
			}
		});
	};
}

const useTextParser = (text: string): string => {
	const [convertedHtml, setConvertedHtml] = useState('');

	// NOTE: remark インスタンスを Memo 化して無駄な再作成を防ぐ
	const remarkProcessor = useMemo(
		() =>
			remark()
				.use(remarkGfm)
				.use(emoji)
				.use(remarkRehype)
				.use(rehypeBlueLinks)
				.use(rehypeStringify),
		[],
	);

	useEffect(() => {
		if (!text) {
			setConvertedHtml('');
			return;
		}

		const controller = new AbortController();
		const { signal } = controller;

		(async () => {
			try {
				const result = await remarkProcessor.process(text);
				if (!signal.aborted) {
					setConvertedHtml(result.toString());
				}
			} catch (error) {
				if (!signal.aborted) {
					console.error('Markdown parsing failed:', error);
				}
			}
		})();

		return () => controller.abort();
	}, [text, remarkProcessor]);

	return convertedHtml;
};

export default useTextParser;
