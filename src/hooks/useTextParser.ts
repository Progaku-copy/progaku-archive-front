import { useState, useEffect, useMemo } from 'react';

import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { visit } from 'unist-util-visit';

import type { Node as UnistNode, Parent as UnistParent } from 'unist';

// 型定義
interface TextNode extends UnistNode {
	type: 'text';
	value: string;
}

interface ElementNode extends UnistNode {
	type: 'element';
	tagName: string;
	properties?: Record<string, unknown>;
	children: UnistNode[];
}

interface LinkNode extends UnistNode {
	type: 'link';
	url: string;
	children: UnistNode[];
}

function remarkSlackLinks() {
	return (tree: UnistNode) => {
		visit(tree, 'text', (node: TextNode, index, parent: UnistParent) => {
			if (!parent || !node.value) return;

			// Slackリンク形式 (<URL|表示テキスト>)のせいで上手く表示できないため、
			// ここで変換
			const parts = node.value
				.split(/(<[^>]+>)|(\bhttps?:\/\/[^\s|]+\|https?:\/\/[^\s]+\b)/g)
				.filter(Boolean);

			const newNodes: UnistNode[] = [];
			for (const part of parts) {
				// Slackリンクの形式かどうかをチェック
				const slackMatch = part.match(/^<([^|>]+)\|([^>]+)>$/);

				// URL|URL 形式のパターンをチェック
				const urlPipeUrlMatch = part.match(
					/^(https?:\/\/[^\s|]+)\|(https?:\/\/[^\s]+)$/,
				);

				if (slackMatch) {
					const url = slackMatch[1];
					const displayText = slackMatch[2];
					const textNode: TextNode = { type: 'text', value: displayText };
					const linkNode: LinkNode = {
						type: 'link',
						url: url,
						children: [textNode],
					};
					newNodes.push(linkNode);
				} else if (urlPipeUrlMatch) {
					// URL|URL 形式の場合は最初のURLだけを使用
					const url = urlPipeUrlMatch[1];
					const textNode: TextNode = { type: 'text', value: url };
					const linkNode: LinkNode = {
						type: 'link',
						url: url,
						children: [textNode],
					};
					newNodes.push(linkNode);
				} else if (part !== '') {
					const textNode: TextNode = { type: 'text', value: part };
					newNodes.push(textNode);
				}
			}

			if (newNodes.length > 0) {
				parent.children.splice(index, 1, ...newNodes);
			}
		});
	};
}

function rehypeBlueLinks() {
	return (tree: UnistNode) => {
		visit(tree, 'element', (node: ElementNode) => {
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

	const remarkProcessor = useMemo(
		() =>
			remark()
				.use(remarkGfm)
				.use(remarkSlackLinks)
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
