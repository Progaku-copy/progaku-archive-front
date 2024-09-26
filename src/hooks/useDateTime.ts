/**
 * 日付を変換するカスタムフック
 * @param utcDateTimeString 想定文字列：「yyyy-MM-ddTHH:mm:ss.000Z」例）2024-09-15T10:12:14.000Z
 * @param containSecond True：「yyyy/dd/m hh:mm:ss」返却, False：「yyyy/dd/m hh:mm」返却
 * @returns 「yyyy/dd/m hh:mm:ss」か「yyyy/dd/m hh:mm」の形式の文字列（JST)
 *           parseができない場合は「Nan」
 */
export const useDateTime = (
	utcDateTimeString: string,
	containSecond = true,
): string | undefined => {
	const utcDate = new Date(utcDateTimeString);

	if (isNaN(utcDate.getTime())) {
		return undefined;
	}

	const jstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
	const year = jstDate.getFullYear();
	const day = ('0' + jstDate.getDate()).slice(-2);
	const month = ('0' + (jstDate.getMonth() + 1)).slice(-2);
	const hours = ('0' + jstDate.getHours()).slice(-2);
	const minutes = ('0' + jstDate.getMinutes()).slice(-2);
	const seconds = ('0' + jstDate.getSeconds()).slice(-2);
	const formattedDate = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;

	return containSecond ? formattedDate + ':' + seconds : formattedDate;
};
