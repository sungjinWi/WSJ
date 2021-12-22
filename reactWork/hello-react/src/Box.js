import React from 'react';
import Styles from './Box.module.css'; //CRA(Create React App)으로 만든 프로젝트에서는 module.css를 사용한다

function Box() {
    return <div className={Styles.Box}>I'm DIV</div> //다른곳의 class와 중복되는걸 걱정안해도 된다
}

export default Box;