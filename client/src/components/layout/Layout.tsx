import { PropsWithChildren } from 'react';
import './style.css';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    );
}
