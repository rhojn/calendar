import styles from './styles.module.scss';

const Button = ({ className, onClick, children }) => {
  return (
    <button className={[className, styles.button].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
