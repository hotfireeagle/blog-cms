import React from 'react'
import './index.scss'

export type MessageType = 'success' | 'error' | 'warn'

interface IProps {
  type: MessageType, // 弹窗类型
  content: string, // 弹窗内容
}

const type2Img = {
  success: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAAASltsQldoRltsQj98QldsRltsRltsRldsQl9sQltsSldwQl98SldoRltoRldoRltsSltoQltwSlttXKl5aAAAAE3RSTlMAgDDwEGDgsO9AcJAgn9DPwKBQR/pUFgAAAURJREFUWMPtl8uSwiAURCG8ITGP/v9/HRdT5dxKpGEwO88S67TXFDZEfbmVOWWtQ9A6p7nfPsqKP6wl9dhWe5zw2jbrEZfEtggndEl0/OsDqgQyxORB8FPVj6DEifgDCcSnCdajEX/9JAOaCVe+Qwfu7NuIDuL5R2h0odkAfAQyQPcIHp146R9UMDkbsSAbplB/UiqJlSICVu4/EUur6M8mP0Ng1YvU4jsIxEPI//CRyS5gPvT7gG2eA/NlwAbB/FzamY9QD1C78EmAvvpor/jkGWD5TXj5JCDjMqHUfOTqRlp41aX6Vl6YD1Epj4sE4j/o33mp+ii8UDZXq4k0WmmfLlVr+nxjxw+WoRGMHTxcj9Hj/Z4LhpoMEUVJkQTikwTij140h6+6DGcq47u26755o2t76wuHJJWH6K+Shl66rPpyJz/fFJkakHEyUwAAAABJRU5ErkJggg==',
  error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAADfEADYHgbYHQXYHgXYHgbaGwXYHgXYHgXYHATYHQXYHAXYHQbYHgXYHQbXGADZHQPXHQXYHQXYHgaM9nrqAAAAE3RSTlMAEIDQz+Aw8O9AYJCwcK8gUMCPAhPPhQAAAWFJREFUWMPtl0GWhCAMBUkAEVR0Ove/6yzGJ3YHCAzPXddW6xsjRlRfHmX3G2KMiJvf++3jZeiGefkeG9ASwyI06zNlmdsiQtJ5RBB1iFQlCkVMlgTsVPVnEpmnAZ8lcH8kASw1YvOdjNRMzPmBOgjch5k6mPlNIHWBQgH9JSDRWAmWOrHv/sGvEDRd6MAr9OrOQh8sSoG+fMieccfkbhF08nmTzNv8JHYYzoTTB0OfgEp4KiUkv9qEjYoJRZ82tgqyCUWfkAVkE05fCPihQkLFp1UO0H8BWg7Aop8S+nugUxO1FLAVfXM+TeEx+qKfVlR1Ie1lv5wA6gY7jKd/JSC7hPw6m7QecmeIA8XQhZEGyvhIGx+q4Pp8B+MflqESHAx+XA+VYW3312c2GGpyjQ0ob5LciM8TZH98o8mBVeg/KIngKuWHtu2+K+gIj/1wcPyi77Ze/D9/utYVcfOgvjzJL+a+ldD5g/QyAAAAAElFTkSuQmCC',
  warn: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEUAAAD06yjz6in/7yDz6Sr06yn06Sn06iv06ir06inz6Sr16yr06ir06ijz6Sn37yjz6in17Cn06iozYJ84AAAAEnRSTlMAQPAQgHDgMM+QsH/QYK8gwFDfm4HnAAABRUlEQVRYw+2Xy5aEIAxERQLyUFvz/x87p1eMx2glMj2rri3WNZAYw/DVR/VyodZ1rTW4l92958S/lLKzuH2NfFKsXm0fWdSoQyzNfkYs+PUr32oFQUyRgeJ06x8Zapyw305o/h6Cj6xUlE9SPP9tE3Mh5l8OVt7YImxAei6/V7JEPm+CWJB7rzgWRKoAGgCHQAwAKIRoBcSjf2cDoK01ZTsgHwDJDkiH/sl2APuhyQEAPITwBBBAFUAA/SVgewIo3YD/OINwlyJSpDG1KpXouJA4hXDlZwdKGerQUma7f9Z8zjyHcMXOmoYSb6JzoKWhNEbQVCGAVG09tjqAfxay1QGBXxtSC6BpsQD2QVDR+0v3gNE/4vQPWf1jXv+gKcsXcP6+e9jG8jRe2El9YyDpwtHsGrk8HzpTdo8uXUSlEAXnh68+qR+IfpETmKzRMgAAAABJRU5ErkJggg==',
}

const Message: React.FC<IProps> = (props) => {

  return <div className='messageComponentWrapper'>
    <div className='contentWrapper flexRow'>
      <img src={type2Img[props.type]} alt='no time' />
      <span>{props.content}</span>
    </div>
  </div>
}

export {
  Message,
}
