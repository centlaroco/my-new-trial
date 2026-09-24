import {useDocumentTitle} from "@/components/ui/title";
export default function NotFoundPage() {
    useDocumentTitle("404 Not Found | Vincent");
    return (
        <div className='flex min-h-[50vh] items-center justify-center px-4'>
            <div className='w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>Error 404</p>
                <h1 className='mt-3 text-3xl font-bold text-slate-900'>Page not found</h1>
                <p className='mt-3 text-sm text-slate-600'>The page you are looking for does not exist or may have been moved.</p>
                <a href='/' className='mt-6 inline-flex rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600'>
                    Go back home
                </a>
            </div>
        </div>
    );
}
