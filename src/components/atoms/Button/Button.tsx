import { Button as AntdButton, ButtonProps } from 'antd';

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  return <AntdButton {...props}>Primary Button</AntdButton>;
};
