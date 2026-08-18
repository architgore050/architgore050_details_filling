import { useInView } from '../hooks/useInView';

function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;