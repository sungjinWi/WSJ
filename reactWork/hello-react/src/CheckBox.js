import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import Styles from './CheckBox.module.css'
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

// cx('클래스이름')
// cx('one', 'two')
// cx('my-component', {
//     condition: true
// })
// cx('my-component', ['another', 'classnames'])


function CheckBox({children, checked, ...rest}) { //...은 multi입력이란 소리지~
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={cx('icon')}> 
                {/* {Styles['icon-tr']} */}
                {/* className =${Styles.one} ${Styles.two} */}
                    {checked ? (
                        <MdCheckBox className={cx('checked')} />
                        ) : (
                            <MdCheckBoxOutlineBlank />
                            )}
                </div>
            </label>
            <span>{children}</span>
        </div>
    );
}


export default CheckBox;