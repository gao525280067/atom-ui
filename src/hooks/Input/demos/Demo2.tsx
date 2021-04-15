/**
 * title: 高度与icon
 * desc: 我们不去封装size属性，因为业务不同需求不同，也不想牺牲灵活性，你可以根据业务来封装，这并不难。
 */

import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import styles from 'react-atom-ui/es/styles/input/index.module.css';

// 没有多余的属性，更灵活，维护起来方便，打包体积也会小，这些优点在这，比拿来就用的组件好不是嘛？
interface InputProps {
  size?: 'large' | 'default' | 'small';
  prefix?: React.ReactNode;
  placeholder?: string;
}

const Input = ({ size = 'default', prefix, placeholder }: InputProps) => {
  const style = React.useMemo(() => {
    switch (size) {
      case 'default':
        return { height: 32 };
      case 'large':
        return { height: 40, fontSize: 16, padding: '6.5px 11px' };
      case 'small':
        return { height: 24, padding: '0 7px' };
    }
  }, [size]);

  return (
    <span className={styles.atomInputAffixWrapper} style={style}>
      <span className={styles.atomInputPrefix}>{prefix}</span>
      <input placeholder={placeholder} className={styles.atomInput} />
    </span>
  );
};

const Demo = () => {
  return (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    </>
  );
};

export default Demo;
