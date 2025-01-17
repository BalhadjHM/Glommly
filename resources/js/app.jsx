import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout'

createInertiaApp({
    resolve: name => {
        // This is where the pages and components are imported
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        // This is where the page is rendered
        let page = pages[`./Pages/${name}.jsx`];
        // This is where the page is checked if it exists
        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }
        // This is where the we set the layout for the page
        page.default.layout = page.default.layout || ((page) => <Layout children={page} />);
        // This is where the page is returned
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
