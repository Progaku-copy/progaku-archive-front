import { useState, useEffect } from 'react';

import { remark } from 'remark';
import emoji from 'remark-emoji';
import html from 'remark-html';

/**
 * `useTextParser` カスタムフック
 * Slack絵文字の変換 + Markdownパースを実施
 */
const useTextParser = (text: string): string => {
	const [convertedHtml, setConvertedHtml] = useState('');

	useEffect(() => {
		if (!text) {
			setConvertedHtml('');
			return;
		}

		let isMounted = true;

		const markdownText = String(text);

		(async () => {
			const result = await remark().use(emoji).use(html).process(markdownText);
			if (isMounted) {
				setConvertedHtml(result.toString());
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [text]);

	return convertedHtml;
};

export default useTextParser;
