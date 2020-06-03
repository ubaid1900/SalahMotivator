export class Util {

    get_time_difference(earlierDate: Date, laterDate: Date) {
        let oDiff = new DateDiff();
        if (earlierDate > laterDate) {
            oDiff = null;
        } else {
            let nTotalDiff = laterDate.getTime() - earlierDate.getTime();

            const dd = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
            nTotalDiff -= dd * 1000 * 60 * 60 * 24;
            oDiff.days = dd.toString();

            const hh = Math.floor(nTotalDiff / 1000 / 60 / 60);
            nTotalDiff -= hh * 1000 * 60 * 60;
            oDiff.hours = (hh < 10 ? '0' + hh : hh).toString();

            const mm = Math.floor(nTotalDiff / 1000 / 60);
            nTotalDiff -= mm * 1000 * 60;
            oDiff.minutes = (mm < 10 ? '0' + mm : mm).toString();

            const ss = Math.floor(nTotalDiff / 1000);
            oDiff.seconds = (ss < 10 ? '0' + ss : ss).toString();

        }
        return oDiff;
    }

    formatTime(time: Date) {
        const h = time.getHours();
        const m = time.getMinutes();
        const hh = h < 10 ? '0' + h : (h > 12 ? h - 12 : h);
        let suffix = 'am';
        if (h >= 12 && m > 0) {
            suffix = 'pm';
        }
        const mm = m < 10 ? '0' + m : m;
        return hh + ':' + mm + ' ' + suffix;
    }
}

export class DateDiff {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}
