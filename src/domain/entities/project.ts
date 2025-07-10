export type Project = {
    $id: string;
    developerId: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubRepo?: string;
    liveSite?: string;
    story: string;
    publishedDate: string;
};