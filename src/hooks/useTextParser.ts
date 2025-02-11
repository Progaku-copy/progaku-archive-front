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

		(async () => {
			const result = await remark().use(emoji).use(html).process(text);
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
