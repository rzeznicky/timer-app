import styles from './TimeDisplay.module.scss';

const Timer = props => {
    
    const msToTime = (timeInMs) => {
        let msecs = Math.floor(timeInMs);
        msecs = msecs % 1000;
        let secs = Math.floor(timeInMs / 1000);
        secs = secs % 60;
        let mins = Math.floor(timeInMs / 60 / 1000);
        mins = mins % 60;
        const hours = Math.floor(timeInMs / 60 / 60 / 1000);
        const [hh, mm, ss] = [hours, mins, secs].map(item => item < 10 ? '0' + item: item);
        return hh + ":" + mm + ":" + ss + "." + msecs;
    };

    return (
        <div>
            <span>{msToTime(props.time)}</span>
        </div>
    )
};

export default Timer;