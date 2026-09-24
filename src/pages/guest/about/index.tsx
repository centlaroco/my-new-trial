import  {About}  from "@/features/about/about";
import {useDocumentTitle} from "@/components/ui/title";

export default function AboutT(){
    useDocumentTitle("About | Vincent")
    return ( 
        <>
            <About/>
        </>
    );
}