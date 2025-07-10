export type Testimonial = {
    id: number;
    content: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
};