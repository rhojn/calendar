import styles from './styles.module.scss';

const Row = ({ index }) => {
  const hour = index + 1;
  return (
    <span>
      {index > 11 ? hour - 12 : hour} {index >= 11 ? 'PM' : 'AM'}
    </span>
  );
};

const DayView = ({ events }) => {
  const totalRows = 24;
  const getTime = (string) => {
    const date = new Date(string);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${('0' + (hour > 12 ? hour - 12 : hour)).slice(-2)}:${(
      '0' + minutes
    ).slice(-2)}${hour > 12 ? 'pm' : 'am'}`;
  };

  const calculateTop = (item) => {
    const startDate = new Date(item.start);
    const startHour = startDate.getHours();
    return startHour * 4;
  };

  const calculateHeight = (item) => {
    const top = calculateTop(item);
    const startDate = new Date(item.start);
    const endDate = new Date(item.end);
    const endHour =
      startDate.getDate() !== endDate.getDate() ? 23 : endDate.getHours() - 1;
    return (endHour + 1) * 4 - top;
  };

  return (
    <div className={styles.day}>
      <div className={styles.grid}>
        {Array.from(Array(totalRows)).map((_, index) =>
          index < totalRows - 1 ? (
            <div className={styles.gridRow} key={index}>
              <Row index={index} />
            </div>
          ) : null
        )}
      </div>
      <div className={styles.gridItems}>
        {events.map((item) => (
          <div
            className={styles.gridItem}
            key={item.id}
            style={{
              top: calculateTop(item) + 'rem',
              height: calculateHeight(item) + 'rem',
            }}
          >
            <p>{new Date(item.start).toLocaleString()}</p>
            <p>{new Date(item.end).toLocaleString()}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;
