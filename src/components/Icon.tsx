import styles from './Icon.module.css';

export type IconProps = {
  name: string;
  color?: string;
  size?: string;
};

export default function Icon({ name, size, color }: IconProps) {
  return (
    <span
      aria-label={name}
      style={{
        width: size,
        height: size,
        color,
        maskImage: `url('/api/icon/${name}')`,
        WebkitMaskImage: `url('/api/icon/${name}')`
      }}
      className={styles.root}
    />
  );
}
