import {
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Flex, Image, Switch } from 'antd';
import { FunctionComponent } from 'react';
import { AppHeaderProps } from '../types';
import Text from 'antd/es/typography/Text';
import { Link } from 'react-router-dom';

const AppHeader: FunctionComponent<AppHeaderProps> = ({ isDarkTheme, themeSwitch }) => {
  return (
    <Flex justify="space-between" align="center" style={{ width: '100%' }}>
      <Text
        style={{
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: '32px',
          letterSpacing: '.3rem',
        }}
      >
        <Link to='/'>LOGO</Link>
      </Text>

      <Switch
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
        defaultChecked
        onChange={themeSwitch}
      />
    </Flex>
  );
};

export default AppHeader;
