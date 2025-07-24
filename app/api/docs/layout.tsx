const SwaggerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Talent Showcase API - Powered by Swagger</title>
            </head>
            <body>{children}</body>
        </html>
    );
};

export default SwaggerLayout;
