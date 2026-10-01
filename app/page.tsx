import type { Metadata } from "next";
import { PortalBanner } from "@/components/site/portal-banner";
import { Approach } from "./_home/approach";
import { Complaints } from "./_home/complaints";
import { Hero } from "./_home/hero";
import { Practice } from "./_home/practice";
import { Steps } from "./_home/steps";
import { Welcome } from "./_home/welcome";

export const metadata: Metadata = {
    alternates: { canonical: "/", types: { "text/markdown": "/index.md" } },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Welcome />
            <Complaints />
            <Approach />
            <Steps />
            <Practice />
            <PortalBanner />
        </>
    );
}
