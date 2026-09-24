import { HomePage } from "@/features/home/home";
import {useDocumentTitle} from "@/components/ui/title";

export default function Home() {
    useDocumentTitle("Home | Vincent")
    return (
        <>
            <HomePage />
        </>
    );
}