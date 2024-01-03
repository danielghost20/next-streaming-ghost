import {Logo }from "./_components/logo";

export default function AuthLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
            <Logo/>
            {children}
        </div>
    )
}