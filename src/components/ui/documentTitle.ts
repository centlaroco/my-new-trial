import {useEffect} from 'react';

export function documentTitle(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}