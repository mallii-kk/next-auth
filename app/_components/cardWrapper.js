import BackButton from "./backButton";
import Header from "./header";
import Social from "./social";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backbuttonHref,
    showSocial
}) {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backbuttonHref}
                >

                </BackButton>
            </CardFooter>
        </Card>
    );
}

export default CardWrapper;
