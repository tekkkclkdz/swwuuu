export default function AuthLayout({ 
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h2 className="h-10  ml-2 text-3xl">Maximilien Antoine Gontard</h2>
            {children}
        </div>
    )
}