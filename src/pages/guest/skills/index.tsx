import {Skills} from '@/features/skills/techstack';
import { useDocumentTitle }  from '@/components/ui/title';

export default function SkillsPage(){
    useDocumentTitle("Skills | Vincent")
    return (
        <Skills/>
    )
}