import {Skills} from '@/features/skills/techstack';
import { documentTitle }  from '@/components/ui/documentTItle';

export default function SkillsPage(){
    documentTitle("Skills | Vincent")
    return (
        <Skills/>
    )
}