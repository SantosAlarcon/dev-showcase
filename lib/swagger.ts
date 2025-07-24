import { createSwaggerSpec } from "next-swagger-doc";
import swaggerConfig from "../next-swagger-doc.json";

export const getApiDocs = async () => {
    const apiDocs = createSwaggerSpec(swaggerConfig);

    return apiDocs;
};
