import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Header = props => {
    // 获取父组件的属性
    const { isFetching, title } = props;
    return (
        <div className={styles.header}>
            <MuiThemeProvider>
                <AppBar
                    title={
                        <p className={styles.title}>
                            {isFetching ? '加载中' : title}
                        </p>
                    }
                    iconElementLeft={<IconButton>
                        <i className="iconfont" dangerouslySetInnerHTML={{ __html: '&#xe611;' }} />
                    </IconButton>}
                    onLeftIconButtonTouchTap={() => {
                        window.history.go ( -1 )
                    }}
                />
            </MuiThemeProvider>
        </div>

    )
}

export default Header