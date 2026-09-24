import {ProjectPage} from '@/features/projects/projects';
import {useDocumentTitle} from "@/components/ui/title";

export default function Projects() {
    useDocumentTitle("Projects | Vincent")
    return(
        <ProjectPage/>
    )
}