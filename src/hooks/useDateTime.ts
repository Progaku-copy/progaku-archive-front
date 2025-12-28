const FALLBACK_LABEL = '日時不明';

/**
 * 日付を変換するカスタムフック
 * @param utcDateTimeString ISO8601(Z) 文字列（マイクロ秒精度も可）
 * @returns 「yyyy/dd/m hh:mm:ss」か「yyyy/dd/m hh:mm」の形式の文字列（JST)
 */
export const useDateTime = (utcDateTimeString?: string) => {
	if (!utcDateTimeString) {
		return { dateWithSecond: FALLBACK_LABEL, dateWithoutSecond: FALLBACK_LABEL };
	}

	const utcDate = new Date(utcDateTimeString);
	if (Number.isNaN(utcDate.getTime())) {
		return { dateWithSecond: FALLBACK_LABEL, dateWithoutSecond: FALLBACK_LABEL };
	}

	const jstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
	const year = jstDate.getFullYear();
	const day = ('0' + jstDate.getDate()).slice(-2);
	const month = ('0' + (jstDate.getMonth() + 1)).slice(-2);
	const hours = ('0' + jstDate.getHours()).slice(-2);
	const minutes = ('0' + jstDate.getMinutes()).slice(-2);
	const seconds = ('0' + jstDate.getSeconds()).slice(-2);
	const formattedDate = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;

	const dateWithSecond = formattedDate + ':' + seconds;
	const dateWithoutSecond = formattedDate;

	return { dateWithSecond, dateWithoutSecond };
};
