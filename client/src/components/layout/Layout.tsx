import { PropsWithChildren } from 'react';
import Header from '../header/Header';
import './style.css';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
