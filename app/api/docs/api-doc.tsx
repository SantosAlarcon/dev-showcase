"use client";

import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";
import { Suspense } from "react";

type Props = {
    spec: Record<string, any>;
    url: string | undefined;
};

function ReactSwagger({ spec, url }: Props) {
    return (
        <Suspense fallback="Loading...">
            {process.env.NODE_ENV === "development" ? (
                <SwaggerUI spec={spec} />
            ) : (
                <SwaggerUI url={url} />
            )}
        </Suspense>
    );
}

export default ReactSwagger;
