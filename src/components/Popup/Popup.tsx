import React, {ReactElement, useEffect} from 'react';
import "./Popup.scss"
import {useTypedSelector} from "../../utils/Hook";

interface IPopupProps {
    visible: boolean
    onClose: () => void
    children: React.ReactNode;
}



const Popup = ({ visible = false, onClose, children}: IPopupProps) => {
    const comments = useTypedSelector(state => state.comments.comments)

    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-close' onClick={onClose}>
            &times;
          </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{children}</div>
                </div>
            </div>
        </div>
    )
}


export default Popup;
